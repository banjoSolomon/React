import React from 'react';
import styles from './index.module.css';

import Logo120 from '../../asset/Logo120.png';
import Path from '../../asset/Path.png';
import Path1 from '../../asset/Path1.png';
import Path7 from '../../asset/Path7.png';
import SocialIcons from '../../asset/Social Icons.png';
import SendIcon from '../../asset/send.png';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div>
                <img src={Logo120} alt="Logo" />
                <p>Copyright © 2020 Nexcent ltd. <span style={{ display: 'block' }}>All rights reserved</span></p>
                <div>
                    <img src={Path} alt="Path" />
                    <img src={Path1} alt="Path1" />
                    <img src={Path7} alt="Path7" />
                    <img src={SocialIcons} alt="Social Icons" />
                </div>
                <div className={styles.footerSider}>
                    <div>
                        <div><p>Company</p></div>
                        <p>About us</p>
                        <p>Blog</p>
                        <p>Contact us</p>
                        <p>Pricing</p>
                        <p>Testimonials</p>
                    </div>
                    <div>
                        <div><p>Support</p></div>
                        <p>Help center</p>
                        <p>Terms of service</p>
                        <p>Legal</p>
                        <p>Privacy policy</p>
                        <p>Status</p>
                    </div>
                    <div>
                        <p>Stay up to date</p>
                        <label>
                            <input placeholder="Your email address" className={styles.input} />
                            <img src={SendIcon} alt="Send" className={styles.image} />
                        </label>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
