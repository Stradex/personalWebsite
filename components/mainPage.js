import styles from './mainPage.module.css'

export default function MainPage({children}) {
    return (<div className={styles.pageContainer}>{children}</div>);
}