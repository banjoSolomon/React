import React from 'react';
import './index.module.css';
import icon from '../../asset/Icon.png'
import styles from './index.module.css'

const Navbar = () => {
    return (
        <>
            <div className={styles.nav}>
                <div style={{display:"flex", alignItems:"center"}}>
                    <img src={icon} alt="logo" />
                    <h2 style={{color:'#263238', fontSize: '30px' }}>Nexcent</h2>
                </div>

                <div className={styles.midSection}>
                    <p>Home</p>
                    <p>Features</p>
                    <p>Product</p>
                    <p>Service</p>
                    <p>Testimonial</p>
                    <p>Faq</p>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <button style={{ color: '#4caf4f', background: 'none', border: 'none', fontSize: '16px', fontWeight: 500 }}>Login</button>
                    <button style={{ padding: '10px', borderRadius: '4px', background: '#4caf4f', color: '#fff', border: 'none' }}>SignUp</button>
                </div>
            </div>
        </>
    );
};

export default Navbar;

