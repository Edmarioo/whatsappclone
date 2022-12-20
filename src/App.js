import React, {useState,useEffect} from "react";
import "./App.css";
import DonutLargeIcon from '@mui/icons-material/DonutLarge';
import ChatIcon from '@mui/icons-material/Chat';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import SearchIcon from '@mui/icons-material/Search';

import ChatListitem from './components/ChatListitem'
import ChatIntro from "./components/ChatIntro";
import ChatWindow from "./components/ChatWindow";

export default () => {
 
const [chatlist,SetChatList] = useState([
  {chatId: 1, title:'Fulano de tal', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100'},
  {chatId: 2, title:'Fulano de tal', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100'},
  {chatId: 3, title:'Fulano de tal', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100'},
  {chatId: 4, title:'Fulano de tal', image: 'https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100'}
])

const [activeChat,setActiveChat] = useState({});
  return(
    <div className="app-window">
      <div className= "sidebar">
        <header>
          <img className='header--avatar' src="https://img.freepik.com/vetores-premium/perfil-de-avatar-de-homem-no-icone-redondo_24640-14044.jpg?w=100" alt/>
      <div className="header--buttons">
        <div className="header--btn">
        <DonutLargeIcon style={{color: '#919191'}}/>
        </div>
        <div className="header--btn">
        <ChatIcon style={{color: '#919191'}}/>
        </div>
        <div className="header--btn">
        <MoreVertIcon style={{color: '#919191'}}/>
        </div>
      </div>
        </header>

 <div className='search'>
    <div className="search--input">
    <SearchIcon fontSize="small" style={{color: '#919191'}}/>
    <input type ="search" placeholder="Procurar ou começar nova conversa"/>
    </div>
 </div>
 <div className='chatlist'>
  {chatlist.map((item,key)=>(
      <ChatListitem 
      key={key}
      data={item}
      active={activeChat.chatId === chatlist[key].chatId}
      onClick={() =>setActiveChat(chatlist[key])}
      />
  ))}
 </div>


      </div>
    <div className='contentArea'>
        {activeChat.chatId !== undefined &&
         <ChatWindow/>
        } 

        {activeChat.chatId === undefined &&
           <ChatIntro/>
        }
     

    </div>
    </div>
  );
}