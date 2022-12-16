import React, {useState} from 'react'
import X from './img/x.png'

const DeleteAccount = props => {
    const [inscribedPassword, setInscribedPassword] = useState('')
    const [deleteFailureClass, setDeleteFailureClass] = useState('noDisplay')

    //cofnięcie do ekranu głównego
    const endDeleted = () => {
        setDeleteFailureClass('noDisplay')
        setInscribedPassword('')
        props.endDeleted()
    }

    //funkcja sprawdzająca czy hasło wpisane jest zgodne z przypisanym do konta
    const deleteAccount = (e) => {
        e.preventDefault()
        let truePassword = localStorage.getItem('password')

        if(truePassword == inscribedPassword){
            deleteById()
            props.Loggout()
        }else{
            setDeleteFailureClass('failure')
        }
    } 

    //funkcja usuwająca konto po id
    const deleteById = () => {
        const id = getID()

        fetch(`http://localhost:8080/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then(res => res).catch(err => err)
    }

    //pobieramy id
    const getID = () => {
        const id = localStorage.getItem('ID')
        return JSON.parse(id)
    }

    return(
        <div className={'deleteAccount'}>
            <img src={X} onClick={endDeleted}/>
                <p>Enter your current password to delete your account.</p>
            <form onSubmit={deleteAccount}>
                <input
                    type={'password'}
                    name={'password'}
                    required
                    placeholder={'Password'}
                    value={inscribedPassword}
                    onChange={(e) => setInscribedPassword(e.target.value)}
                />
                <button type={'submit'}>Delete</button>
            </form>
            <div className={deleteFailureClass}>
                <h3>Didn't delete account!</h3>
                <p>Wrong password.</p>
            </div>
        </div>
    )
}

export default DeleteAccount