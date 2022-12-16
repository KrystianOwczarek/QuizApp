import React, { useState, useEffect } from 'react'
import './style.css'
import leftArrow from './img/leftArrow.png'

const ReactQuiz = props => {
    const[howManyCorrect, setHowManyCorrect] = useState([])
    const [numberOfQuestion, setNumberOfQuestion] = useState(0)
    const answers = props.ReactQuestions.allAnswers[numberOfQuestion].answers.map(answer => <div className={'answer'} onClick={() => nextQuestion(answer.isCorrect)} key={answer.answer}>{answer.answer}</div>)
    const bcgs = props.bcgForAnswers.map(bcg => <div className={bcg.class} key={bcg.key}></div>)
    const [ReactBoxStartClass, setReactBoxStartClass] = useState('ReactBoxStartOn')
    const [ReactBoxQuizClass, setReactBoxQuizClass] = useState('ReactBoxQuizOff')
    const [EndQuiz, setEndQuiz] = useState('endQuizOff')
    const [quizzes] = useState(1)
    const [correct, setCorrect] = useState('')
    const [uncorrect, setUncorrect] = useState('')
    const [quizzesFromDb, setQuizzesFromDb] = useState('')
    const [correctFromDb, setCorrectFromDb] = useState('')
    const [uncorrectFromDb, setUncorrectFromDb] = useState('')
    let QuestNumber = numberOfQuestion + 1;

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

    useEffect(() => {
        setCorrect(howManyCorrect.length)
        let uncorrect = 10 - howManyCorrect.length
        setUncorrect(uncorrect)
    })

    const getID = () => {
        const id = localStorage.getItem('ID')
        return id
    }

    function nextQuestion(correct) {
        let length = props.ReactQuestions.allAnswers.length
        let i = numberOfQuestion + 1
        if(i == length){
            i=0
            setReactBoxQuizClass('ReactBoxQuizOff')
            setEndQuiz('endQuizOn')
        }
        setNumberOfQuestion(i)
        checkCorrect(correct)
    }

    function checkCorrect(correct) {
        if(correct == true){
            howManyCorrect.push(correct)
        }
    }

    const startQuiz = () => {
        setReactBoxStartClass('ReactBoxStartOff')
        setReactBoxQuizClass('ReactBoxQuizOn')
    }

    function Arrow() {
        return(
            <img onClick={resetQuestion} src={leftArrow} className={'arrow'}/>
        )
    }

    const resetQuestion = () => {
        setNumberOfQuestion(0)
        setHowManyCorrect([])
        setReactBoxStartClass('ReactBoxStartOn')
        setReactBoxQuizClass('ReactBoxQuizOff')
        setEndQuiz('endQuizOff')
        props.Back()
    }

    return(
        <div>
            <header className={'header'}>
                <h1>React Quiz</h1>
            </header>    
            <div className={ReactBoxStartClass}>
                {Arrow()}
                <h2>Click the button to start quiz</h2>
                <button onClick={startQuiz}>START</button>
                <div className={'buttonBcg'}></div>
            </div>
            <div className={ReactBoxQuizClass}>
                {Arrow()}
                <span>{QuestNumber}/10</span>
                <h2>{props.ReactQuestions.quest[numberOfQuestion]}</h2>
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

export default ReactQuiz