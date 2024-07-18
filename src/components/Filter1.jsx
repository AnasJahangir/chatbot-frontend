import React from 'react';
import { filter, refresh } from '../utils/Images';

const Filter1 = () => {
  return (
    <>
    <div className="flex flex-wrap items-center pt-8 pb-8">
        <div className="w-full lg:w-5/12 md:w-1/3">
            <div className="chat-box-title">
                <h2>All Chatbots</h2>
            </div>
        </div>
        <div className="w-full lg:w-7/12 md:w-2/3">
            <div className="chat-box-filter text-end pr-30">
                <a href="#"><img src={refresh} alt="refresh" /> Refresh</a>
                <button>
                    <img src={filter} alt="filter" /> Filters
                </button>
            </div>
        </div>
    </div>
    </>
  )
}

export default Filter1