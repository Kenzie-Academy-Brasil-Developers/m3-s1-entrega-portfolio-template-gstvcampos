import styles from './styles.module.css'

function TechSection( { children } ) {
    return (
        <section className={styles.section}>
          <h2>Tecnologias</h2>
          <ul>
            {children} 
          </ul>
        </section>
    )
  }

export default TechSection