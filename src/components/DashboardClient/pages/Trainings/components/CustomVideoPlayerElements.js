import styled from 'styled-components'

export const Background = styled.div`
  width: 100%;
  height: 120%;
  background: rgba(0, 0, 0, 0.8);
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const VideoPlayerWrapper = styled.div`
  width: 750px;
  height: 450px;
  justify-content: center;
  align-items: center;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #000;
  display: flex;
  position: relative;
  z-index: 1;
  border-radius: 10px;
`;