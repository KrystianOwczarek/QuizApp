import React, {useEffect, useState} from 'react'
import Avatar from './img/avatar.png'
import X from './img/blueX.png'

const Statistics = props => {
    const [quizzesPlayed, setQuizzesPlayed] = useState('')
    const [correctAnswers, setCorrectAnswers] = useState('')
    const [uncorrectAnswers, setUncorrectAnswers] = useState('')
    const [image, setImage] = useState('')

    //efekt pobierający statystyki użytkownika z bazy danych
    useEffect(() => {
        const nick = getNick()
        fetch(`http://localhost:8080/users`)
        .then(res => res.json())
        .then(data => data.map(d => {
            if(nick === d.username){
                setQuizzesPlayed(d.quizzes_played)
                setCorrectAnswers(d.correct_answers)
                setUncorrectAnswers(d.uncorrect_answers)
                setImage(d.image)
            }
        }))
        .catch(err => err)
    }, [])

    //funkcja pobierająca zdjęcie użytkownika
    const getImage = () => {
        const image = localStorage.getItem('image')
        return image
    }

    //warunek ustawiający odpowiednie zdjęcie
    const Image = () => {
        if(image == null){
            return Avatar
        }else{
            return getImage()
        }
    }
    
    const getNick = () => {
        const nick = localStorage.getItem('nick')
        return nick
    } 

    //funkcja ustawiająca stosunek wygranych do przegranych 
    const Ratio = () => {
        if(correctAnswers != 0 || uncorrectAnswers != 0){
        const ratio = correctAnswers / uncorrectAnswers
        return Math.ceil(ratio * 10000) / 10000
        }else{
            return 0
        }
    }

    return(
        <div>
            <img src={X} onClick={props.endStatistics}/>
            <img src={Image()} className={'photo'}/>
            <span>{getNick()}</span>
            <div className={'quizzesPlayed'}>Quizzes Played
            <p>{quizzesPlayed}</p></div>
            <div className={'correctAnswers'}>Correct Answers
            <p>{correctAnswers}</p></div>
            <div className={'uncorrectAnswers'}>Uncorrect Answers
            <p>{uncorrectAnswers}</p></div>         
            <div className={'ratio'}>Ratio
            <p>{Ratio()}</p></div>
        </div>
    )
}

export default Statistics