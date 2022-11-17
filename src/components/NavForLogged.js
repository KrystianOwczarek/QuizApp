import React, {useState} from 'react'
import Avatar from './img/avatar.png'
import X from './img/x.png'

const NavForLogged = props => {
    const [navForLoged, setNavForLoged] = useState('noDisplay')
    const [wisibleNav, setVisibleNav] = useState(false)
    const [deleteFormClass, setDeleteFormClass] = useState('noDisplay')
    const [inscribedPassword, setInscribedPassword] = useState('')
    const [deleteFailureClass, setDeleteFailureClass] = useState('')

    const ElementsOfNav = props => {
        const setId = () =>{
            if(props.e.id == 1){
                alert('Change avatar')
            }else if(props.e.id == 2){
                alert('Statistics')
            }else if(props.e.id == 3){
                alert('Statistics')
            }else if(props.e.id == 4){
                setDeleteFormClass('deleteForm')
            }else if(props.e.id == 5){
                Loggout()
            }
        } 

        return(
            <div onClick={setId}>{props.e.title}</div>
        )
    }

    const endDeleted = () => { setDeleteFormClass('noDisplay') }
    
    const deleteAccount = (e) => {
        e.preventDefault()
        let truePassword = localStorage.getItem('password')

        if(truePassword == inscribedPassword){
            deleteById()
            Loggout()
        }else{
            console.log('no deleted')
        }
    } 

    const deleteById = () => {
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
            <div className={deleteFormClass}>
                <form onSubmit={deleteAccount}>
                    <img src={X} onClick={endDeleted}/>
                    <p>Are you sure want to delete your account? If so, confirm with password.</p>
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
                    <h3></h3>
                    <p></p>
                </div>
            </div>
        </div>
    )
}

export default NavForLogged