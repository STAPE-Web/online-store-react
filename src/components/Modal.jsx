import React, { useState } from 'react'
import cl from './Modal.module.css'

const Basket = ({ getTitle, getId, visible, setVisible }) => {

    const rootClasses = [cl.Modal]
    const [nameInput, setNameInput] = useState('')
    const [emailInput, setEmailInput] = useState('')
    const [nameLabel, setNameLabel] = useState('Your Name')
    const [emailLabel, setEmailLabel] = useState('Your Email')

    if (visible) {
        rootClasses.push(cl.active);
    }
    const Validation = () => {
        if (nameInput === '') {
            setNameLabel('Pleace enter your name')
        }
        if (emailInput === '') {
            setEmailLabel('Pleace enter your email')
        }
        if (nameInput !== '') {
            setNameLabel('Your Name')
        }
        if (emailInput !== '') {
            setEmailLabel('Your Email')
        }
        if (emailInput !== '' && nameInput !== '') {
            setVisible(false)
            setNameInput('')
            setEmailInput('')
        }
    }

    return (
        <div className={rootClasses.join(' ')} >
            <div className={cl.top} >
                <h1>Item id: {getId}</h1>
                <ion-icon name="close-outline" onClick={() => setVisible(false)}></ion-icon>
            </div>
            <div className='form'>
                <h1>{getTitle}</h1>
                <label>{nameLabel}</label>
                <input value={nameInput} onChange={(e) => setNameInput(e.target.value)} />
                <label>{emailLabel}</label>
                <input value={emailInput} onChange={(e) => setEmailInput(e.target.value)} />
                <input type="button" value='Send' onClick={Validation} />
            </div>
        </div >
    )
}

export default Basket