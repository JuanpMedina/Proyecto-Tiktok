import AlbumDisk from "../VideoDescription/AlbumDisk"
import styles from './styles.module.css'

export default function VideoDescription ({author,description,albumCover}) {
    return(
        <footer className={styles.description}>
            <div>
                <strong>{author}</strong>
                <p>{description}</p>
            </div>

            <div>
                <AlbumDisk albumCover={albumCover}/>
            </div>
        </footer>
    )
}
