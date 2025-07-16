import React, { useContext } from 'react'
import './navbar.css'
import { Link, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../context/AuthContext';
import axios from 'axios';

const Navbar = () => {

    const navigate = useNavigate();
    ;
    const { user } = useContext(AuthContext);

    const logoutHandler = async () => {

        try {
            await axios.post(
                `${import.meta.env.VITE_API}/auth/logout`,
                {},
                { withCredentials: true }
            );
            localStorage.removeItem('user');
            navigate('/login');
        } catch (err) {
            console.error("Logout failed", err);
        }
    }
    return (
        <div className='navbar'>
            <div className='navContainer'>
                <Link to="/" style={{ color: "inherit", textDecoration: "none" }}>
                    <span className='logo'>AzhiBooking</span>
                </Link>
                {user ? (<> <div className="navItems"> Hello {user.username}
                    <button className="navButton" onClick={logoutHandler}>logout</button>
                    {user.isAdmin ? (
                        <button className="navButton" onClick={() => window.location.href = 'https://azam-booking-admin.netlify.app'}>Admin Portal</button>
                    ) : <></>}
                </div>
                </>) :
                    (<div className="navItems">
                        <button className="navButton" onClick={() => navigate(`/register`)}>Register</button>
                        <button className="navButton" onClick={() => navigate(`/login`)}>Login</button>
                    </div>)}
            </div>
        </div >
    )
}

export default Navbar