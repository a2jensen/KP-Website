import React from 'react';
import styles from './navbar.module.css'

export default function Navbar() {
    return ( 

        <div className = {styles.navBarShape}>
        <div>
            </div>     
             <ul className = {styles.list}>
                {/* <li className = {styles.listElementKP}><a href="">Kaibigang Pilipino</a></li> */}
                <li className = {styles.listElementHome}><a href="">Home</a></li>
                <li className = {styles.listElementAbout}><a href="">About</a></li>
                <li className = {styles.listElementEvents}><a href="">Events</a></li>
                <li className = {styles.listElementKP}><a href="">Kaibigang Pilipino</a></li>
                <li className = {styles.listElementJoin}><a href="">Join</a></li>
             </ul>
             {}
        </div>
    )
}


