import React from "react"
import styles from "./quote.module.css"
import Image from "next/image" // Import the 'next/image' package
import localFont from '@next/font/local';
// import quoteImage from "../../public/images/gbm.jpg" // Import the image file
import quoteStar from "../../public/SunStar.svg" // Import the image file

// const coolvetica = localFont({src: '../public/fonts/coolvetica.otf', display: 'swap', unicodeRange: 'U+000-5FF', name: 'Coolvetica'});

export default function Quote() {
    return (
        <div className={styles.quotePage}>
            <div className={styles.quoteContainer}>
                

                
                <div className={styles.quoteText}>
                    KP meets weekly for General Body Meetings (GBM) alongside events hosted by the three boards (STAR, GEN, CORE) throughout the school year. Come to KP the way you want, whenever you want!
                </div>
                <div className={styles.quoteStar}>
                    <Image 
                        src={quoteStar} 
                        alt="Philippine Sun Star" 
                        layout="fill" // Add layout="responsive" to make the image responsive
                        objectFit="cover"
                    />
                </div>
                {/* </div> */}
                
               
            </div>
        </div>
    )
}
