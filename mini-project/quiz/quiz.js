const quizData = [
    {
        question : "'희나리'의 뜻은 무엇일까요?",
        a : "덜 마른 장작",
        b : "희미한 추억",
        c : "휘날리는 눈",
        d : "타고 남은 재",
        correct : "a"
    },
    {
        question : "'라온'의 뜻은 무엇일까요?",
        a : "무서운",
        b : "즐거운",
        c : "맛있는",
        d : "어려운",
        correct : "b"
    },
    {
        question : "'개밥바라기'는 이 별의 순우리말입니다. 무엇일까요?",
        a : "수성",
        b : "금성",
        c : "목성",
        d : "토성",
        correct : "b"
    },
    {
        question : "깨었다가 다시 자는 잠을 이르는 말은?",
        a : "노루잠",
        b : "사로잠",
        c : "돌꼇잠",
        d : "그루잠",
        correct : "d"
    },
    {
        question : "'너나들이'의 뜻으로 맞는 것은?",
        a : "마중 나가다",
        b : "허물없는 사이",
        c : "나들이용 가방",
        d : "집들이",
        correct : "b"
    },
    {
        question : "세계에서 면적이 가장 넒은 나라는 어디일까요?",
        a : "미국",
        b : "인도",
        c : "러시아",
        d : "중국",
        correct : "c"
    },
    {
        question : "세계에서 인구가 가장 많은 나라는 어디일까요?",
        a : "중국",
        b : "미국",
        c : "인도",
        d : "인도네시아",
        correct : "a"
    },
    {
        question : "세계에서 섬이 가장 많은 나라는 어디일까요?",
        a : "스웨덴",
        b : "필리핀",
        c : "핀란드",
        d : "인도네시아",
        correct : "a"
    },
    {
        question : "세계에서 가장 큰 섬은 어디일까요?",
        a : "뉴기니",
        b : "그린란드",
        c : "보르네오",
        d : "제주도",
        correct : "b"
    }

];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question') ;
const a_text = document.getElementById('a_text') ;
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');
const submitBtn = document.getElementById('submit')

let currentQuiz = 0;
let score = 0;

loadQuiz()

function loadQuiz(){

    deselectAnswers()
    const currentQuizData = quizData[currentQuiz]
    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d

}

function deselectAnswers(){
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerEl => {
        if (answerEl.checked){
            answer = answerEl.id
        }
    })
    return answer
}

submitBtn.addEventListener('click',()=>{
    const answer = getSelected()
    if (answer === quizData[currentQuiz].correct){
        score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length){
        loadQuiz()
    }else{
        quiz.innerHTML = 
        `<h2>${quizData.length}문제 중 ${score}개 정답!</h2>
        <button onclick="location.reload()">다시하기</button>`
    }})