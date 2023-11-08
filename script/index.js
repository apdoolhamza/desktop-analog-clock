// calling some elements
const currentTimeBtn = document.getElementById('currentTimeBtn');
const clockdates = document.getElementById('clock-dates');
const clockhour = document.getElementById('clock-hour');
const clockmint = document.getElementById('clock-mint');
const clocksec = document.getElementById('clock-sec');
const incrementbtn = document.getElementById('increment-btn');
const decrementbtn = document.getElementById('decrement-btn');
const currenthours = document.getElementById('current-hours');
const currentmints = document.getElementById('current-mints');
const settingbtn = document.querySelector('.setting-btn');
const settingbtnhide = document.querySelector('.setting-btn-hide');
const clocksetting = document.querySelector('.clock-setting');
const popupdiv = document.querySelector('.pop-up-div');
const unlockbtn = document.querySelector('.unlock-btn');
const ampm = document.getElementById('am-pm');

// declaring variables to hold defualt value
let datecount = 01;
let seccount = -90;
let ourcount = -90;
let cthours = 0;
let cmints = 0;
let mintcount = -90;

// function to rotate hour indicator
function rotateour(){
	// increment hour indicator by 30deg
 ourcount+=30;
clockhour.style.transform = 'rotate('+ourcount+'deg'+')';

cthours++;
currenthours.innerHTML = '0' + cthours;
mintcount = -90;
if (cthours >= 10) {
currenthours.innerHTML = cthours;
};
if (cthours === 12) {
	cthours = 0;
};
}

// function to change date 
function chagedate(){
	datecount++;
	clockdates.innerHTML = '0' + datecount;
if (datecount >= 10) {
clockdates.innerHTML = datecount;
};
if (datecount === 31) {
	datecount = 00;
};
}

// function to rotate mint indicator
function rotateminty(){
	// increment mint indicator by 6deg
		mintcount+=6;
		cmints++;
clockmint.style.transform = 'rotate('+mintcount+'deg'+')';
currentmints.innerHTML = '0' + cmints;
if (cmints >= 10) {
currentmints.innerHTML = cmints;
};
// if currant mints === 60 than change it as defualt '00' 
if (cmints === 60) {
currentmints.innerHTML = '00';
	cmints=00;
};
// if mint counter === 270(60-mints) than call rotate hour function
 if (mintcount === 270) {
 	rotateour();
 };
// if hour counter === 270(12-hours) than AmPm = "PM"
    if (ourcount === 270) {
	ampm.innerHTML ="PM";
 };
// if hour counter === 630(24-hours) than call changedate() function & AmPm = "Am" & change hour counter to default
   if (ourcount === 630) {
	chagedate();
	ampm.innerHTML ="AM";
ourcount = -90;
 };
}

// Create & rotate second counter indicator
	var setcounter = setInterval(function(){
		seccount+=6;
clocksec.style.transform='rotate('+seccount+'deg'+')';
clocksec.style.transition="all 2s linear";
clocksec.style.backgroundColor="red";
	},1000);

// create mints counter
var mintcountrotater = setInterval(function() {
 rotateminty();
},60000);

// increment mint nbtn
function increment(){
 rotateminty();
}

 //Enter key Long-press event to rotate minty
let EnterkeyPress;
document.addEventListener('keydown',(event) => {
  if (event.key === 'Enter') {
    EnterkeyPress = setTimeout(function() {
 rotateminty();
    }, 000);
  }
});
document.addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    clearTimeout(EnterkeyPress);
  }
});


//decrement mint nbtn
function decrement(){
 		mintcount-=6;
cmints--;
currentmints.innerHTML = '0' + cmints;
 if (cmints <= 2){
 		mintcount= -90;
currentmints.innerHTML = '00';
cmints="00";
 };
if (cmints >= 10) {
currentmints.innerHTML = cmints;
};
if (cmints === 60) {
currentmints.innerHTML = '00';
	cmints=00;
};
clockmint.style.transform = 'rotate('+mintcount+'deg'+')';
}

/*show clock setting container*/
settingbtn.addEventListener("click", function() {
clocksetting.style.opacity="1";
settingbtnhide.style.display="block";
settingbtnhide.style.backgroundColor="#e9ecef";
settingbtnhide.style.color="black";
},false );

/*hide clock setting container*/
settingbtnhide.addEventListener("click", function() {
clocksetting.style.opacity="0";
settingbtn.style.display = "block";
settingbtnhide.style.display="none";
},false );


/*function to set currant time using local machine time*/
function currentTime() {
var thetime = new Date();
var hours = thetime.getHours();
var minuts = thetime.getMinutes();
var scons = thetime.getSeconds();
var day = thetime.getDate();
var ap = (hours >= 12)? 'PM' : 'AM';
hours = (hours >= 13)? hours -= 12 : hours;

// check if minuts of currant time match from(1 to 60-mints) to rotate mints indicator
switch(minuts){
	case 0:
clockmint.style.transform = 'rotate(-90deg)';
break;
case 1:
clockmint.style.transform = 'rotate(-84deg)';
break;
case 2:
clockmint.style.transform = 'rotate(-78deg)';
break;
case 3:
clockmint.style.transform = 'rotate(-72deg)';
break;
case 4:
clockmint.style.transform = 'rotate(-66deg)';
break;
case 5:
clockmint.style.transform = 'rotate(-60deg)';
break;
case 6:
clockmint.style.transform = 'rotate(-54deg)';
break;
case 7:
clockmint.style.transform = 'rotate(-48deg)';
break;
case 8:
clockmint.style.transform = 'rotate(-42deg)';
break;
case 9:
clockmint.style.transform = 'rotate(-36deg)';
break;
case 10:
clockmint.style.transform = 'rotate(-30deg)';
break;
case 11:
clockmint.style.transform = 'rotate(-24deg)';
break;
case 12:
clockmint.style.transform = 'rotate(-18deg)';
break;
case 13:
clockmint.style.transform = 'rotate(-12deg)';
break;
case 14:
clockmint.style.transform = 'rotate(-6deg)';
break;
case 15:
clockmint.style.transform = 'rotate(0deg)';
break;
case 16:
clockmint.style.transform = 'rotate(6deg)';
break;
case 17:
clockmint.style.transform = 'rotate(12deg)';
break;
case 18:
clockmint.style.transform = 'rotate(18deg)';
break;
case 19:
clockmint.style.transform = 'rotate(24deg)';
break;
case 20:
clockmint.style.transform = 'rotate(30deg)';
break;
case 21:
clockmint.style.transform = 'rotate(36deg)';
break;
case 22:
clockmint.style.transform = 'rotate(42eg)';
break;
case 23:
clockmint.style.transform = 'rotate(48deg)';
break;
case 24:
clockmint.style.transform = 'rotate(54deg)';
break;
case 25:
clockmint.style.transform = 'rotate(60deg)';
break;
case 26:
clockmint.style.transform = 'rotate(66deg)';
break;
case 27:
clockmint.style.transform = 'rotate(72deg)';
break;
case 28:
clockmint.style.transform = 'rotate(78deg)';
break;
case 29:
clockmint.style.transform = 'rotate(84deg)';
break;
case 30:
clockmint.style.transform = 'rotate(90deg)';
break;
case 31:
clockmint.style.transform = 'rotate(96deg)';
break;
case 32:
clockmint.style.transform = 'rotate(102deg)';
break;
case 33:
clockmint.style.transform = 'rotate(108deg)';
break;
case 34:
clockmint.style.transform = 'rotate(114deg)';
break;
case 35:
clockmint.style.transform = 'rotate(120deg)';
break;
case 36:
clockmint.style.transform = 'rotate(126deg)';
break;
case 37:
clockmint.style.transform = 'rotate(132deg)';
break;
case 38:
clockmint.style.transform = 'rotate(138deg)';
break;
case 39:
clockmint.style.transform = 'rotate(144deg)';
break;
case 40:
clockmint.style.transform = 'rotate(150deg)';
break;
case 41:
clockmint.style.transform = 'rotate(156deg)';
break;
case 42:
clockmint.style.transform = 'rotate(162deg)';
break;
case 43:
clockmint.style.transform = 'rotate(168deg)';
break;
case 44:
clockmint.style.transform = 'rotate(174deg)';
break;
case 45:
clockmint.style.transform = 'rotate(180deg)';
break;
case 46:
clockmint.style.transform = 'rotate(186deg)';
break;
case 47:
clockmint.style.transform = 'rotate(192deg)';
break;
case 48:
clockmint.style.transform = 'rotate(198deg)';
break;
case 49:
clockmint.style.transform = 'rotate(204deg)';
break;
case 50:
clockmint.style.transform = 'rotate(210deg)';
break;
case 51:
clockmint.style.transform = 'rotate(216deg)';
break;
case 52:
clockmint.style.transform = 'rotate(222deg)';
break;
case 53:
clockmint.style.transform = 'rotate(228deg)';
break;
case 54:
clockmint.style.transform = 'rotate(234deg)';
break;
case 55:
clockmint.style.transform = 'rotate(240deg)';
break;
case 56:
clockmint.style.transform = 'rotate(246deg)';
break;
case 57:
clockmint.style.transform = 'rotate(252deg)';
break;
case 58:
clockmint.style.transform = 'rotate(258deg)';
break;
case 59:
clockmint.style.transform = 'rotate(264deg)';
break;
case 60:
clockmint.style.transform = 'rotate(270deg)';
break;
}

// check if hours of currant time match from(1 to 12-hours) to rotate hour indicator
switch(hours){
	case 0:
clockhour.style.transform = 'rotate(-90deg)';
break;
case 1:
clockhour.style.transform = 'rotate(-60deg)';
break;
case 2:
clockhour.style.transform = 'rotate(-30deg)';
break;
case 3:
clockhour.style.transform = 'rotate(0deg)';
break;
case 4:
clockhour.style.transform = 'rotate(30deg)';
break;
case 5:
clockhour.style.transform = 'rotate(60deg)';
break;
case 6:
clockhour.style.transform = 'rotate(90deg)';
break;
case 7:
clockhour.style.transform = 'rotate(120deg)';
break;
case 8:
clockhour.style.transform = 'rotate(150deg)';
break;
case 9:
clockhour.style.transform = 'rotate(180deg)';
break;
case 10:
clockhour.style.transform = 'rotate(210deg)';
break;
case 11:
clockhour.style.transform = 'rotate(240deg)';
break;
case 12:
clockhour.style.transform = 'rotate(270deg)';
break;
}

clockdates.innerHTML = '0' + day;
currenthours.innerHTML = '0' + hours;
currentmints.innerHTML = '0' + minuts;
ampm.innerHTML = ap;

if (day >= 10) {
clockdates.innerHTML = day;
};
if (hours >= 10) {
currenthours.innerHTML = hours;
};
if (minuts >= 10) {
currentmints.innerHTML = minuts;
};
var mintcountrter = setTimeout(function() {
currentTime();
},1000);
clearInterval(mintcountrotater);
currentTimeBtn.style.backgroundColor = "#e9ecef";
currentTimeBtn.style.color = "black";
popupdiv.style.display="block";
unlockbtn.style.display = "block";
}