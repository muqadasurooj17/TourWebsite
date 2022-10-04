import styles from "../styles/PizzaList.module.css";
import Image from "next/image";

const PizzaList = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Let's Explore The Adventurous Ride</h1>
      <p className={styles.desc}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut blandit arcu
        in pretium molestie. Interdum et malesuada fames acme. Lorem ipsum dolor
        sit amet, consectetur adipiscing elit.
      </p>
      <div className={styles.wrapper}> 
  
      <div className={styles.smcontainer}>
      <Image src="/images/a1.jpg" alt="" width="500" height="300" />
      <h1 className={styles.title}>SPAIN</h1>
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div></div>

    <div className={styles.smcontainer}>
      <Image src="/images/a2.jpg" alt="" width="500" height="300" />
      <h1 className={styles.title}>MALDIVES</h1>
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div>
      
    </div>
        
    <div className={styles.smcontainer}>
      <Image src="/images/a3.jpg" alt="" width="500" height="300" />
      <h1 className={styles.title}>MALAYSIA</h1>
   
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div>
      
    </div>

    <div className={styles.smcontainer}>
      <Image src="/images/a4.jpg" alt="" width="500" height="300" />
      <h1 className={styles.title}>VIENAME</h1>

      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div>
      
    </div>
 
         </div>
          <div className={styles.wrapper}>

         
    <div className={styles.smcontainer}>
      <Image src="/images/a5.jpg" alt="" width="500" height="300" />
      <h1 className={styles.title}>LONDON</h1>
      <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div>
      
    </div>

       
    <div className={styles.smcontainer}>
      <Image src="/images/a6.jpg" alt="" width="500" height="300" />
      <h1 className={styles.title}>INDONESIA</h1>
     
     <div className={styles.desc}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit.  
    </div>
      
    </div>
    </div>
         
      </div>
    
  );
};

export default PizzaList;
