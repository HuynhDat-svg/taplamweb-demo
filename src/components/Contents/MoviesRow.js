import styled from "styled-components";
import {BsChevronDoubleLeft, BsChevronDoubleRight} from 'react-icons/bs';
import { useEffect, useRef, useState } from "react";
import {SmoothHorizontalScrolling} from '../../utils';

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

function MoviesRow(props){
    const sliderRef = useRef();
    const movieRef = useRef();
    const [dragDown, setDragDown] = useState(0);
    const [dragMove, setDragMove] = useState(0);
    const [isDrag, setIsDrag] = useState(false);

    const handleScrollRight = () =>{
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft < maxScrollLeft){
            SmoothHorizontalScrolling(sliderRef.current, 
                250, 
                movieRef.current.clientWidth *2,
                sliderRef.current.scrollLeft
                )
        };
    }
    const handleScrollLeft = () =>{
        if (sliderRef.current.scrollLeft > 0){
            SmoothHorizontalScrolling(sliderRef.current, 
                250, 
                -movieRef.current.clientWidth *2,
                sliderRef.current.scrollLeft
                )
        };
    }

    useEffect(() => {
        if (isDrag) {
            if (dragMove < dragDown) handleScrollRight();
            if (dragMove > dragDown) handleScrollLeft();
        }
    },[dragDown, dragMove, isDrag])

    const onDragStart = e =>{
        setIsDrag(true);
        setDragDown(e.screenX);
    }

    const onDragEnd = e =>{
        setIsDrag(false);
    }

    const onDragEnter = e =>{
        setDragMove(e.screenX);
    }

    return (
        <MoviesRowContainer draggable='false'>
            <h1 className ="heading"> Anime Originals </h1>
            <MoviesSlider ref={sliderRef} 
            draggable='true'
            onDragStart = {onDragStart}
            onDragEnd = {onDragEnd}
            onDragEnter = {onDragEnter}
            >
                {
                    movies.map((movie, index) => (
                    <div key ={index} className="movieItem" ref={movieRef} draggable='false'>
                        <img src={movie} alt ="" draggable='true'/>
                        <div className = "movieName">Movie Name</div>
                    </div>
                    ))
                }
            </MoviesSlider>
            <div className = "btnLeft" onClick={handleScrollLeft}>
                <BsChevronDoubleLeft/>
            </div>
            <div className = "btnRight" onClick={handleScrollRight}>
                <BsChevronDoubleRight/>
            </div>
        </MoviesRowContainer>
    );
}
export default MoviesRow;

const MoviesRowContainer = styled.div`
    background-color: var(--color-background);
    color: var(--color-white);
    padding: 20px 20px 0;
    position: relative;
    width: 100%;
    height: 100%;

    .heading{
        font-size: 18px;
        user-select: none;
    }

    .btnLeft{
        position: absolute;
        top: 50%;
        left: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &: hover svg{
            opacity: 1;
            transform: scale(1.2);
        }

        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
    }

    .btnRight{
        position: absolute;
        top: 50%;
        right: 30px;
        z-index: 20;
        transform-origin: center;
        cursor: pointer;
        background-color: rgba(0,0,0,0.5);
        height: 100px;
        width: 50px;
        border-radius: 4px;
        display: flex;
        align-items: center;
        transform: translateY(-20%);

        &:hover{
            background-color: rgba(0,0,0,0.8);
        }
        &: hover svg{
            opacity: 1;
            transform: scale(1.2);
        }

        svg{
            opacity: 0.7;
            font-size: 50px;
            transition: all 0.3s linear;
        }
    }
`;

const MoviesSlider = styled.div`
    display: grid;
    gap: 6px;
    grid-template-columns: repeat(${movies.length}, 360px);
    transition: all 0.3s linear;
    user-select: none;
    overflow-y: hidden;
    overflow-x: auto;
    overflow: hidden;
    padding-top: 28px;
    padding-bottom: 28px;
    scroll-behavior: smooth;

    @media screen and (max-width: 1200px){
        grid-template-columns: repeat(${movies.length}, 300px);
    }
    @media screen and (max-width: 992px){
        grid-template-columns: repeat(${movies.length}, 250px);
    }
    @media screen and (max-width: 768px){
        grid-template-columns: repeat(${movies.length}, 200px);
    }
    
    &: hover .movieItem{
        opacity: 0.5;
    }

    .movieItem{
        transform: scale(1);
        max-width: 400px;
        max-height: 500px;
        width: 100%;
        height: 100%;
        transition: all 0.3s linear;
        user-select: none;
        overflow: hidden;
        border-radius: 6px;
        transform: center left;
        position: relative;

        &: hover{
            opacity: 1;
            transform: scale(1.1);
            z-index: 10;
        }

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        }

        .movieName{
            position: absolute;
            left: 0;
            right: 0;
            bottom: 0;
            padding: 4px;
            text-align: center;
            font-size: 14px;
            background-color: rgba(0,0,0,0.65);
        }
    }
`;
