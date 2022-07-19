import React from 'react';
import './landingpage.css';
import image1 from './Images/logo.png';

class Dashboard extends React.Component {

    render(){
        return (
            <div className="freame">
                <div className="headerleft">
                    <img src={image1} alt="" className="logo" />
                    <div className="titles">
                        <h1 className="title1">Orizon Academy</h1>
                        <h3 className="title2">Learning with fun</h3>
                    </div>
                </div>
                <div className="tools">
                    <div className="icons">

                    </div>

                    <section id='hearder' className='leftlist'>
                        <ul id="menubar">
                            <li> <p>My Courses</p></li>
                            <li> <p>Bookmarks</p></li>
                            <li> <p>Treding Courses</p></li>
                            <li> <p>Help Articles</p></li>
                            <li> <p>Completed Courses</p></li>
                        </ul>
                    </section>

                    <section id='names' className='leftlistnames'>
                        <ul id="namesbar">
                            <p id='title0'>My Tutors</p>
                            <li>
                                <div className="messagecontaint">
                                    <p className="title">Kevin Rodrigue</p>
                                    <p className='chat'>Python Developper </p>
                                </div>
                            </li>
                                

                            <li>
                                <div className="messagecontaint2">
                                    <p className="title">Vaillante</p>
                                    <p className='chat'>FrontEnd Dev </p>
                                </div>

                            </li>
                        </ul>
                    </section>
            
                </div>
            </div>
    
        )
    }
    
}
export default Dashboard;
