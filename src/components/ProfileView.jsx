import React, { useState } from 'react';
import { userBg2, followUser, share, user2, editProfile, editProfile2, calendar, link, upload, modalBanner, close } from '../utils/Images';
import FollowerCard from '../components/FollowerCard';
import PhotosModal from '../modals/PhotosModal';
import DraftsModal from '../modals/DraftsModal';

const ProfileView = () => {
    const [openProfileModal, setOpenProfileModal] = useState(false);
    const [openDraftsModal, setOpenDraftsModal] = useState(false);

    return (
        <>
        <div className="user-wrapperr">
            <img src={userBg2} alt="" />
            <div className="user-profile-position">
                <a href="#"><img src={user2} alt="" /><img src={editProfile2} alt="" /></a>
            </div>
            <div className="user-profile-position-2">
                <a href="#"><img src={editProfile2} alt="" /></a>
            </div>
        </div>
        <div className="flex">
            <div className="w-full">
                <FollowerCard />
            </div>
        </div>
        <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 xl:w-1/2">
                <div className="user-content">
                    <h3>Alonzo Tiger</h3>
                    <span><img src={calendar} alt="" />Joined Jun 2024</span>
                    <p>Passionate chatbot developer and digital artist with a unique blend of technical expertise and creative flair. With over 7 years of experience in... <a href="#">See More</a></p>
                    <div className="user-linkk-2">
                        <a data-bs-toggle="modal" href="#exampleModalToggle" role="button" onClick={() => setOpenProfileModal(true)}><img src={editProfile} alt="" />Edit Profile</a>
                        <a data-bs-toggle="modal" href="#exampleModalToggle2" role="button" onClick={() => setOpenDraftsModal(true)}><img src={link} alt="" />Drafts</a>
                    </div>
                </div>
            </div>
        </div>
        <PhotosModal show={openProfileModal} setShow={setOpenProfileModal} />
        <DraftsModal show={openDraftsModal} setShow={setOpenDraftsModal} />
    </>
  )
}

export default ProfileView