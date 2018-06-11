function generalCanGetChest(chestlist) {
    var canGet = 0;
    for (var key in chestlist) {
        if (chestlist.hasOwnProperty(key)) {
            if (chestlist[key]())
                canGet++;
        }
    }

    if (canGet >= Object.keys(chestlist).length)
        return "available";
    if (canGet == 0)
        return "unavailable"
    return "possible"
}

// define dungeon chests
var dungeons = [
    {
        name: "Deku Tree",
        x: "87.0%",
        y: "57.0%",
        image: "KokiriEmerald.png",
        chestlist: {
            ['Deku Tree Lobby Chest']: function () {return true},
            ['Deku Tree Compass Chest']: function () {return true},
            ['Deku Tree Compass Room Side Chest']: function () {return true},
            ['Deku Tree Basement Chest']: function () {return true},
            ['Deku Tree Slingshot Chest']: function () {return true},
            ['Deku Tree Slingshot Room Side Chest']: function () {return true}
        },
        isBeaten: false,
        isBeatable: function(){
            if(items.Slingshot) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Water Temple",
        x: "36.1%",
        y: "91.0%",
        image: "WaterMedallion.png",
        chestlist: {
            ['Water Temple Map Chest']: function () {
                return items.ZoraTunic && items.IronBoots && items.Hookshot; },
            ['Water Temple Compass Chest']: function () {
                return items.ZoraTunic && items.IronBoots && items.Hookshot; },
            ['Water Temple Torches Chest']: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && (items.Bow || (items.Dins && items.Magic)) && items.ZeldasLullaby; },
            ['Water Temple Dragon Chest']: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby && items.SongofTime && items.Bow; },
            ['Water Temple Central Bow Target Chest']: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.Bow && items.Glove && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2); },
            ['Water Temple Boss Key Chest']:  function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby && ((items.Bombs && items.Glove) || items.HoverBoots) && items.Hookshot >= 2; },
            ['Water Temple Central Pillar Chest']: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby ; },
            ['Water Temple Cracked Wall Chest']: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.Bombs && items.ZeldasLullaby; },
            ['Water Temple Dark Link Chest']: function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.ZeldasLullaby; },
            ['Water Temple River Chest']:  function () {
                return (items.ZoraTunic && items.IronBoots && items.Hookshot) && items.SongofTime && items.Bow && items.ZeldasLullaby; }
        },
        isBeaten: false,
        isBeatable: function(){
            if(items.ZoraTunic && items.IronBoots && items.Hookshot >= 2) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Gerudo Training Grounds",
        x: "18.8%",
        y: "28.0%",
        image: "Ice.png",
        chestlist: {
            ['Gerudo Training Grounds Lobby Left Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow; },
            ['Gerudo Training Grounds Lobby Right Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow ; },
            ['Gerudo Training Grounds Stalfos Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Beamos Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Bombs; },
            ['Gerudo Training Grounds Hidden Ceiling Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Lens && items.Magic ; },
            ['Gerudo Training Grounds Maze Path First Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Maze Path Second Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Maze Path Third Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) ; },
            ['Gerudo Training Grounds Maze Path Final Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Maze Right Central Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Maze Right Side Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Underwater Silver Rupee Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Hookshot && items.SongofTime && items.IronBoots; },
            ['Gerudo Training Grounds Hammer Room Clear Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Hammer Room Switch Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Hammer; },
            ['Gerudo Training Grounds Eye Statue Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow; },
            ['Gerudo Training Grounds Near Scarecrow Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && items.Bow; },
            ['Gerudo Training Grounds Before Heavy Block Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots); },
            ['Gerudo Training Grounds Heavy Block First Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Glove >= 2 && items.Lens && items.Magic; },
            ['Gerudo Training Grounds Heavy Block Second Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Glove >= 2 && items.Lens && items.Magic; },
            ['Gerudo Training Grounds Heavy Block Third Chest']:  function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Glove >= 2 && items.Lens && items.Magic; },
            ['Gerudo Training Grounds Heavy Block Fourth Chest']: function () {
                return (items.EponasSong || items.Hookshot >= 2) && (items.Bow || items.Hookshot || items.HoverBoots) && items.Glove >= 2 && items.Lens && items.Magic; }
        },
        isBeaten: false,
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Spirit Temple",
        x: "02.5%",
        y: "17.0%",
        image: "SpiritMedallion.png",
        chestlist: {
            ['Spirit Temple Child Left Chest']: function () {
                return items.RequiemofSpirit && (items.Boomerang || items.Slingshot); },
            ['Spirit Temple Child Right Chest']:  function () {
                return items.RequiemofSpirit && (items.Boomerang || items.Slingshot); },
            ['Spirit Temple Compass Chest']:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.ZeldasLullaby; },
            ['Spirit Temple Early Adult Right Chest']:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || items.Bombs); },
            ['Spirit Temple First Mirror Right Chest']:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2; },
            ['Spirit Temple First Mirror Left Chest']:  function () {
                return ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2; },
            ['Spirit Temple Map Chest']:  function () {
                return ((items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2)) && items.Magic && (items.Dins || (items.Fire && items.Bow && items.Glove >= 2)); },
            ['Spirit Temple Child Climb East Chest']:  function () {
                return ((items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Hookshot || items.Bow))); },
            ['Spirit Temple Child Climb North Chest']: function () {
                 return ((items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Hookshot || items.Bow))); },
            ['Spirit Temple Sun Block Room Chest']: function () {
                return ((items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Lens && items.Magic && items.Glove >= 2 && (items.Dins || (items.Fire && items.Bow)) && items.Magic)) ; },
            ['Spirit Temple Statue Hand Chest']:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && items.ZeldasLullaby; },
            ['Spirit Temple NE Main Room Chest']:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && items.ZeldasLullaby && items.Hookshot; },
            ['Silver Gauntlets Chest']:  function () {
                return (items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2); },
            ['Mirror Shield Chest']: function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2); },
            ['Spirit Temple Near Four Armos Chest']:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && items.MirrorShield; },
            ['Spirit Temple Hallway Left Invisible Chest']:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && items.Magic && items.Lens; },
            ['Spirit Temple Hallway Right Invisible Chest']: function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && items.Magic && items.Lens; },
            ['Spirit Temple Boss Key Chest']: function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && items.ZeldasLullaby && items.Bow && items.Hookshot && (items.Bombs || items.Hammer) ; },
            ['Spirit Temple Topmost Chest']:  function () {
                return (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && (items.Hookshot || items.Bow || items.Bombs) && items.MirrorShield; }
        },
        isBeaten: false,
        isBeatable: function(){
            if(((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2 && items.MirrorShield && items.Bombs && items.Hookshot) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Bottom of the Well",
        x: "68.8%",
        y: "20.0%",
        image: "Lens.png",
        chestlist: {
            ['Bottom of the Well Front Left Hidden Wall']:  function () {
                return items.SongofStorms && items.Lens && items.Magic; },
            ['Bottom of the Well Front Center Bombable']:  function () {
                return items.SongofStorms && items.Bombs; },
            ['Bottom of the Well Right Bottom Hidden Wall']:  function () {
                return items.SongofStorms && items.Lens && items.Magic; },
            ['Bottom of the Well Center Large Chest']: function () {
                return items.SongofStorms && items.Lens && items.Magic ; },
            ['Bottom of the Well Center Small Chest']:  function () {
                return items.SongofStorms && items.Lens && items.Magic; },
            ['Bottom of the Well Back Left Bombable']:  function () {
                return items.SongofStorms && items.Bombs; },
            ['Bottom of the Well Defeat Boss']:  function () {
                return items.SongofStorms && items.ZeldasLullaby && items.KokiriSword; },
            ['Bottom of the Well Invisible Chest']:  function () {
                return items.SongofStorms && items.ZeldasLullaby && items.Lens && items.Magic; },
            ['Bottom of the Well Underwater Front Chest']: function () {
                return items.SongofStorms && items.ZeldasLullaby ; },
            ['Bottom of the Well Underwater Left Chest']:  function () {
                return items.SongofStorms && items.ZeldasLullaby; },
            ['Bottom of the Well Basement Chest']:  function () {
                return items.SongofStorms && items.Bombs; },
            ['Bottom of the Well Locked Pits']:  function () {
                return items.SongofStorms && items.Lens && items.Magic; },
            ['Bottom of the Well Behind Right Grate']:  function () {
                return items.SongofStorms && items.Lens && items.Magic; }
        },
        isBeaten: false,
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Shadow Temple",
        x: "77.0%",
        y: "16.0%",
        image: "ShadowMedallion.png",
        chestlist: {
            ['Shadow Temple Map Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && (items.HoverBoots || items.Hookshot); },
            ['Shadow Temple Hover Boots Chest']: function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && (items.HoverBoots || items.Hookshot); },
            ['Shadow Temple Compass Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots; },
            ['Shadow Temple Early Silver Rupee Chest']: function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots; },
            ['Shadow Temple Invisible Blades Visible Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; },
            ['Shadow Temple Invisible Blades Invisible Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; },
            ['Shadow Temple Falling Spikes Lower Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; },
            ['Shadow Temple Falling Spikes Upper Chest']:  function () {
                return     items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Glove; },
            ['Shadow Temple Falling Spikes Switch Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Glove; },
            ['Shadow Temple Invisible Spikes Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs; },
            ['Shadow Temple Wind Hint Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; },
            ['Shadow Temple After Wind Enemy Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; },
            ['Shadow Temple After Wind Hidden Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot; },
            ['Shadow Temple Spike Walls Left Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; },
            ['Shadow Temple Boss Key Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; },
            ['Shadow Temple Hidden Floormaster Chest']:  function () {
                return items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby; }
        },
        isBeaten: false,
        isBeatable: function(){
            if(items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby && items.Bow) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "GoronRuby's Cavern",
        x: "60.0%",
        y: "13.0%",
        image: "GoronRuby.png",
        chestlist: {
            ['Dodongos Cavern Map Chest']:  function () {
                return items.Bombs || items.Hammer || items.Glove  ; },
            ['Dodongos Cavern Compass Chest']:  function () {
                return items.Bombs || items.Hammer || items.Glove  ; },
            ['Dodongos Cavern Bomb Flower Platform']:  function () {
                return items.Bombs || items.Hammer || items.Glove  ; },
            ['Dodongos Cavern Bomb Bag Chest']:  function () {
                return (items.Bombs || items.Hammer || items.Glove) && (items.Slingshot || items.Bow || items.HoverBoots); },
            ['Dodongos Cavern End of Bridge Chest']:  function () {
                return (items.Slingshot || items.Bow || items.HoverBoots) && (items.Bombs || ((items.Bow || items.HoverBoots) && items.Hammer)); },
            ['Chest Above King Dodongo']: function () {
                return (items.Slingshot || items.Bow || items.HoverBoots) && items.Bombs ; }
        },
        isBeaten: false,
        isBeatable: function(){
            if((items.Slingshot || items.Bow || items.HoverBoots) && items.Bombs) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Fire Temple",
        x: "68.0%",
        y: "06.5%",
        image: "FireMedallion.png",
        chestlist: {
            ['Fire Temple Chest Near Boss']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)); },
            ['Fire Temple Fire Dancer Chest']: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer ; },
            ['Fire Temple Boss Key Chest']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer; },
            ['Fire Temple Big Lava Room Bombable Chest']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) &&ZeldasLullaby && items.Bombs; },
            ['Fire Temple Big Lava Room Open Chest']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)); },
            ['Fire Temple Boulder Maze Lower Chest']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); },
            ['Fire Temple Boulder Maze Upper Chest']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); },
            ['Fire Temple Boulder Maze Side Room']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); },
            ['Fire Temple Boulder Maze Bombable Pit']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && items.Bombs; },
            ['Fire Temple Scarecrow Chest']: function () {
                return items.GoronTunic && items.Glove && (items.Bombs || items.Bow || items.Hookshot) && items.Hookshot; },
            ['Fire Temple Map Chest']: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot) ; },
            ['Fire Temple Compass Chest']: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot); },
            ['Fire Temple Highest Goron Chest']:  function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || items.Bow || items.Hookshot) && items.SongofTime && items.Hammer; },
            ['Fire Temple Megaton Hammer Chest']: function () {
                return items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && items.Bombs; }
        },
        isBeaten: false,
        isBeatable: function(){
            if(items.GoronTunic && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Bow || items.Hookshot) && (items.SongofTime || items.Bombs)))) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Jabu Jabu's Belly",
        x: "91.5%",
        y: "21.0%",
        image: "ZoraSapphire.png",
        chestlist: {
            ['Boomerang Chest']: function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && (items.Slingshot || items.Bombs || items.Boomerang); },
            ['Jabu Jabus Belly Map Chest']:  function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang; },
            ['Jabu Jabus Belly Compass Chest']:  function () {
                return ((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang; }
        },
        isBeaten: false,
        isBeatable: function(){
            if(((items.Bombs && items.ZeldasLullaby) || items.Scale) && items.ZoraLetter && items.Bottle && items.Boomerang) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Ice Cavern",
        x: "90.5%",
        y: "16.0%",
        image: "IronBoots.png",
        chestlist: {
            ['Ice Cavern Map Chest']:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; },
            ['Ice Cavern Compass Chest']:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; },
            ['Ice Cavern Iron Boots Chest']:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; },
            ['Sheik in Ice Cavern']:  function () {
                return (items.Bombs || items.Scale) && items.ZoraLetter && items.ZeldasLullaby && items.Bottle; },
        },
        isBeaten: false,
        isBeatable: function(){
            return this.canGetChest();
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Forest Temple",
        x: "79.0%",
        y: "37.0%",
        image: "ForestMedallion.png",
        chestlist: {
            ['Forest Temple First Chest']:  function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },
            ['Forest Temple Chest Behind Lobby']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },
            ['Forest Temple Well Chest']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },
            ['Forest Temple Map Chest']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },
            ['Forest Temple Outside Hookshot Chest']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; }, 
            ['Forest Temple Falling Room Chest']: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && (items.Bow || (items.Dins && items.Magic)); },
            ['Forest Temple Block Push Chest']: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; },
            ['Forest Temple Boss Key Chest']: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; },
            ['Forest Temple Floormaster Chest']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; }, 
            ['Forest Temple Bow Chest']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot; },  
            ['Forest Temple Red Poe Chest']:  function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; },
            ['Forest Temple Blue Poe Chest']: function () {
                return ((items.SariasSong || items.MinuetofForest) && items.Hookshot) && items.Bow; },
            ['Forest Temple Near Boss Chest']: function () {
                return (items.SariasSong || items.MinuetofForest) && items.Hookshot && items.Bow; }
        },
        isBeaten: false,
        isBeatable: function(){
            if((items.SariasSong || items.MinuetofForest) && items.Hookshot && items.Bow) {
                if (this.canGetChest() == 'available')
                    return 'available';
                return 'possible';
            }
            else
                return "unavailable";
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    },
    {
        name: "Ganon's Castle",
        x: "52.0%",
        y: "10.0%",
        image: "Light.png",
        chestlist: {
            ['Ganons Castle Forest Trial Chest']: function () { 
                return true; },
            ['Ganons Castle Water Trial Left Chest']: function () { 
                return true; },
            ['Ganons Castle Water Trial Right Chest']: function () { 
                return true; },
            ['Ganons Castle Shadow Trial First Chest']:  function () {
                return (items.Magic && items.Bow && items.Fire) || items.Hookshot >= 2; },
            ['Ganons Castle Shadow Trial Second Chest']:  function () {
                return (items.Magic && items.Bow && items.Fire) || (items.Hookshot >= 2 && items.HoverBoots); },
            ['Ganons Castle Spirit Trial First Chest']:  function () {
                return items.Hookshot && (items.Magic || items.Bombs); },
            ['Ganons Castle Spirit Trial Second Chest']:  function () {
                return items.Hookshot && items.Magic && items.Bombs && items.Lens; },
            ['Ganons Castle Light Trial First Left Chest']:  function () {
                return items.Glove >= 3; },
            ['Ganons Castle Light Trial Second Left Chest']:  function () {
                return items.Glove >= 3; },
            ['Ganons Castle Light Trial Third Left Chest']:  function () {
                return items.Glove >= 3; },
            ['Ganons Castle Light Trial First Right Chest']:  function () {
                return items.Glove >= 3; },
            ['Ganons Castle Light Trial Second Right Chest']:  function () {
                return items.Glove >= 3; },
            ['Ganons Castle Light Trial Third Right Chest']:  function () {
                return items.Glove >= 3; },
            ['Ganons Castle Light Trail Invisible Enemies Chest']: function () {
                return items.Glove >= 3 && (items.Magic && items.Lens); },
            ['Ganons Castle Light Trial Lullaby Chest']:  function () {
                return items.Glove >= 3 && items.ZeldasLullaby; }
        },
        trials: {
            ['Ganons Castle Forest Trial Clear']:  function () {
                return items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins)); },
            ['Ganons Castle Fire Trial Clear']:  function () {
                return items.GoronTunic && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2; },
            ['Ganons Castle Water Trial Clear']:  function () {
                return items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light; },
            ['Ganons Castle Shadow Trial Clear']:  function () {
                return items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (items.Lens || (items.HoverBoots && items.Hookshot >= 2)); },
            ['Ganons Castle Spirit Trial Clear']:  function () {
                return items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombs && items.Hookshot; },
            ['Ganons Castle Light Trial Clear']:  function () {
                return items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light; }     
        },
        isBeaten: false,
        isBeatable: function(){
            return generalCanGetChest(this.trials);
        },
        canGetChest: function(){
            return generalCanGetChest(this.chestlist);
        }
    }
];




//define overworld chests
var chests = [
    {
        name: "Kokiri Sword Chest",
        x: "76.0%",
        y: "64.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Mido's House (4)",
        x: "78.0%",
        y: "58.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Skull Kid",
        x: "76.0%",
        y: "50.6%",
        isOpened: false,
        isAvailable: function(){
            if(items.SariasSong)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Ocarina Memory Game",
        x: "81.8%",
        y: "52.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Target in Woods",
        x: "80.0%",
        y: "52.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Slingshot)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Lost Woods Deku Salesman",
        x: "74.0%",
        y: "53.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Lost Woods Deku Salesman Grotto",
        x: "80.0%",
        y: "48.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Saria's Song",
        x: "78.0%",
        y: "41.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Minuet of Forest",
        x: "80.0%",
        y: "41.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.SariasSong || items.MinuetofForest)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Wolfos Grotto Chest",
        x: "79.0%",
        y: "45.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Deku Theater Skull Mask",
        x: "75.0%",
        y: "47.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Deku Theater Mask of Truth",
        x: "77.0%",
        y: "47.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.SariasSong && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Song of Time",
        x: "52.3%",
        y: "30.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Hyrule Field Deku Salesman Grotto",
        x: "42.0%",
        y: "64.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Talon's Chickens Minigame",
        x: "49.0%",
        y: "38.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Epona's Song",
        x: "47.0%",
        y: "41.5%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Underwater Bottle",
        x: "38.6%",
        y: "80.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Scale)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Lake Hylia Sun",
        x: "41.5%",
        y: "91.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Hookshot >= 2 && items.Bow)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Diving in the Lab",
        x: "35.5%",
        y: "77.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Scale >= 2)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Child Fishing",
        x: "45.0%",
        y: "78.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.KokiriSword)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Adult Fishing",
        x: "46.9%",
        y: "78.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Hookshot || items.Scale || items.Bombs)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Gerudo Valley Hammer Rocks Chest",
        x: "22.0%",
        y: "38.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Gerudo Fortress Rooftop Chest",
        x: "18.8%",
        y: "23.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.HoverBoots || items.Hookshot >= 2)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Horseback Archery Game (2)",
        x: "22.5%",
        y: "28.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.EponasSong || items.Hookshot >= 2) && items.EponasSong && items.Bow)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Haunted Wasteland Chest",
        x: "14.0%",
        y: "25.0%",
        isOpened: false,
        isAvailable: function(){
            if(((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && ((items.Dins || (items.Fire && items.Bow)) && items.Magic))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Requiem of Spirit",
        x: "05.0%",
        y: "22.0%",
        isOpened: false,
        isAvailable: function(){
            if( (((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Desert Colossus Fairy",
        x: "08.0%",
        y: "19.0%",
        isOpened: false,
        isAvailable: function(){
            if( ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Bombs && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Light Arrows",
        x: "57.0%",
        y: "19.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.ShadowMedallion && items.SpiritMedallion)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Prelude of Light",
        x: "58.8%",
        y: "19.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.ForestMedallion)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Zelda's Lullaby",
        x: "55.8%",
        y: "11.5%",
        isOpened: false,
        isAvailable: function(){
             return "available";
        }
    },
    {
        name: "Hyrule Castle Fairy",
        x: "55.0%",
        y: "15.6%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Ganon's Castle Fairy",
        x: "56.8%",
        y: "15.6%",
        isOpened: false,
        isAvailable: function(){
            if(items.Glove >= 3 && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "10 Big Poes",
        x: "54.0%",
        y: "25.6%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bow && items.EponasSong && items.Bottle)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Child Shooting Gallery",
        x: "52.0%",
        y: "17.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Bombchu Bowling (2)",
        x: "51.0%",
        y: "20.2%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Treasure Chest Game",
        x: "51.0%",
        y: "23.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Lens && items.Magic)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Dog Lady",
        x: "48.5%",
        y: "22.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Man on Roof",
        x: "66.0%",
        y: "21.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Hookshot)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Anju as Adult",
        x: "67.0%",
        y: "29.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Anju's Chickens",
        x: "65.2%",
        y: "29.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Nocturne of Shadow",
        x: "61.5%",
        y: "24.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.ForestMedallion && items.FireMedallion && items.WaterMedallion)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Kakariko Grotto Chest",
        x: "63.8%",
        y: "24.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Song of Storms",
        x: "69.5%",
        y: "24.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Adult Shooting Gallery",
        x: "66.0%",
        y: "25.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bow)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Shield Grave Chest",
        x: "73.0%",
        y: "24.0%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Redead Grave Chest",
        x: "75.0%",
        y: "25.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.SunsSong)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Sun's Song Chest",
        x: "75.5%",
        y: "21.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.ZeldasLullaby && ((items.Dins || (items.Fire && items.Bow)) && items.Magic))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Sun's Song",
        x: "77.3%",
        y: "21.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Hookshot",
        x: "72.5%",
        y: "20.5%",
        isOpened: false,
        isAvailable: function(){
            return "available";
        }
    },
    {
        name: "Outside Goron City",
        x: "62.5%",
        y: "11.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Biggoron Sword",
        x: "66.5%",
        y: "02.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs || items.Hammer)
                return "possible";
            return "unavailable";
        }
    },
    {
        name: "Left Boulder Maze Chest",
        x: "57.0%",
        y: "05.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Glove >= 2 || items.Hammer)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Right Boulder Maze Chests (2)",
        x: "58.8%",
        y: "05.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs || items.Hammer || items.Glove >= 2)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "'Rolling Goron as Child",
        x: "58.0%",
        y: "08.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Bombs)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Link the Goron",
        x: "59.8%",
        y: "08.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.Glove || items.Bombs)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Darunia's Joy",
        x: "61.5%",
        y: "05.5%",
        isOpened: false,
        isAvailable: function(){
            if(items.ZeldasLullaby && items.SariasSong)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Bolero of Fire",
        x: "65.5%",
        y: "05.2%",
        isOpened: false,
        isAvailable: function(){
            if(items.BoleroofFire || (items.GoronTunic && (items.HoverBoots || items.Hookshot)))
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Death Mountain Crater Fairy",
        x: "63.5%",
        y: "06.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.GoronTunic && items.Hammer && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Death Mountain Summit Fairy",
        x: "64.7%",
        y: "02.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.Bombs || items.Hammer) && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Frog Ocarina Game",
        x: "76.8%",
        y: "32.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.Scale || items.Bombs) && items.ZeldasLullaby && items.SariasSong && items.SunsSong && items.EponasSong && items.SongofTime && items.SongofStorms)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Frogs in the Rain",
        x: "75.0%",
        y: "32.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.Scale || items.Bombs) && items.SongofStorms)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Diving Minigame",
        x: "93.0%",
        y: "26.0%",
        isOpened: false,
        isAvailable: function(){
            if((items.Bombs && items.ZeldasLullaby) || items.Scale)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Zoras Domain Torch Run",
        x: "95.0%",
        y: "29.8%",
        isOpened: false,
        isAvailable: function(){
            if((items.Bombs && items.ZeldasLullaby) || items.Scale)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "King Zora Thawed",
        x: "96.0%",
        y: "23.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.ZeldasLullaby && items.Bottle && (items.Bombs || items.Scale) && items.ZoraLetter)
                return "available";
            return "unavailable";
        }
    },
    {
        name: "Zora's Fountain Fairy",
        x: "94.2%",
        y: "19.0%",
        isOpened: false,
        isAvailable: function(){
            if(items.ZoraLetter && items.Bombs && items.ZeldasLullaby)
                return "available";
            return "unavailable";
        }
    }
]

