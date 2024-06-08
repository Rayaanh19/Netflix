import React from 'react'
import { useSelector } from 'react-redux';
import { auth } from '../firebase.js';
import Nav from '../Nav.js';
import { selectUser } from "../features/userSlice.js"
import "./ProfileScreen.css";
import PlansScreen from './PlansScreen.js';

function ProfileScreen() {
    const user = useSelector(selectUser);

    return (
    <div className="profilescreen">
        <Nav />
        <div className='profilescreen_body'>
            <h1>Edit Profile</h1>
            <div className='profilescreen_info'>
                <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt=''/>
                <div className='profilescreen_details'>
                   
                    <div className='profilescreen_plans'>
                        <h3>Plans</h3>
                        <PlansScreen />

                        <button onClick={() => auth.signOut()} className='profilescreen_signout'>Sign Out</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen