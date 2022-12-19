import React, {useState} from 'react'
import X from './img/blueX.png'

const ChangePassword = props => {
    const [currentPassword, setCurrentPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmNewPassword, setConfirmNewPassword] = useState('')
    const [alertClass, setAlertClass] = useState('noDisplay')
    const [header, setHeader] = useState('')
    const [text, setText] = useState('')

    const endChange = () => {
        setAlertClass('noDisplay')
        setCurrentPassword('')
        setNewPassword('')
        setConfirmNewPassword('')
        props.endChange()
    }

    //funkcja odpowiadająca za ustawienie odpowiedniego komunikatu
    const setAlert = (alert, header, text) => {
        setAlertClass(alert)
        setHeader(header)
        setText(text)
    }

    const getID = () => {
        const id = localStorage.getItem('ID')
        return id
    }

    //funkcja sprawdzająca czy wprowadzone hasło odpowiada przypisanemu do konta, następnie wywołuje odpowiednią funkcję lub nie
    const confirmChange = (e) => {
        e.preventDefault()
        const oldPassword = localStorage.getItem('password')

        if(oldPassword == currentPassword){
            if(newPassword == confirmNewPassword){
                changePassword()
            }else{
                setAlert('failure', 'Wrong confirmation password!', 'Enter the correct confirmation password.')
            }
        }else{
            setAlert('failure', 'Wrong current password!', 'Enter the correct password.')
        }
    }

    //funkcja zmieniająca hasło
    const changePassword = () => {
        const id = getID()
        fetch(`http://localhost:8080/users/${id}`, {
            method: 'PATCH',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
            },
            body: JSON.stringify({
                password: newPassword,
            })
        }).then(function(res){
            if(res.status == 200){
                console.log('pomyślnie zmienion hasło')
                setAlert('success', 'Password changed!', 'Password changed successfully.')
                localStorage.setItem('password', newPassword)
            }
        }).catch(function(error){
            console.log('error')
        })
    }

    return(
        <div className={'changePassword'}>
            <img src={X} onClick={endChange}/>
            <div className={'position'}><p>Enter your current password, set a new password and confirm.</p></div>
            <form onSubmit={confirmChange}>
                <input
                    type={'password'}
                    name={'currentPassword'}
                    required
                    placeholder={'Current password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                />
                <input
                    type={'password'}
                    name={'newPassword'}
                    required
                    placeholder={'New password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                />
                <input
                    type={'password'}
                    name={'confirmNewPassword'}
                    required
                    placeholder={'Confirm new password'}
                    value={confirmNewPassword}
                    onChange={(e) => setConfirmNewPassword(e.target.value)}
                />
                <button>Change password</button>
            </form>
            <div className={alertClass}>
                <h3>{header}</h3>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default ChangePassword