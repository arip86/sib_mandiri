import styles from '../assets/css/Services.module.css';
import services from '../utils/service';
function Services(){
    return(
        <section className={styles.services}>
            <h2 className={styles.title}>Our Service</h2>
            <div className={styles.cardContainer}>
                {services.map((service)=>(
            <div key={service.id} className={styles.card}>
                <h3 className={styles.cardTitle}>{service.name}</h3>
                <p className={styles.cardDescription}>{service.description}</p>
            </div>
              ))}
            </div>
        </section>
    )
}
export default Services;