import React from 'react';
import { filter, refresh, robot1, glowingStar, fairy, wavingHand, videoGame, rocket, close } from '../utils/Images';

const Filter2 = () => {
  return (
    <div className="explore-btn-overplow pt-8 pb-8">
        <div className="explore-btn-overscroll explore-btn-overscroll-explore">
            <div className="explore-btn-wrapp">
                <ul>
                    <li><a href="#"><img src={wavingHand} alt="For you" />For you</a></li>
                    <li><a href="#"><img src={glowingStar} alt="Featured" />Featured</a></li>
                    <li><a href="#"><img src={fairy} alt="Character" />Character</a></li>
                    <li><a href="#"><img src={videoGame} alt="Game" />Game</a></li>
                    <li><a href="#"><img src={rocket} alt="Productivity" />Productivity</a></li>
                    <li><a href="#"><img src={robot1} alt="AI Tools" />AI Tools</a></li>
                </ul>
            </div>
            <div className="chat-box-filter chat-box-filter-explore text-end pr-30">
                <a href="#"><img src={refresh} alt="Refresh" /> Refresh</a>
                <button className="click-here-filter">
                    <img src={filter} alt="Filters" /> Filters
                </button>
            </div>
        </div>
        <div className="explore-filter-box">
            <div className="explore-filter-content">
                <button className="filter-close-btn flex items-center">Clear All <img src={close} alt=""/></button>
                <h3>Filters</h3>
                <div className="filter-short mb-4">
                    <h5>Sorting</h5>
                    <ul>
                        <li><a href="#">Top</a></li>
                        <li><a href="#">Trending</a></li>
                        <li><a href="#">New</a></li>
                    </ul>
                </div>
                <div className="filter-short-btn-box mb-15">
                    <h4>Type</h4>
                    <ul>
                        <li><a href="#">Famous people</a></li>
                        <li><a href="#">Movie&amp;TV</a></li>
                        <li><a href="#">Anime</a></li>
                        <li><a href="#">Game</a></li>
                        <li><a href="#">Original character</a></li>
                    </ul>
                </div>
                <div className="filter-short-btn-box mb-15">
                    <h4>Gender</h4>
                    <ul>
                        <li><a href="#">Male</a></li>
                        <li><a href="#">Female</a></li>
                        <li><a href="#">Non-Binary</a></li>
                        <li><a href="#">Other</a></li>
                    </ul>
                </div>
                <div className="filter-short-btn-box mb-15">
                    <h4>Occupation</h4>
                    <ul>
                        <li><a href="#">Teacher</a></li>
                        <li><a href="#">Doctor</a></li>
                        <li><a href="#">Professor</a></li>
                        <li><a href="#">Coach</a></li>
                        <li><a href="#">Student</a></li>
                        <li><a href="#">Police</a></li>
                        <li><a href="#">Agent</a></li>
                        <li><a href="#">Soldier</a></li>
                    </ul>
                </div>
                <div className="filter-short-btn-box mb-15">
                    <h4>Relationship</h4>
                    <ul>
                        <li><a href="#">Mother/Father</a></li>
                        <li><a href="#">Sister/Brother</a></li>
                        <li><a href="#">Stepmother/Stepfather</a></li>
                    </ul>
                </div>
                <div className="filter-short-btn-box">
                    <h4>Race</h4>
                    <ul>
                        <li><a href="#">Human</a></li>
                        <li><a href="#">Demon</a></li>
                        <li><a href="#">Vampire</a></li>
                        <li><a href="#">Succubus</a></li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Filter2