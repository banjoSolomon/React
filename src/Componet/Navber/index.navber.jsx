import React, { useState } from 'react';
import './index.module.css';
import icon from '../../asset/Icon.png';
import Hamburger from "hamburger-react"
import styles from './index.module.css';

const Navbar = () => {
    const isMobile = window.innerWidth <= 1080;
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <div className={styles.nav}>
                <div className={styles.logoContainer}>
                    <div>
                        <img src={icon} alt="logo" />
                    </div>
                    <div>
                        <h2 style={{ color: "#263238", fontFamily: "Cambria", padding: "5px" }}>Nexcent</h2>
                    </div>
                </div>

                    {isMobile ? (
                        <>
                            <div className={styles.hamburger}>
                                <Hamburger toggled={isOpen} toggle={setIsOpen} />
                            </div>
                            {isOpen && (
                                <div className={styles.mobileMenu}>
                                    <div className={styles.midSection}>
                                        <p>Home</p>
                                        <p>Service</p>
                                        <p>Feature</p>
                                        <p>Product</p>
                                        <p>Testimonial</p>
                                        <p>FAQ</p>
                                    </div>
                                    <div className={styles.authButtons}>
                                        <button style={{ color: "#4caf4f", background: "none", border: "none", fontSize: "16px", fontWeight: "500" }}>Login</button>
                                        <button style={{ padding: "10px", borderRadius: "4px", background: "#4caf4f", color: "#fff", border: "none" }}>Sign up</button>
                                    </div>
                                </div>
                            )}
                        </>
                    ) : (
                        <>
                            <div className={styles.midSection}>
                                <p>Home</p>
                                <p>Service</p>
                                <p>Feature</p>
                                <p>Product</p>
                                <p>Testimonial</p>
                                <p>FAQ</p>
                            </div>
                            <div style={{display: "flex", justifyContent: "center", alignItems: "center", gap: "10px"}}>
                                <button style={{
                                    color: "#4caf4f",
                                    background: "none",
                                    border: "none",
                                    fontSize: "16px",
                                    fontWeight: "500"
                                }}>Login
                                </button>
                                <button style={{
                                    padding: "10px",
                                    borderRadius: "4px",
                                    background: "#4caf4f",
                                    color: "#fff",
                                    border: "none"
                                }}>Sign up
                                </button>
                            </div>
                        </>
                    )}
            </div>
        </>
    );
};

export default Navbar;




