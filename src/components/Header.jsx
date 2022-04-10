import React from 'react'

const Header = (props) => {

    const changeTheme = () => {
        document.body.classList.toggle('active')
    }

    return (
        <header>
            <h1>Online Store</h1>
            <div>
                <ion-icon name="sunny-outline" onClick={changeTheme}></ion-icon>
            </div>
        </header>
    )
}

export default Header