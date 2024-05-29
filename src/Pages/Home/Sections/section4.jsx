import React from 'react';
import styles from './index4.module.css';
import logo from '../../../asset/pana.png';

const Section4 = () => {
    return (
        <div className={styles.section4}>
            <img src={logo} alt="Pana" />
            <div>
                <h1>
                    How to design your site footer
                    <span style={{ color: '#4caf4f', display: 'block' }}>like we did</span>
                </h1>
                <p>
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec tincidunt molestie, massa
                    nunc varius arcu, at scelerisque elit erat a magna. Donec quis erat at libero ultrices mollis. In hac
                    habitasse platea dictumst. Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue
                    vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla commodo faucibus efficitur
                    quis massa. Praesent felis est, finibus et nisi ac, hendrerit venenatis libero. Donec consectetur
                    faucibus ipsum id gravida.
                </p>
                <button style={{ color: 'white', background: '#4caf4f', border: 'none', borderRadius: '5px', padding: '15px 30px' }}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Section4;
