import React from 'react';
import Navbar from './Navbar/Navbar';
import PrevChats from './prevChatsBar/PrevChats';
import './home.css'

const home = () => {
  return (
    <>
      <div className='top_home'>
        <div className="nav">
          <Navbar/>
        </div>
        <div className="lowTabs">
          <div className="prev">
            <div className="app_name">Text Generator</div>
            <div className="chats">
              <PrevChats/>
            </div>
          </div>
          <div className="curr"></div>
        </div>
      </div>
    </>
    
  );
}

export default home;
