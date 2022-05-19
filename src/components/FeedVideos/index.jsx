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
        src: 'https://v16-webapp.tiktok.com/d06756f058beca517e732c5400b7b478/62833d78/video/tos/maliva/tos-maliva-ve-0068c799-us/25afa37124284362bd912af99bade4c4/?a=1988&br=1704&bt=852&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZNOqlwe2Nwhoyl7Gb&l=202205170014550102230801682491231E&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M2dsa2Y6ZnF1OzMzZzczNEApNGg4OjtlNGQ3NzQ0NzM2ZWdfMGgxcjRfZjRgLS1kMS9zc15jNDMwY2IwYy0zMi1hLjU6Yw%3D%3D&vl=&vr='
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
        src: 'https://v16-webapp.tiktok.com/ea03fff4ef9666023485167f00ace1cd/62833f95/video/tos/useast2a/tos-useast2a-ve-0068c002/31be61f3bd0a435ebd607c84561b64b6/?a=1988&br=2504&bt=1252&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Zyqqlwe2NQUTyl7Gb&l=2022051700241101018907403801951B57&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=MzY6djY6ZjdrOzMzNzczM0ApOGVkOTQ5Njw3NzxpZTVlOWdlamVjcjRncGRgLS1kMTZzczVgMmJfMV8wYi1fX2FeYzU6Yw%3D%3D&vl=&vr='
    },
    {
        id: 3,
        author: 'blessd',
        descripcion: 'lorem',
        likes: '620',
        shares: '334',
        comments: '413',
        songTitle: 'sonido original - blessd',
        albumCover: 'https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/685abeda5cf7d665af210a9bc1d9363c~c5_100x100.jpeg?x-expires=1652918400&x-signature=MEHfWc8R2bBy3RZylCgqLC177nA%3D',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
        src: 'https://v16-webapp.tiktok.com/109f222f9bc1cffdf08f36c7ff56eb39/62833fdf/video/tos/useast2a/tos-useast2a-ve-0068c004/cbebc946d9604ecf854f8829415b075a/?a=1988&br=3042&bt=1521&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8ZF9qlwe2NOSeyl7Gb&l=20220517002510010223078148119153B8&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3M0dWY6ZnlyPDMzNzczM0ApOjZlNTlkNWQ4NzM2PGgzZmdfZmBxcjRnZzRgLS1kMTZzc2IuMjZeLl4wLWNiNDJgXzI6Yw%3D%3D&vl=&vr='
    },
    {
        id: 4,
        author: 'football.dreams33',
        descripcion: 'lorem',
        likes: '620',
        shares: '334',
        comments: '413',
        songTitle: 'sonido original - football.dreams33',
        albumCover: 'https://p77-sign-va.tiktokcdn.com/tos-maliva-avt-0068/5069a6966fe7c6a4f5935ecb2b5e4ca9~c5_100x100.jpeg?x-expires=1652918400&x-signature=pf54kmpd1DzXcyh3N8CnVY3ZZps%3D',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit sed.',
        src: 'https://v16-webapp.tiktok.com/95087c529e5c23ef9f8acb1f23a5d4f6/6283404e/video/tos/useast2a/tos-useast2a-pve-0068/025529ae1c844ef9b1037d8006499bed/?a=1988&br=1580&bt=790&cd=0%7C0%7C1%7C0&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=eXd.6HHMMyq8Zjnqlwe2NoPwyl7Gb&l=2022051700271301022307516005927718&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=amt3aWU6ZjZ4OzMzNzczM0ApaGk0ZmZpNmU4N2c5ZGY7O2deZm4tcjRvLzZgLS1kMTZzc2FgNmMxLy9hMDIvXmE2NDU6Yw%3D%3D&vl=&vr='
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