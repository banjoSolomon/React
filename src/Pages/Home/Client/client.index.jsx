import React from 'react';
import styles from './index.module.css';

import Logo1 from '../../../asset/Logo.png';
import Logo2 from '../../../asset/Logo (1).png';
import Logo3 from '../../../asset/Logo (2).png';
import Logo4 from '../../../asset/Logo (3).png';
import Logo5 from '../../../asset/Logo (4).png';
import Logo6 from '../../../asset/Logo (5).png';
import Logo7 from '../../../asset/Logo (6).png';
import { members } from "./data";

const Clients = () => {
    return (
        <div className={styles.client}>
            <p>Our Clients</p>
            <p>We have been working with some Fortune 500+ clients</p>
            <div className={styles.clientLogos}>
                <img src={Logo1} alt="Logo 1"/>
                <img src={Logo2} alt="Logo 2"/>
                <img src={Logo3} alt="Logo 3"/>
                <img src={Logo4} alt="Logo 4"/>
                <img src={Logo5} alt="Logo 5"/>
                <img src={Logo6} alt="Logo 6"/>
                <img src={Logo7} alt="Logo 7"/>
            </div>
            <div className={styles.member}> {}
                <p>Manage your entire community in a single system</p>
                <h6>Who is Nextcent suitable for?</h6>
            </div>
            <div className={styles.member2}>
                {
                    members.map((member, index) => (
                        <div key={index} className={styles.paragraph2}>
                            <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                                <img src={member.image} alt={member.title} />
                                <h2>{member.title1} <br /> {member.title2}</h2>
                                <p style={{ width: "50%", textAlign: "center" }}>{member.text}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Clients;
