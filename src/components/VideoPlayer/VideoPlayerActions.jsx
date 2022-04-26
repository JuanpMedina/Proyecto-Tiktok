import { Heart } from '../icons/Heart.jsx'
import { Comment } from '../icons/Comment.jsx'
import { Share } from '../icons/Share.jsx'
import styles from './styles.module.css'

export default function VideoPlayerActions({ likes = 2051, comments = 412, shares = 132, hearted = false }) {
  const handleLike = () => {
    window.alert('like')
  }

  const handleComment = () => {
    window.alert('comment')
  }

  const handleShare = () => {
    window.alert('share')
  }


  return (
    <aside className={styles.actions}>

      <button onClick={handleLike} className={styles.action}>
        <Heart width='45' />
        <span title='like'>{likes}</span>
      </button>

      <button onClick={handleComment} className={styles.action}>
        <Comment width='45' />
        <span title='comments'>{comments}</span>
      </button>

      <button onClick={handleShare} className={styles.action}>
        <Share width='45' />
        <span title='shares'>{shares}</span>
      </button>
    </aside>
  )
}