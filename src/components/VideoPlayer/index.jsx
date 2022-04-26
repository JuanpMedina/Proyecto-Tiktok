import clsx from 'clsx';
import { useRef, useState } from 'react'
import styles from './styles.module.css'
import VideoPlayerActions from './VideoPlayerActions';
import VideoDescription from '../VideoDescription/index'

export default function VideoPlayer({author,albumCover,description,songTitle,src}){
    const [playing, setPlaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () => {
        const { current: videoEl } = video
        playing 
         ? videoEl.pause()
         : videoEl.play()

        setPlaying(!playing)
    }

    const playerClassName = clsx(styles.player, {
        [styles.hidden]: playing
    })

    return(
        <div className={styles.wrapper}>
            <video 
                className={styles.video} 
                controls={false}
                loop
                onClick={handlePlay}
                ref={video}
                src={src}
            />
            <i className={playerClassName} onClick={handlePlay}/>
            <VideoPlayerActions/>
            <VideoDescription
                albumCover={albumCover}
                author={author}
                description={description}
                songTitle={songTitle}
            />
        </div>
    )
}