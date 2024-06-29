import React from 'react';
import styles from './navbar.module.css'

export default function Navbar() {
    return ( 

        <div className={styles.container}>
             <ul className = {styles.list}>
                {/* <li className = {styles.listElementKP}><a href="">Kaibigang Pilipino</a></li> */}
                <li className = {styles.listElement}><a href="">home</a></li>
                <li className = {styles.listElement}><a href="">about</a></li>
                <li className = {styles.listElement}><a href="">events</a></li>
                <li className = {styles.listElementKP}><a href="">kaibigang pilipino</a></li>
                <li className = {styles.listElement}><a href="">join</a></li>
             </ul>
             {}
        </div>
    )
}