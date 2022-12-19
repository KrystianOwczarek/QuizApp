import React, {useState} from 'react'
import Avatar from 'react-avatar-edit'
import AvatarPhoto from './img/accountImage.png'
import X from './img/blueX.png'

const ChangeAvatar = props => {
    const [src] = useState(null)
    const [preview, setPreview] = useState(null)

    const getID = () => {
        const id = localStorage.getItem('ID')
        return id
    }

    //funkcja usuwająca podgląd zdjęcia po jego zamknięciu
    const onClose = () => {
        setPreview(null)
    }

    //funkcja pozwalająca na podgląd ustawianego zdjęcia po przesunięciu znacznika
    const onCrop = view => {
        setPreview(view)
    }

    //funkcja zapisująca wybrane przez użytkownika zdjęcie do bazy danych
    const saveImage = e => {
        e.preventDefault()
        const id = getID()
        fetch(`http://localhost:8080/users/${id}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',          
            },
            body: JSON.stringify({
                image: preview,
            })
        }).then(function(res){
            if(res.status == 200){
                window.location.reload()
            }
        }).catch(function(error){
            console.log('error')
        })
    }

    //warunek odpowiadający za wyświetlanie się odpowiedniego zdjęcia
    const ifPreviewIsNull = () => {
        if(preview == null){
            return AvatarPhoto
        }else{
            return preview
        }
    }

    return (
        <div>
            <img src={X} onClick={props.endChangePhoto}/>
            <form onSubmit={saveImage}>
                <Avatar
                    type={'file'}
                    name={'file'}
                    width={400}
                    height={400}
                    onCrop={onCrop}
                    onClose={onClose}
                    src={src}
                />
                <button className={'saveAvatarButton'}>Save image</button>
            </form>
            <img className={'preview'} src={ifPreviewIsNull()}/>
        </div>
    )
}

export default ChangeAvatar