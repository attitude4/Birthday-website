function goToNamePage(){ window.location.href='name.html'; }
function saveName(){
  const nm = document.getElementById('nameInput').value.trim();
  if(nm){ localStorage.setItem('bestieName', nm);
    window.location.href='questions.html';
  } else alert('Please enter your name!');
}
let questionIndex = 0;
const questions = [
  "Do you know how awesome you are? 😍",
  "Are you having fun yet? 🎈",
  "Ready for a surprise? 🎁"
];
function nextQuestion(answer){
  questionIndex++;
  if(questionIndex < questions.length){
    document.getElementById("question").textContent = questions[questionIndex];
  } else window.location.href='surprise.html';
}
