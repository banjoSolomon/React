import React from 'react';
import styles from './index.module.css';
import Frame from '../../../asset/Frame 35.png';

const Section2 = () => {
    return (
        <div className={styles.section2}>
            <img src={Frame} alt="Frame 35" />
            <div>
                <h1 style={{ display: 'inline-block' }}>
                    The unseen of spending three
                    <span style={{ color: '#4caf4f', display: 'block' }}>years at Pixelgrade</span>
                </h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sit amet justo ipsum. Sed accumsan
                    quam vitae est varius fringilla. Pellentesque placerat vestibulum lorem sed porta. Nullam mattis
                    tristique iaculis. Nullam pulvinar sit amet risus pretium auctor. Etiam quis massa pulvinar, aliquam quam
                    vitae, tempus sem. Donec elementum pulvinar odio.
                </p>
                <button style={{ color: 'white', background: '#4caf4f', border: 'none', borderRadius: '5px', padding: '15px 30px' }}>
                    Learn More
                </button>
            </div>
        </div>
    );
}

export default Section2;



