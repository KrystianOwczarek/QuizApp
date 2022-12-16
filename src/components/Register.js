import React, {useState} from 'react'
import './style.css'
import leftArrow from './img/leftArrow.png'

const Register = props => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alertClass, setAlertClass] = useState('noDisplay')
    const [header, setHeader] = useState('')
    const [message, setMessage] = useState('')

    //warunki, które muszą zostać spełnione aby była możliwa rejestracja
    const createAccount = (e) => {
        e.preventDefault()
        if(password == confirmPassword && login.length >= 4 && password.length >= 6){
            registerUser(login, password)
            setLogin('')
            setPassword('')
            setConfirmPassword('')
        }else if(password != confirmPassword){
            setAlert('failure', "User don't created!", "Password don't confirmed.")
        }else{
            setAlert('failure', "User don't created!", 'Too short login or password.')
        }
    }

    //funkcja odpowiadająca za rejestracje użytkownika
    const registerUser = (username, password) => {
        fetch('http://localhost:8080/users',{
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
                setAlert('success', 'User registered!', 'You have created an account.')
            }else{
                setAlert('failure', 'User already exist!', "You haven't created an account.")
            }
        }).catch(function(error) {
            setAlert('failure', 'Error!', 'Something went wrong.')
        })
    }

    //strzałka powrotu
    function Arrow() {
        return(
            <img onClick={backForRegister} src={leftArrow} className={'arrow'}/>
        )
    }
    
    const setAlert = (alert, header, message) => {
        setAlertClass(alert)
        setHeader(header)
        setMessage(message)
    }

    //funkcja powrotu do ekranu logowania
    const backForRegister = () => {
        setLogin('')
        setPassword('')
        setConfirmPassword('')
        props.BackToLogin()
        setAlertClass('noDisplay')
    }

    return(
        <div>
            <header>
                <h1>Register</h1>
            </header>    
            <div className={'registerBox'}>
                {Arrow()}
                <form onSubmit={createAccount}>
                    <input 
                        type={'login'} 
                        min={4} 
                        placeholder={'Login'}
                        required
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input 
                        type={'password'} 
                        min={4} 
                        max={12} 
                        placeholder={'Password'}
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <input 
                        type={'password'} 
                        min={4} 
                        max={12} 
                        placeholder={'Confirm password'}
                        required
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <button>REGISTER</button>
                    <p>Your login must be at least 4 signs long and password at least 6 signs long.</p>
                </form>
            </div>
            <div className={alertClass}><h3>{header}</h3><p>{message}</p></div>
        </div>
    )
}

export default Register