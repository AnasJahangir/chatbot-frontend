import React from 'react';
import { chevronRight } from '../utils/Images';

const BackButton = ({ url }) => {
  return (
    <div className="back-page py-5">
        <a href={url} className='flex items-center'><img src={chevronRight} alt="" />Back</a>
    </div>
  )
}

export default BackButton