import React, { useState } from 'react'
import {useSpring, animated} from 'react-spring'
import Img1 from './images/kate.jpg'
import Img2 from './images/elizabeth.jpg'
import Img3 from './images/sophia.jpg'

import {
    Container,
    CommentsWrap,
    Wrap,
    Title,
    CommentsButton,
    CommentCard,
    ClientImg,
    CommentText,
    ClientName
} from './CommentsElements'

const Comments = () => {
    const [showComments, setShowComments] = useState(false)

    const openComments = () => { 
        setShowComments(prev => !prev)
    }

    const animation = useSpring({
        config: { 
            duration: 100
        },
        opacity: showComments ? 1 : 0,
        transform: showComments ? `translateY(20%)` : `translateY(-100%)`
    })
    
    return (
        <div id="community">
            <Container>
                <Wrap>
                    <Title>If you want to see the opinions of our customers about our application</Title>
                    <Title style={{color: '#0C969C'}}>Click the button !</Title>
                </Wrap>
                <CommentsButton onClick={openComments}>COMMENTS</CommentsButton>
                <animated.div style={animation}>
                    <CommentsWrap>
                        <CommentCard>
                            <ClientImg src={Img1}></ClientImg>
                            <CommentText>
                                I love training with Gym Nation because I can exercise whenever and wherever I want!
                                Thanks to Gym Nation I was able to lose a lot of weight and finally I'm off my figure
                            </CommentText>
                            <ClientName>~Kate</ClientName>
                        </CommentCard>
                        <CommentCard>
                            <ClientImg src={Img2}></ClientImg>
                            <CommentText>
                                I use Gym Nation because standard fitness classes are not enough for me.
                                I can choose and try new things. It is cheaper than training in the city,
                                and I do not waste time commuting.
                            </CommentText>
                            <ClientName>~Elizabeth</ClientName>
                        </CommentCard>
                        <CommentCard>
                            <ClientImg src={Img3}></ClientImg>
                            <CommentText>
                                A great diet and training application! Modern, intuitive and diverse!
                                Everyone will find something for themselves in it 🙂
                                I like that I can find everything I need to look and feel better in one place.
                            </CommentText>
                            <ClientName>~Sophia</ClientName>
                        </CommentCard>
                    </CommentsWrap>
                </animated.div>
            </Container>
        </div>
    )
}

export default Comments
