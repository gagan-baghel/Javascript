const questionData = [
	{
		question: "What is the capital of India?",
		a: "New Delhi",
		b: "Mumbai",
		c: "Chennai",
		d: "Kolkata",
		correctAnswer: "a"
	},
	{
		question: "Best Programming Language?",
		a: "Java",
		b: "C++",
		c: "Python",
		d: "C",
		correctAnswer: "a"
	},
	{
		question: "Who is the CEO of Google?",
		a: "Hella Pichai",
		b: "Satya Nadella",
		c: "Sundar Pichai",
		d: "himachal Pichai",
		correctAnswer: "c"

	}
]
const result = document.getElementById("header");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");
let currentQuestion = 0;
let score = 0;
loadQuiz();
function loadQuiz(){
deselect();
questionEl.innerHTML = questionData[currentQuestion].question;
a_text.innerHTML = questionData[currentQuestion].a;
b_text.innerHTML = questionData[currentQuestion].b;
c_text.innerHTML = questionData[currentQuestion].c;
d_text.innerHTML = questionData[currentQuestion].d;
}


function getSelected(){
	const answerEls = document.querySelectorAll(".answer");
	let answer = undefined;
	answerEls.forEach((answerEl) => {
		if(answerEl.checked)
			answer = answerEl.id;

	});
	return answer;
}

function deselect(){
	const answerEls = document.querySelectorAll(".answer");
	answerEls.forEach((answerEl) => {
		answerEl.checked = false;
	});
}

submitBtn.addEventListener("click",chk)
function chk(){
	const ans = getSelected();
	if(ans === undefined ){
		alert("Please Select an Answer");
		return;
	}
	else{
		if(ans === questionData[currentQuestion].correctAnswer){
			score++;
		}
		currentQuestion++;
		if(currentQuestion < questionData.length){
			loadQuiz();
		}
		else{
			quizOver();
		}
	}
}
function quizOver(){
	result.innerHTML = `Your Score is ${score} out of ${questionData.length}`;
	result.style.padding = "20px";
	submitBtn.innerText = "Restart Quiz";
	submitBtn.style.backgroundColor = "red";
	submitBtn.removeEventListener("click",chk);
	submitBtn.addEventListener("click",restartQuiz);
}

function restartQuiz(){
	location.reload();
}