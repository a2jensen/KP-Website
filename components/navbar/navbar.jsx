import React from 'react';
import styles from './navbar.module.css'

export default function Navbar() {
    return ( 

        <div className={styles.navBarShape}>
             <ul className = {styles.list}>
                {/* <li className = {styles.listElementKP}><a href="">Kaibigang Pilipino</a></li> */}
                <li className = {styles.listElementHome}><a href="">home</a></li>
                <li className = {styles.listElementAbout}><a href="">about</a></li>
                <li className = {styles.listElementEvents}><a href="">events</a></li>
                <li className = {styles.listElementKP}><a href="">kaibigang pilipino</a></li>
                <li className = {styles.listElementJoin}><a href="">join</a></li>
             </ul>
             {}
        </div>
    )
}