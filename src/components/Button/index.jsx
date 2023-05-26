import styles from './styles.module.css'

function Button({name}) {
    return <button className={styles.button}>{name}</button>
}

export default Button