import React,{useState} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookies from 'js-cookie';

function UserLeftbar() {
    
    const [isLoggedIn, setIsLoggedIn] = useState(Cookies.get('isUser') === 'true');
    const navigate = useNavigate();


    const orderHandler = () => {
        navigate('#')
    }
    const settingsHandler = () => {
        navigate('#')
    }
    const logoutHandler = () => {
        if (isLoggedIn) {
            navigate('/login');
            Cookies.remove('isUser');
            setIsLoggedIn(false);
        } else {
            navigate('/login');
        }
    }
    return (
        <>
            <div className='left-bar'>
                <div className='left-bar-container'>
                    <button className='left-bar-button nav-btn' onClick={orderHandler}>
                        Orders
                    </button>
                    <button className='left-bar-button nav-btn' onClick={settingsHandler}>
                        Settings
                    </button>

                    <button className='left-bar-button-logout-x nav-btn' onClick={logoutHandler}>
                        Logout
                    </button>

                </div>
            </div>
        </>
    )
}

export default UserLeftbar