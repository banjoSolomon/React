import React from 'react';
import styles from "./index.module.css"

import Illustration from '../../../asset/Illustration.png';

const Hero = () => {
    return (
        <div className={styles.heroSection}>
            <div>
                <h1>Lessons and insights <span style={{ color: '#4caf4f', display: 'block' }}>from 8 years</span></h1>
                <p>Where to grow your business as a photographer: site or social media?</p>
                <button className={styles.button}>Register</button>
            </div>
            <img src={Illustration} alt="Illustration" />
        </div>
    );
}

export default Hero;