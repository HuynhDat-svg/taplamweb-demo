import React from 'react';
import MoviesRow from './MoviesRow';

const movies = [
    "https://channel.mediacdn.vn/428462621602512896/2023/2/6/photo-1-16756724304802069391968.jpg",
    "https://znews-photo.zingcdn.me/w660/Uploaded/wyhktpu/2017_05_26/image001_j.jpg",
    "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/kmgp7r4q_660x946-sao2.jpg",
    "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/7on0tmzc_660x946-saoalicizations3.jpg",
    "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/ra16vpja_660x946-saoalicizationwarofunderworlds3.jpg",
    "https://static2.vieon.vn/vieplay-image/poster_v4/2022/04/20/z96eha0f_660x946-demonslayer.jpg",
    "https://m.media-amazon.com/images/M/MV5BODI2NjdlYWItMTE1ZC00YzI2LTlhZGQtNzE3NzA4MWM0ODYzXkEyXkFqcGdeQXVyNjU1OTg4OTM@._V1_.jpg",
    "https://static2.vieon.vn/vieplay-image/poster_v4/2022/07/05/2y10nd8w_660x946-thanhguomdietquy-kyvientran-demo.jpg",
    "https://upload.motgame.vn/photos/motgame-vn/2022/12/Kimetsu-no-Yaiba-World-Tour-Screening-Visual-3.jpg",
    "https://static2.vieon.vn/vieplay-image/poster_v4/2022/05/17/8uyjrtdd_660x946-chuyensinhthanhslime-1.jpg",
    "https://i7.xem-truyen.com/manga/19/19845/chua-te-bong-toi.thumb_500x.jpg",
    "https://hhpanda.cdn1-img.net/1657420312.png",
    "https://truyenbanquyen.com/wp-content/uploads/2023/01/1-6.png",
];

function Contents(props){
    return (
        <div>
            <MoviesRow movies={movies} title="Anime Originals"/>
            <MoviesRow movies={movies} title="Trending Anime"/>
            <MoviesRow movies={movies} title="Top Rate Anime"/>
            <MoviesRow movies={movies} title="Romance Anime"/>
            <MoviesRow movies={movies} title="Isekai Anime"/>
            <MoviesRow movies={movies} title="Action Anime"/>
            <MoviesRow movies={movies} title="Documentaries"/>
        </div>
    );
}

export default Contents;