import styles from './styles.module.css'

function ProjectsSection( { children } ) {
    return (
        <section className={styles.section}>
          <h2>Projetos</h2>
          <ul>
            {children}
          </ul>
        </section>
    )
  }
  
  export default ProjectsSection