import React, {useState} from 'react'
import './quiz.css'
import leftArrow from './img/leftArrow.png'

const Login = props => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [alertClass, setAlertClass] = useState('noDisplay')
    const [header, setHeader] = useState('')
    const [message, setMessage] = useState('')

    const referForRegister = () => {
        const clearTheForm = () => {
            setLogin('')
            setPassword('')
            setAlertClass('noDisplay')
        }

        return(
            <span onClick={clearTheForm}>{props.Register()}</span>
        )
    }
    
    const loginUser = (username, password) => {
        fetch('http://localhost:8080/login', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password,
            })
        }).then(function(response) {
            if(response.status === 200){
                props.Logged()
                props.Back()
                window.location.reload()
                localStorage.setItem('nick', username)
                getID()
            }else{
                setAlert('failure', "User don't exist!", "Wrong password or username.")
            }
        }).catch(function(error) {
            setAlert('failure', 'Error!', 'Something went wrong.')
        })
    }

    const getID =() => {
        let nick = localStorage.getItem('nick')
        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(data => data.map(d => {
            if(nick == d.username){
                localStorage.setItem('ID', JSON.stringify(d.id))
            }
        }))
        .catch(err => console.log(err))
    }

    const setAlert = (alert, header, message) => {
        setAlertClass(alert)
        setHeader(header)
        setMessage(message)
    }

    const checkAccount = (e) => {
        e.preventDefault()
        loginUser(login, password)
        setLogin('')
        setPassword('')
    }

    function Arrow() {
        const backToMainWeb = () => {
            setLogin('')
            setPassword('')
            setAlertClass('noDisplay')
            props.Back()
        }

        return(
            <img onClick={backToMainWeb} src={leftArrow} className={'arrow'}/>
        )
    }

    return(
        <div>
            <header>
                <h1>Sign in</h1>
            </header>    
            <div className={'loginBox'}>
                {Arrow()}
                <form onSubmit={checkAccount}>
                    <input 
                        type={'text'} 
                        name={'login'}
                        min={4} 
                        required
                        placeholder={'Login'}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input 
                        type={'password'} 
                        name={'password'} 
                        min={4} 
                        max={12} 
                        placeholder={'Password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <button>LOGIN</button>
                    <p>You don't have an account?</p>
                    {referForRegister()}
                </form>
            </div>
            <div className={alertClass}><h3>{header}</h3><p>{message}</p></div>
        </div>
    )
}

export default Login