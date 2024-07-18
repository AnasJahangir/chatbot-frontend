import React from 'react';
import { game1, game2, game3, game4, game5, game6 } from '../utils/Images';

const GameCarousel = () => {
  return (
    <div className="game-area pt-10">
      <div className="game-active owl-carousel">
        <div className="game-items">
          <img src={game1} alt="Anime Character" />
          <span>Anime Character</span>
        </div>
        <div className="game-items">
          <img src={game2} alt="Original Character" />
          <span>Original Character</span>
        </div>
        <div className="game-items">
          <img src={game3} alt="Realistic Character" />
          <span>Realistic Character</span>
        </div>
        <div className="game-items">
          <img src={game4} alt="Game Character" />
          <span>Game Character</span>
        </div>
        <div className="game-items">
          <img src={game5} alt="AI Tools" />
          <span>AI Tools</span>
        </div>
        <div className="game-items">
          <img src={game6} alt="Productivity" />
          <span>Productivity</span>
        </div>
      </div>
    </div>
  )
}

export default GameCarousel