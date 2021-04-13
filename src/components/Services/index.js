import React from 'react'
import Icon1 from '../../images/healthy_habit.svg'
import Icon2 from '../../images/healthy_options.svg'
import Icon3 from '../../images/personal_trainer.svg'
import Icon4 from '../../images/check.png'
import { 
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesP,
    ServicesH2,
    ServicesListWrap,
    ServicesLi,
    ServicesImg
} from './ServicesElements'

const Services = () => {
    return (
        <>
         <ServicesContainer id="achieve">
            <ServicesH1>3 pillars that will build your success</ServicesH1>
            <ServicesWrapper>
                <ServicesCard>
                    <ServicesIcon src={Icon1}/>
                    <ServicesH2>Tailored training</ServicesH2>
                        <ServicesP>
                        Do you want to carve your muscles or make your body more flexible? 
                        Correctly selected training is the basis. However, you can get to your
                         destination in different ways. With this or another coach. 
                         By only exercising as much as you can afford on the day.
                         </ServicesP>
                         <ServicesListWrap>
                            <ServicesImg src={Icon4}/><ServicesLi>On-line training</ServicesLi>
                            <ServicesImg src={Icon4}/><ServicesLi>450h + exercises, 12 trainers</ServicesLi>
                            <ServicesImg src={Icon4}/><ServicesLi>HIIT, FBW, Cardio, Yoga</ServicesLi>
                         </ServicesListWrap>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon2}/>
                    <ServicesH2>Adequate diet</ServicesH2>
                    <ServicesP>Do you have bad associations with the word "diet"? Sacrifices? Tasteless dishes? 
                        Repeatability? None of that… But don't worry. You don't have to be a Master Chef winner.
                         It will be simple and tasty, without any ingredients you don't like.
                        </ServicesP>
                        <ServicesListWrap>
                            <ServicesImg src={Icon4}/><ServicesLi>Invidual food plans</ServicesLi>
                            <ServicesImg src={Icon4}/><ServicesLi>Your stats</ServicesLi>
                            <ServicesImg src={Icon4}/><ServicesLi>Knowledge base and good habits</ServicesLi>
                         </ServicesListWrap>
                </ServicesCard>
                <ServicesCard>
                    <ServicesIcon src={Icon3}/>
                    <ServicesH2>Personal adviser</ServicesH2>
                    <ServicesP>A moment of doubt? Laziness? We predicted that everyone
                         has a bad day or a blind spot. We have a way to unleash your strength 
                         ... will and encourage you to act: the support of a counselor works wonders. 
                         And that's it.This will be like a training with friend. Don't lose your chance.</ServicesP>
                         <ServicesListWrap>
                            <ServicesImg src={Icon4}/><ServicesLi>Motivation</ServicesLi>
                            <ServicesImg src={Icon4}/><ServicesLi>Mentoring</ServicesLi>
                            <ServicesImg src={Icon4}/><ServicesLi>Track your progress</ServicesLi>
                         </ServicesListWrap>
                </ServicesCard>
            </ServicesWrapper>
         </ServicesContainer>
        </>
    )
}

export default Services
