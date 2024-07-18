import React from 'react';
import { union, discord, telegram, instagram } from '../utils/Images';

const FollowerCard = () => {
  return (
    <div className="user-follow-wrapper">
        <div className="user-followw">
            <ul>
                <li><a href="#">Followers<span>105</span></a></li>
                <li><a href="#">Following<span>643</span></a></li>
                <li><a href="#">Popularity<span>1.9M</span></a></li>
                <li><a href="#">Uses<span>1.6K</span></a></li>
            </ul>
        </div>
        <div className="user-social">
            <ul>
                <li><a href="#"><img src={union} alt="" />Website</a></li>
                <li><a href="#"><img src={instagram} alt="" />Instagram</a></li>
                <li><a href="#"><img src={telegram} alt="" />Telegram</a></li>
                <li><a href="#"><img src={discord} alt="" />Discord</a></li>
            </ul>
        </div>
    </div>
  )
}

export default FollowerCard