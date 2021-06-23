import React from 'react'
import img from '../../images/healthy_lifestyle.svg'
import {
    InfoContainer,
    InfoWrapper,
    InfoRow,
    Column1,
    Column2,
    TextWrapper,
    TopLine,
    Heading,
    Subtitle,
    BtnWrap,
    ImgWrap,
    Img,
    Button
} from './InfoElements';

const InfoSection = () => {
    return (
        <>
          <InfoContainer id='app'>
              <InfoWrapper>
                  <InfoRow>
                      <Column1>
                        <TextWrapper>
                            <TopLine>WEB APP</TopLine>
                            <Heading>Application that makes success easier</Heading>
                            <Subtitle>We give you the tool - now your move.
                             No matter where you are. Regardless of when you want to exercise. Gym Nation is always with you.</Subtitle>
                            <BtnWrap>
                                <Button to='/signup'>Get started</Button>
                            </BtnWrap>
                        </TextWrapper>
                      </Column1>
                      <Column2>
                        <ImgWrap>
                            <Img src={img} alt='healthly_life'/>
                        </ImgWrap>
                      </Column2>
                  </InfoRow>
              </InfoWrapper>
          </InfoContainer>  
        </>
    )
}

export default InfoSection
