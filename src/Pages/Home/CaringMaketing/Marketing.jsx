import styles from './index.module.css'
import image0 from './../../../asset/1.png'
import  image90 from './../../../asset/2.png'
import  image91 from './../../../asset/3.png'
const Marketing = () => {
    return (
       <div className={styles.container}>
           <h1 className={styles.header}>Caring is the new Marketing</h1>
           <div className={styles.text1}>
               <p>The Nexcent blog is the best place to read
                   about the latest membership insights, trends and more.
                   See who's joining the community,
                   read about how our community are increasing their
                   membership income and lot's more.</p>
           </div>
           <div className={styles.images}>
               <img src={image0} alt="1.png"/>
               <img src={image90} alt="2.png"/>
               <img src={image91} alt="3.png"/>
           </div>
           <button className={styles.button}>Get a Demo </button>
       </div>
    )
}

export default Marketing;