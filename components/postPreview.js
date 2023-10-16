import Link from "next/link";
import styles from "./postPreview.module.css"
import DateComponent from "./date";

export default function PostPreview({id, date, title, description}) {
    return (
        <div className={styles.post_item}>
            <h3 className={styles.post_title} >
                <Link href={`/posts/${id}`}>{title}</Link>
            </h3>
        <small>
          <DateComponent dateString={date} />
        </small>
        <p className={styles.post_description}>
            {description}
        </p>
        <div className={styles.post_link}>
            <Link href={`/posts/${id}`}>Read more...</Link>
        </div>
      </div>
    );
}