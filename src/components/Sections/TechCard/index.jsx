import styles from './styles.module.css'

function TechCard( { name, imageUrl } ) {
    return (
        <li className={styles.card}>
            <img src={imageUrl} alt={'logo' + name} />
            <h3>{name}</h3>
        </li>
    )
  }

export default TechCard