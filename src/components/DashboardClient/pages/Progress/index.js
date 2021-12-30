import React from 'react'
import MotivationImage from '../../../../images/motivation_img.jpg'
import Img1 from '../../../../images/blog_post1.jpg'
import Img2 from '../../../../images/blog_post2.jpg'
import Img3 from '../../../../images/blog_post3.jpg'
import Img4 from '../../../../images/blog_post4.jpg'
import Icon1 from '../../components/Sidebar/images/broadcasting.svg'
import Icon2 from '../../components/Sidebar/images/trainings.svg'
import Icon3 from '../../components/Sidebar/images/diets.svg'
import Icon4 from '../../../../images/double-arrow.svg'
import {
    Container,
    RecentDateWrap,
    WelcomeBlock,
    TrainingTextWrap,
    TrainingLabel,
    TrainerInfo,
    TrainingText,
    TrainingImageWrap,
    TrainingButton,
    Img,
    SecondMotivationBlock,
    SecondMotivationText,
    BlogWrap,
    TitleArea,
    BlogPostCard,
    PostImageWrap,
    PostImage,
    PostTitle,
    PostText,
    PlanBlock,
    IconItem,
    CustomTitle,
    PlanItem,
    PlanText,
    IconItemSpecial
} from './ProgressElements'

const Progress = () => {
    var showdate = new Date();
    var displayDate = showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear();

    return (
        <>
          <Container>
            <RecentDateWrap>
               Today is {displayDate}
            </RecentDateWrap>
            <WelcomeBlock>
                <TrainingTextWrap>
                    <TrainerInfo>HIIT with Macsen Tran</TrainerInfo>
                    <TrainingLabel>Macsen - Get Stronger</TrainingLabel>
                    <TrainingText>
                        If you want to build strength and sculpt your body, 
                        this workout is for you! Take the challenge and get 
                        ready for amazing results!
                    </TrainingText>
                    <TrainingButton to="/trainings">Start training</TrainingButton>
                </TrainingTextWrap>
                <TrainingImageWrap>
                    <Img src={MotivationImage} alt='motivation_image'/>
                </TrainingImageWrap>
            </WelcomeBlock>
            <SecondMotivationBlock>
              <PlanBlock>
                <CustomTitle>Optional Training Plan</CustomTitle>
                <PlanItem>
                    <IconItem src={Icon1}/>
                    <PlanText>Online Training 3-4 times a week with one of personal trainers or in group</PlanText>
                </PlanItem>
                <IconItemSpecial src={Icon4}/>
                <PlanItem>
                    <IconItem src={Icon2}/>
                    <PlanText>Trainings ( 30-45 min ) every day wherever you want</PlanText>
                </PlanItem>
                <PlanItem>
                    <IconItem src={Icon3}/>
                    <PlanText>Zero sugar, balanced meals for your better wellness</PlanText>
                </PlanItem>
              </PlanBlock>
                <SecondMotivationText>
                    <h1 style={{marginBottom: "20px"}}>
                        "I hate every minute of training. But I said, <span style={{color: "#ffffff"}}>don't quit</span>
                        . Suffer now and live the rest of your<span style={{color: "#ffffff"}}> life as a champion.</span>" 
                    </h1>
                    <h4 style={{color: "#ffffff"}}>&mdash; <i>Muhammad Ali</i></h4>
                    </SecondMotivationText>
            </SecondMotivationBlock>
            <TitleArea>Gym Nation Blog</TitleArea>
            <BlogWrap>
                <BlogPostCard>
                    <PostImageWrap>
                        <PostImage src={Img1} alt="Img1"/>
                    </PostImageWrap>
                    <PostTitle>How do you feel with your weight ?</PostTitle>
                    <PostText>
                        You feel like your normal self and then, one day,
                        you notice that your body shape has changed or that you’re
                        holding on to a few extra pounds. 
                        Your body just doesn’t feel the same.
                    </PostText>
                </BlogPostCard>
                <BlogPostCard>
                    <PostImageWrap>
                        <PostImage src={Img2} alt="Img2"/>
                    </PostImageWrap>
                    <PostTitle>Choose your diet today</PostTitle>
                    <PostText>
                        A healthy diet has been scientifically proven to provide numerous health benefits,
                        such as reducing your risk of several chronic diseases and keeping your body healthy.
                        However, making major changes to your diet can sometimes seem very overwhelming.
                    </PostText>
                </BlogPostCard>
                <BlogPostCard>
                    <PostImageWrap>
                        <PostImage src={Img3} alt="Img3"/>
                    </PostImageWrap>
                    <PostTitle>Think in different way</PostTitle>
                    <PostText>
                        Rich people don’t think like average people. That’s the world we live in.
                        Being able to maintain a massive wealth over a long period of time is not 
                        something easy if you don’t have the right mentality.
                    </PostText>
                </BlogPostCard>
                <BlogPostCard>
                    <PostImageWrap>
                        <PostImage src={Img4} alt="Img4"/>
                    </PostImageWrap>
                    <PostTitle>Oatmeal in your diet</PostTitle>
                    <PostText>
                        They are low in calories and have only 1.5 grams of fat. 
                        The benefits of eating oatmeal include lowering your risk of heart
                        disease and colorectal cancer. Whole grains like oats can also help
                        reduce blood pressure and aid in digestion. 
                    </PostText>
                </BlogPostCard>
            </BlogWrap>
          </Container>  
        </>
    )
}

export default Progress
