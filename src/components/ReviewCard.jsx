import React from 'react'
import { client2, reviewIcon, like, dislike } from '../utils/Images'

const ReviewCard = () => {
  return (
    <div className='review-card'>
        <div className="flex flex-wrap item-center justify-between">
            <div className='flex items-center gap-4 mb-3'>
                <img src={client2} className='rounded-full' alt="" />
                <p className='text-lg m-0 text-silver'>Stygian Styx</p>
            </div>
            <div className="flex items-center gap-2">
                <img src={reviewIcon} alt="" />
                <p className='text-lg m-0'>Recommended: March 21, 2024</p>
            </div>
        </div>
        <p className='text-lg my-5'>
            The chatbot is highly versatile, capable of assisting with everything from answering
            complex questions to providing creative writing prompts
        </p>
        <div className="flex items-center gap-4">
            <img src={like} alt="" />
            <img src={dislike} alt="" />
        </div>
    </div>
  )
}

export default ReviewCard