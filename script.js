function startTime() {
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    var s = today.getSeconds();
    m = checkTime(m);
    s = checkTime(s);
    document.getElementById('txt').innerHTML =
        h + ":" + m + ":" + s;
    var t = setTimeout(startTime, 500);
}


function checkTime(i) {
    if (i < 10) {
        i = "0" + i
    }; // add zero in front of numbers < 10
    return i;
}

function MouseRollover9(MyImage) {
    MyImage.src = "call_of_duty.jpg";



}

function MouseOut9(MyImage) {
    MyImage.src = "MostWanted.jpg";
}

function MouseRollover10(MyImage) {
    MyImage.src = "desert.jpg";



}

function MouseOut10(MyImage) {
    MyImage.src = "Assassins.jpg";
}

function MouseRollover1(MyImage) {
    MyImage.src = "call_of_duty.jpg";



}

function MouseOut1(MyImage) {
    MyImage.src = "MostWanted.jpg";
}

function MouseRollover2(MyImage) {
    MyImage.src = "GTA.jpg";



}

function MouseOut2(MyImage) {
    MyImage.src = "Witcher.jpg";
}

function MouseRollover3(MyImage) {
    MyImage.src = "ResidentEvil.jpg";



}

function MouseOut3(MyImage) {
    MyImage.src = "Fifa.jpg";
}

function MouseRollover5(MyImage) {
    MyImage.src = "darksouls.jpg";



}

function MouseOut5(MyImage) {
    MyImage.src = "phantom.png";
}

function MouseRollover7(MyImage) {
    MyImage.src = "Blood.jpg";



}

function MouseOut7(MyImage) {
    MyImage.src = "unchartered.jpg";
}

function MouseRollover8(MyImage) {
    MyImage.src = "spiderman.jpg";



}

function MouseOut8(MyImage) {
    MyImage.src = "thelastofus.jpg";
}


function validateForm() {

    var x = document.forms["myForm"]["fname"].value;
    if (x == null || x == "") {
        alert("First Name must be filled out");
        return false;
    }

    var y = document.forms["myForm"]["lname"].value;
    if (y == null || y == "") {
        alert("Last name must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["email"].value;
    if (y == null || y == "") {
        alert("Email address must be filled out");
        return false;
    }
    var y = document.forms["myForm"]["pnumber"].value;
    if (y == null || y == "") {
        alert("Phone number must be filled out");
        return false;
    }


    function checkCost()
    /* This function checks which Games the user has selected and calculates the total
    cost  for them */
    {
        var costs = [39.00, 45.00, 61.00]; // array holding costs for each treatment
        var totalCost = 0;
        var Games = document.UserDetails.elements.Games; // array holding the checkboxes
        for (var i = 0; i < Games.length; i++) // loops through each checkbox
        {

            if (Games[i].checked) // treatment selected
            {
                totalCost = totalCost + costs[i]; // add cost of this treatment to total
            }
        }
        alert("Total cost of these games will be �" + totalCost); // display the total cost
    }
    // <![CDATA[  <-- For SVG support
    if ('WebSocket' in window) {
        (function() {
            function refreshCSS() {
                var sheets = [].slice.call(document.getElementsByTagName("link"));
                var head = document.getElementsByTagName("head")[0];
                for (var i = 0; i < sheets.length; ++i) {
                    var elem = sheets[i];
                    var parent = elem.parentElement || head;
                    parent.removeChild(elem);
                    var rel = elem.rel;
                    if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
                        var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
                        elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
                    }
                    parent.appendChild(elem);
                }
            }
            var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
            var address = protocol + window.location.host + window.location.pathname + '/ws';
            var socket = new WebSocket(address);
            socket.onmessage = function(msg) {
                if (msg.data == 'reload') window.location.reload();
                else if (msg.data == 'refreshcss') refreshCSS();
            };
            if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
                console.log('Live reload enabled.');
                sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
            }
        })();
    } else {
        console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
    }
}