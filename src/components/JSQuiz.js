import React from 'react'

const JSQuiz = props => {


    return(
        <div>
            <header className={'header'}>
                <h1>Take the quiz</h1>
                {props.Account()}
            </header>    
            <div className={'JSBox'}></div>
        </div>
    )
}

export default JSQuiz