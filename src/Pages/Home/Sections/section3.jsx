import React from 'react';
import styles from './index3.module.css';
import Icon4 from '../../../asset/Icon (4).png';
import Icon5 from '../../../asset/Icon (5).png';
import Icon6 from '../../../asset/Icon (6).png';
import Icon7 from '../../../asset/Icon (7).png';

const Section3 = () => {
    return (
        <div className={styles.section3}>
            <div>
                <p style={{ marginBottom: 0, fontWeight: 'bold', fontSize: '40px' }}>
                    Helping a local <span style={{ color: '#4caf4f', display: 'block' }}>business reinvent itself</span>
                    <span style={{ margin: 0, fontSize: 'small' }}>We reached here with our hard work and dedication</span>
                </p>
            </div>
            <div className={styles.new}>
                <div>
                    <img src={Icon4} alt="Icon 4" />
                    <p>2,245,341 Members</p>
                </div>
                <div>
                    <img src={Icon5} alt="Icon 5" />
                    <p>46,328 Clubs</p>
                </div>
                <div>
                    <img src={Icon6} alt="Icon 6" />
                    <p>828,867 Event Bookings</p>
                </div>
                <div>
                    <img src={Icon7} alt="Icon 7" />
                    <p>1,926,436 Payments</p>
                </div>
            </div>
        </div>
    );
}

export default Section3;
