import React from 'react'

const Filter3 = ({ title }) => {
  return (
    <div className="flex flex-wrap items-center  pt-8 pb-8">
      <div className="w-full xl:w-5/12 lg:w-1/3">
        <div className="chat-box-title chat-box-title-user">
          <h2>{title}</h2>
        </div>
      </div>
      <div className="w-full xl:w-7/12 lg:w-2/3">
        <div className="chat-box-user-btn chat-box-user-btn-2 text-end">
          <ul>
            <li className="active"><a href="#">Most Saved</a></li>
            <li><a href="#">Most Used</a></li>
            <li><a href="#">Latest</a></li>
            <li><a href="#">Drafts</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Filter3