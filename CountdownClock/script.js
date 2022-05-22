const daysEle = document.getElementById('days');
const hoursEle = document.getElementById('hours');
const secondsEle = document.getElementById('seconds');
const minutesEle = document.getElementById('minutes');

const newyear = '1 Jan 2023';

function countdown(){
	const newyeard = new Date(newyear)
	const todayd = new Date()
	const totalseconds= (newyeard-todayd)/1000;
	const minutes = Math.floor(totalseconds/60 % 60) ;
	const hours = Math.floor(totalseconds/3600)%24;
	const days = Math.floor(totalseconds /3600/24) ;
	const seconds = Math.floor(totalseconds % 60);
	console.log(days , hours ,minutes,seconds);

	daysEle.innerHTML = formattime(days);
	hoursEle.innerHTML = formattime(hours);
	minutesEle.innerHTML = formattime(minutes);
	secondsEle.innerHTML = formattime(seconds);

}

function formattime(time){
	return time<10 ? `0${time}`: time;
}
countdown();
setInterval(countdown, 1000);
