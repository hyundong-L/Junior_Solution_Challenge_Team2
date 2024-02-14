import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../authContext/AuthContext'
import { doSignOut } from '../../firebase/auth'
import './Header.css'

const Header = () => {
    const navigate = useNavigate()
    const { userLoggedIn, currentUser } = useAuth();

    return (
        <nav className='nav'>
            { userLoggedIn
                    ?
                    <>
                        <div className='user-id'>{currentUser.email}</div>
                        <button onClick={() => { doSignOut().then(() => { navigate('/login') }) }} className='forLink'>Logout</button>
                    </>
                    :
                    <></>
            }
        </nav>
    )
}

export default Header