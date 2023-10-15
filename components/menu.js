import styles from './menu.module.css'
import Image from 'next/image'
import github_icon from '../public/images/ui_github.png';
import linkedin_icon from '../public/images/ui_linkedin.png';
import Link from 'next/link';

export default function Menu() {
    return (
        <nav className={styles.menuContainer}>
            <ul className={styles.leftMenu}>
                <li><Link href="/">Home</Link></li>
                <li><Link href="/blog">Blog</Link></li>
            </ul>
            <ul className={styles.rightMenu}>
                <li><a href="https://github.com/Stradex/"><Image src={github_icon} width={35} height={35} /></a></li>
                <li><a href="https://www.linkedin.com/in/maximiliano-ruben-viamonte-873b94291

"><Image src={linkedin_icon} width={35} height={35} /></a></li>
            </ul>
        </nav>
    )
}