import React from 'react'
import './ChatListitem.css'


export default ({onClick,active,data}) =>{
    return(
        <div 
        className={`chatListItem ${active? 'active': ''}`}
        onClick={onClick}
        >
            <img className='chatListItem--avatar' src={data.image}/>
            <div className='chatListItem--lines'>
                <div className='chatListItem--line'>
                    <div className='chatListItem--name'>{data.title}</div>
                    <div className='chatListItem--date'>12:32</div>

                </div>

                <div className='chatListItem--line'>
                    <div className='chatListItem--lastMsg'>
                        <p>Opa, tudo bem? testetsvdysadygsgdcsjkghdjkshzjkhjksdghcuy</p>
                    </div>
                    </div>
            </div>
        </div>
    );
}