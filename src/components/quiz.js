import React from 'react'
import './quiz.css'
import JSQuiz from './JSQuiz'
import HTMLQuiz from './HTMLQuiz'
import CSSQuiz from './CSSQuiz'
import ReactQuiz from './ReactQuiz'

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

        bcgForAnswers: [
            {class: 'bcgForAnswers', key: '1'},
            {class: 'bcgForAnswers', key: '2'},
            {class: 'bcgForAnswers', key: '3'},
            {class: 'bcgForAnswers', key: '4'}
        ],

        JSQuestions: {
            quest: ['Who created the JavaScript?', 'Whitch method adds an element to the end of array?','Which function is an expression function?','Which method is reloading a document?','What year was JavaScript invented?','Which framework is most popular?','Which method joins arrays?','Which word declare a variable available only in block?','How add comment in JavaScript?','Which method rounds the number down ?'],
            allAnswers: [
                {answers: [
                    {answer: 'Brendan Eich', isCorrect: true},
                    {answer: 'Bill Gates', isCorrect: false},
                    {answer: 'Elon Musk', isCorrect: false},
                    {answer: 'Rasmus Lerdorf', isCorrect: false}
                ]},
                
                {answers: [
                    {answer: '.pop()', isCorrect: false},
                    {answer: '.join()', isCorrect: false},
                    {answer: '.pusch()', isCorrect: true},
                    {answer: '.unshift()', isCorrect: false}
                ]},

                {answers: [
                    {answer: 'const start = () => {}', isCorrect: false},
                    {answer: 'const start = function() {}', isCorrect: true},
                    {answer: 'class start {}', isCorrect: false},
                    {answer: 'function start() {}', isCorrect: false}
                ]},

                {answers: [
                    {answer: 'document.reload()', isCorrect: false},
                    {answer: 'location.replace()', isCorrect: false},
                    {answer: 'document.replace()', isCorrect: false},
                    {answer: 'location.reload()', isCorrect: true}
                ]},

                {answers: [
                    {answer: '1990', isCorrect: false},
                    {answer: '1995', isCorrect: true},
                    {answer: '1999', isCorrect: false},
                    {answer: '2003', isCorrect: false}
                ]},
                
                {answers: [
                    {answer: 'Angular', isCorrect: false},
                    {answer: 'React', isCorrect: true},
                    {answer: 'Vue.js', isCorrect: false},
                    {answer: 'Django', isCorrect: false}
                ]},
                
                {answers: [
                    {answer: '.concat()', isCorrect: true},
                    {answer: '.join()', isCorrect: false},
                    {answer: '.slice()', isCorrect: false},
                    {answer: '.match()', isCorrect: false}
                ]},

                {answers: [
                    {answer: 'let', isCorrect: true},
                    {answer: 'const', isCorrect: false},
                    {answer: 'var', isCorrect: false},
                    {answer: 'int', isCorrect: false}
                ]},

                {answers: [
                    {answer: '/*JavaScript*/', isCorrect: false},
                    {answer: '<!--JavaScript-->', isCorrect: false},
                    {answer: '//JavaScript', isCorrect: true},
                    {answer: '/*JavaScript', isCorrect: false}
                ]},

                {answers: [
                    {answer: 'Math.ceil()', isCorrect: false},
                    {answer: 'Math.floor()', isCorrect: true},
                    {answer: 'Math.round()', isCorrect: false},
                    {answer: 'Matj.pow()', isCorrect: false}
                ]}
            ]  
        },

        HTMLQuestions: {
            quest: ['How many tags did HTML have at the beginning?', 'How to go to a new line in HTML?','What is the base font size for header <h2>?','How to add a image to HTML?','What year was HTML invented?','Which tag gives you the ability to display text with spaces and line breaks?','Who created the HTML?','What does every HTML document begin with?','How to add emphasis to text?','When HTML5 was officially put into use?'],
            allAnswers: [
                    {answers: [
                        {answer: '30', isCorrect: false},
                        {answer: '22', isCorrect: true},
                        {answer: '84', isCorrect: false},
                        {answer: '44', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: '&nbsp;', isCorrect: false},
                        {answer: '<br/>', isCorrect: true},
                        {answer: '<p/>', isCorrect: false},
                        {answer: '<nl/>', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '36px', isCorrect: false},
                        {answer: '32px', isCorrect: false},
                        {answer: '26px', isCorrect: false},
                        {answer: '30px', isCorrect: true}
                    ]},

                    {answers: [
                        {answer: '<img src="img.jpg"/>', isCorrect: true},
                        {answer: '<img href="img.jpg"/>', isCorrect: false},
                        {answer: '<img rel="img.jpg"/>', isCorrect: false},
                        {answer: '<img src="img.jpg">', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '1995', isCorrect: false},
                        {answer: '2004', isCorrect: false},
                        {answer: '1994', isCorrect: false},
                        {answer: '1991', isCorrect: true}
                    ]},

                    {answers: [
                        {answer: '<p></p>', isCorrect: false},
                        {answer: '<strong></strong>', isCorrect: false},
                        {answer: '<pre></pre>', isCorrect: true},
                        {answer: '<mark></mark>', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: 'Satoshi Nakamoto', isCorrect: false},
                        {answer: 'Linus Torvalds', isCorrect: false},
                        {answer: 'Dennis Ritchie', isCorrect: false},
                        {answer: 'Tim Berners-Lee', isCorrect: true}
                    ]},
                    
                    {answers: [
                        {answer: '<DOCTYPE lang>', isCorrect: false},
                        {answer: '<html>', isCorrect: false},
                        {answer: '<DOCTYPE html>', isCorrect: false},
                        {answer: '<!DOCTYPE html>', isCorrect: true}
                    ]},

                    {answers: [
                        {answer: '<p></p>', isCorrect: false},
                        {answer: '<i></i>', isCorrect: false},
                        {answer: '<em></em>', isCorrect: true},
                        {answer: '<mark></mark>', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '22 January 2008', isCorrect: false},
                        {answer: '28 October 2014', isCorrect: true},
                        {answer: '1 November 2016', isCorrect: false},
                        {answer: '28 December 2016', isCorrect: false}
                    ]}
            ]  
        },

        CSSQuestions: {
            quest: ['', '','','','What year was HTML invented?','','Who created the HTML?','','',''],
            allAnswers: [
                    {answers: [
                        {answer: 'Brendan Eich', isCorrect: true},
                        {answer: 'Bill Gates', isCorrect: false},
                        {answer: 'Elon Musk', isCorrect: false},
                        {answer: 'Rasmus Lerdorf', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: '.pop()', isCorrect: false},
                        {answer: '.join()', isCorrect: false},
                        {answer: '.pusch()', isCorrect: true},
                        {answer: '.unshift()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'const start = () => {}', isCorrect: false},
                        {answer: 'const start = function() {}', isCorrect: true},
                        {answer: 'class start {}', isCorrect: false},
                        {answer: 'function start() {}', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'document.reload()', isCorrect: false},
                        {answer: 'location.replace()', isCorrect: false},
                        {answer: 'document.replace()', isCorrect: false},
                        {answer: 'location.reload()', isCorrect: true}
                    ]},

                    {answers: [
                        {answer: '1990', isCorrect: false},
                        {answer: '1995', isCorrect: true},
                        {answer: '1999', isCorrect: false},
                        {answer: '2003', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: 'Angular', isCorrect: false},
                        {answer: 'React', isCorrect: true},
                        {answer: 'Vue.js', isCorrect: false},
                        {answer: 'Django', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: '.concat()', isCorrect: true},
                        {answer: '.join()', isCorrect: false},
                        {answer: '.slice()', isCorrect: false},
                        {answer: '.match()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'let', isCorrect: true},
                        {answer: 'const', isCorrect: false},
                        {answer: 'var', isCorrect: false},
                        {answer: 'int', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '/*JavaScript*/', isCorrect: false},
                        {answer: '<!--JavaScript-->', isCorrect: false},
                        {answer: '//JavaScript', isCorrect: true},
                        {answer: '/*JavaScript', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'Math.ceil()', isCorrect: false},
                        {answer: 'Math.floor()', isCorrect: true},
                        {answer: 'Math.round()', isCorrect: false},
                        {answer: 'Matj.pow()', isCorrect: false}
                    ]}
            ]  
        },

        ReactQuestions: {
            quest: ['', '','','','What year was HTML invented?','','Who created the HTML?','','',''],
            allAnswers: [
                    {answers: [
                        {answer: 'Brendan Eich', isCorrect: true},
                        {answer: 'Bill Gates', isCorrect: false},
                        {answer: 'Elon Musk', isCorrect: false},
                        {answer: 'Rasmus Lerdorf', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: '.pop()', isCorrect: false},
                        {answer: '.join()', isCorrect: false},
                        {answer: '.pusch()', isCorrect: true},
                        {answer: '.unshift()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'const start = () => {}', isCorrect: false},
                        {answer: 'const start = function() {}', isCorrect: true},
                        {answer: 'class start {}', isCorrect: false},
                        {answer: 'function start() {}', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'document.reload()', isCorrect: false},
                        {answer: 'location.replace()', isCorrect: false},
                        {answer: 'document.replace()', isCorrect: false},
                        {answer: 'location.reload()', isCorrect: true}
                    ]},

                    {answers: [
                        {answer: '1990', isCorrect: false},
                        {answer: '1995', isCorrect: true},
                        {answer: '1999', isCorrect: false},
                        {answer: '2003', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: 'Angular', isCorrect: false},
                        {answer: 'React', isCorrect: true},
                        {answer: 'Vue.js', isCorrect: false},
                        {answer: 'Django', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: '.concat()', isCorrect: true},
                        {answer: '.join()', isCorrect: false},
                        {answer: '.slice()', isCorrect: false},
                        {answer: '.match()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'let', isCorrect: true},
                        {answer: 'const', isCorrect: false},
                        {answer: 'var', isCorrect: false},
                        {answer: 'int', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '/*JavaScript*/', isCorrect: false},
                        {answer: '<!--JavaScript-->', isCorrect: false},
                        {answer: '//JavaScript', isCorrect: true},
                        {answer: '/*JavaScript', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'Math.ceil()', isCorrect: false},
                        {answer: 'Math.floor()', isCorrect: true},
                        {answer: 'Math.round()', isCorrect: false},
                        {answer: 'Matj.pow()', isCorrect: false}
                    ]}
            ]  
        }
    }

    SelectedQuiz(id) {
        if(id == 1){
            //alert(id)
            this.state.JSQuestions.quest.sort(() => 0.5 - Math.random())
            this.state.JSQuestions.allAnswers.sort(() => 0.5 - Math.random())
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    JSClass: 'JSSelectedOn',
                    HTMLClass: 'HTMLSelected',
                    CSSClass: 'CSSSelected',
                    ReactClass: 'ReactSelected'
                }
            })
        }else if(id == 2){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    HTMLClass: 'HTMLSelectedOn',
                    JSClass: 'JSSelected',
                    CSSClass: 'CSSSelected',
                    ReactClass: 'ReactSelected'
                }
            })
        }else if(id == 3){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    CSSClass: 'CSSSelectedOn',
                    JSClass: 'JSSelected',
                    HTMLClass: 'HTMLSelected',
                    ReactClass: 'ReactSelected'
                }
            })
        }else if(id == 4){
            //alert(id)
            this.setState({
                quizCssClass: {
                    containerClass: 'containerOf',
                    ReactClass: 'ReactSelectedOn',
                    JSClass: 'JSSelected',
                    HTMLClass: 'HTMLSelected',
                    CSSClass: 'CSSSelected',
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
        return( 
            <img id={'acc'} src={AccountImage}/>
        )
    }

    Back() {
        this.state.numberOfQuestion = 0
        this.setState({
            quizCssClass: {
                containerClass: 'container',
                ReactClass: 'ReactSelected',
                JSClass: 'JSSelected',
                HTMLClass: 'HTMLSelected',
                CSSClass: 'CSSSelected',
            }
        })
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
                    <JSQuiz Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} JSQuestions={this.state.JSQuestions}/>
                </div>
                <div className={this.state.quizCssClass.HTMLClass}>
                    <HTMLQuiz Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} HTMLQuestions={this.state.HTMLQuestions}/>
                </div>
                <div className={this.state.quizCssClass.CSSClass}>
                    <CSSQuiz Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} CSSQuestions={this.state.CSSQuestions}/>
                </div>
                <div className={this.state.quizCssClass.ReactClass}>
                    <ReactQuiz Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} ReactQuestions={this.state.ReactQuestions}/>
                </div>
            </div>
        )
    }
}

export default Quiz