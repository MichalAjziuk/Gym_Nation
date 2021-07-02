import React, { useRef, useEffect, useCallback} from 'react'
import { useSpring, animated } from 'react-spring';
import VideoPlayer from 'react-video-js-player';
import {
    Background,
    VideoPlayerWrapper
} from './CustomVideoPlayerElements'

const CustomVideoPlayer = ({videoSrc, videoPoster, showVideo, setShowVideo}) => {
    const videoRef = useRef();

    const animation = useSpring({
        config: {
          duration: 250
        },
        opacity: showVideo ? 1 : 0,
        transform: showVideo ? `translateY(0%)` : `translateY(-100%)`
      });

      const closeVideo = e => {
        if (videoRef.current === e.target) {
          setShowVideo(false);
        }
      };
    
      const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showVideo) {
            setShowVideo(false);
            console.log('I pressed');
          }
        },
        [setShowVideo, showVideo]
      );
    
      useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
      );

      return (
        <>
        {showVideo ? (
            <Background onClick={closeVideo} ref={videoRef}>
                <animated.div style={animation}>
                    <VideoPlayerWrapper showVideo={showVideo}>
                    <VideoPlayer 
                        controls={true}
                        src={videoSrc}
                        poster={videoPoster}
                        width="720"
                        height="420"
                    />
                    </VideoPlayerWrapper>
                </animated.div>
            </Background>
        ) : null}
        </>
      )
}

export default CustomVideoPlayer
