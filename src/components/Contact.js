import React from 'react';
import PropTypes from 'prop-types';
import './Contact.css';

class Contact extends React.Component {
    constuctor(props) {
        super(props);
        this.state = {
            online: false,
        };
    }
    render(){
        return (
            <div className="Contact">

                <img className="avatar" src={this.props.avatar} alt={this.props.name}/>

                <div>
                    <h4 className="name">{this.props.name}</h4>
                    <div className="status" 
                        onClick={event => {
                            console.log(this.state.online);
                        }}>
                        <i className={this.props.statusOnline ? 'status-online' : 'status-offline'}></i>
                        <p className="status-text">{this.props.statusOnline ? 'Online' : 'Offline'}</p>
                    </div>
                </div>

            </div>
        );
    }
}

Contact.propTypes = {
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    statusOnline: PropTypes.bool,
    statusText: PropTypes.string.isRequired,
  };

export default Contact;