import styles from './header.module.css'

export default function Header({title, subtitle}) {
    return (
        <div className={styles.headerContainer}>
            <h1 className={styles.title}>{title}</h1>
            <h2 className={styles.subTitle}>{subtitle}</h2>
        </div>
    )
}