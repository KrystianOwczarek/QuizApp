import React,{useEffect, useState} from 'react'
import './style.css'
import leftArrow from './img/leftArrow.png'

const JSQuiz = props => {
    const[howManyCorrect, setHowManyCorrect] = useState([])
    const [numberOfQuestion, setNumberOfQuestion] = useState(0)
    const answers = props.JSQuestions.allAnswers[numberOfQuestion].answers.map(answer => <div className={'answer'} onClick={() => nextQuestion(answer.isCorrect)} key={answer.answer}>{answer.answer}</div>)
    const bcgs = props.bcgForAnswers.map(bcg => <div className={bcg.class} key={bcg.key}></div>)
    const [JSBoxStartClass, setJSBoxStartClass] = useState('JSBoxStartOn')
    const [JSBoxQuizClass, setJSBoxQuizClass] = useState('JSBoxQuizOff')
    const [EndQuiz, setEndQuiz] = useState('endQuizOff')
    const [quizzes] = useState(1)
    const [correct, setCorrect] = useState('')
    const [uncorrect, setUncorrect] = useState('')
    const [quizzesFromDb, setQuizzesFromDb] = useState('')
    const [correctFromDb, setCorrectFromDb] = useState('')
    const [uncorrectFromDb, setUncorrectFromDb] = useState('')
    let QuestNumber = numberOfQuestion + 1;

    //funkcja odpowiadająca za resetowanie statystyk i powrót do ekranu głownego
    const resetQuestion = () => {
        setNumberOfQuestion(0)
        setHowManyCorrect([])
        setJSBoxStartClass('JSBoxStartOn')
        setJSBoxQuizClass('JSBoxQuizOff')
        setEndQuiz('endQuizOff')
        props.Back()
    }

    //strzałka odpowiadająca za powrót
    function Arrow() {
        return(
            <img onClick={resetQuestion} src={leftArrow} className={'arrow'}/>
        )
    }

    //funkcja ładująca pytania po naciśnięciu przycisku
    const startQuiz = () => {
        setJSBoxStartClass('JSBoxStartOff')
        setJSBoxQuizClass('JSBoxQuizOn')
    }

    //funkcja sprawdzająca odpowiedź
    function checkCorrect(correct) {
        if(correct == true){
            howManyCorrect.push(correct)
        }
    }

    //funkcja przełączająca pytanie po odpowiedzi
    function nextQuestion(correct) {
        let length = props.JSQuestions.allAnswers.length
        let i = numberOfQuestion + 1
        if(i == length){
            i=0
            setJSBoxQuizClass('JSBoxQuizOff')
            setEndQuiz('endQuizOn')
        }
        setNumberOfQuestion(i)
        checkCorrect(correct)
    }

     //funkcja pobierająca id zalogowanego użytkownika
     const getID = () => {
        const id = localStorage.getItem('ID')
        return id
    }

    //efekt polegający na podliczaniu statystyk
    useEffect(() => {
        setCorrect(howManyCorrect.length)
        let uncorrect = 10 - howManyCorrect.length
        setUncorrect(uncorrect)
    })

    //funkcja pobierająca statystyki użytkownika z bazy danych
    const statsFromDb = () => {
        const getNick = () => {
            const nick = localStorage.getItem('nick')
            return nick
        }
        const nick = getNick()
        const id = getID()
        fetch(`http://localhost:8080/users/${id}`)
        .then(res => res.json())
        .then(data => {
            if(nick === data.username){
                setQuizzesFromDb(data.quizzes_played)
                setCorrectFromDb(data.correct_answers)
                setUncorrectFromDb(data.uncorrect_answers)
            }else{
                console.log('No logged!')
            }
        }
        ).catch(err => console.log('error'))
    }

    //funkcja aktualizująca statystyki użytkownika w bazie danych
    const updateStats = () => {
        const id = getID()
        fetch(`http://localhost:8080/stats/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                quizzes_played: quizzesFromDb + quizzes,
                correct_answers: correctFromDb + correct,
                uncorrect_answers: uncorrectFromDb + uncorrect,
            })
        }).then(function(response) {
            if(response.status === 200){
                console.log('ok')
            }
        }).catch(function(error) {
            console.log('error')
        })
        window.location.reload()
    }

    return(
        <div>
            <header className={'header'}>
                <h1>JavaScript Quiz</h1>
            </header>    
            <div className={JSBoxStartClass}>
                {Arrow()}
                <h2>Click the button to start quiz</h2>
                <button onClick={startQuiz}>START</button>
                <div className={'buttonBcg'}></div>
            </div>
            <div className={JSBoxQuizClass}>
                {Arrow()}
                <span>{QuestNumber}/10</span>
                <h2>{props.JSQuestions.quest[numberOfQuestion]}</h2>
                <div className={'answersPosition'}>
                    {answers}
                    {bcgs}
                </div>
            </div>
            <div className={EndQuiz}>
                <p>You scored {howManyCorrect.length}/10 points</p>
                {statsFromDb()}
                <button onClick={updateStats}>END</button>
                <span className={'endBcg'}></span>
            </div>
        </div>
    )
}

export default JSQuiz
