import React from  'react'
import './ChatWindow.css'
import EmojiPicker from 'emoji-picker-react';

import AttachFileIcon from '@mui/icons-material/AttachFile';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';
import MicNoneIcon from '@mui/icons-material/MicNone';

export default () =>{
    return(
        <div className='chatWindow'>
            <div className='chatWindow--header'>
                <div className='chatWindow--headerinfo'>
                    <img className='chatWindow--avatar' src='https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100' alt=''/>
                    <div className='chat--Window-name'>Edmario Santos</div>
                </div>
                <div className='chatWindow--headerbuttons'>
                    <div className='chatWindow--btn'>
                    <SearchIcon style={{color: '#919191'}}/>
                    </div>
                    <div className='chatWindow--btn'>
                    <AttachFileIcon style={{color: '#919191'}}/>
                    </div>
                    <div className='chatWindow--btn'>
                    <MoreVertIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
            <div className='chatWindow--body'>

            </div>

        <div className='chatWindow--emojiarea'>
        <EmojiPicker />
        </div>

            <div className='chatWindow--footer'>

                <div className='chatWindow--pre'>
                <div className='chatWindow--btn'>
                    <CloseIcon style={{color: '#919191'}}/>
                    </div>
                <div className='chatWindow--btn'>
                    <InsertEmoticonIcon style={{color: '#919191'}}/>
                    </div>
                </div>
               
                <div className='chatWindow--inputarea'>
                        <input className='chatWindow-input'
                         type="text"
                         placeholder='Digite uma mesagem'
                         />
                </div>
                <div className='chatWindow--pos'>
                <div className='chatWindow--btn'>
                    <SendIcon style={{color: '#919191'}}/>
                    </div>
                </div>
            </div>
        </div>
    )
}