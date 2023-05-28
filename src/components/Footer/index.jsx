import styles from './styles.module.css'

import whatsappIcon from '../../assets/whatsapp-icon.png'
import linkedinIcon from '../../assets/linkedin-icon.png'
import githubIcon from '../../assets/github-icon.png'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Contato</h2>
                <div className={styles.icons}>
                    <img src={whatsappIcon} alt='logo whatsapp' />
                    <img src={linkedinIcon} alt='logo linkedin' />
                    <img src={githubIcon} alt='logo github' />
                </div>    
            </div>
            
            <p>Todos os direitos reservados - José da Silva</p>
        </footer>
    )
  }

export default Footer