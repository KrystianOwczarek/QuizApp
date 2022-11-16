import React, { createElement } from 'react'
import './quiz.css'
import leftArrow from './img/leftArrow.png'

const CSSQuiz = props => {
    const[howManyCorrect, setHowManyCorrect] = React.useState([])
    const [numberOfQuestion, setNumberOfQuestion] = React.useState(0)
    const answers = props.CSSQuestions.allAnswers[numberOfQuestion].answers.map(answer => <div className={'answer'} onClick={() => nextQuestion(answer.isCorrect)} key={answer.answer}>{answer.answer}</div>)
    const bcgs = props.bcgForAnswers.map(bcg => <div className={bcg.class} key={bcg.key}></div>)
    const [CSSBoxStartClass, setCSSBoxStartClass] = React.useState('CSSBoxStartOn')
    const [CSSBoxQuizClass, setCSSBoxQuizClass] = React.useState('CSSBoxQuizOff')
    const [EndQuiz, setEndQuiz] = React.useState('endQuizOff')
    let QuestNumber = numberOfQuestion + 1;

    const startQuiz = () => {
        setCSSBoxStartClass('CSSBoxStartOff')
        setCSSBoxQuizClass('CSSBoxQuizOn')
    }

    function checkCorrect(correct) {
        if(correct == true){
            howManyCorrect.push(correct)
        }
    }

    function nextQuestion(correct) {
        let length = props.CSSQuestions.allAnswers.length
        let i = numberOfQuestion + 1
        if(i == length){
            i=0
            setCSSBoxQuizClass('CSSBoxQuizOff')
            setEndQuiz('endQuizOn')
        }
        setNumberOfQuestion(i)
        checkCorrect(correct)
    }

    const resetQuestion = () => {
        setNumberOfQuestion(0)
        setHowManyCorrect([])
        setCSSBoxStartClass('CSSBoxStartOn')
        setCSSBoxQuizClass('CSSBoxQuizOff')
        setEndQuiz('endQuizOff')
        props.Back()
    }

    function Arrow() {
        return(
            <img onClick={resetQuestion} src={leftArrow} className={'arrow'}/>
        )
    }

    return(
        <div>
            <header className={'header'}>
                <h1>CSS Quiz</h1>
            </header>    
            <div className={CSSBoxStartClass}>
                {Arrow()}
                <h2>Click the button to start quiz</h2>
                <button onClick={startQuiz}>START</button>
                <div className={'buttonBcg'}></div>
            </div>
            <div className={CSSBoxQuizClass}>
                {Arrow()}
                <span>{QuestNumber}/10</span>
                <h2>{props.CSSQuestions.quest[numberOfQuestion]}</h2>
                <div className={'answersPosition'}>
                    {answers}
                    {bcgs}
                </div>
            </div>
            <div className={EndQuiz}>
                {Arrow()}
                <p>You scored {howManyCorrect.length}/10 points</p>
            </div>
        </div>
    )
}

export default CSSQuiz