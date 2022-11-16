import React, {useState} from 'react'
import Avatar from './img/avatar.png'

const AccForLogged = props => {
    const [navForLoged, setNavForLoged] = useState('noDisplay')
    const [wisibleNav, setVisibleNav] = useState(false)

    const ElementsOfNav = props => {
        const setId = () =>{
            if(props.e.id == 1){
                alert('Change avatar')
            }else if(props.e.id == 2){
                alert('Statistics')
            }else if(props.e.id == 3){
                alert('Change password')
            }else if(props.e.id == 4){
                deleteAccount()
                Loggout()
            }else if(props.e.id == 5){
                Loggout()
            }
        } 

        return(
            <div onClick={setId}>{props.e.title}</div>
        )
    }

    const deleteAccount = () => {
        const id = getID()

        fetch(`http://localhost:8080/users/${id}`, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            }
        }).then().catch()
    }

    const getID = () => {
        let id = localStorage.getItem('ID')
        return JSON.parse(id)
    }

    const Loggout = () => {
        props.Loggout()
    }

    const hideNav = () => {
        setNavForLoged('noDisplay')
        setVisibleNav(false)
    }

    const showNav = () => {
        setNavForLoged('navForLoged')
        setVisibleNav(true)
    }

    const elements = props.navElements.map(e => <ElementsOfNav key={e.key} e={e}/>)
    return(
        <div>
            <img onClick={wisibleNav ? hideNav : showNav} src={Avatar}/>
            <div className={navForLoged}>
                <img src={Avatar}/><p>{props.nick}</p>
                {elements}
            </div>
        </div>
    )
}

export default AccForLogged