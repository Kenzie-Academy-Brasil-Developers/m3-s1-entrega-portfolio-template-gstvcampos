import styles from './styles.module.css'

function Header( { children, imageUrl } ) {
    return (
        <header className={styles.header}>
            <img src={imageUrl} alt="logo" />
            <div>
                <a href="">Sobre</a>
                <a href="">Stack</a>
                <a href="">Projetos</a>
            </div>
            {children}
        </header>
    )
}

export default Header