import styles from './styles.module.css'

function Footer() {
    return (
        <footer className={styles.footer}>
            <div>
                <h2>Contato</h2>
                <div className={styles.icons}>
                    <img src="./src/assets/whatsapp-icon.png" alt="" />
                    <img src="./src/assets/linkedin-icon.png" alt="" />
                    <img src="./src/assets/github-icon.png" alt="" />
                </div>    
            </div>
            
            <p>Todos os direitos reservados - José da Silva</p>
        </footer>
    )
  }

export default Footer