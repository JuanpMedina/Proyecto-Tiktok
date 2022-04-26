import VideoPlayer from '../VideoPlayer'
import styles from './styles.module.css'

const VIDEOS = [
    {
        id: 1,
        author: 'lfc__editz',
        descripcion: 'lorem',
        likes: '520',
        shares: '234',
        comments: '333',
        songTitle: 'sonido original - lfc__editz',
        albumCover: 'https://los40.com/los40/imagenes/2017/11/28/album/1511885438_220718_1512040978_album_normal.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
        src: 'https://v16-webapp.tiktok.com/32759aa0bfd819fdbf571e13286eb730/6266265f/video/tos/useast2a/tos-useast2a-pve-0068/1c705e8b98064c77ba30ca631a6a7cf1/?a=1988&br=1178&bt=589&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Z3bZ4we2NlB3yl7Gb&l=2022042422405301022308414318A9D8C5&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=ajh5Zmc6Zjt0PDMzNzczM0ApNDlpZWg8M2VoNzlpaTgzM2djZmw1cjRvbWRgLS1kMTZzc2M0NTFjXl9eMmM0YDUwMmI6Yw%3D%3D&vl=&vr='
    },
    {
        id: 2,
        author: 'elyibuomg',
        descripcion: 'lorem',
        likes: '620',
        shares: '334',
        comments: '413',
        songTitle: 'sonido original - elyibuomg',
        albumCover: 'https://los40.com/los40/imagenes/2019/12/19/album/1576745869_863024_1576746473_album_normal.jpg',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
        src: 'https://v16-webapp.tiktok.com/0ebe77a9d2329f70ec89ddeb05ef8940/6264b09f/video/tos/useast2a/tos-useast2a-ve-0068c002/31be61f3bd0a435ebd607c84561b64b6/?a=1988&br=2504&bt=1252&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Z3WC4we2Nmtwyl7Gb&l=20220423200613010223078138196499B6&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY6djY6ZjdrOzMzNzczM0ApOGVkOTQ5Njw3NzxpZTVlOWdlamVjcjRncGRgLS1kMTZzczVgMmJfMV8wYi1fX2FeYzU6Yw%3D%3D&vl=&vr='
    },
    {
        id: 3,
        author: 'blessd',
        descripcion: 'lorem',
        likes: '620',
        shares: '334',
        comments: '413',
        songTitle: 'sonido original - blessd',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/685abeda5cf7d665af210a9bc1d9363c~c5_100x100.jpeg?x-expires=1650924000&x-signature=xFW7%2FKwCSaaU%2Bb%2BmVUsqumPJigg%3D',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
        src: 'https://v16-webapp.tiktok.com/75865093557825af5ea1377dc809e407/626531ad/video/tos/useast2a/tos-useast2a-ve-0068c004/cbebc946d9604ecf854f8829415b075a/?a=1988&br=3042&bt=1521&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Z4kn4we2N0H6yl7Gb&l=2022042405163601018907908614C5A740&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3M0dWY6ZnlyPDMzNzczM0ApOjZlNTlkNWQ4NzM2PGgzZmdfZmBxcjRnZzRgLS1kMTZzc2IuMjZeLl4wLWNiNDJgXzI6Yw%3D%3D&vl=&vr='
    },
    {
        id: 4,
        author: 'football.dreams33',
        descripcion: 'lorem',
        likes: '620',
        shares: '334',
        comments: '413',
        songTitle: 'sonido original - football.dreams33',
        albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5069a6966fe7c6a4f5935ecb2b5e4ca9~c5_100x100.jpeg?x-expires=1650924000&x-signature=qU7VhhxhI212YjmC%2B7Xx8xcu%2FMc%3D',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
        src: 'https://v16-webapp.tiktok.com/92e90bf4bf2188d0a1dcf0eaf6e84dbf/62662462/video/tos/alisg/tos-alisg-pve-0037c001/8c28f0664e1e4468b05885c9dec03250/?a=1988&br=3472&bt=1736&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZKCv4we2NMh4yl7Gb&l=2022042422321701022309914011ACDADE&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=anFvcjk6ZjhmPDMzODczNEApaTM2aDk3NWU0NzQ2NTtlNmdyMmNpcjQwZzRgLS1kMS1zczJeY2A1LmIxMTRjYzJiYC06Yw%3D%3D&vl=&vr='
    }
]

export default function FeedVideos() {
    return (
        VIDEOS.map(video => {
            return (
                <div key={video.id} className={styles.item}>
                    <VideoPlayer {...video} />
                </div>
            )
        })
    )
}