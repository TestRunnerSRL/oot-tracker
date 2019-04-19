var defaultMedallions = {
    ForestMedallion: 0,
    FireMedallion: 0,
    WaterMedallion: 0,
    ShadowMedallion: 0,
    SpiritMedallion: 0,
    LightMedallion: 0,
    KokiriEmerald: 0,
    GoronRuby: 0,
    ZoraSapphire: 0,
};
var medallions = defaultMedallions;
var dungeonImg = [
    'Unknown',
    'Slingshot0',
    'Bombs0',
    'Boomerang',
    'Bow0',
    'Hammer',
    'Hookshot0',
    'HoverBoots',
    'MirrorShield'
];
ganonlogic = 'Open';
showprizes = false;

var itemGrid = [];
var itemLayout = [];

var editmode = false;
var selected = {};

var dungeonSelect = 0;

var CheckTypes = {
    NONE : 'none',
    DUNGEON : 'dungeon',
    CHEST : 'chest'
}

// TODO: Update this to keep a list of all checks to establish a route (run analytics?!?)
var lastCheckOpened = {
    checkType: CheckTypes.NONE,
    dungeonIndex : 0,
    chestIndex : 0,
    inLogic : true,

    getCheckName : function() {
        switch(this.checkType) {
          case CheckTypes.NONE:
              return undefined;

          case CheckTypes.DUNGEON:
              return dungeons[this.dungeonIndex].name + " - " + this.chestIndex;

          case CheckTypes.CHEST:
              return chests[this.chestIndex].name;

          default:
            return undefined;
        }
    }
};

var itemLocationMap = {};

function setCookie(obj) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    var val = JSON.stringify(obj);
    document.cookie = "key=" + val + ";" + expires + ";path=/";
}

function getCookie() {
    var name = "key=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return JSON.parse(c.substring(name.length, c.length));
        }
    }
    return {};
}

var cookieDefault = {
    map: 1,
    iZoom: 100,
    mZoom: 100,
    mPos: 0,
    glogic: 'Open',
    prize: 1,
    medallions: defaultMedallions,
    items: defaultItemGrid,
    obtainedItems: items,
    chests: serializeChests(),
    dungeonChests: serializeDungeonChests(),
}

var cookielock = false;
function loadCookie() {
    if (cookielock) {
        return;
    }

    cookielock = true;

    cookieobj = getCookie();

    Object.keys(cookieDefault).forEach(function(key) {
        if (cookieobj[key] === undefined) {
            cookieobj[key] = cookieDefault[key];
        }
    });

    medallions = JSON.parse(JSON.stringify(cookieobj.medallions));
    initGridRow(JSON.parse(JSON.stringify(cookieobj.items)));
    items = JSON.parse(JSON.stringify(cookieobj.obtainedItems));
    deserializeChests(JSON.parse(JSON.stringify(cookieobj.chests)));
    deserializeDungeonChests(JSON.parse(JSON.stringify(cookieobj.dungeonChests)));

    updateGridItemAll();

    document.getElementsByName('showmap')[0].checked = !!cookieobj.map;
    document.getElementsByName('showmap')[0].onchange();
    document.getElementsByName('itemdivsize')[0].value = cookieobj.iZoom;
    document.getElementsByName('itemdivsize')[0].onchange();
    document.getElementsByName('mapdivsize')[0].value = cookieobj.mZoom;
    document.getElementsByName('mapdivsize')[0].onchange();

    document.getElementsByName('mapposition')[cookieobj.mPos].click();

    document.getElementsByName('showprizes')[0].checked = !!cookieobj.prize;
    document.getElementsByName('showprizes')[0].onchange();

    for (rbuttonID in document.getElementsByName('ganonlogic')) {
        rbutton = document.getElementsByName('ganonlogic')[rbuttonID];
        if (rbutton.value == cookieobj.glogic) {
            rbutton.click();
        }
    }

    cookielock = false;
}

function saveCookie() {
    if (cookielock) {
        return;
    }

    cookielock = true;

    cookieobj = {};

    cookieobj.map = document.getElementsByName('showmap')[0].checked ? 1 : 0;
    cookieobj.iZoom = document.getElementsByName('itemdivsize')[0].value;
    cookieobj.mZoom = document.getElementsByName('mapdivsize')[0].value;

    cookieobj.mPos = document.getElementsByName('mapposition')[1].checked ? 1 : 0;

    cookieobj.prize = document.getElementsByName('showprizes')[0].checked ? 1 : 0;

    for (rbuttonID in document.getElementsByName('ganonlogic')) {
        rbutton = document.getElementsByName('ganonlogic')[rbuttonID];
        if (rbutton.checked) {
            cookieobj.glogic = rbutton.value;
        }
    }

    cookieobj.medallions = JSON.parse(JSON.stringify(medallions));
    cookieobj.items = JSON.parse(JSON.stringify(itemLayout));
    cookieobj.obtainedItems = JSON.parse(JSON.stringify(items));
    cookieobj.chests = JSON.parse(JSON.stringify(serializeChests()));
    cookieobj.dungeonChests = JSON.parse(JSON.stringify(serializeDungeonChests()));

    setCookie(cookieobj);

    cookielock = false;
}

function serializeChests() {
    return chests.map(chest => chest.isOpened || false);
}

function serializeDungeonChests() {
    return dungeons.map(dungeon => Object.values(dungeon.chestlist).map(chest => chest.isOpened || false));
}

function deserializeChests(serializedChests) {
    for (var i = 0; i < chests.length; i++) {
        chests[i].isOpened = serializedChests[i];
        refreshChest(i);
    }
}

function deserializeDungeonChests(serializedDungeons) {
    for (var i = 0; i < dungeons.length; i++) {
        var dungeon = dungeons[i];
        var serializedDungeon = serializedDungeons[i];
        var chestNames = Object.keys(dungeon.chestlist);
        for (var j = 0; j < chestNames.length; j++) {
            dungeon.chestlist[chestNames[j]].isOpened = serializedDungeon[j];
        }
    }
}

// Event of clicking a chest on the map
function toggleChest(chestIndex) {
    chests[chestIndex].isOpened = !chests[chestIndex].isOpened;

    // Update last opened check
    if (chests[chestIndex].isOpened) {
      setLastCheckOpened(CheckTypes.CHEST, null, chestIndex, chests[chestIndex].isAvailable() == 'available');
    }

    refreshChest(chestIndex);
    saveCookie();
}

function refreshChest(x) {
    var stateClass = chests[x].isOpened ? 'opened' : chests[x].isAvailable();
    document.getElementById(x).className = 'mapspan chest ' + stateClass;
}

// Highlights a chest location
function highlight(x) {
    document.getElementById(x).style.backgroundImage = 'url(images/highlighted.png)';
}

function unhighlight(x) {
    document.getElementById(x).style.backgroundImage = 'url(images/poi.png)';
}

// Highlights a chest location (but for dungeons)
function highlightDungeon(x) {
    document.getElementById('dungeon' + x).style.backgroundImage = 'url(images/highlighted.png)';
}

function unhighlightDungeon(x) {
    if (dungeonSelect != x)
        document.getElementById('dungeon' + x).style.backgroundImage = 'url(images/poi.png)';
}

function clickDungeon(d) {
    document.getElementById('dungeon' + dungeonSelect).style.backgroundImage = 'url(images/poi.png)';
    dungeonSelect = d;
    document.getElementById('dungeon' + dungeonSelect).style.backgroundImage = 'url(images/highlighted.png)';

    // Update the DOM object that shows the dungeon name in the submaparea
    var dungeonNameDOM = document.getElementById('submaparea');
    dungeonNameDOM.innerHTML = dungeons[dungeonSelect].name;
    dungeonNameDOM.onclick = new Function('toggleDungeon(this,' + dungeonSelect + ')');
    dungeonNameDOM.onmouseover = new Function('highlightListItem(this)');
    dungeonNameDOM.onmouseout = new Function('unhighlightListItem(this)');
    dungeonNameDOM.style.cursor = 'pointer';
    dungeonNameDOM.className = 'DC' + dungeons[dungeonSelect].isBeatable();

    var DClist = document.getElementById('submaplist');
    DClist.innerHTML = '';

    for (var key in dungeons[dungeonSelect].chestlist) {
        var s = document.createElement('li');
        s.innerHTML = key;

        if (dungeons[dungeonSelect].chestlist[key].isOpened) {
            s.className = "DCopened";
        } else if ( dungeons[dungeonSelect].chestlist[key].isAvailable()) {
            s.className = "DCavailable";
        } else {
            s.className = "DCunavailable";
        }

        s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
        s.onmouseover = new Function('highlightListItem(this)');
        s.onmouseout = new Function('unhighlightListItem(this)');
        s.style.cursor = "pointer";

        DClist.appendChild(s);
    }
}

function toggleDungeonChest(sender, dungeonIndex, chestIndex) {
    dungeons[dungeonIndex].chestlist[chestIndex].isOpened = !dungeons[dungeonIndex].chestlist[chestIndex].isOpened;
    if (dungeons[dungeonIndex].chestlist[chestIndex].isOpened) {
        sender.className = 'DCopened';

        // Update last opened check
        var inLogic = dungeons[dungeonIndex].chestlist[chestIndex].isAvailable();
        setLastCheckOpened(CheckTypes.DUNGEON, dungeonIndex, chestIndex, inLogic)

    } else if (dungeons[dungeonIndex].chestlist[chestIndex].isAvailable()) {
        sender.className = 'DCavailable';
    } else {
        sender.className = 'DCunavailable';
    }

    updateMap();
    saveCookie();
}

/**
 * Opens or closes all chests in a dungeon.
 * Note: This does not necessarily toggle individual chests!
 *
 * @param sender The DOM object that was invoked. Here it will be the submaparea object (dungeon title)
 * @param dungeonIndex The index of the dungeon currently displayed in the submaparea
 */
function toggleDungeon(sender, dungeonIndex) {
    var DClist = document.getElementById('submaplist');
    var chestlistNames = Object.keys(dungeons[dungeonIndex].chestlist);

    // If the dungeon is already cleared
    if (sender.className == 'DCopened') {
        // Close all chests and set their class to the appropriate value based on their availability
        for (var chestIndex = 0; chestIndex < chestlistNames.length; chestIndex++) {
            var currentChestName = chestlistNames[chestIndex];
            dungeons[dungeonIndex].chestlist[currentChestName].isOpened = false;
            sender.className = dungeons[dungeonIndex].chestlist[currentChestName].isAvailable()
                    ? 'DCavailable'
                    : 'DCunavailable';
        }
    // If the dungeon is not cleared (regardless of availability logic)
    } else if (sender.className == 'DCavailable'
            || sender.className == 'DCunavailable'
            || sender.className == 'DCpossible') {
        // Open all of the chests
        for (var chestIndex = 0; chestIndex < chestlistNames.length; chestIndex++) {
            var currentChestName = chestlistNames[chestIndex];
            dungeons[dungeonIndex].chestlist[currentChestName].isOpened = true;
            sender.className = 'DCopened';
        }
    } else {
        throw "Dungeon title DOM object was not of an expected class";
    }

    // Update the dungeon title class
    sender.className = 'DC' + dungeons[dungeonIndex].isBeatable();

    updateMap();
    saveCookie();
}

function highlightListItem(x) {
    x.style.backgroundColor = '#282828';
}

function unhighlightListItem(x) {
    x.style.backgroundColor = '';
}

function setOrder(H) {
    if (H) {
        document.getElementById('layoutdiv').classList.remove('flexcontainer');
    } else {
        document.getElementById('layoutdiv').classList.add('flexcontainer');
    }
    saveCookie();
}

function showPrizes(sender) {
    showprizes = sender.checked;
    updateGridItemAll();
    saveCookie();
}

function setGanonLogic(sender) {
    ganonlogic = sender.value;
    updateMap();
    saveCookie();
}

/**
 * Updates global variable to track the last opened check
 *
 * @param {checkType} checkType type of check
 * @param {number} dungeonIndex index in the main dungeon list where the check was done (null if checkType is CHEST)
 * @param {number} chestIndex index in either the dungeon chestlist or the main chest list corresponding to the check
 * @param {boolean} inLogic whether or not the check was in logic
 */
function setLastCheckOpened(checkType, dungeonIndex, chestIndex, inLogic) {
    lastCheckOpened.checkType = checkType;
    lastCheckOpened.dungeonIndex = dungeonIndex;
    lastCheckOpened.chestIndex = chestIndex;
    lastCheckOpened.inLogic = inLogic;
}

/**
 * Updates the itemLocationMap global variable that tracks where items were found
 * itemLocationMap is a map of item name to a list of checkData objects
 *
 * @param {string} item the name of the item that was picked up
 */
function handleItemPickup(item) {
    // If no checks have been opened, do not update the location map
    if (lastCheckOpened.checkType == CheckTypes.NONE){
        return;
    }

    // Make a deep copy of lastCheckOpened
    var checkData = {
        checkType : lastCheckOpened.checkType,
        dungeonIndex : lastCheckOpened.dungeonIndex,
        chestIndex : lastCheckOpened.chestIndex,
        getCheckName : lastCheckOpened.getCheckName
    }

    if (itemLocationMap[item] == undefined) {
      itemLocationMap[item] = [];
    }

    itemLocationMap[item].push(checkData);
}

/**
 * Clears the itemLocationMap global variable for an item
 * itemLocationMap is a map of item name to a list of checkData objects
 *
 * @param {string} item the name of the item that was picked up
 */
function handleItemDrop(item) {
    itemLocationMap[item] = undefined;
}

function setZoom(target, sender) {
    document.getElementById(target).style.zoom = sender.value / 100;
    document.getElementById(target).style.zoom = sender.value / 100;

    document.getElementById(target).style.MozTransform = 'scale(' + (sender.value / 100) + ')';
    document.getElementById(target).style.MozTransformOrigin = '0 0';

    document.getElementById(target + 'size').innerHTML = (sender.value) + '%';
    saveCookie();
}

function showSettings(sender) {
    if (editmode) {
        var r, c;
        var startdraw = false;
        for (r = 7; r >= 0 && !startdraw; r--) {
            if (!itemLayout[r] || !itemLayout[r].length) {
                itemGrid[r]['row'].style.display = 'none';
            } else {
                for (c = 0; c < 8; c++) {
                    if (!!itemLayout[r][c] && itemLayout[r][c] != 'blank') {
                        startdraw = true;
                        r++;
                        break;
                    }
                }

                if (!startdraw) {
                    itemGrid[r]['row'].style.display = 'none';
                    itemGrid[r]['half'].style.display = 'none';
                }
            }
        }

        for (; r >= 0; r--) {
            itemGrid[r]['row'].style.display = '';
            itemGrid[r]['button'].style.display = 'none';
        }

        editmode = false;
        updateGridItemAll();
        showTracker('mapdiv', document.getElementsByName('showmap')[0]);
        document.getElementById('itemconfig').style.display = 'none';

        sender.innerHTML = '🔧';
        saveCookie();
    } else {
        var x = document.getElementById('settings');
        if (!x.style.display || x.style.display == 'none') {
            x.style.display = 'initial';
            sender.innerHTML = 'X';
        } else {
            x.style.display = 'none';
            sender.innerHTML = '🔧';
        }
    }
}

function showTracker(target, sender) {
    if (sender.checked) {
        document.getElementById(target).style.display = '';
    }
    else {
        document.getElementById(target).style.display = 'none';
    }
}

function clickRowButton(row) {
    if (itemLayout[row].length % 2 == 0) {
        itemGrid[row]['button'].innerHTML = '-';
        itemGrid[row]['button'].style.backgroundColor = 'red';
        itemGrid[row][6]['item'].style.display = '';
        itemGrid[row]['half'].style.display = 'none';
        itemLayout[row][6] = 'blank';
    } else {
        itemGrid[row]['button'].innerHTML = '+';
        itemGrid[row]['button'].style.backgroundColor = 'green';
        itemGrid[row][6]['item'].style.display = 'none';
        itemGrid[row]['half'].style.display = '';
        document.getElementById(itemLayout[row][6]).style.opacity = 1;
        itemLayout[row].splice(-1, 1);
    }
    updateGridItem(row, 6);
}


function EditMode() {
    var r, c;

    for (r = 0; r < 8; r++) {
        itemGrid[r]['row'].style.display = '';
        itemGrid[r]['button'].style.display = '';
    }

    editmode = true;
    updateGridItemAll();
    showTracker('mapdiv', {checked: false});
    document.getElementById('settings').style.display = 'none';
    document.getElementById('itemconfig').style.display = '';

    document.getElementById('settingsbutton').innerHTML = 'Exit Edit Mode';
}


function ResetLayout() {
    initGridRow(defaultItemGrid);
}


function ResetTracker() {
    chests.forEach(chest => delete chest.isOpened);
    dungeons.forEach(dungeon => Object.values(dungeon.chestlist).forEach(chest => delete chest.isOpened));
    items = Object.assign(baseItems);
    medallions = defaultMedallions;

    updateGridItemAll();
    updateMap();
    saveCookie();
}


function createItemTracker(sender) {
    var r;
    for (r = 0; r < 8; r++) {
        itemGrid[r] = [];
        itemLayout[r] = [];

        itemGrid[r]['row'] = document.createElement('table');
        itemGrid[r]['row'].className = 'tracker';
        sender.appendChild(itemGrid[r]['row']);

        var tr = document.createElement('tr');
        itemGrid[r]['row'].appendChild(tr);

        itemGrid[r]['half'] = document.createElement('td');
        itemGrid[r]['half'].className = 'halfcell';
        tr.appendChild(itemGrid[r]['half']);

        var i;
        for (i = 0; i < 7; i++) {
            itemGrid[r][i] = [];
            itemLayout[r][i] = 'blank';

            itemGrid[r][i]['item'] = document.createElement('td');
            itemGrid[r][i]['item'].className = 'griditem';
            tr.appendChild(itemGrid[r][i]['item']);

            // Add tooltip
            var tooltip = document.createElement('div');
            tooltip.className = "tooltip";
            // Set opacity to 0 as a hack to control visibility (since visibility is separately managed through CSS)
            tooltip.style.opacity = 1;
            itemGrid[r][i]['tooltip'] = tooltip;
            itemGrid[r][i]['item'].appendChild(tooltip);

            // Add child with bg img
            var gridItemBackground = document.createElement('div');
            gridItemBackground.className = "griditembackground";
            itemGrid[r][i]['gridItemBackground'] = gridItemBackground;
            itemGrid[r][i]['item'].appendChild(gridItemBackground);

            var tdt = document.createElement('table');
            tdt.className = 'lonk';
            gridItemBackground.appendChild(tdt);

                var tdtr1 = document.createElement('tr');
                tdt.appendChild(tdtr1);
                    itemGrid[r][i][0] = document.createElement('th');
                    itemGrid[r][i][0].className = 'corner';
                    itemGrid[r][i][0].onclick = new Function("gridItemClick(" + r + "," + i + ",0)");
                    tdtr1.appendChild(itemGrid[r][i][0]);
                    itemGrid[r][i][1] = document.createElement('th');
                    itemGrid[r][i][1].className = 'corner';
                    itemGrid[r][i][1].onclick = new Function("gridItemClick(" + r + "," + i + ",1)");
                    tdtr1.appendChild(itemGrid[r][i][1]);
                var tdtr2 = document.createElement('tr');
                tdt.appendChild(tdtr2);
                    itemGrid[r][i][2] = document.createElement('th');
                    itemGrid[r][i][2].className = 'corner';
                    itemGrid[r][i][2].onclick = new Function("gridItemClick(" + r + "," + i + ",2)");
                    tdtr2.appendChild(itemGrid[r][i][2]);
                    itemGrid[r][i][3] = document.createElement('th');
                    itemGrid[r][i][3].className = 'corner';
                    itemGrid[r][i][3].onclick = new Function("gridItemClick(" + r + "," + i + ",3)");
                    tdtr2.appendChild(itemGrid[r][i][3]);
        }

        var half = document.createElement('td');
        half.className = 'halfcell';
        tr.appendChild(half);
        itemGrid[r]['button'] = document.createElement('button');
        itemGrid[r]['button'].innerHTML = '-';
        itemGrid[r]['button'].style.backgroundColor = 'red';
        itemGrid[r]['button'].style.color = 'white';
        itemGrid[r]['button'].onclick = new Function("clickRowButton(" + r + ")");
        half.appendChild(itemGrid[r]['button']);
    }
}

function updateGridItem(row, index) {
    var item = itemLayout[row][index];
    var itemDOM = itemGrid[row][index]['gridItemBackground'];
    var itemTooltipDOM = itemGrid[row][index]['tooltip'];

    // If item is blank, ensure no tooltip is shown
    if (!item || item == 'blank') {
        itemTooltipDOM.style.opacity = 0;
    }

    if (editmode) {
        if (!item || item == 'blank') {
            itemDOM.style.backgroundImage = 'url(images/blank.png)';
        } else if ((typeof items[item]) == 'boolean') {
            itemDOM.style.backgroundImage = 'url(images/' + item + '.png)';
        } else {
            itemDOM.style.backgroundImage = 'url(images/' + item + itemsMax[item] + '.png)';
        }

        itemDOM.style.border = '1px solid white';
        itemDOM.style.opacity = 1;

        return;
    }

    itemDOM.style.border = '0px';
    itemDOM.style.opacity = '';

    if (!item || item == 'blank') {
        itemDOM.style.backgroundImage = '';
        return;
    }

    if ((typeof items[item]) == 'boolean') {
        itemDOM.style.backgroundImage = 'url(images/' + item + '.png)';
    } else {
        itemDOM.style.backgroundImage = 'url(images/' + item + items[item] + '.png)';
    }

    itemDOM.className = 'griditembackground ' + !!items[item];

    // If this item has associated locations
    if (itemLocationMap[item] != undefined) {
        // Create an unordered list of locations
        var tooltipListDOM = document.createElement('ul');
        if (!itemTooltipDOM.firstChild) {
            itemTooltipDOM.appendChild(tooltipListDOM);
        } else {
            itemTooltipDOM.replaceChild(tooltipListDOM, itemTooltipDOM.firstChild);
        }

        // Append list items for each location
        for (var i = 0; i < itemLocationMap[item].length; i++) {
          var tooltipListItemDOM = document.createElement('li');
          tooltipListItemDOM.innerHTML = itemLocationMap[item][i].getCheckName();
          tooltipListDOM.appendChild(tooltipListItemDOM);
          if (i != itemLocationMap[item].length - 1) {
              tooltipListDOM.appendChild(document.createElement('hr'));
          }
        }
        itemTooltipDOM.style.opacity = 1;
    } else {
        if (itemTooltipDOM.firstChild) {
            itemTooltipDOM.firstChild.remove();
        }
        itemTooltipDOM.style.opacity = 0;
    }

    if (medallions[item] !== undefined) {
        if (showprizes) {
            // Magic number "3" refers to bottom right corner in the itemGrid object
            itemGrid[row][index][3].style.backgroundImage = 'url(images/' + dungeonImg[medallions[item]] + '.png)';
        } else {
            // Magic number "3" refers to bottom right corner in the itemGrid object
            itemGrid[row][index][3].style.backgroundImage = '';
        }
    }
}

function updateGridItemAll() {
    for (r = 0; r < 8; r++) {
        for (c = 0; c < 7; c++) {
            updateGridItem(r, c);
        }
    }
}

function setGridItem(item, row, index) {
    var previtem = itemLayout[row][index];
    itemLayout[row][index] = item;
    if (item != 'blank') {
        document.getElementById(item).style.opacity = 0.25;
    }
    updateGridItem(row, index);
}

function initGridRow(itemsets) {
    var r, c;
    var startdraw = false;
    for (r = 7; r >= 0 && !startdraw; r--) {
        if (!itemsets[r] || !itemsets[r].length) {
            itemGrid[r]['row'].style.display = 'none';
            itemGrid[r]['half'].style.display = 'none';
        } else {
            for (c = 0; c < 8; c++) {
                if (!!itemsets[r][c] && itemsets[r][c] != 'blank') {
                    startdraw = true;
                    r++;
                    break;
                }
            }

            if (!startdraw) {
                itemGrid[r]['row'].style.display = 'none';
                itemGrid[r]['half'].style.display = 'none';
            }
        }
    }

    for (; r >= 0; r--) {
        itemGrid[r]['row'].style.display = '';

        if (itemsets[r].length % 2 != 0) {
            itemGrid[r]['half'].style.display = 'none';
            itemGrid[r][6]['item'].style.display = '';
        } else {
            clickRowButton(r);
        }
        itemGrid[r]['button'].style.display = 'none';

        for (c = 0; c < 7; c++) {
            if (itemsets[r][c]) {
                setGridItem(itemsets[r][c], r, c);
            }
        }
    }
}

function gridItemClick(row, col, corner) {
    if (editmode) {
        gridItemClickEdit(row, col, corner);
    }

    var item = itemLayout[row][col];

    // Case when you clicked a medallion (detected by inclusion in medallions list)
    if (medallions[item] !== undefined && showprizes) {
        // Case when you click the question mark corner
        if (corner == 3) {
            medallions[item]++;
            if (medallions[item] >=  9) {
                medallions[item] = 0;
            }
        } else {
            // Case when you click the medallion itself
            items[item] = !items[item];

            if (items[item]) {
                handleItemPickup(item)
            } else {
                handleItemDrop(item)
            }
        }
    } else if ((typeof items[item]) == 'boolean') {
        // Case when the item is boolean
        items[item] = !items[item];

        if (items[item]) {
            handleItemPickup(item)
        } else {
          handleItemDrop(item)
        }
    } else {
        // Case when the item is progressive
        items[item]++;
        if (items[item] > itemsMax[item]) {
            items[item] = itemsMin[item];
            handleItemDrop(item)
        } else {
          handleItemPickup(item)
        }
    }

    updateMap();
    updateGridItem(row, col);
    saveCookie();
}

/**
 * Handles logic when the user clicks an item in the grid while in edit mode.
 */
function gridItemClickEdit(row, col, corner) {
    if (selected.item) {
        document.getElementById(selected.item).style.border = '1px solid white';
        var old = itemLayout[row][col];

        if (old == selected.item) {
            selected = {};
            return;
        }

        if (selected.item != 'blank') {
            document.getElementById(selected.item).style.opacity = 0.25;

            var r,c;
            var found = false;
            for (r = 0; r < 8; r++) {
                for (c = 0; c < 7; c++) {
                    if (itemLayout[r][c] == selected.item) {
                        itemLayout[r][c] = 'blank';
                        found = true;
                        break;
                    }
                }

                if (found) {
                    break;
                }
            }
        }

        itemLayout[row][col] = selected.item;
        updateGridItem(row, col);

        document.getElementById(old).style.opacity = 1;

        selected = {};
    } else if (selected.row !== undefined) {
        itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';

        var temp = itemLayout[row][col];
        itemLayout[row][col] = itemLayout[selected.row][selected.col];
        itemLayout[selected.row][selected.col] = temp;
        updateGridItem(row, col);
        updateGridItem(selected.row, selected.col);

        selected = {};
    } else {
        itemGrid[row][col]['item'].style.border = '3px solid yellow';
        selected = {row: row, col: col};
    }
}




function updateMap() {
    for (k = 0; k < chests.length; k++) {
        if (!chests[k].isOpened)
            document.getElementById(k).className = 'mapspan chest ' + chests[k].isAvailable();
    }
    for (k = 0; k < dungeons.length; k++) {
        document.getElementById('dungeon' + k).className = 'mapspan dungeon ' + dungeons[k].canGetChest();

        var DCcount = 0;
        for (var key in dungeons[k].chestlist) {
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
                if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable()) {
                    DCcount++;
                }
            }
        }

        var child = document.getElementById('dungeon' + k).firstChild;
        while (child) {
            if (child.className == 'chestCount') {
                if (DCcount == 0) {
                    child.innerHTML = '';
                } else {
                    child.innerHTML = DCcount;
                }
                break;
            }
            child = child.nextSibling;
        }
    }

    document.getElementById('submaparea').className = 'DC' + dungeons[dungeonSelect].isBeatable();
    var itemlist = document.getElementById('submaplist').children;
    for (var item in itemlist) {
        if (itemlist.hasOwnProperty(item)) {
            if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML].isOpened) {
                itemlist[item].className = 'DCopened';
            } else if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML].isAvailable()) {
                itemlist[item].className = 'DCavailable';
            } else {
                itemlist[item].className = 'DCunavailable';
            }
        }
    }
}

function itemConfigClick (sender) {
    var item = sender.id;

    if (selected.item) {
        document.getElementById(selected.item).style.border = '0px';
        sender.style.border = '3px solid yellow';
        selected = {item: item};
    } else if (selected.row !== undefined) {
        itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';
        var old = itemLayout[selected.row][selected.col];

        if (old == item) {
            selected = {};
            return;
        }

        if (item != 'blank') {
            sender.style.opacity = 0.25;

            var r, c;
            var found = false;
            for (r = 0; r < 8; r++) {
                for (c = 0; c < 7; c++) {
                    if (itemLayout[r][c] == item) {
                        itemLayout[r][c] = 'blank';
                        updateGridItem(r, c);
                        found = true;
                        break;
                    }
                }

                if (found) {
                    break;
                }
            }
        }

        itemLayout[selected.row][selected.col] = item;
        updateGridItem(selected.row, selected.col);

        document.getElementById(old).style.opacity = 1;

        selected = {};
    } else {
        sender.style.border = '3px solid yellow';
        selected = {item: item}
    }
}

function populateMapdiv() {
    var mapdiv = document.getElementById('mapdiv');

    // Initialize all chests on the map
    for (k = 0; k < chests.length; k++) {
        var s = document.createElement('span');
        s.style.backgroundImage = 'url(images/poi.png)';
        s.style.color = 'black';
        s.id = k;
        s.onclick = new Function('toggleChest(' + k + ')');
        s.onmouseover = new Function('highlight(' + k + ')');
        s.onmouseout = new Function('unhighlight(' + k + ')');
        s.style.left = chests[k].x;
        s.style.top = chests[k].y;
        if (chests[k].isOpened) {
            s.className = 'mapspan chest opened';
        } else {
            s.className = 'mapspan chest ' + chests[k].isAvailable();
        }

        var ss = document.createElement('span');
        ss.className = 'tooltip';
        ss.innerHTML = chests[k].name;
        s.appendChild(ss);

        mapdiv.appendChild(s);
    }

    // Dungeon bosses & chests
    for (k=0; k<dungeons.length; k++) {
        s = document.createElement('span');
        s.style.backgroundImage = 'url(images/poi.png)';
        s.id = 'dungeon' + k;

        s.onclick = new Function('clickDungeon(' + k + ')');
        s.onmouseover = new Function('highlightDungeon(' + k + ')');
        s.onmouseout = new Function('unhighlightDungeon(' + k + ')');
        s.style.left = dungeons[k].x;
        s.style.top = dungeons[k].y;
        s.className = 'mapspan dungeon ' + dungeons[k].canGetChest();

        var DCcount = 0;
        for (var key in dungeons[k].chestlist) {
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
                if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable()) {
                    DCcount++;
                }
            }
        }

        var ss = document.createElement('span');
        ss.className = 'chestCount';
        if (DCcount == 0) {
            ss.innerHTML = '';
        } else {
            ss.innerHTML = DCcount;
        }
        ss.style.color = 'black'
        s.style.textAlign = 'center';
        ss.display = 'inline-block';
        ss.style.lineHeight = '24px';
        s.appendChild(ss);

        var ss = document.createElement('span');
        ss.className = 'tooltipdungeon';
        ss.innerHTML = dungeons[k].name;
        s.appendChild(ss);

        mapdiv.appendChild(s);
    }

    // Update the DOM object that shows the dungeon name in the submaparea
    var dungeonNameDOM = document.getElementById('submaparea');
    dungeonNameDOM.innerHTML = dungeons[dungeonSelect].name;
    dungeonNameDOM.onclick = new Function('toggleDungeon(this,' + dungeonSelect + ')');
    dungeonNameDOM.onmouseover = new Function('highlightListItem(this)');
    dungeonNameDOM.onmouseout = new Function('unhighlightListItem(this)');
    dungeonNameDOM.style.cursor = 'pointer';
    dungeonNameDOM.className = 'DC' + dungeons[dungeonSelect].isBeatable();

    document.getElementById('dungeon' + dungeonSelect).style.backgroundImage = 'url(images/highlighted.png)';
    for (var key in dungeons[dungeonSelect].chestlist) {
        var s = document.createElement('li');
        s.innerHTML = key

        if (dungeons[dungeonSelect].chestlist[key].isOpened) {
            s.className = 'DCopened';
        }
        else if ( dungeons[dungeonSelect].chestlist[key].isAvailable()) {
            s.className = 'DCavailable';
        }
        else {
            s.className = 'DCunavailable';
        }

        s.onclick = new Function('toggleDungeonChest(this,' + dungeonSelect + ',"' + key + '")');
        s.onmouseover = new Function('highlightListItem(this)');
        s.onmouseout = new Function('unhighlightListItem(this)');
        s.style.cursor = 'pointer';

        document.getElementById('submaplist').appendChild(s);
    }
}

function populateItemconfig() {
    var grid = document.getElementById('itemconfig');

    var i = 0;

    var row;

    for (var key in items) {
        if (i % 10 == 0) {
            row = document.createElement('tr');
            grid.appendChild(row);
        }
        i++;

        var rowitem = document.createElement('td');
        rowitem.className = 'corner';
        rowitem.id = key;
        rowitem.style.backgroundSize = '100% 100%';
        rowitem.onclick = new Function('itemConfigClick(this)');
        if ((typeof items[key]) == 'boolean') {
            rowitem.style.backgroundImage = 'url(images/' + key + '.png)';
        } else {
            rowitem.style.backgroundImage = 'url(images/' + key + itemsMax[key] + '.png)';
        }
        row.appendChild(rowitem);
    }
}

function isBridgeOpen() {
    switch (ganonlogic) {
        case 'Open':
            return true;
        case 'Vanilla':
            return items['ShadowMedallion'] && items['SpiritMedallion'];
        case 'Medallions':
            return items['ForestMedallion'] &&
                items['FireMedallion'] &&
                items['WaterMedallion'] &&
                items['LightMedallion'] &&
                items['ShadowMedallion'] &&
                items['SpiritMedallion'];
        case 'Dungeons':
            return items['KokiriEmerald'] &&
                items['GoronRuby'] &&
                items['ZoraSapphire'] &&
                items['ForestMedallion'] &&
                items['FireMedallion'] &&
                items['WaterMedallion'] &&
                items['LightMedallion'] &&
                items['ShadowMedallion'] &&
                items['SpiritMedallion'];
    }
    return false;
}

function init() {
    createItemTracker(document.getElementById('itemdiv'));
    populateMapdiv();
    populateItemconfig();

    loadCookie();
    saveCookie();
}

function preloader() {
    for (item in items) {
        if ((typeof items[item]) == 'boolean') {
            var img = new Image();
            img.src = 'images/' + item + '.png';
        } else {
            for (i = itemsMin[item]; i < itemsMax[item]; i++) {
                var img = new Image();
                img.src = 'images/' + item + i + '.png';
            }
        }
    }

    for (medallion in dungeonImg) {
        var img = new Image();
        img.src = 'images/' + dungeonImg[medallion] + '.png';
    }
}
function addLoadEvent(func) {
    var oldonload = window.onload;
    if (typeof window.onload != 'function') {
        window.onload = func;
    } else {
        window.onload = function() {
            if (oldonload) {
                oldonload();
            }
            func();
        }
    }
}
addLoadEvent(preloader);
