import React from 'react'
import './quiz.css'
import JSQuiz from './JSQuiz'

import AccountImage from './img/accountImage.png'
import JSImage from './img/js.png'
import HTMLImage from './img/html.png'
import CSSImage from './img/css.png'
import ReactImage from './img/react.png'

import JSBcg from './img/jsBcg.png'
import HTMLBcg from './img/htmlBcg.png'
import CSSBcg from './img/cssBcg.png'
import ReactBcg from './img/reactBcg.png'

let IDArrow = [];

const QuizLoading = props => {

    const loadingQuiz = () => {
        IDArrow = []
        IDArrow.push(props.quizSelect.id)
        //alert(IDArrow)
        {props.SelectedQuiz(IDArrow)}
    }

    return(
        <div>
            <img onClick={loadingQuiz} className={'quizImages'} src={props.quizSelect.quizImage}/>  
        </div>
    )
}

class Quiz extends React.Component{
    state = {
        header: 'Select a Quiz',

        quizsSelect: [
            {quizImage: JSImage, bcgImage: JSBcg, id: 1, key: 'JS'},
            {quizImage: HTMLImage, bcgImage: HTMLBcg, id: 2, key: 'HTML'},
            {quizImage: CSSImage, bcgImage: CSSBcg, id: 3, key: 'CSS'},
            {quizImage: ReactImage, bcgImage: ReactBcg, id: 4, key: 'React'},
        ],

        quizCssClass: {
            containerClass: 'container',
            JSClass: 'JSSelected',
            HTMLClass: 'HTMLSelected',
            CSSClass: 'CSSSelected',
            ReactClass: 'ReactSelected'
        },

        JSQuestions: {
            quest: 'How old are you?',
            answers: [
                {a: '22', goodAnswer: true},
                {a: '23', goodAnswer: false},
                {a: '17', goodAnswer: false},
                {a: '30', goodAnswer: false}
            ]
        }
    }

    SelectedQuiz(id) {
        if(id == 1){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    JSClass: 'JSSelectedOn'
                }
            })
        }else if(id == 2){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    HTMLClass: 'HTMLSelectedOn'
                }
            })
        }else if(id == 3){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    CSSClass: 'CSSSelectedOn'
                }
            })
        }else if(id == 4){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    ReactClass: 'ReactSelectedOn'
                }
            })
        }
    }

    QuizsTails() {
        const quizs = this.state.quizsSelect.map(quizSelect => <QuizLoading key={quizSelect.key} SelectedQuiz={this.SelectedQuiz.bind(this)} quizSelect={quizSelect}/>)
        const quizsBcg = this.state.quizsSelect.map(quizSelect => <img className={'quizBcg'} key={quizSelect.key} src={quizSelect.bcgImage}/>)

        return(
            <div className={'selectionBox'}>
                    <div>{quizs}</div> 
                    <div>{quizsBcg}</div> 
                    <span>more coming soon...</span>
            </div>
        )
    }

    Account() {
        return( <img src={AccountImage}/> )
    }

    render(){
        return(
            <div>
                <div className={this.state.quizCssClass.containerClass}>
                        <header>
                            <h1>{this.state.header}</h1>
                            {this.Account()}
                        </header>
                        {this.QuizsTails()}
                </div>   
                <div className={this.state.quizCssClass.JSClass}>
                    <JSQuiz JSQuestions={this.state.JSQuestions} Account={this.Account}/>
                </div>
                <div className={this.state.quizCssClass.HTMLClass}></div>
                <div className={this.state.quizCssClass.CSSClass}></div>
                <div className={this.state.quizCssClass.ReactClass}></div>

            </div>
        )
    }
}

export default Quiz