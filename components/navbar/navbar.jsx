import React from 'react';
import styles from './navbar.module.css'

export default function Navbar() {
    return ( 

        <div className = {styles.navBarShape}>
        <div ></div>     
             <ul className = {styles.list}>
                 <li className = {styles.listElementKP}><a href="">kabigang pillipino</a></li>
                 
                 <li className = {styles.listElementHome}><a href="">hosssmse</a></li>
                 <li className = {styles.listElementAbout}><a href="">about</a></li>
                 <li className = {styles.listElementEvents}><a href="">events</a></li>
                 <li className = {styles.listElementJoin}><a href="">join</a></li>
             </ul>
             {/* <div>HI<div>HELLOs</div></div> */}
             </div>
    )
}


