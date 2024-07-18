import React from 'react';
import GameCarousel from '../components/GameCarousel';
import Filter1 from '../components/Filter1';
import BotCard from '../components/BotCard';
import { hacking, robot, gpt4, gemini, claude, gptDark, novel, girl } from '../utils/Images'

const Home = () => {
  return (
    <>
      <section>
        <GameCarousel />
      </section>
      <section>
        <Filter1 />
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

export default Home