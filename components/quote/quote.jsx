import React from "react"
import styles from "./quote.module.css"
import Image from "next/image" // Import the 'next/image' package

import quoteImage from "../../public/images/gbm.jpg" // Import the image file

export default function Quote() {
    return (
        <div className={styles.quotePage}>
            <div className={styles.quoteContainer}>
                <div className={styles.quoteImage}>
                    <Image 
                        src={quoteImage} 
                        alt="GBM" 
                        layout="responsive" // Add layout="responsive" to make the image responsive
                        //s layout="fill" // Add layout="fill" to make the image fill the entire div
                    />
                </div>
               
            </div>
        </div>
    )
}
