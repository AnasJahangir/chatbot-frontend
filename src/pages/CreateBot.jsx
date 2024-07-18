import React, { useState } from 'react';
import BackButton from '../components/BackButton';
import { botCover, botProfile, gpt, gpt4Icon, googleGemini, claude2, editProfile2, chevronDown, chatBg, fairy, videoGame, rocket, robot1, botBg, chevronRight, sendMessage } from '../utils/Images';
import GalleryModal from '../modals/GalleryModal';

const CreateBot = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <div className='flex flex-wrap'>
            <div className="w-full">
                <BackButton url='#' />
            </div>
            <div className="lg:w-3/12 xl:w-2/12">
                <div className="create-profile">
                    <h5>Image Cover</h5>
                    <span onClick={() => setOpen(true)} role="button">
                        <a href="#"><img src={botCover} className='rounded-full' alt="" /></a>
                        <a href="#"><img src={editProfile2} alt="" /></a>
                    </span>
                </div>
                <div className="profile-select">
                    <button className="click-select dropdown_toogler"><img src={gpt} alt="" />ChatGPT <img src={chevronDown} alt="" /></button>
                    <div className="open-select-menu">
                        <h3>Model Settings:</h3>
                        <ul>
                            <li><a href="#"><img src={gpt} alt="" />ChatGPT</a></li>
                            <li><a href="#"><img src={gpt4Icon} alt="" />GPT-4 Turbo</a></li>
                            <li><a href="#"><img src={googleGemini} alt="" />Google Gemini</a></li>
                            <li><a href="#"><img src={botCover} alt="" />Claude V2</a></li>
                        </ul>
                    </div>
                </div>
                <button className='btn btn-purple w-full mt-6'>Publish</button>
            </div>
            <div className="lg:w-4/12 xl:w-4/12 grow md:pl-5">
                <div className="ceate-chat-bg pt-85">
                    <div className="chat-list-box mb-5">
                        <h3>Chat Background</h3>
                        <div className="chat-bg-img">
                            <img src={botBg} alt="" />
                            <a href="#"><img src={editProfile2} alt="" /></a>
                        </div>
                    </div>
                    <div className="chat-list-box mb-5">
                        <h3>Name</h3>
                        <input type="text" placeholder="New Bot" />
                    </div>
                    <div className="chat-list-box mb-5">
                        <h3>Description</h3>
                        <textarea name="message" id="" placeholder="Add a short description about your bot"></textarea>
                    </div>
                    <div className="chat-list-box chat-box-dropdown mb-5">
                        <h3>Category</h3>
                        <button className="dropdown_toogler"><img src={fairy} alt=""/> Character <span>/</span> Famous people<img src={chevronRight} alt=""/></button>
                        <div className="chat-box-open">
                            <ul className="chat-first">
                                <li className="active"><a href="#"><img src={fairy} alt=""/> Character</a></li>
                                <li><a href="#"><img src={videoGame} alt=""/> Game</a></li>
                                <li><a href="#"><img src={rocket} alt=""/> Productivity</a></li>
                                <li><a href="#"><img src={robot1} alt=""/> AI Tools</a></li>
                            </ul>
                            <ul>
                                <li className="active"><a href="#">Famous people</a></li>
                                <li><a href="#">Movie&amp;TV</a></li>
                                <li><a href="#">Original character</a></li>
                                <li><a href="#">Anime</a></li>
                                <li><a href="#">Game</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="chat-list-box mb-5">
                        <h3>Prompt</h3>
                        <p>Prompts guide bot responses with instructions and constraints. What you want the model to do? What is some relevant background information? What are the constraints or limitations that the model should adhere to?</p>
                    </div>
                    <div className="chat-list-box">
                        <h3>Welcome Message</h3>
                        <textarea name="message" id="" placeholder="Hello world!"></textarea>
                    </div>
                </div>
            </div>
            <div className="lg:w-5/12 xl:w-5/12 grow">
                <div className="user-preview" style={{backgroundImage: `url(${chatBg})`}}>
                    <p className='text-white mb-7'>Preview</p>
                    <div className="user-clientt">
                        <a href="#" className='flex items-center'><img src={botProfile} className='rounded-full' alt="" />New Bot</a>
                        <a href="#">Preview welcome message</a>``
                    </div>
                    <div className="user-send-messege">
                        <input type="text" placeholder="Chat to bot now..." />
                        <a href="#"><img src={sendMessage} alt="" /></a>
                    </div>
                </div>
            </div>
        </div>
        <GalleryModal show={open} setShow={setOpen} />
    </>
  )
}

export default CreateBot