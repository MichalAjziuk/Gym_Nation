import React, {useState, useEffect} from 'react'
import MessageDisplayer from './MessageDisplayer'
import { sendMessageUsingDataChannel } from '../../../utils/webRTC/webRTCHandler'

import './Messenger.css'

const Messenger = ({ message, setDirectCallMessage }) => {
    const [inputValue, setInputValue] = useState('');

    const handleOnKeyDownEvent = (e) => {
        if(e.keyCode === 13 ) {
            sendMessageUsingDataChannel(inputValue);
            setInputValue('');
        } 
    }

    useEffect(() => {
        if (message.received) {
            setTimeout(() => {
                setDirectCallMessage(false, '');
            }, [10000]);
        }
    }, [message.received]);

    return (
        <>
            <input 
                className='messages_input'
                type='text'
                value={inputValue}
                onChange={(e) => {setInputValue(e.target.value);}}
                onKeyDown={handleOnKeyDownEvent}
                placeholder='Type your message'
            />
            {message.received && <MessageDisplayer message={message.content} />}
        </>
    )
}

export default Messenger
