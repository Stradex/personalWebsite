import Image from 'next/image';
import styles from './projectItem.module.css';
import img_icon from '../public/images/ui_icon2.png';

export default function ProjectItem({title, img, url, children}) {
    return (
        <div className={styles.contentItem}>

            <div>
            <Image className={styles.title_icon}
                src={img_icon}
                alt=''
                width={25}
                height={25}
                />
            {url && (
                <h3 className={styles.content_title}><a href={url}>{title}</a></h3>
            )}
            {!url && (
                <h3 className={styles.content_title}>{title}</h3>
            )}
            <Image className={styles.title_icon}
                src={img_icon}
                alt=''
                width={25}
                height={25}
                />
            </div>

            <Image 
                className={styles.image_preview}
                src={img}
                alt=''
                width={250}
                height={250}
                />
                <p className={styles.contentParagraph}>
                    {children}
                </p>
        </div>
    )
}