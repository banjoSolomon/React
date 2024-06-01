import Phone from '../../../asset/image 9.png';
import styles from './index.module.css';
import img1 from '../../../asset/Logo (7).png';
import img2 from '../../../asset/Logo (8).png';
import img3 from '../../../asset/Logo (9).png';
import img4 from '../../../asset/Logo (10).png';
import img5 from '../../../asset/Logo (11).png';
import img6 from '../../../asset/Logo (12).png';
import img7 from '../../../asset/Right.png';

const AllCustomers = () => {
    return (
        <div className={styles.AllCustomers}>
            <img src={Phone} alt="Image9" />
            <div className={styles.text}>
                <p>
                    Donec a eros justo. Fusce egestas tristique ultrices. Nam tempor, augue nec
                    tincidunt molestie, massa nunc varius arcu, at scelerisque elit erat a magna.
                    Donec quis erat at libero ultrices mollis. In hac habitasse platea dictumst.
                    Vivamus vehicula leo dui, at porta nisi facilisis finibus. In euismod augue
                    vitae nisi ultricies, non aliquet urna tincidunt. Integer in nisi eget nulla
                    commodo faucibus efficitur quis massa. Praesent felis est, finibus et nisi ac,
                    hendrerit venenatis libero. Donec consectetur faucibus ipsum id gravida.
                </p>
                <div className={styles.font}>
                    <p>Tim Smith</p>
                </div>
                <div>
                    <p>British Dragon Boat Racing Association</p>
                </div>
                <div className={styles.logos}>
                    <img src={img1} alt="Logo 7" />
                    <img src={img2} alt="Logo 8" />
                    <img src={img3} alt="Logo 9" />
                    <img src={img4} alt="Logo 10" />
                    <img src={img5} alt="Logo 11" />
                    <img src={img6} alt="Logo 12" />
                    <p className={styles.customer}>Meet all customers</p>
                    <img src={img7} alt="Right.png"/>
                </div>
            </div>
        </div>
    );
};

export default AllCustomers;
