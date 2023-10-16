import DateComponent from "./date";
import styles from './postComponent.module.css'

export default function PostComponent({title, date, description, contentHtml}) {
    return (
        <article className={styles.post_article}>
            <h1 className={styles.post_title}>{title}</h1>
            <hr />
            <small className={styles.post_date}>
                <DateComponent dateString={date} />
            </small>
            <div dangerouslySetInnerHTML={{__html: contentHtml}} />
        </article>
    );
}