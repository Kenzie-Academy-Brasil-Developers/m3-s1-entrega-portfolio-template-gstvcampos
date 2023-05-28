import styles from './styles.module.css'

import gitHubIcon from '../../../assets/git-icon.png'

function ProjectCard() {
    return (
        <li className={styles.card}>
            <img src={gitHubIcon} alt='logo github' />
            <h3>Projeto 1</h3>
            <p>Descrição do projeto</p>
            <a href=''>Saiba mais</a>
        </li>
    )
  }

export default ProjectCard