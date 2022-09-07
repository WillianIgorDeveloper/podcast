//SCSS imports
import styles from './style.module.scss'

export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src="/microphone.svg" alt="Podcast Logo" />
                <h1>Podcast</h1>
            </div>
            <p>Aplicativo para ouvir podcast.</p>
        </header>
    )
}