import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { close, modalBanner, modalProfile } from '../utils/Images'

export default function PhotosModal({ show, setShow }) {

  return (
    <Dialog className="relative z-10" open={show} onClose={setShow}>
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-gray-900 bg-opacity-60 backdrop-blur-md transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
      />
      <div className="fixed inset-0 z-10 w-full overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            className="relative transform overflow-hidden rounded-sm sm:px-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-8/12 md:w-5/12 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="dark-modal pb-4 pt-5 sm:p-6 sm:pb-4">
              <div>
                <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div className="user-profile-edit-popup">
                        <div>
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-body">
                                        <div className="flex justify-between items-center mb-6">
                                            <h3 className='w-full text-start'>Edit Profile</h3>
                                            <a
                                                type="button"
                                                className="inline-flex w-full justify-end cursor-pointer rounded-md text-3xl px-3 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto"
                                                onClick={() => setShow(false)}
                                            >
                                                <img src={close} alt="" />
                                            </a>
                                        </div>
                                        <div className="user-modal-form">
                                            <div className="user-modal-input">
                                                <div className="user-modal-input-1">
                                                    <label>Display name</label>
                                                    <input type="text" placeholder="Enter a display name for your account"/>
                                                </div>
                                                <div className="user-modal-input-1">
                                                    <label>Handle</label>
                                                    <input type="text" placeholder="askpandiacom/ username"/>
                                                </div>
                                            </div>
                                            <div className="user-modal-profile">
                                                <a href="#"><img src={modalProfile} alt=""/></a>
                                            </div>
                                        </div>
                                        <div className="user-about">
                                            <h5>About</h5>
                                            <textarea name="message" placeholder="Tell us about yourself..."></textarea>
                                        </div>
                                        <div className="user-about">
                                            <h5>Banner image</h5>
                                            <img src={modalBanner} alt=""/>
                                        </div>
                                        <div className="modal-link-connect">
                                            <h5>Connect Links</h5>
                                            <div className="flex flex-wrap sm:flex-nowrap w-full">
                                                <input type="text" placeholder="Link Title"/>
                                                <input className="modal-input-width" type="text" placeholder="Enter the URL starting with https://"/>
                                                <a href="#"><img src={close} alt=""/></a>
                                            </div>
                                        </div>
                                        <a href="#">Save</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  )
}
