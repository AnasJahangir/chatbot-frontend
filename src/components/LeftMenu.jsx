import React, { useContext, useState } from "react";
import SigInModal from "../modals/SignInModal";
import { Link } from "react-router-dom";
import {
  logo,
  mobLogo,
  client1,
  client2,
  client3,
  userBg,
  user1,
  createIcon,
  exploreIcon,
  homeIcon,
  dotVertical,
  search,
  plus,
  profile,
  settings,
  logout,
  pin,
  deleteIcon,
  followUser,
  pencilWhite,
  dummyUser,
  chatbotSmall,
  ellipsePlus,
} from "../utils/Images";
import { UserContext } from "../context/UserContext";

const LeftMenu = () => {
  const [open, setOpen] = useState(false);
  const { user } = useContext(UserContext);

  return (
    <>
      <div className="left-menu-area">
        <div className="logo">
          <a className="hidden sm:block" href="index.html">
            <img src={logo} alt="Logo" />
          </a>
          <a className="block sm:hidden" href="index.html">
            <img src={mobLogo} alt="Mobile Logo" />
          </a>
        </div>
        <div className="menu-main">
          <h5 className="hidden md:block">Main</h5>
          <ul>
            <li className="active">
              <Link
                to="/chatbot"
                className="flex items-center justify-center sm:justify-start"
              >
                <img src={homeIcon} alt="Home Icon" />
                <span>Home</span>
              </Link>
            </li>
            <li>
              <Link
                to="/chatbot/search"
                className="flex items-center justify-center sm:justify-start"
              >
                <img src={exploreIcon} alt="explore Icon" />
                <span>Explore</span>
              </Link>
            </li>
            <li>
              <Link
                to="/chatbot/create"
                className="flex items-center justify-center sm:justify-start"
              >
                <img src={createIcon} alt="create Icon" />
                <span>Create</span>
              </Link>
            </li>
          </ul>
        </div>
        <div className="user-wrapper">
          <h4 className="hidden sm:flex items-center">
            User profile
            <span className="ml-2 dropdown_toogler">
              <img src={dotVertical} alt="Dropdown Icon" />
            </span>
            <div className="profile-dropdown">
              <div className="profile-box">
                <ul>
                  <li>
                    <a href="#">
                      <img src={profile} alt="Profile Icon" />
                      Profile
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={settings} alt="Setting Icon" />
                      Setting
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <img src={logout} alt="Logout Icon" />
                      Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </h4>
          {!user && (
            <div className="user-slide-active owl-carousel owl-loaded owl-drag">
              <div className="user-items">
                <>
                  <div className="user-img h-24">
                    <a href="#">
                      <img src={dummyUser} alt="User" />
                    </a>
                  </div>
                  <h4 className="hidden md:block">Anonymous Guest</h4>
                  <div className="hidden md:block px-4">
                    <button
                      className="btn btn-purple w-2/3 mx-auto block"
                      onClick={() => setOpen(true)}
                    >
                      Sign In
                    </button>
                  </div>
                </>
              </div>
              <div className="user-items">
                <div className="user-img">
                  <img src={userBg} alt="User Background" />
                  <a href="#">
                    <img src={user1} alt="User" />
                  </a>
                </div>
                <h4 className="hidden md:block">Alonzo Tiger</h4>
                <ul className="hidden md:block">
                  <li>
                    <a href="#">
                      Followers <br />
                      <span>105</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Following <br />
                      <span>643</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Popularity <br />
                      <span>1.9M</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="user-items">
                <div className="user-img">
                  <img src={userBg} alt="User Background" />
                  <a href="#">
                    <img src={user1} alt="User" />
                  </a>
                </div>
                <h4 className="hidden md:block">Alonzo Tiger</h4>
                <ul className="hidden md:block">
                  <li>
                    <a href="#">
                      Followers <br />
                      <span>105</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Following <br />
                      <span>643</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Popularity <br />
                      <span>1.9M</span>
                    </a>
                  </li>
                </ul>
              </div>
              <div className="user-items">
                <div className="user-img">
                  <img src={userBg} alt="User Background" />
                  <a href="#">
                    <img src={user1} alt="User" />
                  </a>
                </div>
                <h4 className="hidden md:block">Alonzo Tiger</h4>
                <ul className="hidden md:block">
                  <li>
                    <a href="#">
                      Followers <br />
                      <span>105</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Following <br />
                      <span>643</span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      Popularity <br />
                      <span>1.9M</span>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          )}
        </div>

        <div className="client-box">
          <div className="client-search hidden md:block">
            <h4 className="hidden md:block">FOLLOWING</h4>
            <div className="client-search-active flex items-center">
              <a href="#">
                <img src={search} alt="Search Icon" />
              </a>
              <a href="#">
                <img src={plus} alt="Plus Icon" />
              </a>
            </div>
            {/* <ul>
                        <li className="active flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client1} alt="Client 1" />
                                CreativeGPT
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client2} alt="Client 2" />
                                Stygian Styx
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client3} alt="Client 3" />
                                Just_Shadow-_-
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        <li className="flex items-center">
                            <a href="#" className="flex items-center">
                                <img src={client2} alt="Client 2" />
                                Stygian Styx
                            </a>
                            <span className="ml-2 dropdown_toogler">
                                <img src={dotVertical} alt="Dropdown Icon" />
                            </span>
                            <div className="profile-dropdown">
                                <div className="profile-box profile-box2">
                                    <ul>
                                        <li><a href="#"><img src={pin} alt="Pin Icon" />Pin to top</a></li>
                                        <li><a href="#"><img src={deleteIcon} alt="Delete Icon" />Unfollow this bot</a></li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul> */}
          </div>
          {/* <div className="client-search block md:hidden">
                    <ul className="flex flex-col justify-center items-center">
                        <li><a href="#"><img src={client1} alt="Client 1" /></a></li>
                        <li><a href="#"><img src={client2} alt="Client 2" /></a></li>
                        <li><a href="#"><img src={client3} alt="Client 3" /></a></li>
                        <li><a href="#"><img src={client2} alt="Client 4" /></a></li>
                    </ul>
                </div> */}
          <div className="mt-14">
            <img
              src={chatbotSmall}
              className="mx-auto hidden md:block"
              alt=""
            />
            <img src={ellipsePlus} className="mx-auto block md:hidden" alt="" />
            <p className="text-xl text-center mt-10 hidden md:block">
              <span className="text-light-purple">Explore</span> to add more{" "}
              <br /> chatbots here
            </p>
          </div>
        </div>
      </div>
      <SigInModal show={open} setShow={setOpen} />
    </>
  );
};

export default LeftMenu;
