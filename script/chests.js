function generalCanGetChest(chestlist) {
   var canGet = 0;
   var unopened = 0
   for (var key in chestlist) {
      if ( chestlist[key].access == "master" && quest == "Vanilla" ) { //Master checks
            continue;}
        if ( chestlist[key].access == "vanilla" && quest == "Master" ) { //Master checks
            continue;}
        if ( chestlist[key].type == "trial" && trialsize == 0 ) { //Castle trials
            continue;}
        if ( chestlist[key].type == "entrance" || chestlist[key].type == "warp" || chestlist[key].type == "owl" ) { //Do Nothing
            continue;}
        if ( chestlist[key].access == "door" && chestlist[key].type == "simple" && IndoorER == "Off" ) { //Simple Doorways
            continue;}
        if ( chestlist[key].access == "door" && chestlist[key].type == "alldoor" && IndoorER !== "Full" ) { // Full indoor doorways
            continue;}
        if ( chestlist[key].access == "door" && chestlist[key].type == "dungeon" && DungeonER == false ) { // Dungeon doorways
            continue;}
        if ( chestlist[key].access == "simple" && IndoorER !== "Off" ) { //simple indoor checks
            continue;}
        if ( chestlist[key].access == "alldoor" && IndoorER == "Full" ) { //Link's House, ToT, and windmill checks
            continue;}
        if ( chestlist[key].access == "grotto" && chestlist[key].type == "grotto" && GrottoER == false ) { //Grotto doorways
            continue;}
        if ( chestlist[key].access == "grotto" && chestlist[key].type !== "grotto" && GrottoER == true ) { //Grotto checks
            continue;}
        if ( chestlist[key].type == "skulltula" && skulltula == "Off") { // Skulls
            continue;}
        if ( (chestlist[key].access == "master" || chestlist[key].access == "vanilla") && chestlist[key].type == "skulltula" && skulltula == "Overworld" ) { // Dungeon Skulls
            continue;}
        if ( (chestlist[key].access == "outdoor" || chestlist[key].access == "simple" || chestlist[key].access == "grotto") && chestlist[key].type == "skulltula" && skulltula == "Dungeons" ) { // OW Skulls
            continue;}
        if (chestlist[key].type == "scrub" && scrubs == "Off") { //Scrubs 
            continue;}
        if (chestlist[key].type == "shop" && shopsize == 0) { //Shops 
            continue;}
        if (chestlist[key].type == "cow" && Cowsanity == false) { //Cows
            continue;}
        if ( chestlist[key].type == "bean" && BeanShuffle == false ) { //Bean shuffle
            continue;}
        if ( chestlist[key].type == "egg" && WeirdEgg == false ) { //Bean shuffle
            continue;}
        if ( chestlist[key].type == "knife" && Medigoron == false ) { //Medigoron item
            continue;}
        if ( chestlist[key].type == "carpet" && Aladdin == false ) { //Carpet Sale
            continue;}
        if ( chestlist[key].type == "ocarina" && OcarinaShuffle == false ) { //Ocarina shuffle in field
            continue;}
        if ( chestlist[key].access == "OWER" && chestlist[key].type == "ocarina" && ((OWERmap == false && OcarinaShuffle == true) || OcarinaShuffle == false) ) { //Ocarina shuffle no OWER
            continue;}
        if ( chestlist[key].access == "no OWER" && chestlist[key].type == "ocarina" && ((OWERmap == true && OcarinaShuffle == true) || OcarinaShuffle == false) ) { //OWER Ocarina shuffle
            continue;}
        if ( chestlist[key].type == "guard" && gerudobridge !== "Default" && smallkeys == "Keysanity" ) { //Fortress Guard checks
            continue;}
        if (chestlist[key].type == "gossip" && items.StoneofAgony == false) { //Gossip stones
            continue;}
        if (chestlist == dungeons[1].chestlist && dungeons[1].mixedtype == "default" && quest == "Mixed") {
            continue;}
      if (chestlist.hasOwnProperty(key)) {
         if (!chestlist[key].isOpened)
            unopened++;

         if (!chestlist[key].isOpened && chestlist[key].isAvailable())
            canGet++;
      }
   }

   if (unopened == 0)
      return "opened"
   if (canGet == unopened)
      return "available"
   if (canGet == 0)
      return "unavailable"
   return "possible"
}
// (OWER == false || (OWER == true && dungeon[].found == true) ) && (Randomstart == false || (Randomstart == true && dungeon[].entrance[].access == true) )
// define dungeon chests
var dungeons = [
   { name: 'Kokiri Forest',
      x: "78.9%",
      y: "63.9%",
      type: "overworld",
      found: true,
      chestlist: {
         'Forest to Field': {
          x: "0.0%",
          y: "58.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return dungeons[0].found == true ; }
       },
         'Fairy Ocarina': {
            x: "3.6%",
            y: "40.0%",
            type: "ocarina",
            access: "no OWER",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Mido\'s House': {
            x: "20.0%",
            y: "48.0%",
            type: "simple",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Mido\'s House 1': {
            x: "15.0%",
            y: "38.0%",
            type: "chest",
            access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Mido\'s House 2': {
            x: "15.0%",
            y: "32.0%",
            type: "chest",
            access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Mido\'s House 3': {
            x: "16.0%",
            y: "38.0%",
            type: "chest",
            access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Mido\'s House 4': {
            x: "16.5%",
            y: "32.0%",
            type: "chest",
            access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Know It All Bro\'s': {
            x: "8.0%",
            y: "42.0%",
            type: "simple",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Child Know it All Bros Skulltula': {
            x: "5.0%",
            y: "58.8%",
            type: "skulltula",
            access: "outdoor",
            isAvailable: function () { //Child only outdoor
               return dungeons[0].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ); }
         },
         'Kokiri Sword Chest': {
            x: "12.8%",
            y: "84.0%",
            type: "ksword",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); }
         },
         'Link\'s House': {
            x: "16.0%",
            y: "67.0%",
            type: "alldoor",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Link\'s House Cow': {
            x: "14.5%",
            y: "69.6%",
            type: "cow",
            access: "alldoor",
            isAvailable: function () { //Child only indoor
               return dungeons[0].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                  items.Ocarina && items.EponasSong; }
         },
         'Saria\'s House': {
            x: "19.0%",
            y: "63.0%",
            type: "simple",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Twin\'s House': {
            x: "22.0%",
            y: "60.0%",
            type: "simple",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Adult Twin\'s House Roof Skulltula': {
            x: "23.0%",
            y: "59.5%",
            type: "skulltula",
            access: "outdoor",
            isAvailable: function () { //Adult only outdoor
               return dungeons[0].found == true
                 && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Hookshot; }
         },
         'Soil Patch Skulltula': {
            x: "20.0%",
            y: "38.0%",
            type: "skulltula",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && items.Bottle; }
         },
         'Kokiri Shop': {
            x: "10.5%",
            y: "37.5%",
            type: "simple",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Kokiri Sale': {
            x: "10.0%",
            y: "38.0%",
            type: "shop",
            access: "simple",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Infront Storms Grotto': {
            x: "75.0%",
            y: "58.0%",
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true ; }
         },
         'Song of Storms Grotto': {
            x: "8.0%",
            y: "34.0%",
            type: "grotto",
            access: "grotto",
            isAvailable: function () {
               return dungeons[0].found == true
               && items.Ocarina && items.SongofStorms; }
         },
         'Storms Grotto Chest': {
            x: "5.7%",
            y: "26.4%",
            type: "chest",
            access: "grotto",
            isAvailable: function () {
               return dungeons[0].found == true &&
                  items.Ocarina && items.SongofStorms; }
         },
         'Storms Grotto Gossip': {
            x: "7.0%",
            y: "34.0%",
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true &&
                  items.Ocarina && items.SongofStorms; }
         },
         'Forest to Woods': {
          x: "28.9%",
          y: "12.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return dungeons[0].found == true ; }
       },
         'Left of Deku Tree Gossip': {
            x: "75.0%",
            y: "58.0%",
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) ) ; }
         },
         'Behind Deku Tree Gossip': {
            x: "75.0%",
            y: "58.0%",
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) ) ; }
         },
         'Inside the Deku Tree': {
            x: "75.0%",
            y: "58.0%",
            type: "dungeon",
            access: "door",
            isAvailable: function () {
               return dungeons[0].found == true && 
                  (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) ) ; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   { name: "Deku Tree",
      x: "88.0%",
      y: "48.5%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "none",
      found: true,
      chestlist: {
         'Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         '2nd Floor Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( ( items.DekuShield && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||( items.HylianShield && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2nd Floor Side Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( ( items.DekuShield && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||( items.HylianShield && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Top Floor Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Top Floor Side Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Top Floor Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Basement Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Basement 1st Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Basement 2nd Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Queen Gohma': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Basement Bomb Wall Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                  items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic)) ;}
         },
         'Lobby Skull in Crate': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'MQ Lobby Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Top Floor Torch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Top Floor Larva Kill': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'MQ 2nd Floor Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( (items.Slingshot && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||(items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2nd Floor Skulltule': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) &&
                ( ( items.Boomerang && (items.Bombchu || items.Bombs) && items.Slingshot && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ||( items.Hookshot && (items.Bombchu || items.Bombs) && items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Basement Chest 1': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'Spiked Log Open Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && items.Slingshot && (OpenDeku == 1 || (items.KokiriSword&& items.DekuShield)); }
         },
         'Song of Time Chest': {
            access: "master",
            type: "chest",
            isAvailable: function () {
               return dungeons[1].found == true && items.Slingshot && items.Ocarina && items.SongofTime && ( OpenDeku == 1 || (items.KokiriSword&& items.DekuShield)); 
            }
         },
         'Basement Ceiling Skulltule': {
            type: "skulltula",
            access: "master",
            isAvailable:function () {
               return dungeons[1].found == true && items.Boomerang && items.Ocarina && items.SongofTime && (OpenDeku == 1 || (items.KokiriSword&& items.DekuShield));
            }
         },
         'Back Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && items.Bombs && (OpenDeku == 1 || (items.KokiriSword&& items.DekuShield)); }
         },
         'Basement Scrub': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
         'MQ Queen Gohma': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[1].found == true && (OpenDeku == 1 || (items.KokiriSword && items.DekuShield) || DungeonER) ;}
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   { name: "Dodongo's Cavern",
      x: "60.6%",
      y: "08.4%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "none",
      found: true,
      chestlist: {
         'Lobby Gossip': {
            type: "gossip",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Baby Dodongos Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                ); 
            }
         },
         'Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true && items.Hookshot && items.Scarecrow >= 2 &&
                (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ; 
            }
         },
         '1F Right Scrub Room': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Lobby Scrub': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Armos Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Top of the Stairs Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Behind Stairs Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hookshot >= 2
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2F Bomb Flower Platform': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2F before Elevator Switch': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && items.Slingshot &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2F Scrubs 1': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2F Scrubs 2': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'End of Bridge Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || (items.Hammer && items.Glove) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Behind Pushblocks Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Slingshot && items.Glove &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Chest Above King Dodongo': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Slingshot && items.Glove &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'King Dodongo': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Slingshot && items.Glove &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic && items.Glove) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Lobby Scrub 1': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Lobby Scrub 2': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove)
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Lobby Mud Wall Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'MQ Lobby Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Song of Time Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && items.Ocarina && items.SongofTime &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) 
                   && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Stair Master Scrub': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Teen Dodongo Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Baby Gohma Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         'Crate Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2F Lizalfos Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '2F Platform Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '1F Side Route Scrub': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) && 
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); 
            }
         },
         '1F Scrub Keese Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) 
                       || (items.Hammer && (items.Bow || (items.Magic && items.Dins) ) ) || items.Glove) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 );
            }
         },
         'Poe fight Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && (items.Bombs || (items.Bombchu && BombchuLogic) ); }
         },
         'Back Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true &&
                ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 ); }
         },
         'Chest Above Boss Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && (items.Bombs || (items.Bombchu && BombchuLogic) ); }
         },
         'MQ King Dodongo': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[2].found == true && (items.Bombs || (items.Bombchu && BombchuLogic) ); }
         }
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },{ name: "Jabu Jabu's Belly",
      x: "88.4%",
      y: "18.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "none",
      found: true,
      chestlist: {
         'Water Switch Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ); 
            }
         },
         'Basement Dive to Scrub': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && (items.Scale || (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ); 
            }
         },
         'StingRay Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ); 
            }
         },
         'Tentacle Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Bubble Pop Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Before Big Octo Skull 1': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && ( (items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                                      || (items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ); 
            }
         },
         'Before Big Octo Skull 2': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && ( (items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                                      || (items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ); 
            }
         },
         'Before Brainade Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Barinade': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Lobby Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) ) 
                   && (items.ZoraLetter || OpenFountain) &&
                   (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || DungeonER ) && ( ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                                      || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer) 
                                          &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) ); 
            }
         },
         'Lobby Cow Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Underwater Cow Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Elevator Room Lower Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Basement Cow Chest 1': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Basement Cow Chest 2': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Basement Open Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Basement Battle Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Song of Time Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && (items.Boomerang || (items.Ocarina && items.SongofTime) )
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Bubble Battle Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) 
               && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) 
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Invisible Enemies Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) 
               && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) 
               && items.Magic && items.Dins 
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Falling Like Like Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Elevator Room Upper Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Top Floor Standing Cow': {
            type: "cow",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Ocarina && items.EponasSong
                  && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Chest Near Boss Door': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Skulltula Near Boos Door': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'MQ Barinade': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[3].found == true && ( 
                  ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) 
                   && (items.ZoraLetter || OpenFountain) )
                   || DungeonER ) && items.Slingshot && items.Boomerang && (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   { name: "Bottom of the Well",
      x: "69.3%",
      y: "23.4%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Well",
      found: true,
      chestlist: {
         'Front Left Hidden Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Front Center Bombable': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
         'Center Large Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Underwater Left Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Coffin Key': {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Center Small Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Back Left Bombable': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
         'West Key Door Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey ) && items.Boomerang;
            }
         },
         'East Key Door Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey ) && items.Boomerang;
            }
         },
         'Right Bottom Hidden Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Locked Pits': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey );
            }
         },
         'Like Like Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey );
            }
         },
         'Like Like Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (smallkeys == "Remove" || items.WellKey ) && items.Boomerang;
            }
         },
         'Basement Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove );
            }
         },
         'Underwater Front Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Dead Hand': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         },
         ['Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Center Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && ( (items.Ocarina && items.ZeldasLullaby) 
                   || (items.Bombs || (items.Bombchu && BombchuLogic) ) );
            }
         },
         'MQ Deadhand Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Slingshot || items.Boomerang || items.KokiriSword || items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
         'Deadhand Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
         'Inner Room Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && ( ( (items.Ocarina && items.ZeldasLullaby) || (items.Bombchu && BombchuLogic) 
                     && (items.Slingshot || items.Boomerang) ) 
                   || items.Bombs );
            }
         },
         'MQ Basement Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.WellKey && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
         'Tombstone Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () { //?
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && ( (items.Ocarina && items.ZeldasLullaby) 
                   || (items.Bombs || (items.Bombchu && BombchuLogic) ) );
            }
         },
         'Coffin Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () { //?
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.WellKey;
            }
         },
         'Basement Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[4].found == true && ( (items.Ocarina && items.SongofStorms) || DungeonER)
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   { name: "Forest Temple",
      x: "78.5%",
      y: "39.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Forest",
      found: true,
      chestlist: {
         'Lobby Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( (items.Bow || items.Hookshot) 
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || ( (items.Slingshot || items.Boomerang) 
                     && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (items.Bombs || (items.Bombchu && BombchuLogic) ) );
            }
          },
         'Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         },
         'Torch Room Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( (items.Hookshot
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (items.Boomerang
                     && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         },
         '1st Floor Stalfos': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         },
         'Bubble Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( ( (items.Hookshot && items.Bow) || (items.Ocarina && items.SongofTime) )
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) );
            }
         },
         'Courtyard Island Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && (items.Bow || (items.Ocarina && items.SongofTime) || (items.ForestKey && items.HoverBoots) || (items.ForestKey >= 2 && items.Bow && items.Glove));
            },
         },
         'Courtyard Island Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( ( (items.Hookshot && items.Bow) || (items.Ocarina && items.SongofTime) ) // ???? hovers
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (items.Boomerang && items.Slingshot && items.Magic && items.Dins && items.ForestKey >= 5
                     && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) );
            }
         },
         'Well Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (DungeonER || (items.Hookshot && 
                      (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) )
               && ( ( ( (items.Hookshot && items.Bow) || (items.Ocarina && items.SongofTime) )
                     && (Age == "Ault" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                    ) || (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) );
            }
         },
         'Push Block Room Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Hallway Twist Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 2 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Floormaster Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.Hookshot && ((items.Bow && items.ForestKey >= 2 && items.Glove) || (items.HoverBoots && items.ForestKey));
            },
         },
         'West Courtyard Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (items.ForestKey >= 2 || (items.ForestKey && items.HoverBoots)) && items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest);
            },
         },
         'Red Poe Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         '2nd Floor Stalfos': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Glove;
            },
         },
         'Blue Poe Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && items.MasterSword && items.ForestKey >= 3 && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Checkerboard Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && 
                  (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) &&
                  items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Glove && (items.Bow || (items.Dins && items.Magic));
            }
         },
         'Near Boss Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'Basement Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Ocarina && (items.SariasSong || items.MinuetofForest) && items.Bow && items.Glove;
            },
         },
         'Phantom Ganon': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[5].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.ForestKey >= 5 || (items.ForestKey >= 3 && items.HoverBoots)) && items.BossForest && items.Hookshot && items.Bow && items.Glove;
            }
         },
         'MQ Lobby Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot; }
         },
         '1st Hallway Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot; }
         },
         'Wolfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Ocarina && items.SongofTime; }
         },
         'MQ Courtyard Island Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'Counrtyard Climb Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Bow; }
         },
         'MQ West Courtyard Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'Well Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && ((items.Glove && items.ForestKey >= 2 && items.IronBoots) || items.Bow); 
            }
         },
         'MQ Well Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && (items.Bow || items.IronBoots); }
         },
         'Above Well Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && ((items.Glove && items.ForestKey >= 2) || items.Bow); }
         },
         'East Courtyard Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && ((items.Glove && items.ForestKey >= 2 && (items.IronBoots || items.Scale >= 2)) || items.Bow); 
            }
         },
         'Gilded Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 1; }
         },
         'Redead Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 1; }
         },
         'Push Block Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot; }
         },
         'MQ Red Poe Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'MQ 2nd Floor Stalfos': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2; }
         },
         'MQ Blue Poe Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 2 && items.Bow; }
         },
         'MQ Checkerboard Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 5 && items.Bow; }
         },
         'MQ Chest Near Boss Door': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow; }
         },
         'MQ Phantom HorsePig': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[5].found == true && items.Hookshot && items.Glove && items.ForestKey >= 6 && items.Bow && items.BossForest; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   { name: "Fire Temple",
      x: "65.4%",
      y: "04.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Fire",
      found: true,
      chestlist: {
         'Chest Near Boss': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.MasterSword && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.BoleroofFire || ((items.HoverBoots || items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Hammer || items.Bow || (items.Magic && items.Dins))));
            }
         },
         'Before 1st Fire Dancer Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.Hammer && (items.Hookshot || items.HoverBoots || items.BoleroofFire)
            }
         },
         'Flare Dancer Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         },
         'Under Lobby Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer;
            }
         },
         'Song of Time Lava Room Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.Ocarina && items.SongofTime && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         },
         'Lava Room Open Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot));
            }
         },
         'Lava Room Bombable Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Maze Lower Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Maze Bombable Wall Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (items.Bombs || items.Bombchu) && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot))
            }
         },
         'Maze Side Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 3 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Eye Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.FireKey >= 4 && items.Bow) || items.FireKey >= 5) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         },
         'Maze Upper Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove;
            }
         },
         'Maze Bombable Pit': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         '1st Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         },
         '2nd Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina
            }
         },
         'Scarecrow Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 5 && items.Glove && items.Hookshot && items.Ocarina && items.Scarecrow >= 2;
            }
         },
         'Flame Maze Side Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove;
            }
         },
         'Song of Time Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.FireKey >= 7 || (items.FireKey >= 6 && items.HoverBoots)) && (items.BoleroofFire || items.HoverBoots || items.Hookshot) && items.Glove && items.Hammer;
            }
         },
         'Topmost Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.FireKey >= 6 && (items.BoleroofFire || items.HoverBoots || items.Hooksho) && items.Glove && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer);
            }
         },
         'Volvagia': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[6].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.BossFire && ((items.GoronTunic || items.Bottle) && (items.BoleroofFire || (items.HoverBoots || items.Hookshot)) && items.Hammer && (items.HoverBoots || (items.Glove && (items.Bombs || items.Hookshot) && items.Bombs)));
            }
         },
         'Like Like Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () { 
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )
                      );
            }
         },
         'MQ Chest Near Boss Door': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && (items.Magic && (items.Dins || (items.Bow && items.Fire)) &&
                       ((items.BoleroofFire && items.Ocarina) //Warp
                        || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || items.Dins) //:ink the Goron
                            )
                        )
                      ); //Boss Door access
            }
         },
         'MQ Flare Dancer Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >= 1 ; //Iron Knuckle Access
            }
         },
         'Rusted Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.FireKey >=1 && items.Hammer; //Switch
            }
         },
         'Lava Green Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) ; //Lava Room and Torch
            }
         },
         'MQ Lava Bombable Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && (items.Bombs || (items.Bombchu && BombchuLogic) ) //Bombwall
                        && items.Magic && (items.Dins || (items.Bow && items.Fire)) //Torch
                      ;
            }
         },
         'Lava Side Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            )) && items.Hammer; //Lava Room
            }
         },
         'Song of Time Climb Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                      && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      && items.SongofTime && items.Ocarina && items.Glove //Block of Time climb, strength for push block
                      ;
            }
         },
         'Bombable Shortcut Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 1 && (items.Bombs || (BombchuLogic && items.Bombchu)) //Keydoor, bombwall to rusted switch
                      ;
            }
         },
         'Maze Upper Gate': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                        && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      ;
            }
         },
         'Maze Lower Gate': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //No Hookshot needed
                       ;
            }
         },
         'MQ Maze Side Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                       && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire)) && items.FireKey >= 1 //Lava Room and Torch
                       && (items.Bombs || (BombchuLogic && items.Bombchu)) //Bombwall to rusted switch
                      ;
            }
         },
         'MQ Flame Maze Side Room': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      ;
            }
         },
         'Bombwall Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey >= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      && items.Bombs || (BombchuLogic && items.Bombchu) //Bombwall
                      ;
            }
         },
         'Flare Dancer Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.FireKey>= 2 && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                      ;
            }
         },
         'MQ Highest Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                        && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                        && items.FireKey >= 3 //Amother KeyDoor
                      ;
            }
         },
         'Highest Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ) )
                      && items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                        && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                        && items.FireKey >= 5;
            }
         },
         'MQ Volvagia': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[6].found == true && ( (items.BoleroofFire && items.Ocarina) //Warp
                         || ( (items.HoverBoots || items.Hookshot) //Cross Crater Bridge
                              && (items.Hammer //Summit Climb
                                  || items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove || items.Bow || (items.Magic && items.Dins)) //:ink the Goron
                            ))
                        && items.Magic && (items.Dins || (items.Bow && items.Fire)) //Boss Door access
                        && items.BossFire && items.Hammer && (items.HoverBoots //Boss Key, Hammer, and Hovers...
                                                             || (items.Hammer && items.Hookshot && items.Magic && (items.Dins || (items.Bow && items.Fire))//Lava Room and Torch
                                                             && items.Bow && items.Ocarina && items.SongofTime //2nd Key door, arrow torch, Block of Time
                                                             && items.FireKey >= 4)) ; //or Deep Fire
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   {
      name: "Ice Cavern",
      x: "93.5%",
      y: "18.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "none",
      found: true,
      chestlist: {
         'Above Silver Rupee Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         ['1st Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Alcove Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Alcove Freestanding']: {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Alcove Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         'Ice Block Puzzle Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && items.Hookshot && (items.Bombs || items.Scale) && items.ZoraLetter && items.Ocarina && items.ZeldasLullaby;
            },
         },
         ['White Wolfos']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         ['Song from Sheik']: {
            type: "song",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Alcove Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Red Ice Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots) && items.SongofTime;
            }
         },
         'Pilar Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Frozen Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Scarecrow Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Crystal Switch Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'Stalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
         'MQ Sheik Song': {
            type: "song",
            access: "master",
            isAvailable: function () {
               return dungeons[7].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) && (items.ZoraLetter || OpenFountain) && ((items.ZeldasLullaby && items.Ocarina) || items.HoverBoots);
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Water Temple",
      x: "36.1%",
      y: "91.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Water",
      found: true,
      chestlist: {
         'Water Jet Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Spike Ball Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2);
            }
         },
         'Torches to Shellblades': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (items.Bow || (items.Dins && items.Magic)) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Cracked Wall': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) && (items.Bombs || (items.Bombchu && BombchuLogic))) || ((items.Scale >= 2 && items.Hookshot >= 2) && items.Ocarina && items.ZeldasLullaby);
            }
         },
         'Central Bow Target': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Bow && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot >= 2);
            }
         },
         'Basement Key Door to Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby) && items.WaterKey && items.Bombs;
            }
         },
         'Boulder Hall Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.WaterKey && items.IronBoots && items.Hookshot && ((items.Bombs && items.Glove) || items.HoverBoots || items.Hookshot >= 2);
            }
         },
         'Boulder Hall Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && (((items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove) || items.HoverBoots) && (items.Hookshot >= 2 || items.HoverBoots);
            }
         },
         'Top of Central Pillar Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.IronBoots && (items.WaterKey && items.Ocarina && items.ZeldasLullaby) || (items.Bow && items.Ocarina && items.ZeldasLullaby) && items.Hookshot >= 2;
            }
         },
         'Central Pillar Basement': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.WaterKey || items.Bow) && items.IronBoots && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Dragon Mouth Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && (((items.SongofTime && items.Bow && items.WaterKey >= 2)) || (items.ZeldasLullaby && items.Glove));
            }
         },
         'Platform Room Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.WaterKey && items.Hookshot >= 2;
            }
         },
         'Dark Link': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2));
            }
         },
         'River Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && items.SongofTime && items.IronBoots && items.Hookshot;
            }
         },
         'River Eye Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.WaterKey >= 2 && ((items.IronBoots && items.Hookshot) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.Ocarina && items.SongofTime && items.Bow;
            }
         },
         'Morpha': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[8].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((items.IronBoots && items.Hookshot >= 2) || (items.Scale >= 2 && items.Hookshot >= 2)) && items.BossWater;
            }
         },
         'Stalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         },
         'Open Wall Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || 
                       (items.Scale >= 2 && items. Hookshot >= 2 
                        && items.Ocarina && items.ZeldasLullaby) //Underwater or Gold Scale & ZL
                       );
            }
         },
         'Scarecrow Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && items.IronBoots && items.Hookshot >= 1 && items.Ocarina && items.Scarecrow >=2 && items.Magic && items.Bow && items.Fire;
            }
         },
         'Blue Switch Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && (items.IronBoots || items.Scale >= 2) && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Lizalfos Hallway Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && items.Dins //Torches to enter room
                       ;
            }
         },
         'Lizalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2))
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches
                       ;
            }
         },
         'MQ Central Pillar Basement': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && (items.IronBoots && items.Hookshot >= 1 //Temple Access
                       && items.Magic && ( (items.Bow && items.Fire) || (items.Dins && items.Ocarina && items.SongofTime) ) //Torches at the top of Pillar
                       );
            }
         },
         'Dins Ontop Water Jet': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.Magic && items.Dins && items.WaterKey >= 1 //Jet room access
                       ;
            }
         },
         'Basement Crate Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && (items.Hookshot >= 2 || items.HoverBoots) //Get over the spikes
                       ;
            }
         },
         'MQ Morpha': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.BossWater && items.Hookshot >= 2 //Boos door access
                       ;
            }
         },
         'MQ River Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2)) //Temple Access
                       && items.WaterKey >= 1 //Fight Stalfos and Dark Link
                       ;
            }
         },
         'Dodongo Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[8].found == true && ((items.IronBoots && items.Hookshot >= 1) || (items.Scale >= 2 && items. Hookshot >= 2 && items.Ocarina && items.ZeldasLullaby)) //Temple Access
                       && items.Magic && ((items.Bow && items.Fire) || items.Dins) //Torches to enter room
                       ;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   {
      name: "Gerudo Training Ground",
      x: "20.7%",
      y: "16.4%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "GTG",
      found: true,
      chestlist: {
         'Lobby Right Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         },
         'Lobby Left Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Bow;
            }
         },
         'Stalfos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Wolfos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Like Like Open Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Room 1st Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Room 2nd Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Like Like Invisible Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Glove >= 2;
            }
         },
         'Cyclops Statue Eyes': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow && (items.SongofTime || items.HoverBoots || items.Hookshot >= 2 || (items.Hookshot));
            }
         },
         'Cyclops Room Top Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Bow;
            }
         },
         'Fire Enemies Clear': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Fire Trap Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot;
            }
         },
         'Maze Right Freestanding': {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Maze Right Central Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Maze Right Side Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && ((items.Ocarina && items.SongofTime) || items.GTGKey >= 2);
            }
         },
         'Underwater Silver Rupees': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && items.Hookshot && items.Ocarina && items.SongofTime && items.IronBoots;
            }
         },
         'Beamos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen()) && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Left 1 Key Hidden Ceiling': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Left 2 Key Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 2 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Left 4 Key Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 4 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Left 5 Key Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 5 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'Maze Center Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[9].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.GTGKey >= 7 && (items.EponasSong || items.Hookshot >= 2 || isFortressOpen());
            }
         },
         'MQ Lobby Left': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'MQ Lobby Right': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'White Iron Knuckle': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Skulltula and Stalfos': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Silver Block Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Crystal Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Black Iron Knuckle': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'MQ Fire Trap Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'MQ Underwater Silver Rupees': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'MQ Maze Right Chest x2': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Dinosaur Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Maze Left Hidden Ceiling': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Maze Left Unlocked Chests x2': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership; }
         },
         'Maze Left Locked Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership && items.GTGKey >= 1; }
         },
         'MQ Maze Center Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[9].found == true && items.Membership && items.Hammer && items.GTGKey >= 3; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   {
      name: "Spirit Temple",
      x: "02.5%",
      y: "17.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Spirit",
      found: true,
      chestlist: {
         ['Child Switch Room']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Child 1st Floor Torches']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot || (items.Bombchu && BombchuLogic));
            }
         },
         'Child Torch Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit && (items.Slingshot || items.Boomerang);
            },
         },
         'Child Climb Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && ((items.Ocarina && items.RequiemofSpirit && (items.Boomerang || items.Slingshot)) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2 && (items.Hookshot || items.Bow)));
            },
         },
         ['Child Lizalfos East Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         ['Child Lizalfos North Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Hookshot || items.Bow || (items.Bombs || (items.Bombchu && BombchuLogic)))));
            }
         },
         ['Large Torch Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey &&
                  (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))
                     )
                     || (((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit) &&
                        items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Magic && (items.Dins || (items.Fire && items.Bow)))));
            }
         },
         ['Sun Block Room Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.Ocarina && items.RequiemofSpirit && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Dins || (items.Fire && items.Bow)) && items.Magic));
            }
         },
         'Before Child IronKnuckle Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (items.Ocarina && items.RequiemofSpirit && items.Bombs) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2);
            },
         },
         ['Colossus Right Hand Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (items.RequiemofSpirit && items.SpiritKey >= 2 && items.Ocarina && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.Bombchu && BombchuLogic))) || (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.MasterSword && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.SpiritKey >= 2);
            }
         },
         ['Wolfos Lullaby Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && items.Hookshot && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Song of Time Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || (items.Ocarina && items.RequiemofSpirit)) && items.Glove >= 2;
            },
         },
         ['Silver Rupee Halfpipe']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Floormaster Left Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Floormaster Right Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && ((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic));
            }
         },
         ['Top Right after Lullaby']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby && (items.HoverBoots || items.Hookshot);
            }
         },
         ['Statue\'s Hand after Lullaby']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Top Left Scarecrow Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && items.SpiritKey && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2) && items.Lens && items.Magic) || items.RequiemofSpirit) && items.Glove >= 2) && ((items.Ocarina && items.Hookshot) || items.Hookshot >= 2);
            },
         },
         ['Four Armos Side Room']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic))) && items.MirrorShield && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         ['Left Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Right Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Colossus Left Hand Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 2 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && (items.Bombs || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Fire Trap Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.ZeldasLullaby && items.Ocarina && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Adult Lizalfos Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && items.Glove >= 2 && items.MirrorShield && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && ((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2 || items.RequiemofSpirit);
            }
         },
         ['Twinrova']: {
            type: "bss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[10].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.SpiritKey >= 3 && (((((items.EponasSong && items.HoverBoots) || items.Hookshot >= 2)) || items.RequiemofSpirit) && items.Glove >= 2 && (items.Bow || items.Hookshot || (items.Bombchu && BombchuLogic)) && items.MirrorShield && items.Hookshot && items.BossSpirit);
            }
         },
         'Lobby Bottom Left': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit) //Child Temple access
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2); // Adult Temple access
            }
         },
         'Lobby Top Left': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit 
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Slingshot) //Boulder and eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Bow); //Boulder and eye switch
            }
         },
         'Lobby Top Right': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit 
               && items.Slingshot) //Eye switch
               || ((items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bow); //Eye Switch
            }
         },
         'Slug Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit && items.Glove >= 2 && items.Hammer;
            }
         },
         'Anubis Free Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit;
            }
         },
         'Anubis Fight Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.Slingshot && items.Magic && items.Dins; //Kill Anubis and long way around
            }
         },
         'Dodongo Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 1) //Child climb
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2; //Adult statue room access
            }
         },
         'Statue Room Eye Switch': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2) //Child Statue Room
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow;
            }
         },
         'Shortcut Hallway Eye Switch': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 
               && items.Magic && items.Dins && (items.Slingshot || items.Bow) ) //Child opens shortcut hallway
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && ((items.Slingshot && items.Ocarina && items.RequiemofSpirit) || items.Bow) && items.Magic && (items.Dins || (items.Bow && items.Fire)); //Adult opens
            }
         },
         'MQ Sunblock Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         },
         'Sunblock Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 2 && items.SongofTime && items.Boomerang) //Blue switch on statue hand
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 1; //As Asult
            }
         },
         'MQ Colossus Right Hand': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && items.RequiemofSpirit && items.Bombchu && items.SpiritKey >= 3 && items.SongofTime)
               || (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2)
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.SongofTime && items.SpiritKey >= 2; //As Adult
            }
         },
         'Dodongo Room Adult Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         },
         'Statue Room Lower Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         },
         'Statue Room Upper Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Ocarina && items.ZeldasLullaby; 
            }
         },
         'Leever Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         },
         'Leever Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire; //Stalfos Room access
            }
         },
         'Child Songs Halfpipe': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         },
         'Songs Halfpipe Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire
               && items.Ocarina && items.ZeldasLullaby && items.EponasSong && items.SunsSong && items.SongofStorms && items.SongofTime; 
            }
         },
         'Lobby Bottom Right': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.Bow && items.Magic && items.Fire && items.Hammer; 
            }
         },
         'Beamos Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 && items.Bombs || items.Bombchu; 
            }
         },
         'Dinalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime; //SOT puzzle in Beamos Room
            }
         },
         'Gibdo Room Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1 
               && items.Ocarina && items.SongofTime && items.MirrorShield;
            }
         },
         'MQ Colossus Left Hand': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 1;
            }
         },
         'Highest Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 2;
            }
         },
         'Iron Knuckle Skulltula x2': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 && items.SpiritKey >= 3;
            }
         },
         'MQ TwinRova': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[10].found == true && (items.Ocarina && (items.RequiemofSpirit || (items.EponasSong && items.HoverBoots)) || items.Hookshot >= 2) // Adult Temple access
               && items.Bombchu && items.Hookshot >= 2 && items.Glove >= 2 
               && items.MirrorShield && items.SpiritKey >= 2 && items.BossSpirit;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   {
      name: "Shadow Temple",
      x: "79.7%",
      y: "19.5%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Shadow",
      found: true,
      chestlist: {
         'Keese and Redead Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         },
         'Deadhand Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Magic && items.Dins && (items.HoverBoots || items.Hookshot);
            }
         },
         '1st Gibdos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         },
         '1st Silver Rupees': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots;
            }
         },
         'Silver Rupee Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         },
         'Like Like Visible Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Like Like Invisible Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Crushing Spikes Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs;
            },
         },
         'Crushing Spikes Lower Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Crushing Spikes Upper Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         },
         'Crushing Spikes Switch Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Glove;
            }
         },
         'Readeads and Silver Rupees': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Single Skull Pot Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey >= 2 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot;
            },
         },
         'Skull Pot Bombing': {
            type: "freestanding",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 2 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Readeads and Hint': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         '2nd Gibdos Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Gibdos Hidden Chest': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 3 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot;
            }
         },
         'Before Boat Ride Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey >= 3 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove;
            },
         },
         'Floormaster Room': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Triple Skull Pot Skulltula': {
            type: "skulltula",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && items.ShadowKey >= 4 && items.Ocarina && items.NocturneofShadow && items.Dins && items.Magic && items.Lens && items.HoverBoots && items.Bombs && items.Hookshot && items.Glove && items.ZeldasLullaby;
            },
         },
         'Burnable Spike Wall Chest x2': {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 4 && items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby;
            }
         },
         'Bongo Bongo': {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[11].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && items.ShadowKey >= 5 && items.BossShadow && (items.NocturneofShadow && items.Magic && items.Dins && items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Hookshot && items.Glove && items.Ocarina && items.ZeldasLullaby && (items.Bow || items.Scarecrow >= 2));
            }
         },
         '1st Redead Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) //Temple access
               && items.Bombs && items.ShadowKey >= 1; //Bombwall + keydoor
            }
         },
         '1st Deadhand Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots)
               && items.Bombs && items.ShadowKey >= 1
               && items.SongofTime && items.Bow; //Block of time + eye switch
            }
         },
         'MQ 1st Gibdos Room': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Skulltulas and Silver Ruppees': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'Fall to Dock Invisible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire; //Deeper access
            }
         },
         'MQ Like Like Visible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         },
         'MQ Like Like Invisible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1; //Deeper access
            }
         },
         'Beamos Silver Rupee Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot >= 2; //Longshot requireq for a rupee
            }
         },
         'MQ Crushing Spikes Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1 && items.Hookshot;
            }
         },
         'MQ Crushing Spikes Lower Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'MQ Crushing Spikes Upper Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'MQ Crushing Spikes Switch Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 1;
            }
         },
         'MQ Redeads and Silver Rupees': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2;
            }
         },
         'Stalfos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 2 && items.Hookshot >= 2;
            }
         },
         'MQ Redeads invisible Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         '2nd Redead Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'MQ 2nd Gibdos Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'MQ Gibdos Hidden Chest': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },'2nd Gibdos Room Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 3 && items.Hookshot >= 2;
            }
         },
         'Dark River Skulltula': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         },
         'MQ Skull Pot Freestanding': {
            type: "freestanding",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby
               && items.SongofTime;
            }
         },
         'MQ Burnable Spike Walls Chest x2 ': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 5 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         },
         '2nd Deadhand': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.SongofTime;
            }
         },
         'Skulltula Near Boss Door': {
            type: "skulltula",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby;
            }
         },
         'MQ Bongo Bongo': {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[11].found == true && items.Ocarina && items.NocturneofShadow && items.Magic && items.Dins && (items.Hookshot || items.HoverBoots) && items.Bow && items.Fire
               && items.Bombs && items.ShadowKey >= 4 && items.Hookshot >= 2 && items.ZeldasLullaby && items.BossShadow;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   {
      name: "Ganon's Tower",
      x: "44.0%",
      y: "14.0%",
      type: "dungeon",
      mixedtype: "default",
      keytype: "Castle",
      found: true,
      chestlist: {
         ['Forest Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Forest Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && items.Bow && items.Light && (items.Fire || (items.Hookshot && items.Dins));
            }
         },
         ['Ice Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Ice Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen();
            }
         },
         ['Ice Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Bottle && items.Hammer && items.Magic && items.Bow && items.Light;
            }
         },
         ['Shadow Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) 
               && items.MasterSword && isBridgeOpen() && (
                  (items.Magic && items.Bow && items.Fire) || 
                  items.Hookshot >= 1 || 
                  items.HoverBoots || 
                  (items.Ocarina >= 1 && items.SongofTime));
            }
         },
         ['Shadow Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) 
               && items.MasterSword && isBridgeOpen() && (
                  (items.Magic && items.Bow && items.Fire) || (
                     (items.Hookshot >= 1 || items.HoverBoots) && 
                     items.Magic && items.Dins) || items.Hookshot >= 2);
            }
         },
         ['Shadow Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && items.Bow && items.Light && items.Hammer && (items.Fire || items.Hookshot >= 2) && (items.Lens || (items.HoverBoots && items.Hookshot >= 2));
            }
         },
         ['Fire Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Light && items.Hookshot >= 2;
            }
         },
         ['Spirit Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu || items.Bow);
            }
         },
         ['Spirit Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Hookshot && (items.Bombchu || items.Bow);
            }
         },
         ['Spirit Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Magic && items.Bow && items.Light && items.MirrorShield && items.Bombs && items.Hookshot >= 1;
            }
         },
         ['Light Chest 1']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 2']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 3']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 4']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 5']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Chest 6']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Invisible Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3;
            }
         },
         ['Light Lullaby Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby && items.CastleKey;
            }
         },
         ['Light Trial Clear']: {
            type: "trial",
            access: "mixed",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen() && items.Glove >= 3 && items.Magic && items.Bow && items.Hookshot && items.Light && items.CastleKey >= 2;
            }
         },
         ['Boss Key Chest']: {
            type: "chest",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials);
            }
         },
         ['GanonDorf']: {
            type: "boss",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         },
         'Lower Invisible Wall Scrubs x4': {
            type: "scrub",
            access: "vanilla",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            }
         },
         'MQ Check 1 ': {
            type: "chest",
            access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         },
         'MQ Scrub 1 ': {
            type: "scrub",
            access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && isBridgeOpen();
            },
         },
         ['MQ GanonDorf']: {
            type: "boss",
            access: "master",
            isAvailable: function () {
               return dungeons[12].found == true && (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.MasterSword && isBridgeOpen() && generalCanGetChest(this.trials) && items.BossCastle && items.Bow && items.Magic && items.Light;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      },
   },
   {
      name: "The Market",
      x: "50.5%",
      y: "20.2%",
      type: "overworld",
      found: true,
      chestlist: {
         'Topdown to Drawbridge': {
          x: "52.5%",
          y: "27.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
         },
         'Guard/Ghostbuster House': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[13].found == true ; }
         },
         'Pottery Crate Skulltula': {
            type: "skulltula", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         ['10 Big Poes']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () { //Adult only indoor
               return dungeons[13].found == true
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.BigPoe >= 1;
            }
         },
         'Topdown to Market': {
          x: "50.5%",
          y: "27.0%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
       },
       'Market to Topdown': {
          x: "52.0%",
          y: "23.4%",
          type: "entrance",
          access: "entrance",
          isAvailable: function () {
               return true; }
         },
         'Treasure game': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         ['Treasure Chest Mini Game']: {
            type: "chest", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true && items.Magic && items.Lens
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Bombchu Shop': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Bombchu Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         ['Return Richard']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         },
         'Back Alley House': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         },
         'Slingshot Shooting': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         ['Slingshot Mini Game']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Bowling': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         ['Bombchu Bowling 1']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic));}
         },
         ['Bombchu Bowling 2']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic));
            }
         },
         'Market to Castle': {
             x: "52.5%",
            y: "19.0%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
               return true; }
         },
         'Happy Mask Shop': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Market to Temple': {
            x: "55.0%",
            y: "22.2%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
               return true; }
         },
         'Potion Shop': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ); 
            }
         },
         'Potion Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Bazar': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return dungeons[13].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Bazaar Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[13].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Temple of Time",
      x: "55.5%",
      y: "18.2%",
      type: "overworld",
      found: true,
      chestlist: {
         'Temple to Market': {
            x: "56.0%",
            y: "18.6%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return dungeons[14].found == true; }
          },
         'Temple Gossip 1': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         },
         'Temple Gossip 2': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         },
         'Temple Gossip 3': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         },
         'Temple Gossip 4': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[14].found == true;
            }
         },
         'Temple of Time': {
            type: "alldoor", 
            access: "door",
            isAvailable: function () {
               return dungeons[14].found == true; }
         },
         'Prelude Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.PreludeofLight; }
         },
         ['Song for Forest Medallion']: {
            type: "song", 
            access: "alldoor",
            isAvailable: function () {
               return dungeons[14].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.ForestMedallion;
            }
         },
         ['Zelda\'s Secret Weapon']: {
            type: "NPC", 
            access: "alldoor",
            isAvailable: function () {
               return dungeons[14].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && ( (items.ShadowMedallion && items.SpiritMedallion && castlelogic !== "LACSStones" 
                          && castlelogic !== "LACSMeds" && castlelogic !== "LACSAD")
                        || (items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire 
                            && castlelogic == "LACSStones") 
                        || (items.ForestMedallion && items.FireMedallion && items.WaterMedallion && items.LightMedallion 
                            && items.ShadowMedallion && items.SpiritMedallion && castlelogic == "LACSMeds") 
                        || (items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire && items.ForestMedallion && items.FireMedallion && items.WaterMedallion && items.LightMedallion 
                            && items.ShadowMedallion && items.SpiritMedallion && castlelogic == "LACSAD") 
                       );
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Hyrule Castle",
      x: "49.0%",
      y: "14.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Castle to Market': {
            x: "52.5%",
            y: "16.0%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Tree to Castle Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         },
         'Malon\s Weird Egg': {
            type: "egg", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         },
         'Above Malon': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         },
         'Din\'s Fairy Fountain': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && (items.Bombs || (items.Bombchu && BombchuLogic));
               }
         },
         'Dins Great Fairy': {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[15].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Ocarina >= 1 && items.ZeldasLullaby;
            }
         },
         'Castle Moat Stone': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  );
            }
         },
         'Castle Moat Storms Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Ocarina >= 1 && items.SongofStorms;
               }
         },
         'Moat Storms Grotto Skull': {
            type: "skulltula", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[15].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Ocarina >= 1 && items.SongofStorms && (items.Bombs || items.Boomerang);
            }
         },
         'Storms Grotto Gossip': {
            type: "gossip",
            access: "grotto",
            isAvailable: function () {
               return dungeons[15].found == true &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Ocarina >= 1 && items.SongofStorms && items.Bombs;
            }
         },
         'Song from Impa': {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[15].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                  ) && items.Mask >= 1;
            }
         },
         'Gold Gauntlets Doorway': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[15].found == true &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                     ) && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby ;
               }
         },
         'Gold Gauntlets Fairy' : {
            x: "55.5%",
            y: "13.5%",
            type: "NPC", 
            access: "simple",
               isAvailable: function () {
                  return dungeons[15].found == true &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) 
                     ) && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby ;
               }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Kakariko Village",
      x: "65.4%",
      y: "22.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Village to Field': {
            x: "62.0%",
            y: "24.6%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.ForestMedallion && items.FireMedallion && items.WaterMedallion ;
            }
         },
         'Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Redead Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[16].found == true &&
                  ( (items.Bombs || (items.Bombchu && BombchuLogic)) 
                   || (items.Hammer && 
                       (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         ['Redead Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[16].found == true &&
                  ( (items.Bombs || (items.Bombchu && BombchuLogic)) 
                   || (items.Hammer && 
                       (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
                  }
         },
         'Tower House': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true; }
         },
         'Behind Shop Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Tower Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Kakariko Bazar': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true; }
         },
         'Bazar Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true; }
         },
         'Village to Trail': {
            x: "64.2%",
            y: "22.0%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Potion Shop front': {
            type: "alldoor", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         ['Man on Roof']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true ;
            }
         },
         'Potion Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Potion Shop back': {
            type: "alldoor", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Granny\'s Shop': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         'Kakariko Open Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         ['Village Open Grotto']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[16].found == true ;
            }
         },
         'Windmill': {
            type: "alldoor", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         ['Windmill Song']: {
            type: "song", 
            access: "alldoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina;
            }
         },
         ['Windmill Freestanding']: {
            type: "freestanding", 
            access: "alldoor",
            isAvailable: function () {
               return dungeons[16].found == true &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                   || (items.Boomerang && 
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Village to Graveyard': {
            x: "70.0%",
            y: "27.0%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Archery Foundation Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Archery': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
               }
         },
         ['Bow Mini Game']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Bow;
               }
         },
         ['Anju\'s Chickens']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  );
            }
         },
         ['Anju\'s Adult item']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[16].found == true) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Impa\'s House back': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         ['Impa\'s House Freestanding']: {
            type: "freestanding", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true}
         },
         ['Impa\'s House Cow Milk']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  items.Ocarina && items.EponasSong ;
            }
         },
         'Impa’s Roof Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true
               && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Hookshot;
            }
         },
         'Impa\'s House front': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         'Skull House Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[16].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Skulltula House': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true ;
               }
         },
         ['Skulltula House 10']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 10 ;
            }
         },
         ['Skulltula House 20']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 20 ;
            }
         },
         ['Skulltula House 30']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 30 ;
            }
         },
         ['Skulltula House 40']: {
            type: "NPC", 
            access: "simple",
            type: "indoor",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 40 ;
            }
         },
         ['Skulltula House 50']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[16].found == true && items.Skulltula >= 50 ;
            }
         },
         'Bottom of The Well': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return dungeons[16].found == true
                 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                  && items.Ocarina && items.SongofStorms;
               }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Goron City",
      x: "70.0%",
      y: "06.3%",
      type: "overworld",
      found: true,
      chestlist: {
         'City to Trail': {
            x: "65.0%",
            y: "10.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Ruby Pedestal Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         ['Little Rolling Goron']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove || items.Bombs || (items.Bombchu && BombchuLogic) || items.Bow) ;
            }
         },
         ['Medigoron']: {
            type: "knife", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && items.Wallet >= 2 &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove || items.Hammer || items.Bombs || (items.Bombchu && BombchuLogic) ) ;
            }
         },
         'Medigoron Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Glove || items.Hammer || items.Bombs || (items.Bombchu && BombchuLogic) ) ;
            }
         },
         ['Left Boulder Maze Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove >= 2 || items.Hammer || 
                   (items.HoverBoots && (items.Bombs || (items.Bombchu && BombchuLogic) ) ) 
                  ) ;
            }
         },
         ['Center Boulder Maze Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Bombs || (items.Bombchu && BombchuLogic) || 
                  ((items.Hammer || items.Glove >= 2) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )) 
                   );
            }
         },
         'Maze Crate Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) ) ;
            }
         },
         'Maze Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Bombs || (items.Bombchu && BombchuLogic) || 
                  ((items.Hammer || items.Glove >= 2) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )) 
                   );
            }
         },
         ['Right Boulder Maze Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true
               && (items.Bombs || (items.Bombchu && BombchuLogic) || 
                  ((items.Hammer || items.Glove >= 2) && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )) 
                   );
            }
         },
         'Lava Cross Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     ( (items.Ocarina && items.SongofTime) || 
                      (items.Hookshot && (items.GoronTunic || items.Nayrus || items.Wallet >= 2) ) 
                     ) ;
               }
         },
         'Lava Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     ( (items.Ocarina && items.SongofTime) || 
                      (items.Hookshot && (items.GoronTunic || items.Nayrus || items.Wallet >= 2) ) 
                     ) ;
               }
         },
         'City to Woods': {
            x: "69.0%",
            y: "18.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Goron Shop': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[17].found == true &&
                  ( items.Bombs || (items.Bombchu && BombchuLogic) 
                   || (items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                   || ( (items.Glove || (items.Ocarina && items.ZeldasLullaby) || (items.Dins && items.Magic) )
                       && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Goron Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[17].found == true &&
                  ( items.Bombs || (items.Bombchu && BombchuLogic) 
                   || (items.Bow && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                   || ( (items.Glove || (items.Ocarina && items.ZeldasLullaby) || (items.Dins && items.Magic) )
                       && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         ['Big Rolling Goron']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) ;
            }
         },
         ['Spinning Pot Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && (items.Glove || items.Bombs ) && ( (items.Ocarina && items.ZeldasLullaby) || (items.Dins && items.Magic) );
            }
         },
         ['Darunia\'s Dance']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[17].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Ocarina && items.SariasSong && items.ZeldasLullaby;
            }
         },
         'City to Crater': {
            x: "69.0%",
            y: "09.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Lost Woods",
      x: "75.3%",
      y: "47.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Bridge to Forest': {
            x: "72.7%",
            y: "50.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Fairy Ocarina': {
            type: "ocarina",
            access: "OWER",
            isAvailable: function () {
               return dungeons[18].found == true; }
         },
         'Bridge to Field': {
            x: "69.0%",
            y: "48.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         ['Deku Sale $40']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Bridge Stone': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true ;
            }
         },
         'Bridge Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Bottle ;
            }
         },
         ['Skull Kid']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Ocarina && items.SariasSong ;
            }
         },
         'Woods to Forest': {
            x: "78.7%",
            y: "52.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         ['Slingshot Target']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Slingshot ;
            }
         },
         ['Ocarina Memory Game']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Ocarina ;
            }
         },
         'Bomb Grotto by City': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         ['City Grotto Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'City Grotto Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Woods to City': {
            x: "80.8%",
            y: "49.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Woods to River': {
            x: "82.8%",
            y: "51.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return dungeons[18].found == true
                && ( (items.IronBoots
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                   ) || items.Scale) ; }
         },
         'Theatre Scrub x2': {
            type: "scrub", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            },
         },
         'Theatre Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
               && items.Bottle ;
            },
         },
         'Bean Ride Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[18].found == true
               && (items.Hookshot 
                   || (items.Bean && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   ) ) ;
            },
         },
         'Deku Theatre Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
               }
         },
         ['Deku Theater Skull Mask']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Mask >= 6;
            }
         },
         ['Deku Theater Mask of Truth']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
               && items.Mask >= 12;
            }
         },
         'Bomb Grotto by Meadow': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         ['Deku Sale Grotto $40']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         '2nd Scrub in Grotto': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[18].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Woods to Meadow': {
            x: "82.8%",
            y: "46.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Sacred Forest Meadow",
      x: "80.3%",
      y: "47.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Meadow to Woods': {
            x: "80.0%",
            y: "46.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Wolfos Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[19].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );}
         },
         ['Wolfos Grotto']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[19].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Maze Gossip 1': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true;
            }
         },
         'Meadow Maze Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true && items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            },
         },
         'Meadow Open Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[19].found == true;
               }
         },
         'Maze Gossip 2': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true;
            }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Minuet Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.MinuetofForest; }
         },
         'Meadow Storms Grotto': {
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return dungeons[19].found == true && 
                     items.Ocarina && items.SongofStorms ;
               }
         },
         'Storms Grotto by Temple': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[19].found == true && 
                     items.Ocarina && items.SongofStorms ;
            }
         },
         ['Song from Saria']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true && items.Mask >= 2 &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Temple Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[19].found == true;
            }
         },
         'Forest Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return dungeons[19].found == true && items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
               }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Zora's River",
      x: "78.7%",
      y: "29.5%",
      type: "overworld",
      found: true,
      chestlist: {
         'River to Field': {
            x: "70.0%",
            y: "35.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Tree by Entrance Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Song of Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  items.Ocarina && items.SongofStorms &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Storms Grotto Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  items.Ocarina && items.SongofStorms &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Bean Salesman': {
            type: "bean", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Frogs in the Rain': {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  items.Ocarina && items.SongofStorms &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Frogs Mini Game': {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  items.Ocarina && items.SongofStorms && items.SunsSong && items.SariasSong && items.EponasSong && items.ZeldasLullaby && items.SongofTime &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Adult Skulltula by Grotto': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && items.Hookshot &&
                  (Age == "Adut" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Open Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  ); 
            }
         },
         'River Open Grotto': {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Grotto Gossip': {
            type: "gossip", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Boulder Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[20].found == true &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Above Frogs Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  ); 
            }
         },
         'Freestanding Lower Ledge': {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  ); 
            }
         },
         'Adult above Bridge Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && items.Hookshot &&
                  (Age == "Adut" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Child Ladder Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap )
               && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Freestanding Upper Ledge': {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true && 
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  ); 
            }
         },
         'River to Woods': {
            x: "87.8%",
            y: "33.3%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Waterfall Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[20].found == true &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'River to Domain': {
            x: "87.0%",
            y: "28.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Zora's Domain",
      x: "92.9%",
      y: "34.5%",
      type: "overworld",
      found: true,
      chestlist: {
         'Domain to River': {
            x: "90.0%",
            y: "29.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Zora Shop': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[21].found == true &&
                  ( ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap )
                       && items.Bottle && 
                       (items.Wallet >= 3 || isBridgeOpen() || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         },
         'Zora Sale': {
            type: "shop", 
            access: "simple",
            isAvailable: function () {
               return dungeons[21].found == true &&
                  ( ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap )
                       && items.Bottle && 
                       (items.Wallet >= 3 || isBridgeOpen() || OpenFountain 
                        || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership )) ) 
                       )
                   );
            }
         },
         'Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return dungeons[21].found == true &&
                  items.Ocarina && items.SongofStorms &&
                  ( ( (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Royal Zora Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && 
                  ( ( (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         ['Diving Mini Game']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Torch Run']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale || OWERmap ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Domain to Lake': {
            x: "92.9%",
            y: "32.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Frozen Waterfall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true && items.Hookshot &&
                  (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Thaw King Zora']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[21].found == true &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) || OWERmap ) //Can get into domain
                        && ( 
                              ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Cam open fountain as child
                                 && (OpenFountain || items.ZoraLetter) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale )
                              ) 
                              || 
                              (items.Bottle && (items.Wallet >= 3 || isBridgeOpen() || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership )) ) )
                           )
                     )
                  );
            }
         },
         'Domain to Fountain': {
            x: "94.9%",
            y: "22.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Zora's Fountain",
      x: "92.9%",
      y: "28.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Fountain to Domain': {
            type: "entrance", 
            access: "entrance",
            x: "92.5%",
            y: "21.0%",
             isAvailable: function () {
                  return true; }
         },
         'West Fountain Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                  ( OWERmap
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         },
         'Lord Jabu Jabu\'s Belly': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return dungeons[22].found == true &&
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get child
                        && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale);
               }
         },
         'Stand on the Log Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get child
                        && items.Boomerang && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale);
               }
         },
         'Tree by Great Fairy Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get child
                        && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale);
               }
         },
         'Great Fairy Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true &&
                  ( OWERmap
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         },
         'Bombable Doorway': {
            type: "simple", 
            access: "door",
               isAvailable: function () {
                  return dungeons[22].found == true &&
                  ( (OWERmap && (
                             ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) ) ) ||
                             ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer ) ) ) )
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
               }
         },
         ['Farore\'s Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return dungeons[22].found == true && items.Ocarina && items.ZeldasLullaby &&
                  ( (OWERmap && (
                             ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) ) ) ||
                             ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                              && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Hammer ) ) ) )
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                     && items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) )
                   || ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                       && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) )
                       && 
                       ((items.Bottle && items.Wallet >= 3) || (items.Bottle && isBridgeOpen()) || OpenFountain || (dungeons[9].mixedtype == "master" && (DungeonER || items.Membership) )
                        || ( (OpenDoor == true || (items.Ocarina && items.SongofTime) )
                            && items.ZoraLetter && 
                            (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale) ) )
                       )
                   ) ;
            }
         },
         'Silver Rock Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true && items.Glove >= 2 &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
            }
         },
         ['Iceberg Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true && 
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
            }
         },
         ['Under Icy Waters Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[22].found == true && items.IronBoots &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
            }
         },
         'Ice Cavern': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return dungeons[22].found == true &&
                  (
                     (
                        (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Can get adult
                        && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby || OWERmap) ) //Can get into domain
                        && ( ((OpenFountain || OWERmap ||
                                               ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) //Or open fountain as child
                                                  && (OpenFountain || items.ZoraLetter || OWERmap) && (items.Bombs || OWERmap || (items.Bombchu && BombchuLogic) || items.Scale)
                                                 )
                                               ))
                            ) )
                     ) ;
               }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Death Mountain Trail",
      x: "62.0%",
      y: "13.7%",
      type: "overworld",
      found: true,
      chestlist: {
         'Trail to Village': {
            x: "63.1%",
            y: "18.6%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Bombable Wall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Dodongo\'s Cavern': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[23].found == true) &&
                  ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         ['Cavern Roof Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[23].found == true ;
            }
         },
         'Cavern Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return items.Bottle && (OWERmap == false || dungeons[23].found == true) && 
                  (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
            }
         },
         ['Breakable Wall Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) || items.Glove) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Song of Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  items.Ocarina && items.SongofStorms ;
            }
         },
         ['Trail Storms Grotto']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  items.Ocarina && items.SongofStorms ;
            }
         },
         'Storms Grotto Gossip': {
            type: "gossip", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  items.Ocarina && items.SongofStorms ;
            }
         },
         'Trail to City': {
            x: "62.6%",
            y: "12.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Lower Red Rock Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  (items.Hookshot || items.Hammer ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         'Cow Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         ['Cow Milk Grotto']: {
            type: "cow", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  items.Ocarina && items.EponasSong &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Upper Red Rock Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         'Summit Bombable Door': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         ['Summit Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  items.Ocarina && items.ZeldasLullaby &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         ['Biggoron\'s Finest Work']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                  ( (items.Trade >= 1 && (items.Bottle && (items.HoverBoots || (items.Ocarina && items.ZeldasLullaby) ) 
                                          && (items.ZoraLetter && (items.Bombs || (items.Bombchu && BombchuLogic) || items.Scale ) && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                                          ) || OpenFountain || isBridgeOpen() || items.Wallet >= 3) && (items.EponasSong || items.Hookshot >= 2) 
                    )//Get King Z unthawed for eyeball
                   || (items.Trade >= 6 && (items.EponasSong || items.Hookshot >= 2)) //Valley Carpenter Foreman
                   || items.Trade >= 9); //Claim check/eyedrops
            }
         },
         'Trail to Crater': {
            x: "64.6%",
            y: "04.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Trail Owl': {
            x: "62.0%",
            y: "02.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Summit Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[23].found == true) &&
                  ( ( (items.Bombs || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots) ) //Bombs or Bolero warp
                       || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Death Mountain Crater",
      x: "65.4%",
      y: "09.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Crater to City': {
            x: "68.6%",
            y: "05.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Red Rock Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                  ) ;
            }
         },
         'Red Rock Grotto Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                  ) ;
            }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                    ( ( (items.BoleroofFire && items.Ocarina ) //Bolero warp
                       || ((items.Hookshot || items.HoverBoots) && (items.Bombs || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) ))
                     && //access via city or trail
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    ) ;
            }
         },
         'Bolero Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.BoleroofFire; }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                  items.Ocarina && items.BoleroofFire && items.Bottle ;
            }
         },
         'Fire Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( ( (items.BoleroofFire && items.Ocarina ) //Bolero warp
                       || ((items.Hookshot || items.HoverBoots) && (items.Bombs || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) ))
                     && //access via city or trail
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Ocarina && items.BoleroofFire) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         ['Volcano Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( ( (items.BoleroofFire && items.Ocarina ) //Bolero warp
                       || items.Bombs || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) )
                     && items.HoverBoots  &&//access via city or trail
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Ocarina && items.BoleroofFire) && items.Bean &&
                       (OpenDoor == true || (items.Ocarina && items.SongofTime) ) //can plant bean
                      )
                  );
            }
         },
         'Red Rocks Doorway': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                  ); 
            }
         },
         ['Great Fairy Fountain']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) && items.Hammer && items.Ocarina && items.ZeldasLullaby &&
                  ( ( (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots)) //BBolero warp
                       || items.Bow || items.Glove ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                  ) ;}
         },
         'Bombable Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Crater Grotto Gossip': {
            type: "gossip", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         ['Bomb Grotto Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         ['Wall Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  ( ( (items.Bombs || (items.BoleroofFire && items.Ocarina && (items.Hookshot || items.HoverBoots) ) //Bombs or Bolero warp
                       || items.Hammer || items.Bow || items.Glove || (items.Bombchu && BombchuLogic) ) && //Bow and glove access via Goron City
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
            }
         },
         'Crate Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Child Climb Summit to Crater Scrub': {
            type: "scrub", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) );
            }
         },
         'Cracked Wall Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[24].found == true) &&
                  (items.Bombs || (items.Bombchu && BombchuLogic) );
            }
         },
         'Crater to Trail': {
            x: "66.6%",
            y: "02.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Lon Lon Ranch",
      x: "47.4%",
      y: "45.6%",
      type: "overworld",
      found: true,
      chestlist: {
         'Ranch to Field': {
            x: "48.4%",
            y: "38.5%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Talon\'s House': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[25].found == true; }
         },
         ['Talon\'s Cucco game']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Mask >= 2 && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Ranch Stables': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[25].found == true; }
         },
         ['Stable Cow Milk 1']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         },
         ['Stable Cow Milk 2']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         },
         '2nd Floor Window Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            
            }
         },
         'Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Song from Malon']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true)  && items.Mask >= 2 && items.Ocarina && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            
            }
         },
         'Back of Coral Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Ranch Open Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Open Grotto Scrubs x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Ranch Silo': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[25].found == true; }
         },
         ['Silo Freestanding']: {
            type: "freestanding", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Silo Cow Milk 1']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         },
         ['Silo Cow Milk 2']: {
            type: "cow", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Ocarina && items.EponasSong ;
            }
         },
         'North of Silo Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[25].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Lake Hylia",
      x: "40.0%",
      y: "81.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Lake to Field': {
            x: "39.0%",
            y: "70.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Beside Lab Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true ;
            
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Bottle &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Child Underwater Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Scale &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Lake to Domain': {
            x: "39.3%",
            y: "80.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return items.Scale && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            ; }
         },
         'Laboratory': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true; }
         },
         'Lab Crate Skulltula': {
            type: "skulltula", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.IronBoots && items.Hookshot &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Diving in the Lab']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  ( ( (items.IronBoots || items.Scale >= 2) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Scale >= 2 && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                  );
            }
         },
         ['Lab Roof Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  ( ( (items.Hookshot && items.Ocarina) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Bean && (OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                  );
            }
         },
         'Lab Wall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Lake Owl': {
            x: "32.0%",
            y: "83.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return (OWERmap == false || dungeons[26].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Lake Hylia Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true; }
         },
         'Grave Pull Scrub x3': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            },
         },
         'Serenade Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.SerenadeoffWater; }
         },
         'Top of Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Hookshot >= 2 &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Perimeter of Lake 1': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            }
         },
         'Perimeter of Lake 2': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[26].found == true;
            }
         },
         'Fishing Pond': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && 
                  ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
                   || ( (items.Hookshot && items.Ocarina) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Bean && (OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                  ) ; 
            }
         },
         ['Child Fishing']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Adult Fishing']: {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  ( ( (items.Hookshot && items.Ocarina) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Bean && (OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                  );
            }
         },
         ['Shoot the Sun']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) && items.Bow &&
                  items.Hookshot >= 2 && items.Ocarina //|| 'Morpha'.isopened
                  && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Fire Arrow Island Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[26].found == true) &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Water Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[26].found == true) && items.Hookshot &&
                  (items.Scale >= 2 || items.IronBoots) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Gerudo Valley",
      x: "19.0%",
      y: "31.5%",
      type: "overworld",
      found: true,
      chestlist: {
         'Valley to Field': {
            x: "30.0%",
            y: "37.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Right of Plank Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         ['Crate Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && 
                  ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  )
                   || ( items.Hookshot >= 2 && Age == "Adult" ) ) ; 
            }
         },
         ['Waterfall Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[27].found == true}
         },
         'Waterfall Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return OWERmap == false || dungeons[27].found == true ;
            }
         },
         ['Valley Cow Milk']: {
            type: "cow", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.EponasSong &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Bottle &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Silver Rock Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Glove >= 2 &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Above Hammer Rocks Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Hookshot &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         ['Hammer Rocks Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Hammer &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Carpenter Tent': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Behind Tent Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Hookshot &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Song of Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Storms Grotto behind Tent': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[27].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Valley to Fortress': {
            x: "20.0%",
            y: "37.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Gerudo Fortress",
      x: "15.5%",
      y: "16.4%",
      type: "overworld",
      found: true,
      chestlist: {
         'Fortress to Valley': {
            x: "18.0%",
            y: "31.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Fortress Storms Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Ocarina && items.SongofStorms &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         ['Guard Fight']: {
            type: "guard", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) &&
                  ( (items.Ocarina && items.EponasSong) || (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) 
                   || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Fortress Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         ['Rooftop Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && (items.HoverBoots || (items.Hookshot && items.Scarecrow >= 2) ) &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Gerudo Training Grounds': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[28].found == true) && items.Membership; 
            }
         },
         ['Horseback Archery 1000 pts']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Membership && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
         ['Horseback Archery 1500 pts']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Membership && items.Bow && items.EponasSong && items.Ocarina;
            }
         },
         'Archery Target Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[28].found == true) && items.Hookshot &&
                  (items.Membership || (items.Ocarina && items.EponasSong) || 
                   (items.Ocarina && items.RequiemofSpirit && items.HoverBoots) || items.Hookshot >= 2) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ; 
            }
         },
         'Fortress to Wasteland': {
            x: "17.0%",
            y: "23.4%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return (OWERmap == false || dungeons[28].found == true) && items.Membership; 
             }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Desert Colossus",
      x: "8.4%",
      y: "15.9%",
      type: "overworld",
      found: true,
      chestlist: {
         'Desert to Wasteland': {
            x: "8.4%",
            y: "25.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Cracked Wall Doorway': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && (items.Bombs || (items.Bombchu && BombchuLogic))
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         },
         'Nayru\'s Great Fairy Fountain': {
            type: "NPC", 
            access: "simple",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && (items.Bombs || (items.Bombchu && BombchuLogic))
               && items.Ocarina && items.ZeldasLullaby &&
                 ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         },
         'Water Hole Tree Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Hookshot &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Requiem Warp': {
            type: "warp", 
            access: "warp",
               isAvailable: function () {
                  return items.Ocarina && items.RequiemofSpirit; }
         },
         'Desert Strength Grotto': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Glove >= 2 &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Silver Rock Scrub Grotto': {
            type: "scrub", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && items.Glove >= 2 &&
                  ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                   || (items.Ocarina && items.RequiemofSpirit) ) &&
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime)  ) ;
            }
         },
         'Northwest Desert Gossip': {
            type: "gossip", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true)
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         },
         'Spirit Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[29].found == true)
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
               }
         },
         ['Song from Sheik']: {
            type: "song", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true)
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) 
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit) 
                 ) ;
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina && items.RequiemofSpirit && items.Bottle ;
            }
         },
         'Bean Ride Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && 
                  ( (items.Hookshot && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) 
                                        || (items.Ocarina && items.RequiemofSpirit) ) 
                     && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    ) || ((OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                          && items.Ocarina && items.RequiemofSpirit && items.Bean ) );
            }
         },
         ['Bean to Arch Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[29].found == true) && 
                  (OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina && items.RequiemofSpirit && items.Bean ;
            }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Graveyard",
      x: "73.7%",
      y: "19.5%",
      type: "overworld",
      found: true,
      chestlist: {
         'Graveyard to Village': {
            x: "72.7%",
            y: "25.5%",
            type: "entrance",
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Dampe\'s Hut': {
            type: "simple", 
            access: "door",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         ['Dampe Digging']: {
            type: "NPC", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         'Free Chest Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         ['Free Chest Grave']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         ['Magic Bean Freestanding']: {
            type: "freestanding", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  ( ( (OpenDoor == true || (items.Ocarina && items.SongofTime) ) && items.Bean )
                   || (items.Boomerang && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                   || (items.Hookshot >= 2 && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ) 
                  );
            }
         },
         'Soil Patch Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Bottle && 
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         'Dampe\'s Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         ['Dampe Race 1']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         ['Dampe Race 2']: {
            type: "NPC", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) ;
            }
         },
         'Redead Grave': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return OWERmap == false || dungeons[30].found == true; 
            }
         },
         ['Redead Grave Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.SunsSong ;
            }
         },
         'South Wall Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Boomerang &&
                  (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
               && items.Ocarina && items.RequiemofSpirit && items.Bottle ;
            }
         },
         'Royal Tomb': {
            type: "grotto", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.ZeldasLullaby ;
            }
         },
         ['Composer Brothers\' Song']: {
            type: "song", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.ZeldasLullaby ;
            }
         },
         ['Royal Tomb Chest']: {
            type: "chest", 
            access: "grotto",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.ZeldasLullaby && 
                  items.Magic && (items.Dins || 
                 (items.Bow && items.Fire && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) )
                 );
            }
         },
         'Noturne Warp': {
            type: "warp",
            access: "warp",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.NocturneofShadow ;
            }
         },
         'Noturne Gossip': {
            type: "gossip",
            access: "outdoor",
            isAvailable: function () {
               return (OWERmap == false || dungeons[30].found == true) && items.Ocarina && items.NocturneofShadow
            }
         },
         'Shadow Temple': {
            type: "dungeon", 
            access: "door",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[30].found == true) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                     && items.Ocarina && items.NocturneofShadow && items.Magic && (items.Dins || items.Fire) ;
               }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Haunted Wasteland",
      x: "14.0%",
      y: "25.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Wasteland to Fortress': {
            x: "14.0%",
            y: "23.4%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
                  return true; }
         },
         ['Carpet Salesman']: {
            type: "carpet", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[31].found == true && 
                  (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                   items.Wallet >= 2 && ( (items.Ocarina && items.RequiemofSpirit) 
                                      || (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) ) ;
            }
         },
         ['Torch Chest']: {
            type: "chest", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[31].found == true && items.Magic
               && ( (items.Membership && (items.HoverBoots || items.Hookshot >= 2) && (items.Dins || (items.Bow && items.Fire) )
                    && (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )  
                   ) || (items.Ocarina && items.RequiemofSpirit && items.Dins) 
                 ) ;
            }
         },
         'Structure Skulltula': {
            type: "skulltula", 
            access: "outdoor",
            isAvailable: function () {
               return dungeons[31].found == true && 
                  ( ( (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) && 
                     items.Hookshot && ( (items.Ocarina && items.RequiemofSpirit) 
                                        || (items.Membership && (items.HoverBoots || items.Hookshot >= 2) ) ) ) 
                   || ( (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) 
                       && items.Boomerang && items.Ocarina && items.RequiemofSpirit) ) ;
            }
         },
         'Wasteland to Desert': {
            x: "11.0%",
            y: "25.0%",
            type: "entrance",
            access: "entrance",
            isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
   {
      name: "Hyrule Field",
      x: "54.0%",
      y: "42.0%",
      type: "overworld",
      found: true,
      chestlist: {
         'Ocarina of Time': {
            x: "54.3%",
            y: "28.0%",
            type: "ocarina", 
            access: "outdoor",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && 
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                     items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire ;
               }
         },
         'Song from Zelda': {
            x: "54.3%",
            y: "28.0%",
            type: "song", 
            access: "outdoor",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && 
                     (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) ) &&
                     items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire ;
               }
         },
         'North West of Castle Grotto' : {
            x: "50.0%",
            y: "28.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Grotto West of Castle Gate' : {
            x: "50.0%",
            y: "28.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'South East Remote Grotto' : {
            x: "60.0%",
            y: "59.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'South East Grotto' : {
            x: "60.0%",
            y: "59.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'South Open Grotto' : {
            x: "44.5%",
            y: "64.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return OWERmap == false || dungeons[32].found == true ;
               }
         },
         'Southern Open Grotto' : {
            x: "44.5%",
            y: "64.0%",
            type: "chest", 
            access: "grotto",
               isAvailable: function () {
                  return OWERmap == false || dungeons[32].found == true ;
               }
         },
         'Fenced Bomb Grotto' : {
            x: "42.0%",
            y: "64.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Bomb Grotto Deku Sale 10$' : {
            x: "42.0%",
            y: "64.0%",
            type: "NPC", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'North West Lone Tree Grotto' : {
            x: "42.0%",
            y: "33.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Tektite Grotto' : {
            x: "42.0%",
            y: "33.0%",
            type: "freestanding", 
            access: "grotto",
               isAvailable: function () {
               return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) 
                     && (items.IronBoots && items.Scale >= 2) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Scale >= 2 &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Paradox Grotto' : {
            x: "36.1%",
            y: "42.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Web Grotto Skulltula' : {
            x: "36.1%",
            y: "42.0%",
            type: "skulltula", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && items.Magic &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     items.Hookshot && (items.Dins || (items.Bow && items.Fire) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       items.Boomerang && items.Dins &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Web Grotto Cow' : {
            x: "36.1%",
            y: "42.0%",
            type: "cow", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && items.Magic && items.Ocarina && items.EponasSong &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (items.Dins || (items.Bow && items.Fire) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       items.Dins && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Web Grotto Gossip' : {
            x: "36.1%",
            y: "42.0%",
            type: "gossip", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) && items.Magic &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && 
                     (items.Dins || (items.Bow && items.Fire) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       items.Dins && (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'North East Lone Tree Grotto' : {
            x: "57.3%",
            y: "26.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Skulltula Grotto' : {
            x: "57.3%",
            y: "26.0%",
            type: "skulltula", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) && items.Hookshot &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) && items.Boomerang &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );}
         },
         'Fairy Fountain Grotto' : {
            x: "44.0%",
            y: "25.0%",
            type: "grotto", 
            access: "grotto",
               isAvailable: function () {
                  return (OWERmap == false || dungeons[32].found == true) &&
                  ( ( (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic) ) &&
                     (Age == "Adult" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                    )
                   || ( (items.Bombs || (items.Bombchu && BombchuLogic) ) &&
                       (Age == "Child" || OpenDoor == true || (items.Ocarina && items.SongofTime) )
                      )
                  );
               }
         },
         'Field to Forest': {
            x: "64.0%",
            y: "44.4%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Ranch': {
            x: "48.4%",
            y: "34.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to River': {
            x: "67.6%",
            y: "38.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Village': {
            x: "60.0%",
            y: "27.0%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Drawbridge to Topdown': {
            x: "52.0%",
            y: "30.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Valley': {
            x: "32.0%",
            y: "42.5%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
         'Field to Lake': {
            x: "41.0%",
            y: "65.6%",
            type: "entrance", 
            access: "entrance",
             isAvailable: function () {
                  return true; }
         },
      },
      isBeatable: function () {
         return this.canGetChest();
      },
      canGetChest: function () {
         return generalCanGetChest(this.chestlist);
      }
   },
];

//define overworld chests
var chests = [
   {
      name: "Ocarina of Time",
      x: "54.3%",
      y: "28.0%",
      type: "freestanding", 
      access: "outdoor",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && items.KokiriEmerald && items.GoronRuby && items.ZoraSapphire)
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Grotto West of Castle Gate",
      x: "50.0%",
      y: "28.0%",
      type: "chest", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "South East Grotto",
      x: "60.0%",
      y: "59.0%",
      type: "chest", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Southern Open Grotto",
      x: "44.5%",
      y: "64.0%",
      type: "chest", 
      access: "grotto",
      isAvailable: function () {
         if (OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Bomb Grotto Deku Sale 10$",
      x: "42.0%",
      y: "64.0%",
      type: "NPC", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Tektite Grotto",
      x: "42.0%",
      y: "33.0%",
      type: "freestanding", 
      access: "grotto",
      isAvailable: function () {
         if (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) &&
            (
               ((items.Bombs || (items.Bombchu && BombchuLogic)
                  )
                  || (items.Hammer && items.MasterSword)
               )
            )
            && (items.Scale >= 2 || (items.MasterSword && items.IronBoots)
            )
         ))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Gold Gauntlets Fairy",
      x: "55.5%",
      y: "13.5%",
      type: "NPC", 
      access: "simple",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.MasterSword && items.Glove >= 3 && items.Ocarina && items.ZeldasLullaby))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Skulltula, Hint, Cow Milk Grotto",
      x: "36.1%",
      y: "42.0%",
      type: "skulltula", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Magic && ((items.Dins && (items.Bombs || (items.Bombchu && BombchuLogic)) && items.Boomerang) || (((items.Bow && items.Fire) || items.Dins) && items.Hookshot && items.MasterSword && (items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)))))))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Skulltula Grotto",
      x: "57.3%",
      y: "26.0%",
      type: "skulltula", 
      access: "grotto",
      isAvailable: function () {
         if (((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && ((items.Bombs || (items.Bombchu && BombchuLogic)
               ) && items.Boomerang
            ) || ((items.Bombs || items.Hammer || (items.Bombchu && BombchuLogic)
               ) && items.MasterSword && items.Hookshot
            )
         ))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Fairy Fountain Grotto",
      x: "44.0%",
      y: "25.0%",
      type: "grotto", 
      access: "grotto",
      isAvailable: function () {
         if ((OpenForest == 1 || (items.KokiriSword && items.DekuShield && OpenForest == 0)) && (items.Bombs || (items.MasterSword && items.Hammer) || (items.Bombchu && BombchuLogic)))
            return "available";
         return "unavailable";
      }
   },
   {
      name: "Ganon\'s Castle Skulltula",
      x: "52.0%",
      y: "15.0%",
      type: "skulltula", 
      access: "outdoor",
      isAvailable: function () {
         if (items.MasterSword)
            return "available";
         return "unavailable";
      }
   },
]

    © 
