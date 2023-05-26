import styles from './styles.module.css'

function ProjectCard() {
    return (
        <li className={styles.card}>
            <img src='./src/assets/git-icon.png' alt='' />
            <h3>Projeto 1</h3>
            <p>Descrição do projeto</p>
            <a href=''>Saiba mais</a>
        </li>
    )
  }

export default ProjectCard