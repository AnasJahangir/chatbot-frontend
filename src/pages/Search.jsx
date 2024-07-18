import React from 'react'
import Filter2 from '../components/Filter2'
import BotCard from '../components/BotCard'
import { search, hacking, robot, gpt4, gemini, claude, gptDark, novel, girl } from '../utils/Images'

const Search = () => {
  return (
    <>
    <div className="explore-search">
        <button className="dropdown_toogler"><img src={search} alt="" />Search for anything...</button>

        <div className="explore-search-menu-open">
            <ul>
                <li><a href="#">🔥 ChatGPT</a></li>
                <li><a href="#">🔥 One Piece</a></li>
                <li><a href="#">🔥 Roronoa</a></li>
                <li><a href="#">Character</a></li>
                <li><a href="#">Elf</a></li>
                <li><a href="#">Job hunting</a></li>
                <li><a href="#">Max productivity</a></li>
                <li><a href="#">Fairy</a></li>
                <li><a href="#">Travelling</a></li>
                <li><a href="#">Real Alicia</a></li>
            </ul>
        </div>
    </div>
    <section>
        <Filter2 />
        <div className="chat-bot-wrapp">
            <div className="flex flex-wrap mb-20">
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={robot} title='AskPandia Assistant' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={gpt4} title='GPT-4o' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={gemini} title='Gemini-1.5-Pro' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={claude} title='Claude-3-Sonnet' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={hacking} title='Ultimate Hacking AI' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={gptDark} title='AIM gpt [DarkGPT v3]' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={novel} title='NovelGPT Dark V2' />
                </div>
                <div className='sm:w-6/12 lg:w-4/12 xl:w-3/12'>
                    <BotCard image={girl} title='💔 Lily 💔 Borderline Girl ·' />
                </div>
            </div>
        </div>
    </section>
    </>
)
}

export default Search