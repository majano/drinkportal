import React from 'react';
import userPicture from '../assets/img/user.png';
import logo from '../assets/img/logo.svg';

function Header() {
    return (
        <div className="header">
            <div className="logo"><img src={logo} alt=""/></div>
            <div className="nav">
                <ul>
                    <li className="active">Highlights</li>
                    <li>Insights</li>
                    <li>Portfolio</li>
                    <li>Team</li>
                    <li>Social</li>
                </ul>
            </div>
            <div className="nav_secondary">
                <div className="search_bar">
                    <input type="text" placeholder="Search..." />
                </div>
                <div className="recipes_link">
                    <svg viewBox="0 0 22 22"><defs><rect width="22" height="22" transform="translate(1703 19)" fill="#adb5bb"/></defs><g transform="translate(-1703 -19)"><g transform="translate(1703.001 19)"><path d="M19.642,5.443a.6.6,0,0,0-.432-1.011H14.657l.692-1.484A1.348,1.348,0,0,0,17,2.289,1.347,1.347,0,0,0,16.444.6l.148-.318a.2.2,0,1,0-.361-.168l-.148.318a1.347,1.347,0,0,0-1.65.659,1.346,1.346,0,0,0,.556,1.687l-.772,1.652H2.788a.6.6,0,0,0-.432,1.011l8.1,8.46v7.051H8.2A.524.524,0,0,0,8.2,22h5.591a.524.524,0,0,0,0-1.047h-2.25V13.9Zm-5.983.185-.774,1.661H6.654L11,11.829l4.346-4.54H13.325L14.1,5.628h3.71L11,12.742,4.189,5.628Z" fill="#adb5bb"/></g></g></svg>
                </div>
                <div className="user_control">
                    <div className="user_picture"><img src={userPicture} alt=""/></div>
                    <span>Kath</span>

                    <div className="user_control_menu"></div>
                </div>
            </div>
        </div>
    )
}

export default Header
