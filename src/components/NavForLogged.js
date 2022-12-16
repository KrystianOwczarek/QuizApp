import React, {useEffect, useState} from 'react'
import Avatar from './img/avatar.png'
import Statistics from './Statistics'
import ChangeAvatar from './ChangeAvatar'
import ChangePassword from './ChangePassword'
import DeleteAccount from './DeleteAccount'

const NavForLogged = props => {
    const [navForLoged, setNavForLoged] = useState('noDisplay')
    const [wisibleNav, setVisibleNav] = useState(false)
    const [changeAvatarClass, setChangeAvatarClass] = useState('noDisplay')
    const [image, setImage] = useState('')
    const [statistics, setStatistics] = useState('noDisplay')
    const [changePasswordClass, setChangePasswordClass] = useState('noDisplay')
    const [deleteFormClass, setDeleteFormClass] = useState('noDisplay')

    //efekt pobierający i zapisujący zdjęcie użytkownika w bazie danych
    useEffect(() => {
        const nick = getNick()
        fetch(`http://localhost:8080/users`)
        .then(res => res.json())
        .then(data => data.map(d => {
            if(nick === d.username){
                //console.log(data)
                setImage(d.image)
                localStorage.setItem('image', d.image)
            }
        }))
        .catch(err => err)
    }, [])

    //funkcja zwracająca nick zalogowanego użytkownika
    const getNick = () => {
        const nick = localStorage.getItem('nick')
        return nick
    }

    //wylogowanie
    const Loggout = () => {
        props.Loggout()
        localStorage.setItem('nick', '')
        localStorage.setItem('password', '')
        localStorage.setItem('ID', '')
    }

    //wyjście z usuwania konta
    const endDeleted = () => { 
        setDeleteFormClass('noDisplay')
    }

    //wyjście ze zmiany hasła
    const endChangePassword = () => {
        setChangePasswordClass('noDisplay')
    }

    //wyjście ze statystyk
    const endStatistics = () => {
        setStatistics('noDisplay')
    }    

    //wyjście ze zmiany zdjęcia
    const endChangePhoto = () => {
        setChangeAvatarClass('noDisplay')
    }

    //funkcja odpowiadająca za zdjęcie użytkownika
    const Image = () => {
        if(image == null){
            return Avatar
        }else{
            return image
        }
    }

    //pokazujemy nawigację
    const showNav = () => {
        setNavForLoged('navForLoged')
        setVisibleNav(true)
    }

    //ukrywamy nawigację
    const hideNav = () => {
        setNavForLoged('noDisplay')
        setVisibleNav(false)
    }

    //funkcja generująca elementy nawigacji i ładująca ekran adekwatny do wybranego elementu
    const ElementsOfNav = props => {
        const setId = () => {
            if(props.e.id == 1){
                setChangeAvatarClass('bcgForNavElements')
            }else if(props.e.id == 2){
                setStatistics('bcgForNavElements')
            }else if(props.e.id == 3){
                setChangePasswordClass('bcgForNavElements')
            }else if(props.e.id == 4){
                setDeleteFormClass('bcgForNavElements')
            }else if(props.e.id == 5){
                Loggout()
            }
        } 

        return(
            <div onClick={setId}>{props.e.title}</div>
        )
    }

    const elements = props.navElements.map(e => <ElementsOfNav key={e.key} e={e}/>)
    const avatar = Image()
    return(
        <div>
            <img onClick={wisibleNav ? hideNav : showNav} src={avatar}/>
            <div className={navForLoged}>
                <img src={avatar}/><p>{props.nick}</p>
                {elements}
            </div>
            <div className={changeAvatarClass}><ChangeAvatar endChangePhoto={endChangePhoto}/></div>
            <div className={statistics}><Statistics endStatistics={endStatistics}/></div>
            <div className={changePasswordClass}><ChangePassword endChange={endChangePassword}/></div>
            <div className={deleteFormClass}><DeleteAccount Loggout={Loggout} endDeleted={endDeleted}/></div>
        </div>
    )
}

export default NavForLogged