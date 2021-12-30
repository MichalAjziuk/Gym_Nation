import React, { useState } from 'react'
import Levels from '../../../../images/levels.png'
import Burn from '../../../../images/fire.png'
import HIIT from '../../../../images/hiit.jpg'
import Tabata from '../../../../images/tabata.jpg'
import FBW from '../../../../images/fbw.jpg'
import Cardio from '../../../../images/cardio.jpg'
import Strength from '../../../../images/strength.jpg'
import FlatBelly from '../../../../images/flatBelly.jpg'
import HIITVideo from '../../../../videos/HIITVideo.mp4'
import TabataVideo from '../../../../videos/TabataVideo.mp4'
import FBWVideo from '../../../../videos/FBWVideo.mp4'
import CardioVideo from '../../../../videos/CardioVideo.mp4'
import StrengthVideo from '../../../../videos/StrengthVideo.mp4'
import FaltBellyVideo from '../../../../videos/FlatBellyVideo.mp4'
import CustomVideoPlayer from './components/CustomVideoPlayer'


import {
    Container,
    MainBar,
    Title,
    Content,
    TrnBox,
    TrnImg,
    TrnCategory,
    TrnName,
    TrnInfo,
    DetailsBlock,
    BrnImg,
    Level,
    FireImg,
    Calories
} from './TrainingsElements'

const Trainings = () => {
    const [showVideo, setShowVideo] = useState(false);
    const [videoSrc, setVideoSrc] = useState();
    const [videoPoster, setVideoPoster] = useState();

    const openVideo = ( videoSrcNew, videoPosterNew ) => {
        setShowVideo(prev => !prev);
        setVideoSrc(videoSrcNew);
        setVideoPoster(videoPosterNew);
    }


    return (
        <>
            <Container>
                <MainBar>
                    <Title>Trainings plans</Title>
                </MainBar>
                <Content>
                    <TrnBox onClick={() => openVideo( HIITVideo, HIIT)}>
                        <TrnImg src={HIIT} />
                        <TrnCategory>HIIT with Grover Morgan</TrnCategory>
                        <TrnName>Get Stronger</TrnName>
                        <TrnInfo>HIIT training aimed at increasing strength and endurance.</TrnInfo>
                        <DetailsBlock>
                            <BrnImg src={Levels} />
                            <Level>easy</Level>
                            <FireImg src={Burn} />
                            <Calories>600 calories burned</Calories>
                        </DetailsBlock>
                    </TrnBox>
                    <TrnBox onClick={() => openVideo(TabataVideo, Tabata)}>
                        <TrnImg src={Tabata} />
                        <TrnCategory>Tabata with Rimsha Montgo</TrnCategory>
                        <TrnName>Boxing class</TrnName>
                        <TrnInfo>Tabata is intense interval training, improve the body's efficiency.</TrnInfo>
                        <DetailsBlock>
                            <BrnImg src={Levels} />
                            <Level>semi</Level>
                            <FireImg src={Burn} />
                            <Calories>900 calories burned</Calories>
                        </DetailsBlock>
                    </TrnBox>
                    <TrnBox onClick={() => openVideo(FBWVideo, FBW)}>
                        <TrnImg src={FBW} />
                        <TrnCategory>Full Body Workout with Lynn Cantu</TrnCategory>
                        <TrnName>Burn Calories</TrnName>
                        <TrnInfo>FBW is a whole-body exercise, effort guaranteed, don't quit.</TrnInfo>
                        <DetailsBlock>
                            <BrnImg src={Levels} />
                            <Level>hardcore</Level>
                            <FireImg src={Burn} />
                            <Calories>1000 calories burned</Calories>
                        </DetailsBlock>
                    </TrnBox>
                    <TrnBox onClick={() => openVideo(CardioVideo, Cardio)}>
                        <TrnImg src={Cardio} />
                        <TrnCategory>Cardio with Jada White</TrnCategory>
                        <TrnName>Change your limits</TrnName>
                        <TrnInfo>Endurance training is designed to improve the efficiency of the heart.</TrnInfo>
                        <DetailsBlock>
                            <BrnImg src={Levels} />
                            <Level>hardcore</Level>
                            <FireImg src={Burn} />
                            <Calories>1100 calories burned</Calories>
                        </DetailsBlock>
                    </TrnBox>
                    <TrnBox onClick={() => openVideo(StrengthVideo, Strength)}>
                        <TrnImg src={Strength} />
                        <TrnCategory>Strength Workout with Gino Goldsmith</TrnCategory>
                        <TrnName>Hard Workout</TrnName>
                        <TrnInfo>Regularly performed strength training affects the aesthetic aspects of the figure.</TrnInfo>
                        <DetailsBlock>
                            <BrnImg src={Levels} />
                            <Level>easy</Level>
                            <FireImg src={Burn} />
                            <Calories>500 calories burned</Calories>
                        </DetailsBlock>
                    </TrnBox>
                    <TrnBox onClick={() => openVideo(FaltBellyVideo, FlatBelly)}>
                        <TrnImg src={FlatBelly} />
                        <TrnCategory>Flat belly with Tonisha Sheeha</TrnCategory>
                        <TrnName>Fight with yourself</TrnName>
                        <TrnInfo>A flat stomach is an ideal that many women, but also men, strive for.</TrnInfo>
                        <DetailsBlock>
                            <BrnImg src={Levels} />
                            <Level>semi</Level>
                            <FireImg src={Burn} />
                            <Calories>700 calories burned</Calories>
                        </DetailsBlock>
                    </TrnBox>
                </Content>
            </Container>
            <CustomVideoPlayer videoSrc={videoSrc} videoPoster={videoPoster} showVideo={showVideo} setShowVideo={setShowVideo} />
        </>
    )
}

export default Trainings
