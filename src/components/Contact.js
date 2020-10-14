import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

function Contact(props) {
    return (
        <div className="Contact">

            <img className="avatar" src={props.avatar} alt={props.name}></img>

            <div>
                <h4 className="name">{props.name}</h4>
                <div className="status">
                    <i className={props.statusOnline ? 'status-online' : 'status-offline'}></i>
                    <p className="status-text">{props.statusOnline ? 'Online' : 'Offline'}</p>
                </div>
            </div>

        </div>
    );
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    statusOnline: PropTypes.bool,
  };

export default Contact;