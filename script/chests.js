function generalCanGetChest(chestlist) {
    var canGet = 0;
    var unopened = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (!chestlist[key].isOpened) {
                unopened++;
            }

            if (!chestlist[key].isOpened && chestlist[key].isAvailable()) {
                canGet++;
            }
        }
    }

    if (unopened == 0) {
        return "opened";
    }
    if (canGet == unopened) {
        return "available";
    }
    if (canGet == 0) {
        return "unavailable";
    }
    return "possible";
}

function lens(loc){
    switch(lensLogic){
        //Lens Logic set to Everywhere
        case ('All'):
            return items.Lens && items.Magic;
        //Lens Logic set to Wasteland and Chest
        case 'Semi':
            if(loc == 'Semi' || loc == 'Low'){
                return (items.Lens && items.Magic)
            } else {
                return true
            }
        case 'Low':
            if(loc == 'Low'){
                return (items.Lens && items.Magic)
            }else {
                return true
            }
        default :
            throw loc
    }
}

function hasBoom(){
    if(chuInLogic == true){
        return (items.Bombchus || items.Bombs)
    }else {
        return (items.Bombs)
    }
}

function canPlay(song){
    return (song && items.Ocarina);
}

function canAccessSpiritAdult() {
    return (((((canPlay(items.EponasSong) && items.HoverBoots) || items.Hookshot >= 2) && lens('Semi')) || canPlay(items.RequiemofSpirit)) && items.Glove >= 2);
}
function canAccessFire() {
    return (items.GoronTunic && (canPlay(items.BoleroofFire) || ((items.HoverBoots || items.Hookshot) && (items.Bow || items.Glove || hasBoom())) || (items.HoverBoots && items.Hammer)));
}
function canAccessDeepFire() {
    return (items.Glove && ( hasBoom() || items.Bow || items.Hookshot));
}
function canAccessHoverShadow() {
    return (canPlay(items.NocturneofShadow) && items.Dins && lens('All') && items.HoverBoots);
}

// define dungeon chests
var dungeons = [
    {
        name: "Deku Tree",
        x: "87.0%",
        y: "57.0%",
        chestlist: {
            'Lobby Chest': { isAvailable: function () { return true; }, },
            'Compass Chest': { isAvailable: function () { return true; }, },
            'Compass Room Side Chest': { isAvailable: function () { return true; }, },
            'Basement Chest': { isAvailable: function () { return true; }, },
            'Slingshot Chest': { isAvailable: function () { return true; }, },
            'Slingshot Room Side Chest': { isAvailable: function () { return true; }, },
            'Gohma': { isAvailable: function () { return items.Slingshot; }, },
        },
        isBeatable: function() {
            if (items.Slingshot) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Water Temple",
        x: "36.1%",
        y: "91.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return items.ZoraTunic && items.IronBoots && items.Hookshot; }, },
            'Compass Chest': { isAvailable: function () {
                return items.ZoraTunic && items.IronBoots && items.Hookshot; }, },
            'Torches Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && canPlay(items.ZeldasLullaby) && (items.Bow || (items.Dins && items.Magic)); }, },
            'Dragon Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && canPlay(items.ZeldasLullaby) && canPlay(items.SongofTime) && items.Bow; }, },
            'Central Bow Target Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.Bow && items.Glove && canPlay(items.ZeldasLullaby) && (items.HoverBoots || items.Hookshot >= 2); }, },
            'Boss Key Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && canPlay(items.ZeldasLullaby) && ((hasBoom() && items.Glove) || items.HoverBoots) && items.Hookshot >= 2; }, },
            'Central Pillar Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && canPlay(items.ZeldasLullaby); }, },
            'Cracked Wall Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && hasBoom() && canPlay(items.ZeldasLullaby); }, },
            'Dark Link Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && canPlay(items.ZeldasLullaby); }, },
            'River Chest': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && canPlay(items.SongofTime) && items.Bow && canPlay(items.ZeldasLullaby); }, },
            'Morpha': { isAvailable: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot >= 2); }, },
        },
        isBeatable: function() {
            if (items.ZoraTunic && items.IronBoots && items.Hookshot >= 2) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Gerudo Training Grounds",
        x: "18.8%",
        y: "28.0%",
        chestlist: {
            'Lobby Left Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Bow; }, },
            'Lobby Right Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Bow; }, },
            'Stalfos Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); }, },
            'Beamos Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && hasBoom(); }, },
            'Hidden Ceiling Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && (items.Bow || items.Hookshot) && lens('All'); }, },
            'Maze Path First Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Maze Path Second Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Maze Path Third Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Maze Path Final Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Maze Right Central Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Maze Right Side Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Maze Right Side Key': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All') && canPlay(items.SongofTime) && items.Bow; }, },
            'Underwater Silver Rupee Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && canPlay(items.SongofTime) && items.IronBoots; }, },
            'Hammer Room Clear Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && (canPlay(items.SongofTime) || items.HoverBoots || items.Hookshot >=2 || (lens('All') )); }, },
            'Hammer Room Switch Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Hammer && (canPlay(items.SongofTime) || items.HoverBoots || items.Hookshot >=2 || (lens('All'))); }, },
            'Eye Statue Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Bow && (canPlay(items.SongofTime) || items.HoverBoots || items.Hookshot >=2 || (lens('All'))); }, },
            'Near Scarecrow Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && lens('All'); }, },
            'Before Heavy Block Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot; }, },
            'Heavy Block First Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All'); }, },
            'Heavy Block Second Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All'); }, },
            'Heavy Block Third Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All'); }, },
            'Heavy Block Fourth Chest': { isAvailable: function () {
                return (canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hookshot && items.Glove >= 2 && lens('All'); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Spirit Temple",
        x: "02.5%",
        y: "17.0%",
        chestlist: {
            'Child Left Chest': { isAvailable: function () {
                return canPlay(items.RequiemofSpirit) && (items.Boomerang || items.Slingshot); }, },
            'Child Right Chest': { isAvailable: function () {
                return canPlay(items.RequiemofSpirit) && (items.Boomerang || items.Slingshot); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && items.Glove >= 2 && items.Hookshot && canPlay(items.ZeldasLullaby); }, },
            'Early Adult Right Chest': { isAvailable: function () {
                return canAccessSpiritAdult(); }, },
            'First Mirror Right Chest': { isAvailable: function () {
                return canAccessSpiritAdult(); }, },
            'First Mirror Left Chest': { isAvailable: function () {
                return canAccessSpiritAdult(); }, },
            'Map Chest': { isAvailable: function () {
                return ((canPlay(items.RequiemofSpirit) && hasBoom()) || (canAccessSpiritAdult() && items.Magic && (items.Dins || (items.Fire && items.Bow)))); }, },
            'Child Climb East Chest': { isAvailable: function () {
                return ((canPlay(items.RequiemofSpirit) && (items.Boomerang || items.Slingshot)) || (canAccessSpiritAdult() && (items.Hookshot || items.Bow))); }, },
            'Child Climb North Chest': { isAvailable: function () {
                return ((canPlay(items.RequiemofSpirit) && (items.Boomerang || items.Slingshot)) || (canAccessSpiritAdult() && (items.Hookshot || items.Bow))); }, },
            'Sun Block Room Chest': { isAvailable: function () {
                return ((canPlay(items.RequiemofSpirit) && hasBoom()) || (canAccessSpiritAdult() && (items.Dins || (items.Fire && items.Bow)) && items.Magic)); }, },
            'Statue Hand Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && canPlay(items.ZeldasLullaby); }, },
            'NE Main Room Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && canPlay(items.ZeldasLullaby) && (items.Hookshot || items.HoverBoots); }, },
            'Silver Gauntlets Chest': { isAvailable: function () {
                return (canPlay(items.RequiemofSpirit) && hasBoom()) || canAccessSpiritAdult(); }, },
            'Mirror Shield Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && hasBoom(); }, },
            'Near Four Armos Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && hasBoom() && items.MirrorShield; }, },
            'Hallway Left Invisible Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && hasBoom() && lens('All'); }, },
            'Hallway Right Invisible Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && hasBoom() && lens('All'); }, },
            'Boss Key Chest': { isAvailable: function () {
                return canAccessSpiritAdult() && canPlay(items.ZeldasLullaby) && items.Bow && items.Hookshot && (hasBoom() || items.Hammer); }, },
            'Topmost Chest': { isAvailable: function () {
                return (canAccessSpiritAdult() && (items.Hookshot || items.Bow) && items.MirrorShield); }, },
            'Twinrova': { isAvailable: function () {
                return canAccessSpiritAdult() && items.MirrorShield && hasBoom() && items.Hookshot; }, },
        },
        isBeatable: function() {
            if (canAccessSpiritAdult() && items.MirrorShield && hasBoom() && items.Hookshot) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Bottom of the Well",
        x: "68.0%",
        y: "23.0%",
        chestlist: {
            'Front Left Hidden Wall': { isAvailable: function () {
                return canPlay(items.SongofStorms) && lens('All') ; } },
            'Front Center Bombable': { isAvailable: function () {
                return canPlay(items.SongofStorms) && hasBoom(); } },
            'Right Bottom Hidden Wall': { isAvailable: function () {
                return canPlay(items.SongofStorms) && lens('All') ; } },
            'Center Large Chest': { isAvailable: function () {
                return canPlay(items.SongofStorms) && lens('All') ; } },
            'Center Small Chest': { isAvailable: function () {
                return canPlay(items.SongofStorms) && lens('All')  } },
            'Back Left Bombable': { isAvailable: function () {
                return canPlay(items.SongofStorms) && hasBoom(); } },
            'Coffin Key': { isAvailable: function () {
                return canPlay(items.SongofStorms) && (canPlay(items.ZeldasLullaby) || items.Scale); } },
            'Defeat Boss': { isAvailable: function () {
                return canPlay(items.SongofStorms) && canPlay(items.ZeldasLullaby) && items.KokiriSword; } },
            'Invisible Chest': { isAvailable: function () {
                return canPlay(items.SongofStorms) && canPlay(items.ZeldasLullaby) && lens('All') } },
            'Underwater Front Chest': { isAvailable: function () {
                return canPlay(items.SongofStorms) && canPlay(items.ZeldasLullaby); } },
            'Underwater Left Chest': { isAvailable: function () {
                return canPlay(items.SongofStorms) && canPlay(items.ZeldasLullaby); } },
            'Basement Chest': { isAvailable: function () {
                return canPlay(items.SongofStorms) && (hasBoom() || (items.Glove && (items.Dins  && items.Magic || lens('All')))); } },
            'Locked Pits': { isAvailable: function () {
                return canPlay(items.SongofStorms) && lens('All') ; } },
            'Behind Right Grate': { isAvailable: function () {
                return canPlay(items.SongofStorms) && lens('All') ; } },
        },
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Shadow Temple",
        x: "76.0%",
        y: "21.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return canPlay(items.NocturneofShadow) && items.Dins && lens('All') && (items.HoverBoots || items.Hookshot); }, },
            'Hover Boots Chest': { isAvailable: function () {
                return canPlay(items.NocturneofShadow) && items.Dins && lens('All') && (items.HoverBoots || items.Hookshot); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessHoverShadow(); }, },
            'Early Silver Rupee Chest': { isAvailable: function () {
                return canAccessHoverShadow(); }, },
            'Invisible Blades Visible Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom(); }, },
            'Invisible Blades Invisible Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom(); }, },
            'Falling Spikes Lower Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom(); }, },
            'Falling Spikes Upper Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Glove; }, },
            'Falling Spikes Switch Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Glove; }, },
            'Invisible Spikes Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom(); }, },
            'Giant Pot Key': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot; }, },
            'Wind Hint Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot; }, },
            'After Wind Enemy Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot; }, },
            'After Wind Hidden Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot; }, },
            'Spike Walls Left Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot && canPlay(items.ZeldasLullaby); }, },
            'Boss Key Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot && canPlay(items.ZeldasLullaby); }, },
            'Hidden Floormaster Chest': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot && canPlay(items.ZeldasLullaby); }, },
            'Bongo Bongo': { isAvailable: function () {
                return canAccessHoverShadow() && hasBoom() && items.Hookshot && canPlay(items.ZeldasLullaby) && (items.Bow || items.Hookshot); }, },
        },
        isBeatable: function() {
            if (canAccessHoverShadow() && hasBoom() && items.Hookshot && items.Glove && canPlay(items.ZeldasLullaby) && (items.Bow || items.Hookshot)) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Dodongo's Cavern",
        x: "59.0%",
        y: "13.5%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return hasBoom() || items.Hammer || items.Glove; }, },
            'Compass Chest': { isAvailable: function () {
                return hasBoom() || items.Hammer || items.Glove; }, },
            'Bomb Flower Platform': { isAvailable: function () {
                return hasBoom() || (items.Hammer && items.Dins) || items.Glove; }, },
            'Bomb Bag Chest': { isAvailable: function () {
                return (hasBoom() || (items.Hammer && items.Dins) || items.Glove) && (items.Slingshot || items.Bow || items.HoverBoots || items.Hookshot >= 2); }, },
            'End of Bridge Chest': { isAvailable: function () {
                return (hasBoom() || (items.Hammer && items.Dins)) && (items.Slingshot || items.Bow || items.HoverBoots || items.Hookshot >= 2); }, },
            'Chest Above King Dodongo': { isAvailable: function () {
                return hasBoom() && (items.Slingshot || items.Bow || items.HoverBoots || items.Hookshot >= 2); }, },
            'King Dodongo': { isAvailable: function () {
                return ((items.Bombs || (items.Bombchus && items.Glove)) && (items.Slingshot || items.Bow || items.HoverBoots || items.Hookshot >= 2)); }, },
        },
        isBeatable: function() {
            if ((items.Bombs || (items.Bombchus && items.Glove)) && (items.Slingshot || items.Bow || items.HoverBoots)) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Fire Temple",
        x: "68.0%",
        y: "06.5%",
        chestlist: {

            'Chest Near Boss': { isAvailable: function () {
                return canAccessFire(); }, },
            'Fire Dancer Chest': { isAvailable: function () {
                return canAccessFire() && items.Hammer; }, },
            'Boss Key Chest': { isAvailable: function () {
                return canAccessFire() && items.Hammer; }, },
            'Big Lava Room Bombable Chest': { isAvailable: function () {
                return canAccessFire() && hasBoom(); }, },
            'Big Lava Room Open Chest': { isAvailable: function () {
                return canAccessFire(); }, },
            'Boulder Maze Lower Chest': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire(); }, },
            'Boulder Maze Upper Chest': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire(); }, },
            'Boulder Maze Side Room': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire(); }, },
            'Boulder Maze Bombable Pit': { isAvailable: function () {
                return canAccessFire() && items.Glove && hasBoom(); }, },
            'Scarecrow Chest': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire() && items.Hookshot; }, },
            'Map Chest': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire(); }, },
            'Compass Chest': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire(); }, },
            'Highest Goron Chest': { isAvailable: function () {
                return canAccessFire() && canAccessDeepFire() && canPlay(items.SongofTime) && items.Hammer; }, },
            'Megaton Hammer Chest': { isAvailable: function () {
                return canAccessFire() && items.Glove && hasBoom(); }, },
            'Volvagia': { isAvailable: function () {
                return (canAccessFire() && items.Hammer && (items.HoverBoots || (canAccessDeepFire() && (canPlay(items.SongofTime) || hasBoom())))); }, },
        },
        isBeatable: function() {
            if (canAccessFire() && items.Hammer && (items.HoverBoots || (canAccessDeepFire() && (canPlay(items.SongofTime) || hasBoom())))) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Jabu Jabu's Belly",
        x: "91.5%",
        y: "21.0%",
        chestlist: {
            'Boomerang Chest': { isAvailable: function () {
                return ((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale) && items.ZoraLetter && items.Bottle && (items.Slingshot || hasBoom() || items.Boomerang); }, },
            'Map Chest': { isAvailable: function () {
                return ((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang; }, },
            'Compass Chest': { isAvailable: function () {
                return ((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang; }, },
            'Barinade': { isAvailable: function () {
                return (((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang); }, },
        },
        isBeatable: function() {
            if (((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Ice Cavern",
        x: "90.5%",
        y: "16.0%",
        chestlist: {
            'Map Chest': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Compass Chest': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Heart Piece': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Iron Boots Chest': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
            'Sheik in Ice Cavern': { isAvailable: function () {
                return (hasBoom() || items.Scale) && items.ZoraLetter && canPlay(items.ZeldasLullaby) && items.Bottle; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Forest Temple",
        x: "78.5%",
        y: "39.0%",
        chestlist: {
            'First Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot; }, },
            'Chest Behind Lobby': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot; }, },
            'Well Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot; }, },
            'Map Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot; }, },
            'Outside Hookshot Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && (items.Bow || items.HoverBoots || canPlay(items.SongofTime)); }, },
            'Falling Room Chest': { isAvailable: function () {
                return ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot) && items.Glove && (items.Bow || (items.Dins && items.Magic)); }, },
            'Block Push Chest': { isAvailable: function () {
                return ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot) && items.Glove && items.Bow; }, },
            'Boss Key Chest': { isAvailable: function () {
                return ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot) && items.Glove && items.Bow; }, },
            'Floormaster Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && ((items.Glove && items.Bow) || items.HoverBoots); }, },
            'Bow Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && items.Glove; }, },
            'Red Poe Chest': { isAvailable: function () {
                return ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot) && items.Glove && items.Bow; }, },
            'Blue Poe Chest': { isAvailable: function () {
                return ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot) && items.Glove && items.Bow; }, },
            'Near Boss Chest': { isAvailable: function () {
                return (canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && items.Glove  && items.Bow; }, },
            'Phantom Ganon': { isAvailable: function () {
                return ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && items.Glove  && items.Bow); }, },
        },
        isBeatable: function() {
            if ((canPlay(items.SariasSong) || canPlay(items.MinuetofForest)) && items.Hookshot && items.Glove  && items.Bow) {
                if (this.canGetChest() == 'available') {
                    return 'available';
                }
                return 'possible';
            } else {
                return "unavailable";
            }
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Ganon's Castle",
        x: "52.0%",
        y: "10.0%",
        chestlist: {
            'Forest Trial Chest': { isAvailable: function () {
                return isBridgeOpen(); }, },
            'Water Trial Left Chest': { isAvailable: function () {
                return isBridgeOpen(); }, },
            'Water Trial Right Chest': { isAvailable: function () {
                return isBridgeOpen(); }, },
            'Shadow Trial First Chest': { isAvailable: function () {
                return isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || items.Hookshot || items.HoverBoots || canPlay(items.SongofTime)); }, },
            'Shadow Trial Second Chest': { isAvailable: function () {
                return isBridgeOpen() && ((items.Magic && items.Bow && items.Fire) || (items.Hookshot >= 2 && (items.HoverBoots || (items.Magic && items.Dins)))); }, },
            'Spirit Trial First Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Hookshot; }, },
            'Spirit Trial Second Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Hookshot && items.Magic && items.Lens && hasBoom(); }, },
            'Light Trial First Left Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3; }, },
            'Light Trial Second Left Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3; }, },
            'Light Trial Third Left Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3; }, },
            'Light Trial First Right Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3; }, },
            'Light Trial Second Right Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3; }, },
            'Light Trial Third Right Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3; }, },
            'Light Trial Invisible Enemies Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3 && (lens('All')); }, },
            'Light Trial Lullaby Chest': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3 && canPlay(items.ZeldasLullaby); }, },
            'Boss Key Chest': { isAvailable: function() {
                return isBridgeOpen() && generalCanGetChest(this.trials); }, },
        },
        trials: {
            'Forest Trial Clear': { isAvailable: function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins)); }, },
            'Fire Trial Clear': { isAvailable: function () {
                return isBridgeOpen() && items.GoronTunic && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2; }, },
            'Water Trial Clear': { isAvailable: function () {
                return isBridgeOpen() && items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light; }, },
            'Shadow Trial Clear': { isAvailable: function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (lens('All') || (items.HoverBoots && items.Hookshot >= 2)); }, },
            'Spirit Trial Clear': { isAvailable: function () {
                return isBridgeOpen() && items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombchus && items.Hookshot; }, },
            'Light Trial Clear': { isAvailable: function () {
                return isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light; } },
        },
        isBeatable: function() {
            return generalCanGetChest(this.trials);
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Castle Town",
        x: "52.0%",
        y: "20.0%",
        chestlist: {
            'Zelda\'s Lullaby': { isAvailable: function () {
                return items.Child >= 2; }, },
            'Child Shooting Gallery': { isAvailable: function () {
                return true; }, },
            'Bombchu Bowling 1': { isAvailable: function () {
                return ((chuInLogic && items.Bombchus) || (!chuInLogic && items.Bombs)); }, },
            'Bombchu Bowling 2': { isAvailable: function () {
                return ((chuInLogic && items.Bombchus) || (!chuInLogic && items.Bombs)); }, },
            'Treasure Chest Game': { isAvailable: function () {
                return lens('Low'); }, },
            'Dog Lady': { isAvailable: function () {
                return true; }, },
            '10 Big Poes': { isAvailable: function () {
                return items.Bow && canPlay(items.EponasSong) && items.Bottle; }, },
            'Hyrule Castle Fairy': { isAvailable: function () {
                return hasBoom() && canPlay(items.ZeldasLullaby); }, },
            'Ganon\'s Castle Fairy': { isAvailable: function () {
                return items.Glove >= 3 && canPlay(items.ZeldasLullaby); }, },
            'Prelude of Light': { isAvailable: function () {
                return items.ForestMedallion; }, },
            'Light Arrows': { isAvailable: function () {
                return items.ShadowMedallion && items.SpiritMedallion; }, },

        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Kakariko Village",
        x: "65.0%",
        y: "24.0%",
        chestlist: {
            'Anju as Adult': { isAvailable: function () {
                return true; }, },
            'Anju\'s Chickens': { isAvailable: function () {
                return true; }, },
            'Kakariko Grotto Chest': { isAvailable: function () {
                return true; }, },
            'Kakariko Redead Grotto Chest': { isAvailable: function () {
                return hasBoom() || items.Hammer; }, },
            'Cow Heart Piece': { isAvailable: function () {
                return true; }, },
            'Man on Roof': { isAvailable: function () {
                return items.Hookshot; }, },
            'Adult Shooting Gallery': { isAvailable: function () {
                return items.Bow; }, },
            'Song of Storms': { isAvailable: function () {
                return true; }, },
            'Windmill Heart Piece': { isAvailable: function () {
                return canPlay(items.SongofTime) || items.Boomerang; }, },
            'Dampe Race 1': { isAvailable: function () {
                return true; }, },
            'Dampe Race 2': { isAvailable: function () {
                return true; }, },
            'Dampe Digging': { isAvailable: function () {
                return true; }, },
            'Shield Grave Chest': { isAvailable: function () {
                return true; }, },
            'Redead Grave Chest': { isAvailable: function () {
                return canPlay(items.SunsSong); }, },
            'Sun\'s Song': { isAvailable: function () {
                return canPlay(items.ZeldasLullaby); }, },
            'Sun\'s Song Chest': { isAvailable: function () {
                return (canPlay(items.ZeldasLullaby) && ((items.Dins || (items.Fire && items.Bow)) && items.Magic)); }, },
            'Magic Bean Heart Piece': { isAvailable: function () {
                return items.Beans || items.Hookshot >= 2; }, },
            'Nocturne of Shadow': { isAvailable: function () {
                return items.ForestMedallion && items.FireMedallion && items.WaterMedallion; }, },
            'Skulltula House 10': { isAvailable: function () {
                return items.Skulltula >= 1; }, },
            'Skulltula House 20': { isAvailable: function () {
                return items.Skulltula >= 2; }, },
            'Skulltula House 30': { isAvailable: function () {
                return items.Skulltula >= 3; }, },
            'Skulltula House 40': { isAvailable: function () {
                return items.Skulltula >= 4; }, },
            'Skulltula House 50': { isAvailable: function () {
                return items.Skulltula >= 5; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Goron City",
        x: "60.0%",
        y: "06.5%",
        chestlist: {
            'Left Boulder Maze Chest': { isAvailable: function () {
                return items.Glove >= 2 || items.Hammer; }, },
            'Center Boulder Maze Chest': { isAvailable: function () {
                return hasBoom() || items.Hammer || items.Glove >= 2; }, },
            'Right Boulder Maze Chest': { isAvailable: function () {
                return hasBoom() || items.Hammer || items.Glove >= 2; }, },
            'Hot Rodder Goron': { isAvailable: function () {
                return hasBoom(); }, },
            'Link the Goron': { isAvailable: function () {
                return items.Glove || hasBoom() || items.Bow; }, },
            'Spinning Pot Heart Piece': { isAvailable: function () {
                return ((items.Glove || hasBoom()) && (canPlay(items.ZeldasLullaby) || (items.Magic && items.Dins))); }, },
            'Darunia\'s Joy': { isAvailable: function () {
                return canPlay(items.ZeldasLullaby) && canPlay(items.SariasSong); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Lost Woods",
        x: "78.0%",
        y: "48.0%",
        chestlist: {
            'Skull Kid': { isAvailable: function () {
                return canPlay(items.SariasSong); }, },
            'Deku Salesman': { isAvailable: function () {
                return true; }, },
            'Ocarina Memory Game': { isAvailable: function () {
                return true; }, },
            'Target in Woods': { isAvailable: function () {
                return items.Slingshot; }, },
            'Bomb Grotto Chest': { isAvailable: function () {
                return (hasBoom() || items.Hammer); }, },
            'Deku Salesman Grotto': { isAvailable: function () {
                return (hasBoom() || (items.Hammer && (item.SariasSong || canPlay(items.MinuetofForest)))); }, },
            'Wolfos Grotto Chest': { isAvailable: function () {
                return (hasBoom() || (items.Hammer && (item.SariasSong || canPlay(items.MinuetofForest)))); }, },
            'Saria\'s Song': { isAvailable: function () {
                return items.Child >= 3; }, },
            'Minuet of Forest': { isAvailable: function () {
                return canPlay(items.SariasSong) || canPlay(items.MinuetofForest); }, },
            'Deku Theater Skull Mask': { isAvailable: function () {
                return items.Child >= 5; }, },
            'Deku Theater Mask of Truth': { isAvailable: function () {
                return items.Child >= 8; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Zora\'s Domain",
        x: "93.5%",
        y: "29.0%",
        chestlist: {
            'Diving Minigame': { isAvailable: function () {
                return ((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale); }, },
            'Zoras Domain Torch Run': { isAvailable: function () {
                return ((hasBoom() && canPlay(items.ZeldasLullaby)) || items.Scale); }, },
            'Fairy Fountain': { isAvailable: function () {
                return (items.ZoraLetter && hasBoom() && canPlay(items.ZeldasLullaby)); }, },
            'Iceberg Heart Piece': { isAvailable: function () {
                return (items.ZoraLetter && (hasBoom() || items.Scale) && canPlay(items.ZeldasLullaby)); }, },
            'Underwater Heart Piece': { isAvailable: function () {
                return (items.ZoraLetter && (hasBoom() || items.Scale) && canPlay(items.ZeldasLullaby) && items.IronBoots); }, },
            'King Zora Thawed': { isAvailable: function () {
                return (canPlay(items.ZeldasLullaby) && items.Bottle && ((items.ZoraLetter && (hasBoom() || items.Scale)) || isBridgeOpen() || items.Wallet >= 2)); }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
    {
        name: "Death Mountain",
        x: "64.0%",
        y: "09.0%",
        chestlist: {
            'Heart Piece Above Dodongo Cavern': { isAvailable: function () {
                return true; }, },
            'Outside Goron City Chest': { isAvailable: function () {
                return hasBoom() || items.Hammer; }, },
            'Outside Goron City Grotto': { isAvailable: function () {
                return canPlay(items.SongofStorms); }, },
            'Bolero of Fire': { isAvailable: function () {
                return (canPlay(items.BoleroofFire) || ((items.HoverBoots || items.Hookshot) && (items.Bow || items.Glove || hasBoom())) || (items.HoverBoots && items.Hammer)); }, },
            'Crater Wall Heart Piece': { isAvailable: function () {
                return (hasBoom() || items.Hammer || (canPlay(items.BoleroofFire) && (items.HoverBoots || items.Hookshot)) || items.Glove || items.Bow); }, },
            'Crater Magic Bean Heart Piece': { isAvailable: function () {
                return (items.Beans && canPlay(items.BoleroofFire)); }, },
            'Crater Grotto': { isAvailable: function () {
                return hasBoom() || items.Hammer; }, },
            'Crater Fairy Fountain': { isAvailable: function () {
                return (items.Hammer && canPlay(items.ZeldasLullaby) && (items.Glove || (canPlay(items.BoleroofFire) && items.Hookshot) || items.HoverBoots) || items.Bow); }, },
            'Summit Fairy Fountain': { isAvailable: function () {
                return ((hasBoom() || items.Hammer) && canPlay(items.ZeldasLullaby)); }, },
            'Biggoron Sword': { isAvailable: function () {
                    return  (items.Bow || hasBoom() || items.Hammer || items.Glove || (canPlay(items.BoleroofFire) && (items.HoverBoots || items.Hookshot))) && items.Adult >= 11; }, },
        },
        isBeatable: function() {
            return this.canGetChest();
        },
        canGetChest: function() {
            return generalCanGetChest(this.chestlist);
        },
    },
];

//define overworld chests
var chests = [
    {
        name: "Kokiri Sword Chest",
        x: "76.0%",
        y: "63.5%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Mido's House (4)",
        x: "78.5%",
        y: "58.0%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Kokiri Song of Storms Grotto",
        x: "77.5%",
        y: "54.5%",
        isAvailable: function() {
            if (canPlay(items.SongofStorms)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Song of Time",
        x: "52.3%",
        y: "30.5%",
        isAvailable: function() {
            if (items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hyrule Field North Grotto",
        x: "50.0%",
        y: "28.0%",
        isAvailable: function() {
            if (hasBoom() || items.Hammer) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hyrule Field Forest Grotto",
        x: "60.0%",
        y: "59.0%",
        isAvailable: function() {
            if (hasBoom() || items.Hammer) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Hyrule Field South Grotto",
        x: "44.5%",
        y: "64.0%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Hyrule Field Deku Salesman Grotto",
        x: "42.0%",
        y: "64.0%",
        isAvailable: function() {
            if (hasBoom() || items.Hammer) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Diving Heart Piece Grotto",
        x: "44.0%",
        y: "32.0%",
        isAvailable: function() {
            if ((hasBoom() || items.Hammer) && (items.Scale >= 2 || items.IronBoots)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Talon's Chickens Minigame",
        x: "49.0%",
        y: "38.0%",
        isAvailable: function() {
            if (items.Child >= 3) {
                return "available";
            }
            return "unavailable"
        },
    },
    {
        name: "Epona's Song",
        x: "47.0%",
        y: "41.5%",
        isAvailable: function() {
            if (items.Child >= 3) {
                return "available";
            }
            return "unavailable"
        },
    },
    {
        name: "Lon Lon Heart Piece",
        x: "44.0%",
        y: "43.5%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Underwater Bottle",
        x: "38.6%",
        y: "80.0%",
        isAvailable: function() {
            if (items.Scale)
                return "available";
            return "unavailable";
        },
    },
    {
        name: "Lake Hylia Sun",
        x: "41.5%",
        y: "91.0%",
        isAvailable: function() {
            if (items.Hookshot >= 2 && items.Bow) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Diving in the Lab",
        x: "35.2%",
        y: "77.4%",
        isAvailable: function() {
            if (items.Scale >= 2)
                return "available";
            return "unavailable";
        },
    },
    {
        name: "Lab Roof Heart Piece",
        x: "35.2%",
        y: "74.0%",
        isAvailable: function() {
            if (items.Beans || items.Hookshot) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Child Fishing",
        x: "45.0%",
        y: "78.0%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Adult Fishing",
        x: "46.9%",
        y: "78.0%",
        isAvailable: function() {
            if (items.Hookshot || items.Beans) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gerudo Valley Hammer Rocks Chest",
        x: "22.0%",
        y: "38.0%",
        isAvailable: function() {
            if ((canPlay(items.EponasSong) || items.Hookshot >= 2) && items.Hammer) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Gerudo Valley Crate Heart Piece",
        x: "24.0%",
        y: "41.5%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Gerudo Valley Waterfall Heart Piece",
        x: "25.5%",
        y: "32.0%",
        isAvailable: function() {
            return "available";
        },
    },
    {
        name: "Gerudo Fortress Rooftop Chest",
        x: "18.8%",
        y: "23.0%",
        isAvailable: function() {
            if ((canPlay(items.EponasSong) || items.Hookshot >= 2) && items.HoverBoots || items.Hookshot >= 2) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Horseback Archery Game 1000pts",
        x: "21.7%",
        y: "28.0%",
        isAvailable: function() {
            if (canPlay(items.EponasSong) && items.Bow) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Horseback Archery Game 1500pts",
        x: "23.5%",
        y: "28.0%",
        isAvailable: function() {
            if (canPlay(items.EponasSong) && items.Bow) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Haunted Wasteland Chest",
        x: "14.0%",
        y: "25.0%",
        isAvailable: function() {
            if (((canPlay(items.EponasSong) && items.HoverBoots) || items.Hookshot >= 2) && ((items.Dins || (items.Fire && items.Bow)) && items.Magic)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Requiem of Spirit",
        x: "04.5%",
        y: "21.5%",
        isAvailable: function() {
            if ( (((canPlay(items.EponasSong) && items.HoverBoots) || items.Hookshot >= 2) && lens('Semi')) || canPlay(items.RequiemofSpirit)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Desert Colossus Fairy",
        x: "08.0%",
        y: "19.0%",
        isAvailable: function() {
            if (((((canPlay(items.EponasSong) && items.HoverBoots) || items.Hookshot >= 2) && lens('Semi')) || canPlay(items.RequiemofSpirit)) && hasBoom() && canPlay(items.ZeldasLullaby)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Desert Colossus Heart Piece",
        x: "06.4%",
        y: "23.5%",
        isAvailable: function() {
            if (canPlay(items.RequiemofSpirit) && items.Beans) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Frog Ocarina Game",
        x: "79.8%",
        y: "32.0%",
        isAvailable: function() {
            if ((items.Scale || hasBoom()) && canPlay(items.ZeldasLullaby) && canPlay(items.SariasSong) && canPlay(items.SunsSong) && canPlay(items.EponasSong) && canPlay(items.SongofTime) && canPlay(items.SongofStorms)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Frogs in the Rain",
        x: "78.0%",
        y: "32.0%",
        isAvailable: function() {
            if ((items.Scale || hasBoom()) && canPlay(items.SongofStorms)) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Zora River Heart Piece 1",
        x: "75.0%",
        y: "30.0%",
        isAvailable: function() {
            if (items.Scale || hasBoom() || items.HoverBoots) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Zora River Heart Piece 2",
        x: "86.0%",
        y: "29.2%",
        isAvailable: function() {
            if (items.Scale || hasBoom() || items.HoverBoots) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Zora River Grotto",
        x: "75.5%",
        y: "34.5%",
        isAvailable: function() {
            if (items.Scale || hasBoom() || items.HoverBoots) {
                return "available";
            }
            return "unavailable";
        },
    },
    {
        name: "Saria on the Bridge",
        x: "74.5%",
        y: "57.5%",
        isAvailable: function() {
            return "available";
        },
    },
]

