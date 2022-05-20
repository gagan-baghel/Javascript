a = new Date();
let date;
let time;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
	date = a.toLocaleDateString(undefined,options);
	time = a.toLocaleTimeString('en-US');
	document.getElementById("time").innerHTML =  time + " <br> on " + date;
}, 1000);