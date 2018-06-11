var defaultItemGrid = [
    [
        "Bow",
        "Hookshot",
        "Hammer",
        "Bombs",
        "Scale",
        "Glove"
    ],
    [
        "KokiriSword",
        "BiggoronSword",
        "MirrorShield",
        "ZoraTunic",
        "GoronTunic",
        "IronBoots",
        "HoverBoots"
    ],
    [
        "Dins",
        "Farores",
        "Nayrus",
        "Magic",
        "Fire",
        "Ice",
        "Light"
    ],
    [
        "blank",
        "Slingshot",
        "Boomerang",
        "Lens",
        "Bottle",
        "ZoraLetter",
        "blank"
    ],
    [
        "ZeldasLullaby",
        "EponasSong",
        "SunsSong",
        "SariasSong",
        "SongofTime",
        "SongofStorms"
    ],
    [
        "MinuetofForest",
        "BoleroofFire",
        "SerenadeofWater",
        "NocturneofShadow",
        "RequiemofSpirit",
        "PreludeofLight"
    ],
    [
        "ForestMedallion",
        "FireMedallion",
        "WaterMedallion",
        "ShadowMedallion",
        "SpiritMedallion",
        "LightMedallion"
    ],
    [
        "blank",
        "blank",
        "KokiriEmerald",
        "GoronRuby",
        "ZoraSapphire",
        "blank",
        "blank"
    ]
]


var items = {
    Bow:false,
    Hookshot:0,
    Hammer:false,
    Slingshot:false,
    Boomerang:false,
    Bombs:false,
    Lens:false,
    Dins:false,
    Farores:false,
    Nayrus:false,
    Fire:false,
    Ice:false,
    Light:false,
    Ocarina:1,
    Bottle:0,

    KokiriSword:false,
    BiggoronSword:false,
    MirrorShield:false,
    GoronTunic:false,
    ZoraTunic:false,
    IronBoots:false,
    HoverBoots:false,
    Glove:0,
    Scale:0,
    StoneofAgony:false,
    Magic:false,
    ZoraLetter:false, 

    ZeldasLullaby:false,
    EponasSong:false,
    SunsSong:false,
    SariasSong:false,
    SongofTime:false,
    SongofStorms:false,
    MinuetofForest:false,
    PreludeofLight:false,
    BoleroofFire:false,
    SerenadeofWater:false,
    NocturneofShadow:false,
    RequiemofSpirit:false,

    KokiriEmerald:false,
    GoronRuby:false,
    ZoraSapphire:false,
    ForestMedallion:false,
    FireMedallion:false,
    WaterMedallion:false,
    SpiritMedallion:false,
    ShadowMedallion:false,
    LightMedallion:false,

    blank: false
};

var dungeonchests = {
    0: 3,
    1: 2,
    2: 2,
    3: 5,
    4: 6,
    5: 2,
    6: 4,
    7: 3,
    8: 2,
    9: 5     
}


var itemsMin = {
    Hookshot:0,
    Ocarina:1,
    Bottle:0,
    Glove:0,
    Scale:0,

	boss0: 1,
	boss1: 1,
	boss2: 1,
    boss3: 1,
	boss4: 1,
	boss5: 1,
	boss6: 1,
	boss7: 1,
	boss8: 1,
	boss9: 1
};

var itemsMax = {
    Hookshot:2,
    Ocarina:2,
    Bottle:4,
    Glove:3,
    Scale:2,

	boss0: 2,
	boss1: 2,
	boss2: 2,
	boss3: 2,
	boss4: 2,
	boss5: 2,
	boss6: 2,
	boss7: 2,
	boss8: 2,
	boss9: 2,
	
	chest0: 3,
    chest1: 2,
    chest2: 2,
	chest3: 5,
    chest4: 6,
    chest5: 2,
    chest6: 4,
    chest7: 3,
    chest8: 2,
    chest9: 5 
};