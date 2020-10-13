import React from 'react';
import './Contact.css';

const name = 'Constance Newman';
const avatar = 'https://randomuser.me/api/portraits/women/51.jpg';
const online = true;

function Contact () {
    return (
        <div className="Contact">

            <img className="avatar" src={avatar}></img>

            <div>
                <h4 className="name">{name}</h4>
                <div className="status">
                    <i class="status-online"></i>
                    <p class="status-text">{online ? "online" : "offline"}</p>
                </div>
            </div>

        </div>
    );
}

export default Contact;