import styles from './styles.module.css'
import logo from '../../assets/portfolio.png'

function Header( { children } ) {
    return (
        <header className={styles.header}>
            <img src={logo} alt='logo' />
            <div>
                <a href=''>Sobre</a>
                <a href=''>Stack</a>
                <a href=''>Projetos</a>
            </div>
            {children}
        </header>
    )
}

export default Header