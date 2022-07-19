import React from 'react';
import { FiSearch } from 'react-icons/fi';
import { GoSettings } from 'react-icons/go';
import { BiMessageDetail } from 'react-icons/bi';
import { IoNotificationsOutline } from 'react-icons/io5';
import './topheader.css';

class TopHeader extends React.Component {
    render() {
        return (
            <div className="header-section ">
                <div className="top-container-text">
                    <h1 className="name-title">Courses Dashboard</h1>
                    <p className="description">Hello AR Shakir, welcome back!</p>
                </div>
                <div className="input-container">
                    <button><FiSearch /></button>
                    <input type="text" placeholder="Search Dashboard" />
                    <button><GoSettings /></button>
                </div>
                <div className="profile-messages">
                    <button><BiMessageDetail size="25px" /></button>
                    <button><IoNotificationsOutline size="25px" /></button>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/288475196_1033077720678904_8623402705242734443_n.jpg?stp=dst-jpg_s96x96&amp;ccb=11-4&amp;oh=01_AVz0_L59GMBaPoh4J1PTSyFDRzHHJfIqDGQcLA9_ZMsgyQ&amp;oe=62DD3813" alt="" draggable="false" class="profile-pic "></img>
                </div>
            </div>
            
        )
    }
}
export default TopHeader;