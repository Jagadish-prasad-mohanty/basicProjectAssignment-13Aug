
const quizzDB=[
    {
        question:"Q1: What is the fullform of HTML?",
        a: "Hello To My Land",
        b: "Hey Text Markup Language",
        c: "Hyper Text Markup Langiage",
        d: "Hyper Text Markup Language",
        ans: "opt4"
    },
    {
        question: "Q2: What is the fullform of CSS?",
        a: "Cascading Style Sheets",
        b: "Cascading Style Sheep",
        c: "Cartoon Style Sheet",
        d: "Cascading Super Sheets",
        ans: "opt1" 
    },
    {
        question: "Q3: What is the fullform of HTTP?",
        a: "Hyper Text Transfer Product",
        b: "Hyper Text Protocol",
        c: "Hey Trasfer Protocol",
        d: "Hyper Text Transfer Protocol",
        ans: "opt4" 
    }
]
const quizDB=[]
const ques=[]
for (let i=1;i<=localStorage.length;i++){
    ques.push(JSON.parse(localStorage.getItem(i)));
    // console.log(JSON.parse(localStorage.getItem(i)));
}
console.log(ques);
ques.forEach(element=>{
    const temp={
        question:element.que,
        a:element.opt1,
        b:element.opt2,
        c:element.opt3,
        d:element.opt4,
        ans:element.ans
    };
    quizDB.push(temp)
    
})
console.log(quizDB)
// let obj={
//     name:'rama',
//     age:12
// }
// let obj_s=JSON.stringify(obj)
// localStorage.setItem('rama',obj_s)
// console.log(JSON.parse(localStorage.getItem('rama')));
const question=document.querySelector(".question");
const opti1=document.querySelector("#opti1");
const opti2=document.querySelector("#opti2");
const opti3=document.querySelector("#opti3");
const opti4=document.querySelector("#opti4");

const answers=document.querySelectorAll(".options");
const submit=document.querySelector("#submit");
const showScore=document.querySelector("#showScore");

let count=0;
let score=0;

const addElement= () => {
    let quizQuestions=quizDB[count];
    question.innerHTML=quizQuestions.question;
    opti1.innerHTML=quizQuestions.a;
    opti2.innerHTML=quizQuestions.b;
    opti3.innerHTML=quizQuestions.c;
    opti4.innerHTML=quizQuestions.d;
}

addElement();

const getAnswer = () =>{
    let answer;
    answers.forEach((curElement) => {
        if(curElement.checked){
            answer=curElement.id;
        }
    });
    return answer;
    
}

const deselectAll=()=>{
    answers.forEach(element =>  element.checked=false);
}

submit.addEventListener('click', () =>{
    let checkAnswer;
    checkAnswer=getAnswer();
    // console.log(checkAnswer);
    let quizQuestions=quizDB[count++];
    if(checkAnswer==quizQuestions.ans){
        score++;
    }
    deselectAll();
    if(count<quizDB.length){
        addElement();
    }
    else{
        showScore.innerHTML=`
            <div id="myScore">You Scored: ${score}/${quizDB.length}</div>
            <button class="btn" onclick="location.reload()">START</button>
        `;
        showScore.classList.remove('scoreA');
    }

});

