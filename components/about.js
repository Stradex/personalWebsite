import Image from 'next/image';
import styles from './about.module.css'

export default function About({children}) {
    return (
        <div className={styles.aboutContainer}>
            <Image
                className={styles.about_icon}
                priority
                src="/images/ui_icon1.png"
                alt="icon"
                width={30}
                />
            <p>
                {children}
            </p>
        </div>
    )
}