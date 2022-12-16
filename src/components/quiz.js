import React from 'react'
import './style.css'
import JSQuiz from './JSQuiz'
import HTMLQuiz from './HTMLQuiz'
import CSSQuiz from './CSSQuiz'
import ReactQuiz from './ReactQuiz'
import Login from './Login'
import Register from './Register'
import NavForLogged from './NavForLogged'

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

//funkcja wyświetlająca kafelki quizów
const QuizLoading = props => {

    //funckja zwracająca id wybranego quizu
    const loadingQuiz = () => {
        IDArrow = []
        IDArrow.push(props.quizSelect.id)
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
            JSClass: 'noDisplay',
            HTMLClass: 'noDisplay',
            CSSClass: 'noDisplay',
            ReactClass: 'noDisplay',
            LoginClass: 'noDisplay',
            RegisterClass: 'noDisplay',
            DeleteAccount: 'noDisplay'
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
            quest: ['How to invoke to the class?', 'Finish it correctly background-image: ...','What year was CSS invented?',"Which commands set an element that doesn't reposition other elements?",'Who created the CSS?','How to set flexible elements in a column without wrapping?','How to set a rounded corner?','How to center a flexible element vertically?','Which value represents the left margin: margin: 25px 50px 75px 100px;','How to set vertical spacing?'],
            allAnswers: [
                    {answers: [
                        {answer: '.class', isCorrect: true},
                        {answer: '#class', isCorrect: false},
                        {answer: 'class', isCorrect: false},
                        {answer: '$class', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: 'src("img.jpg")', isCorrect: false},
                        {answer: 'url("img.jpg")', isCorrect: true},
                        {answer: 'img("img.jpg")', isCorrect: false},
                        {answer: 'href("img.jpg")', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '1991', isCorrect: true},
                        {answer: '1996', isCorrect: false},
                        {answer: '2003', isCorrect: false},
                        {answer: '1992', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'position: absolute;', isCorrect: true},
                        {answer: 'position: relative;', isCorrect: false},
                        {answer: 'position: inherit;', isCorrect: false},
                        {answer: 'position: static;', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'Vitalika Buterina', isCorrect: false},
                        {answer: 'Håkon Wium Lie', isCorrect: false},
                        {answer: 'Brendan Eich', isCorrect: false},
                        {answer: 'W3C Organization', isCorrect: true}
                    ]},
                    
                    {answers: [
                        {answer: 'flex-flow: row wrap;', isCorrect: false},
                        {answer: 'flex-flow: column nowrap;', isCorrect: true},
                        {answer: 'flex-flow: row nowrap;', isCorrect: false},
                        {answer: 'flex-flow: column wrap;', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'border: 5px;', isCorrect: false},
                        {answer: 'border-style: round-corner;', isCorrect: false},
                        {answer: 'border-radius: 5spx;', isCorrect: true},
                        {answer: 'border-width: 5px;', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: 'align-items: center;', isCorrect: true},
                        {answer: 'justify-content: center;', isCorrect: false},
                        {answer: 'flex-direction: center;', isCorrect: false},
                        {answer: 'align-content: center;', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '25px', isCorrect: false},
                        {answer: '50px', isCorrect: false},
                        {answer: '75px', isCorrect: false},
                        {answer: '100px', isCorrect: true}
                    ]},

                    {answers: [
                        {answer: 'letter-spacing: 120%;', isCorrect: false},
                        {answer: 'vertical-spacing: 120%;', isCorrect: false},
                        {answer: 'line-height: 120%;', isCorrect: true},
                        {answer: 'vertical-heigth: 120%;', isCorrect: false}
                    ]}
            ]  
        },

        ReactQuestions: {
            quest: ['How to assign a CSS class to an element?', 'An object for stored data and component information.','What method is used to return JSX and read props?','How to create a loop in React?','What year was React invented?','What version of React adds hooks?','Who created the React?','What is the name of the functions for returning and displaying parts of the application?','Which method is used to download data asynchronously?','What are the names of the arguments passed to React Components?'],
            allAnswers: [
                    {answers: [
                        {answer: "class=''", isCorrect: false},
                        {answer: 'className={class}', isCorrect: false},
                        {answer: "className={'class'}", isCorrect: true},
                        {answer: 'class={class}', isCorrect: false}
                    ]},
                    
                    {answers: [
                        {answer: 'const', isCorrect: false},
                        {answer: 'hook', isCorrect: false},
                        {answer: 'state', isCorrect: true},
                        {answer: 'let', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'render()', isCorrect: true},
                        {answer: 'return()', isCorrect: false},
                        {answer: 'read()', isCorrect: false},
                        {answer: 'window.return()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'for()', isCorrect: false},
                        {answer: 'do while()', isCorrect: false},
                        {answer: 'while()', isCorrect: true},
                        {answer: 'map()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: '2002', isCorrect: false},
                        {answer: '2010', isCorrect: false},
                        {answer: '2014', isCorrect: false},
                        {answer: '2013', isCorrect: true}
                    ]},
                    
                    {answers: [
                        {answer: '15.6', isCorrect: false},
                        {answer: '16.10.2', isCorrect: false},
                        {answer: '18.0.0', isCorrect: false},
                        {answer: '16.8', isCorrect: true}
                    ]},
                    
                    {answers: [
                        {answer: 'Evana You', isCorrect: false},
                        {answer: 'Jordana Walke', isCorrect: true},
                        {answer: 'Miško Hevery', isCorrect: false},
                        {answer: 'Adama Abronsa', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'Components', isCorrect: true},
                        {answer: 'Functions', isCorrect: false},
                        {answer: 'Props', isCorrect: false},
                        {answer: 'Application Parts', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'Promise()', isCorrect: false},
                        {answer: 'readFile()', isCorrect: false},
                        {answer: 'fetch()', isCorrect: true},
                        {answer: 'require()', isCorrect: false}
                    ]},

                    {answers: [
                        {answer: 'state', isCorrect: false},
                        {answer: 'props', isCorrect: true},
                        {answer: 'prompt', isCorrect: false},
                        {answer: 'acces', isCorrect: false}
                    ]}
            ]  
        },

        logged: this.getUserStatus(),

        nick: this.getNick(),

        navElements: [
            {title: 'Change avatar', id: 1, key: '123das'},
            {title: 'Statistics', id: 2, key: '545gfd'},
            {title: 'Change password', id: 3, key: '555gkd'},
            {title: 'Delete account', id: 4, key: '875hcf'},
            {title: 'Logout', id: 5, key: '864ghf'}
        ]
    }

    //funkcja sprawdzająca, który quiz został wybrany i ładująca odpowiedni
    SelectedQuiz(id) {
        if(id == 1){
            //alert(id)
            this.SetClass('noDisplay', 'JSSelectedOn', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay')
        }else if(id == 2){
            //alert(id)
            this.SetClass('noDisplay', 'noDisplay', 'HTMLSelectedOn', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay')
        }else if(id == 3){
            //alert(id)
            this.SetClass('noDisplay', 'noDisplay', 'noDisplay', 'CSSSelectedOn', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay')
        }else if(id == 4){
            //alert(id)
            this.SetClass('noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'ReactSelectedOn', 'noDisplay', 'noDisplay', 'noDisplay')
        }
    }

    //funkcja zwracająca dostepne do rozwiązania quizy
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

    //powrót z ekranu rejestracji do ekranu logowania
    BackToLogin(){
        this.SetClass('noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'loginOn', 'noDisplay', 'noDisplay')
    }
    
    //funkcja umożliwiająca przejście do ekranu rejestracji
    Register() {
        const loadRegister = () => {
            this.SetClass('noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'registerOn', 'noDisplay')
        }

        return(
            <span onClick={loadRegister}>Register</span>
        )
    }

    //możwośc powrotu do strony głównej
    Back() {
        this.state.numberOfQuestion = 0
        this.SetClass('container', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay')
    }

    //funkcja umożliwiająca ustawienie zdjęcia konta dla niezalogowanego użytkownika i umożliwiająca przejście do ekranu logowania
    Account(img) {
        const Login = () => {
            this.SetClass('noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'loginOn', 'noDisplay', 'noDisplay')
        }

        return( 
            <img src={img} onClick={Login} title={'Login/Register'}/>
        )
    }

    //funkcja ustawiająca kontener adekwatnie do statusu logowania użytkownika
    setContainerLogged() {
        this.SetClass('container', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay', 'noDisplay')
    }

    //funkcja zwracająca status logowania użytkownika
    getUserStatus() {
        let log = localStorage.getItem('logged')
        return JSON.parse(log)
    }

    //wylogowanie
    Loggout() {
        localStorage.setItem('logged', JSON.stringify(false))
        window.location.reload()
    }

    //logowanie
    Logged() {
        localStorage.setItem('logged', JSON.stringify(true))
    }

    //funkcja pobierająca nick użytkownika przy poprawnym zalogowaniu
    getNick() {
        let nick = localStorage.getItem('nick')
        return nick
    } 

    //funkcja umożliwiająca ustawianie klas dla kontenerów
    SetClass(container, JS, HTML, CSS, React, Login, Register, DeleteAccount){
        this.setState({
            quizCssClass: {
                containerClass: container,
                JSClass: JS,
                HTMLClass: HTML,
                CSSClass: CSS,
                ReactClass: React,
                LoginClass: Login,
                RegisterClass: Register,
                DeleteAccount: DeleteAccount
            }
        })
    }

    render(){
        let isLogged = this.state.logged
        return(
            <div>
                <div className={this.state.quizCssClass.containerClass}>
                    <header>
                        <h1>{this.state.header}</h1>
                        {isLogged ? <NavForLogged nick={this.state.nick} Loggout={this.Loggout} navElements={this.state.navElements}/> : this.Account(AccountImage)}
                    </header>
                    {this.QuizsTails()}
                </div>
                <div className={this.state.quizCssClass.JSClass}>
                    <JSQuiz Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} JSQuestions={this.state.JSQuestions}/>
                </div>
                <div className={this.state.quizCssClass.HTMLClass}>
                    <HTMLQuiz UpdateStats={this.UpdateStats} Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} HTMLQuestions={this.state.HTMLQuestions}/>
                </div>
                <div className={this.state.quizCssClass.CSSClass}>
                    <CSSQuiz UpdateStats={this.UpdateStats} Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} CSSQuestions={this.state.CSSQuestions}/>
                </div>
                <div className={this.state.quizCssClass.ReactClass}>
                    <ReactQuiz UpdateStats={this.UpdateStats} Back={this.Back.bind(this)} bcgForAnswers={this.state.bcgForAnswers} ReactQuestions={this.state.ReactQuestions}/>
                </div>
                <div className={this.state.quizCssClass.LoginClass}>
                    <Login logged={this.state.logged} Logged={this.Logged} Register={this.Register.bind(this)} Back={this.Back.bind(this)}/>
                </div>
                <div className={this.state.quizCssClass.RegisterClass}>
                    <Register BackToLogin={this.BackToLogin.bind(this)}/>
                </div>
            </div>
        )
    }
}

export default Quiz