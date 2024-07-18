import React, {useState} from 'react';
import { client2, message, followUser, share, luffy, luffyUser, luffyModal, chevronRight, chatbot, pencilWhite } from '../utils/Images';
import BackButton from '../components/BackButton';
import ShareModal from '../modals/ShareModal';
import ReviewCard from '../components/ReviewCard';

const ChatBot = () => {
    const [open, setOpen] = useState(false);
  return (
    <>
        <div className="flex flex-wrap">
            <div className="w-full sm:w-12/12 lg:w-5/12">
                <BackButton url='#' />
                <div className="luffy-text">
                    <h2>Luffy</h2>
                    <a href="#"><img src={client2} className='rounded-full' alt="Luffy Logo" />Stygian Styx</a>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce leo ante, lobortis a maximus nec, scelerisque eu lorem. Nunc sodales erat dapibus lacinia tempus. Phasellus volutpat mi mauris, non commodo neque placerat at. Vivamus sollicitudin erat lectus, sit amet tincidunt orci dictum id. Donec nec lectus sit amet sem rutrum pharetra ac sit amet tellus. Aenean ante odio, efficitur vel lacinia et, tincidunt eu purus.
                    </p>
                    <p>
                    Phasellus varius suscipit nibh, id cursus neque euismod at. Praesent pharetra diam eu diam tincidunt fermentum. Aliquam erat volutpat. Mauris suscipit urna arcu, nec sagittis velit pretium non. Etiam id eleifend turpis. Pellentesque facilisis orci sed nunc fringilla, eu fermentum purus vulputate. Nulla pulvinar diam quis posuere porta. Aliquam eu vehicula elit, sed aliquet odio.
                    </p>

                    <div className="luffy-comment">
                    <a href="#"><img src={message} alt="Start Chat" />Start Chat</a>
                    <a href="#"><img src={followUser} alt="Follow" />Follow</a>
                    <a href="#"><img src={share} alt="Share" onClick={() => setOpen(true)} /></a>
                    </div>
                </div>
            </div>
            <div className="w-full sm:w-12/12 lg:w-7/12">
                <div className="luffy-charecter">
                    <div className="luffy-charecter-img">
                    <img src={luffy} alt="Luffy" />
                    </div>
                    <div className="luffy-folwer-section">
                    <ul>
                        <li data-bs-toggle="modal" href="#exampleModalToggle" role="button"><a href="#"><img src={luffyUser} alt="User" /></a></li>
                        <li><a href="#">Conversations<span>4.9K</span></a></li>
                        <li><a href="#">Reviews<span>105</span></a></li>
                        <li><a href="#">Popularity<span>27.3K</span></a></li>
                        <li><a href="#">Category<span>Character</span></a></li>
                    </ul>
                    </div>
                </div>
            </div>
            <div className="w-full flex flex-wrap items-center justify-between mt-16">
                <div className="md:w-7/12">
                    <div className="review-textt pt-65">
                        <h4>Reviews</h4>
                        <p>Do  you recommend this app? <a href="#"><img src="assets/img/like.svg" alt=""/></a><a href="#"><img src="assets/img/dislike.svg" alt=""/></a></p>
                    </div>
                </div>
                <div className="md:w-5/12">
                    <div className="review-right-text text-end pt-65">
                        <a href="#" className='flex justify-end'><img src={pencilWhite} alt=""/>Write a Review</a>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-center review-container">
                {/* <div className="md:w-12/12">
                    <div className="chatbot-comment-img text-center mt-10">
                        <img src={chatbot} alt=""/>
                    </div>
                </div> */}
                <div className="sm:w-6/12 grow">
                    <form className='review-form'>
                        <textarea placeholder='Write your review...' className='w-full'></textarea>
                        <input type="submit" className='btn btn-white' value="Post Review" />
                    </form>
                </div>
                <div className="sm:w-6/12">
                    <ReviewCard />
                </div>
                <div className="sm:w-6/12">
                    <ReviewCard />
                </div>
                <div className="sm:w-6/12">
                    <ReviewCard />
                </div>
            </div>
        </div>
        <ShareModal show={open} setShow={setOpen} />
    </>
  )
}

export default ChatBot