import React from 'react'
import Icon1 from '../../images/stopwatch.png'
import Icon2 from '../../images/cardio.png'
import Icon3 from '../../images/stretch.png'
import Icon4 from '../../images/flat_belly.png'
import Icon5 from '../../images/live.png'
import Icon6 from '../../images/rope.png'
import Icon7 from '../../images/dumbbell.png'
import Icon8 from '../../images/timer.png'
import Icon9 from '../../images/yoga.png'
import Icon10 from '../../images/muscle.png'
import Person1 from '../../images/GroverMorgan.jpg'
import Person2 from '../../images/Rimsha Montgomery.jpg'
import Person3 from '../../images/TonishaSheehan.jpg'
import Person4 from '../../images/JayneKidd.jpg'
import Person5 from '../../images/NettieRidley.jpg'
import Person6 from '../../images/JadaWhitworth.jpg'
import Person7 from '../../images/PearlValdez.jpg'
import Person8 from '../../images/LynnCantu.jpg'
import Person9 from '../../images/GinoGoldsmith.jpg'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import 'swiper/swiper.scss'
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import 'swiper/components/scrollbar/scrollbar.scss';

import {
    MoveListContainer,
    TitleH1,
    TableWrap,
    TableItem,
    ImgItem,
    Name,
    MoveListWrapper,
    MoveListCard,
    CardTitle,
    CardSubTitle,
    ImgWrap,
    Img
} from './MoveListElements'

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);

const MoveList = () => {
    return (
        <>
         <MoveListContainer id='coaches'>
             <TitleH1>Our trainings and coaches</TitleH1>
             <TableWrap>
                <TableItem>
                    <ImgItem src={Icon1}></ImgItem>
                    <Name>HIIT</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon2}></ImgItem>
                    <Name>Cardio</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon3}></ImgItem>
                    <Name>Stretching</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon4}></ImgItem>
                    <Name>Flat belly</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon5}></ImgItem>
                    <Name>Live Workout</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon6}></ImgItem>
                    <Name>Fitness</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon7}></ImgItem>
                    <Name>Strength Workout</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon8}></ImgItem>
                    <Name>Tabata</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon9}></ImgItem>
                    <Name>Yoga</Name>
                </TableItem>
                <TableItem>
                    <ImgItem src={Icon10}></ImgItem>
                    <Name>Full Body Workout</Name>
                </TableItem>
             </TableWrap>
             <MoveListWrapper>
                 <Swiper 
                    spaceBetween={50}
                    slidesPerView={3}
                    navigation
                    pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}
                 >
                 <SwiperSlide>
                    <MoveListCard>
                        <CardTitle>Grover Morgan</CardTitle>
                        <CardSubTitle>HIIT, Full Body Workout</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person1}/>
                        </ImgWrap>
                    </MoveListCard>
                 </SwiperSlide>
                 <SwiperSlide>
                    <MoveListCard>
                        <CardTitle>Rimsha Montgo</CardTitle>
                        <CardSubTitle>Cardio, Tabata</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person2}/>
                        </ImgWrap>
                    </MoveListCard>
                 </SwiperSlide>
                 <SwiperSlide>
                    <MoveListCard>
                        <CardTitle>Tonisha Sheeha</CardTitle>
                        <CardSubTitle>Flat belly</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person3}/>
                        </ImgWrap>
                    </MoveListCard>
                 </SwiperSlide>
                 <SwiperSlide>
                    <MoveListCard>
                        <CardTitle>Jayne Kidd</CardTitle>
                        <CardSubTitle>Yoga, Stretching</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person4}/>
                        </ImgWrap>
                    </MoveListCard>
                 </SwiperSlide>
                 <SwiperSlide>
                    <MoveListCard>
                        <CardTitle>Nattie Ridley</CardTitle>
                        <CardSubTitle>Fitness</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person5}/>
                        </ImgWrap>
                    </MoveListCard>
                 </SwiperSlide>
                 <SwiperSlide>
                    <MoveListCard>
                        <CardTitle>Jada White</CardTitle>
                        <CardSubTitle>Cardio, HIIT</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person6}/>
                        </ImgWrap>
                    </MoveListCard>
                 </SwiperSlide>
                    <SwiperSlide>
                        <MoveListCard>
                        <CardTitle>Pearl Valdez</CardTitle>
                        <CardSubTitle>Yoga</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person7}/>
                        </ImgWrap>
                        </MoveListCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MoveListCard>
                        <CardTitle>Lynn Cantu</CardTitle>
                        <CardSubTitle>Cardio</CardSubTitle>
                        <ImgWrap>
                            <Img src={Person8}/>
                        </ImgWrap>
                        </MoveListCard>
                    </SwiperSlide>
                    <SwiperSlide>
                        <MoveListCard>
                            <CardTitle>Gino Goldsmith</CardTitle>
                            <CardSubTitle>Strength Workout, Cardio</CardSubTitle>
                            <ImgWrap>
                                <Img src={Person9}/>
                            </ImgWrap>
                        </MoveListCard>
                    </SwiperSlide>
                 </Swiper>
             </MoveListWrapper>
         </MoveListContainer>  
        </>
    )
}

export default MoveList
