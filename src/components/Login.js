import React, {useState} from 'react'
import './style.css'
import leftArrow from './img/leftArrow.png'

const Login = props => {
    const [login, setLogin] = useState('')
    const [password, setPassword] = useState('')
    const [alertClass, setAlertClass] = useState('noDisplay')
    const [header, setHeader] = useState('')
    const [message, setMessage] = useState('')

    //przejście do okna rejestracji
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

    //funkcja wywołująca funkcje logowania i usuwająca zawartość loginu i hasła
    const checkAccount = (e) => {
        e.preventDefault()
        loginUser(login, password)
        setLogin('')
        setPassword('')
    }

    //funkcja logująca użytkownika
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
                localStorage.setItem('nick', username)
                localStorage.setItem('password', password)
                props.Logged()
                props.Back()
                window.location.reload()
            }else{
                setAlert('failure', "User don't exist!", "Wrong password or username.")
            }
        }).catch(function(error) {
            setAlert('failure', 'Error!', 'Something went wrong.')
        })
    }

    //funkcja pobierająca id i statystyki z bazy danych
    const setID = () => {
        const getNick = () => {
            const nick = localStorage.getItem('nick')
            return nick
        }
        const username = getNick()
        fetch('http://localhost:8080/users')
        .then(res => res.json())
        .then(data => data.map(d => {
            if(username === d.username){
                localStorage.setItem('ID', '')
                localStorage.setItem('ID', d.id)
            }
        }))
        .catch(err => console.log(err))
    }


    //strzałka, która cofa do głownego ekranu po naciśnięciu
    function Arrow() {
        const backToMainWeb = () => {
            setLogin('')
            setPassword('')
            setAlertClass('noDisplay')
            props.Back()
        }

        return(
            <img onClick={backToMainWeb} src={leftArrow} als='arrow' className={'arrow'}/>
        )
    }

    //funkcja służąca do ustawienia odpowiedniego komunikatu
    const setAlert = (alert, header, message) => {
        setAlertClass(alert)
        setHeader(header)
        setMessage(message)
    }

    return(
        <div>
            {setID()}
            <header>
                <h1>Sign in</h1>
            </header>    
            <div className={'loginBox'}>
                {Arrow()}
                <form onSubmit={checkAccount}>
                    <input 
                        type={'text'} 
                        name={'login'}
                        required
                        placeholder={'Login'}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <input 
                        type={'password'} 
                        name={'password'} 
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