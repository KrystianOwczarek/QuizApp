import React, { createElement } from 'react'
import './quiz.css'
import AccountImage from './img/accountImageBlack.png'
import leftArrow from './img/leftArrow.png'

const ReactQuiz = props => {
    const[howManyCorrect, setHowManyCorrect] = React.useState([])
    const [numberOfQuestion, setNumberOfQuestion] = React.useState(0)
    const answers = props.ReactQuestions.allAnswers[numberOfQuestion].answers.map(answer => <div className={'answer'} onClick={() => nextQuestion(answer.isCorrect)} key={answer.answer}>{answer.answer}</div>)
    const bcgs = props.bcgForAnswers.map(bcg => <div className={bcg.class} key={bcg.key}></div>)
    const [ReactBoxStartClass, setReactBoxStartClass] = React.useState('ReactBoxStartOn')
    const [ReactBoxQuizClass, setReactBoxQuizClass] = React.useState('ReactBoxQuizOff')
    const [EndQuiz, setEndQuiz] = React.useState('endQuizOff')
    let QuestNumber = numberOfQuestion + 1;

    const startQuiz = () => {
        setReactBoxStartClass('ReactBoxStartOff')
        setReactBoxQuizClass('ReactBoxQuizOn')
    }

    function checkCorrect(correct) {
        if(correct == true){
            howManyCorrect.push(correct)
        }
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

    const resetQuestion = () => {
        setNumberOfQuestion(0)
        setHowManyCorrect([])
        setReactBoxStartClass('ReactBoxStartOn')
        setReactBoxQuizClass('ReactBoxQuizOff')
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
                <h1>React Quiz</h1>
                <img src={AccountImage}/>
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
                {Arrow()}
                <p>You scored {howManyCorrect.length}/10 points</p>
            </div>
        </div>
    )
}

export default ReactQuiz