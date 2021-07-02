import React from 'react'
import { 
    MdCallEnd, 
    MdMic, 
    MdMicOff, 
    MdVideocam, 
    MdVideocamOff
} from 'react-icons/md'
import { hangUp } from '../../../utils/webRTC/webRTCHandler'
import ConversationButton from './ConversationButton'

const styles = {
    buttonContainer: {
        display: 'flex',
        position: 'absolute',
        bottom: '30%',
        left: '35%'
    },
    icon: {
        width: '25px',
        height: '25px',
        fill: '#e6e5e8'
    }
}

const ConversationButtons = (props) => {
    const {
        localStream, 
        localCameraEnabled, 
        localMicrophoneEnabled, 
        setCameraEnabled, 
        setMicrophoneEnabled,
        groupCall
    } = props;

    const handleMicButtonPressed = () => {
        const micEnabled = localMicrophoneEnabled;
        localStream.getAudioTracks()[0].enabled = !micEnabled;
        setMicrophoneEnabled(!micEnabled);
    }

    const handleCameraButtonPressed = () => {
        const cameraEnabled = localCameraEnabled;
        localStream.getVideoTracks()[0].enabled = !cameraEnabled;
        setCameraEnabled(!cameraEnabled);
    }

    const handleHangUpButtonPressed = () => {
        hangUp();
    }

    return (
        <div style={styles.buttonContainer}>
            <ConversationButton onClickHandler={handleMicButtonPressed}>
                {localMicrophoneEnabled ? <MdMic style={styles.icon} /> : <MdMicOff style={styles.icon} />}
            </ConversationButton>
            {!groupCall && <ConversationButton onClickHandler={handleHangUpButtonPressed}>
                <MdCallEnd style={styles.icon} />
            </ConversationButton>}
            <ConversationButton onClickHandler={handleCameraButtonPressed}>
                {localCameraEnabled ? <MdVideocam style={styles.icon} /> : <MdVideocamOff style={styles.icon} />}
            </ConversationButton>
        </div>
    )
}

export default ConversationButtons
