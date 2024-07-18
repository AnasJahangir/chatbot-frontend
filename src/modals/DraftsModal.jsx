import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { close, modalBanner, modalProfile } from '../utils/Images'

export default function DraftsModal({ show, setShow }) {

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
            className="relative transform overflow-hidden rounded-sm sm:px-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-8/12 md:w-4/12 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="dark-modal pb-4 sm:p-1 sm:pb-4">
              <div>
                <div className="text-center sm:ml-4 sm:mt-0 sm:text-left">
                  <div className="mt-2">
                    <div class="user-profile-drapt-popup">
                      <div>
                          <div className="modal-dialog p-0">
                              <div className="modal-content p-0">
                                <div className="modal-header text-end absolute top-1.5 end-1.5">
                                  <a type="button" className="inline-flex w-full justify-end cursor-pointer rounded-md text-3xl me-3 px-4 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto" onClick={() => setShow(false)}>
                                    <img src={close} alt="" />
                                  </a>
                                </div>
                                  <div className="modal-body">
                                      <h4>Are you sure?</h4>
                                      <p>You can update the prompt anytime, but this will delete all the data associated with this prompt. This prompt was used 0 times, and gained 0 popularity. This action is irreversible.</p>
                                      <a className="edit-modal-btn-1st" href="javascript:Void(0)" onClick={() => setShow(false)}>Cancel</a>
                                      <a href="#">Delete</a>
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
