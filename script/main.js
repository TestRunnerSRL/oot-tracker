var medallions = [];
var dungeonImg = ['Unknown', 'Slingshot0', 'Bombs0', 'Boomerang', 'Bow0', 'Hammer', 'Hookshot0', 'HoverBoots', 'MirrorShield']
ganonlogic = 'Open';
showprizes = false;

var itemGrid = [];
var itemLayout = [];

var editmode = false;
var selected = {};

var dungeonSelect = 0;

function setCookie(obj) {
    var d = new Date();
    d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    var val = JSON.stringify(obj);
    document.cookie = "key=" + val + ";" + expires + ";path=/";
}

function getCookie() {
    var name = "key=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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

var cookiekeys = ['map', 'iZoom', 'mZoom', 'mOrien', 'mPos', 'glogic', 'prize', 'items'];
var cookieDefault = {
    map:1,
    iZoom:100,
    mZoom:100,
    mPos:0,
    glogic:'Open',
    prize:1,
    items:defaultItemGrid
}

var cookielock = false;
function loadCookie() {
    if (cookielock)
        return;
    cookielock = true;

    cookieobj = getCookie();

    cookiekeys.forEach(function (key) {
        if (cookieobj[key] === undefined) {
            cookieobj[key] = cookieDefault[key];
        }
    });

    initGridRow(JSON.parse(JSON.stringify(cookieobj.items)));

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
        rbutton = document.getElementsByName('ganonlogic')[rbuttonID]
        if (rbutton.value == cookieobj.glogic)
            rbutton.click();
    }

    cookielock = false;
}

function saveCookie() {
    if (cookielock)
        return;
    cookielock = true;

    cookieobj = {};

    cookieobj.map = document.getElementsByName('showmap')[0].checked ? 1 : 0;
    cookieobj.iZoom = document.getElementsByName('itemdivsize')[0].value;
    cookieobj.mZoom = document.getElementsByName('mapdivsize')[0].value;

    cookieobj.mPos = document.getElementsByName('mapposition')[1].checked ? 1 : 0;

    cookieobj.prize = document.getElementsByName('showprizes')[0].checked ? 1 : 0;

    for (rbuttonID in document.getElementsByName('ganonlogic')) {
        rbutton = document.getElementsByName('ganonlogic')[rbuttonID]
        if (rbutton.checked)
            cookieobj.glogic = rbutton.value;
    }

    cookieobj.items = JSON.parse(JSON.stringify(itemLayout));

    setCookie(cookieobj);

    cookielock = false;
}

// Event of clicking a chest on the map
function toggleChest(x){
    chests[x].isOpened = !chests[x].isOpened;
    if(chests[x].isOpened)
        document.getElementById(x).className = "mapspan chest opened";
    else
        document.getElementById(x).className = "mapspan chest " + chests[x].isAvailable();
}

// Highlights a chest location
function highlight(x){
    document.getElementById(x).style.backgroundImage = "url(images/highlighted.png)";
}

function unhighlight(x){
    document.getElementById(x).style.backgroundImage = "url(images/poi.png)";
}

// Highlights a chest location (but for dungeons)
function highlightDungeon(x){
    document.getElementById("dungeon"+x).style.backgroundImage = "url(images/highlighted.png)";
}

function unhighlightDungeon(x){
    if (dungeonSelect != x)
        document.getElementById("dungeon"+x).style.backgroundImage = "url(images/poi.png)";
}

function clickDungeon(d){
    document.getElementById("dungeon"+dungeonSelect).style.backgroundImage = "url(images/poi.png)";
    dungeonSelect = d;
    document.getElementById("dungeon"+dungeonSelect).style.backgroundImage = "url(images/highlighted.png)";

    document.getElementById('submaparea').innerHTML = dungeons[dungeonSelect].name;
    document.getElementById('submaparea').className = "DC" + dungeons[dungeonSelect].isBeatable();
    var DClist = document.getElementById('submaplist');
    DClist.innerHTML = ""

    for (var key in dungeons[dungeonSelect].chestlist) {
        var s = document.createElement('li');
        s.innerHTML = key

        if ( dungeons[dungeonSelect].chestlist[key].isOpened)
            s.className = "DCopened";               
        else if ( dungeons[dungeonSelect].chestlist[key].isAvailable())
            s.className = "DCavailable";               
        else
            s.className = "DCunavailable";               

        s.onclick = new Function('toggleDungeonChest(this,'+dungeonSelect+',"'+key+'")');
        s.onmouseover = new Function('highlightDungeonChest(this)');
        s.onmouseout = new Function('unhighlightDungeonChest(this)');
        s.style.cursor = "pointer";

        DClist.appendChild(s)
    }
}

function toggleDungeonChest(sender, d, c){
    dungeons[d].chestlist[c].isOpened = !dungeons[d].chestlist[c].isOpened;
    if(dungeons[d].chestlist[c].isOpened)
        sender.className = "DCopened";
    else if(dungeons[d].chestlist[c].isAvailable())
        sender.className = "DCavailable";     
    else
        sender.className = "DCunavailable";
    document.getElementById("dungeon"+d).className = "mapspan dungeon " + dungeons[d].canGetChest();

    var DCcount = 0;
    for (var key in dungeons[d].chestlist) {
        if (dungeons[d].chestlist.hasOwnProperty(key)) {
            if (!dungeons[d].chestlist[key].isOpened && dungeons[d].chestlist[key].isAvailable())
                DCcount++;
        }
    }
    if (DCcount == 0)
        document.getElementById("dungeon"+d).innerHTML = "";
    else
        document.getElementById("dungeon"+d).innerHTML = DCcount;
}

function highlightDungeonChest(x){
    x.style.backgroundColor = "#282828"
}

function unhighlightDungeonChest(x){
    x.style.backgroundColor = ""
}

function setOrder(H) {
    if (H) {
        document.getElementById('layoutdiv').classList.remove('flexcontainer');
    } 
    else {
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

function setZoom(target, sender) {
    document.getElementById(target).style.zoom = sender.value / 100;
    document.getElementById(target).style.zoom = sender.value / 100;

    document.getElementById(target).style.MozTransform = "scale(" + (sender.value / 100) + ")";
    document.getElementById(target).style.MozTransformOrigin = "0 0";

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
        var x = document.getElementById("settings");
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
    showTracker('mapdiv', {checked:false});
    document.getElementById('settings').style.display = 'none';
    document.getElementById('itemconfig').style.display = '';

    document.getElementById('settingsbutton').innerHTML = 'Exit Edit Mode';
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

            var tdt = document.createElement('table');
            tdt.className = 'lonk';
            itemGrid[r][i]['item'].appendChild(tdt);

                var tdtr1 = document.createElement('tr');
                tdt.appendChild(tdtr1);
                    itemGrid[r][i][0] = document.createElement('th');
                    itemGrid[r][i][0].className = 'corner';
                    itemGrid[r][i][0].onclick = new Function("gridItemClick("+r+","+i+",0)");
                    tdtr1.appendChild(itemGrid[r][i][0]);
                    itemGrid[r][i][1] = document.createElement('th');
                    itemGrid[r][i][1].className = 'corner';
                    itemGrid[r][i][1].onclick = new Function("gridItemClick("+r+","+i+",1)");
                    tdtr1.appendChild(itemGrid[r][i][1]);
                var tdtr2 = document.createElement('tr');
                tdt.appendChild(tdtr2);
                    itemGrid[r][i][2] = document.createElement('th');
                    itemGrid[r][i][2].className = 'corner';
                    itemGrid[r][i][2].onclick = new Function("gridItemClick("+r+","+i+",2)");
                    tdtr2.appendChild(itemGrid[r][i][2]);
                    itemGrid[r][i][3] = document.createElement('th');
                    itemGrid[r][i][3].className = 'corner';
                    itemGrid[r][i][3].onclick = new Function("gridItemClick("+r+","+i+",3)");
                    tdtr2.appendChild(itemGrid[r][i][3]);
        }

        var half = document.createElement('td');
        half.className = 'halfcell';
        tr.appendChild(half);
        itemGrid[r]['button'] = document.createElement('button');
        itemGrid[r]['button'].innerHTML = '-';
        itemGrid[r]['button'].style.backgroundColor = 'red';		
        itemGrid[r]['button'].style.color = 'white';	
        itemGrid[r]['button'].onclick = new Function("clickRowButton(" + r + ")");;
        half.appendChild(itemGrid[r]['button']);
    }
}

function updateGridItem(row, index) {
    var item = itemLayout[row][index];

    if (editmode) {
        if (!item || item == 'blank') {
            itemGrid[row][index]['item'].style.backgroundImage = ("url(images/blank.png)");
        }
        else if((typeof items[item]) == "boolean"){
            itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + ".png)";
        }
        else{
            itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + itemsMax[item] + ".png)";
        }

        itemGrid[row][index]['item'].style.border = '1px solid white';
        itemGrid[row][index]['item'].style.opacity = 1;

        return;
    }

    itemGrid[row][index]['item'].style.border = '0px';
    itemGrid[row][index]['item'].style.opacity = '';

    if (!item || item == 'blank') {
        itemGrid[row][index]['item'].style.backgroundImage = '';
        return;
    }

    if((typeof items[item]) == "boolean"){
        itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + ".png)";
    }
    else{
        itemGrid[row][index]['item'].style.backgroundImage = "url(images/" + item + items[item] + ".png)";
    }

    itemGrid[row][index]['item'].className = "griditem " + (!!items[item]);

    if (medallions[item] !== undefined){
        if (showprizes)
            itemGrid[row][index][3].style.backgroundImage = "url(images/" + dungeonImg[medallions[item]] + ".png)";
        else
            itemGrid[row][index][3].style.backgroundImage = "";           
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
    if (item != 'blank')
        document.getElementById(item).style.opacity = 0.25;
    updateGridItem(row, index)
}

function initGridRow(itemsets) {
    medallions = {
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

                    if (found)
                        break;
                }
            }

            itemLayout[row][col] = selected.item;
            updateGridItem(row, col);

            document.getElementById(old).style.opacity = 1;

            selected = {};
        } else if (selected.row !== undefined) {
            itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';

            var temp = itemLayout[row][col]
            itemLayout[row][col] = itemLayout[selected.row][selected.col];
            itemLayout[selected.row][selected.col] = temp;
            updateGridItem(row, col);
            updateGridItem(selected.row, selected.col);

            selected = {};
        } else {
            itemGrid[row][col]['item'].style.border = '3px solid yellow';
            selected = {row:row, col:col};		
        }
        return;
    }

    var item = itemLayout[row][col];

    if(medallions[item] !== undefined && showprizes){
        if (corner == 3) {
            medallions[item]++;
            if (medallions[item] >=  9)
                medallions[item] = 0;
        } 
        else {
            items[item] = !items[item];
        }
    }
    else if((typeof items[item]) == "boolean"){
        items[item] = !items[item];
    }
    else{
        items[item]++;
        if(items[item] > itemsMax[item]){
            items[item] = itemsMin[item];
        }
    }

    updateMap()
    updateGridItem(row,col);
}

function updateMap() {
    for(k=0; k<chests.length; k++){
        if(!chests[k].isOpened)
            document.getElementById(k).className = "mapspan chest " + chests[k].isAvailable();
    }
    for(k=0; k<dungeons.length; k++){
        document.getElementById("dungeon"+k).className = "mapspan dungeon " + dungeons[k].canGetChest();

        var DCcount = 0;
        for (var key in dungeons[k].chestlist) {
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
                if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable())
                    DCcount++;
            }
        }

        var child = document.getElementById("dungeon"+k).firstChild;
        while (child) {
            if (child.className == "chestCount") {
                if (DCcount == 0)
                    child.innerHTML = "";
                else
                    child.innerHTML = DCcount;
                break;
            }
            child = child.nextSibling;
        }
    }

    document.getElementById('submaparea').className = "DC" + dungeons[dungeonSelect].isBeatable();
    var itemlist = document.getElementById('submaplist').children
    for (var item in itemlist) {
        if (itemlist.hasOwnProperty(item)) {
            if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML].isOpened)
                itemlist[item].className = "DCopened";            
            else if ( dungeons[dungeonSelect].chestlist[itemlist[item].innerHTML].isAvailable())
                itemlist[item].className = "DCavailable";        
            else
                itemlist[item].className = "DCunavailable";                
        }
    }
}

function itemConfigClick (sender) {
    var item = sender.id;

    if (selected.item) {
        document.getElementById(selected.item).style.border = '0px';
        sender.style.border = '3px solid yellow';
        selected = {item:item};	
    } else if (selected.row !== undefined) {
        itemGrid[selected.row][selected.col]['item'].style.border = '1px solid white';
        var old = itemLayout[selected.row][selected.col];

        if (old == item) {
            selected = {};
            return;
        }

        if (item != 'blank') {
            sender.style.opacity = 0.25;

            var r,c;
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

                if (found)
                    break;
            }
        }

        itemLayout[selected.row][selected.col] = item;
        updateGridItem(selected.row, selected.col);

        document.getElementById(old).style.opacity = 1;

        selected = {};
    } else {
        sender.style.border = '3px solid yellow';
        selected = {item:item}
    }
}

function populateMapdiv() {
    var mapdiv = document.getElementById('mapdiv');

    // Initialize all chests on the map
    for(k=0; k<chests.length; k++){
        var s = document.createElement('span');
        s.style.backgroundImage = 'url(images/poi.png)';
        s.style.color = 'black';
        s.id = k;
        s.onclick = new Function('toggleChest('+k+')');
        s.onmouseover = new Function('highlight('+k+')');
        s.onmouseout = new Function('unhighlight('+k+')');
        s.style.left = chests[k].x;
        s.style.top = chests[k].y;
        if(chests[k].isOpened)
            s.className = "mapspan chest opened";
        else
            s.className = "mapspan chest " + chests[k].isAvailable();

        var ss = document.createElement('span');
        ss.className = "tooltip";
        ss.innerHTML = chests[k].name;
        s.appendChild(ss);

        mapdiv.appendChild(s);
    }

    // Dungeon bosses & chests
    for(k=0; k<dungeons.length; k++){
        s = document.createElement('span');
        s.style.backgroundImage = 'url(images/poi.png)';
        s.id = 'dungeon' + k;

        s.onclick = new Function('clickDungeon('+k+')');
        s.onmouseover = new Function('highlightDungeon('+k+')');
        s.onmouseout = new Function('unhighlightDungeon('+k+')');
        s.style.left = dungeons[k].x;
        s.style.top = dungeons[k].y;
        s.className = "mapspan dungeon " + dungeons[k].canGetChest();

        var DCcount = 0;
        for (var key in dungeons[k].chestlist) {
            if (dungeons[k].chestlist.hasOwnProperty(key)) {
                if (!dungeons[k].chestlist[key].isOpened && dungeons[k].chestlist[key].isAvailable())
                    DCcount++;
            }
        }

        var ss = document.createElement('span');
        ss.className = "chestCount";
        if (DCcount == 0)
            ss.innerHTML = "";
        else
            ss.innerHTML = DCcount;
        ss.style.color = "black"
        s.style.textAlign = "center";
        ss.display = "inline-block";
        ss.style.lineHeight = "24px";
        s.appendChild(ss);

        var ss = document.createElement('span');
        ss.className = "tooltipgray";
        ss.innerHTML = dungeons[k].name;
        s.appendChild(ss);

        mapdiv.appendChild(s);
    }

    document.getElementById('submaparea').innerHTML = dungeons[dungeonSelect].name;
    document.getElementById('submaparea').className = "DC" + dungeons[dungeonSelect].isBeatable();
    document.getElementById("dungeon"+dungeonSelect).style.backgroundImage = "url(images/highlighted.png)";
    for (var key in dungeons[dungeonSelect].chestlist) {
        var s = document.createElement('li');
        s.innerHTML = key

        if ( dungeons[dungeonSelect].chestlist[key].isOpened)
            s.className = "DCopened";               
        else if ( dungeons[dungeonSelect].chestlist[key].isAvailable())
            s.className = "DCavailable";               
        else
            s.className = "DCunavailable";               

        s.onclick = new Function('toggleDungeonChest(this,'+dungeonSelect+',"'+key+'")');
        s.onmouseover = new Function('highlightDungeonChest(this)');
        s.onmouseout = new Function('unhighlightDungeonChest(this)');
        s.style.cursor = "pointer";

        document.getElementById('submaplist').appendChild(s)
    }
}

function populateItemconfig() {
    var grid = document.getElementById('itemconfig');

    var i = 0;

    var row;

    for (var key in items) {
        if (i % 10 == 0){
            row = document.createElement('tr');
            grid.appendChild(row);
        }
        i++;

        var rowitem = document.createElement('td');
        rowitem.className = 'corner';
        rowitem.id = key;
        rowitem.style.backgroundSize = '100% 100%';
        rowitem.onclick = new Function('itemConfigClick(this)');
        if((typeof items[key]) == "boolean"){
            rowitem.style.backgroundImage = "url(images/" + key + ".png)";
        }
        else{
            rowitem.style.backgroundImage = "url(images/" + key + itemsMax[key] + ".png)";
        }
        row.appendChild(rowitem);
    }		
}

function isBridgeOpen() {
    switch (ganonlogic) {
        case "Open":
            return true;
        case "Vanilla":
            return (items['ShadowMedallion'] && items['SpiritMedallion']);
        case "Medallions":
            return (items['ForestMedallion'] && items['FireMedallion'] && 
                items['WaterMedallion'] && items['LightMedallion'] && 
                items['ShadowMedallion'] && items['SpiritMedallion']);
        case "Dungeons":
            return (items['KokiriEmerald'] && items['GoronRuby'] && items['ZoraSapphire'] && 
                items['ForestMedallion'] && items['FireMedallion'] && 
                items['WaterMedallion'] && items['LightMedallion'] && 
                items['ShadowMedallion'] && items['SpiritMedallion']);
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
        if((typeof items[item]) == "boolean") {
            var img = new Image();
            img.src = "images/" + item + ".png";
        }
        else{
            for (i = itemsMin[item]; i < itemsMax[item]; i++) {
                var img = new Image();
                img.src = "images/" + item + i + ".png";
            }
        }
    }

    for (medallion in dungeonImg) {
        var img = new Image();
        img.src = "images/" + dungeonImg[medallion] + ".png";
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