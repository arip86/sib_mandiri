import styles from '../assets/css/About.module.css';
function About(){
    return(
        <div className={styles.container}>
        <section className={styles.about}>
            <div className={styles.about__left}>
            <h2 className={styles.title}>About Us</h2>
            <h3 className={styles.title__left}>Slogan: Trust, Care anda Balance</h3>
            <p className={styles.title__desc}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Perferendis aut molestias reiciendis iste debitis illo vel adipisci,
                alias rerum. Repellendus officia culpa pariatur corrupti 
                soluta expedita molestias sapiente in dolore.
            </p>
            <button className={styles.about__button} >Details</button>
            </div>
            <div className={styles.about__right}>
                <img src="https://picsum.photos/200/300" 
                alt="" className={styles.about__image} />
           
            </div>
        </section>
        </div>
    );
}
export default About;