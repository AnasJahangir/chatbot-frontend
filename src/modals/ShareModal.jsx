import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { close, luffyModal, google, discord2, x, linkedin, copy2 } from '../utils/Images'

export default function ShareModal({ show, setShow }) {

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
            className="relative transform overflow-hidden rounded-sm sm:px-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-12/12 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="dark-modal pb-4 sm:p-1 sm:pb-4">
              <div>
                <div className="text-center sm:mt-0">
                  <div className="mt-2">
                    <div>
                      <div className='text-center share-modal'>
                          <div className="modal-dialog p-0">
                              <div className="modal-content p-0">
                                <div className="modal-header text-end absolute top-1.5 end-1.5">
                                  <a type="button" className="inline-flex w-full justify-end cursor-pointer rounded-md text-3xl me-3 px-4 py-2 text-sm font-semibold text-white sm:ml-3 sm:w-auto" onClick={() => setShow(false)}>
                                    <img src={close} alt="" />
                                  </a>
                                </div>
                                <div className="modal-body">
                                    <h4 className='text-white mb-3'>Share Prompt</h4>
                                    <img src={luffyModal} className='rounded-lg' alt="" />
                                    <h5 className='text-xl text-white mt-4'>Luffy</h5>
                                    <p className='text-grey mt-3'>Passionate chatbot developer and digital artist <br /> with a unique blend of technical expertise.</p>
                                    <div className="flex justify-center gap-6">
                                        <a href="#" type='link' className='btn-link'>
                                            <img src={google} alt="" />
                                        </a>
                                        <a href="#" type='link' className='btn-link'>
                                            <img src={discord2} alt="" />
                                        </a>
                                        <a href="#" type='link' className='btn-link'>
                                            <img src={x} alt="" />
                                        </a>
                                        <a href="#" type='link' className='btn-link'>
                                            <img src={linkedin} alt="" />
                                        </a>
                                    </div>
                                    <div className="relative">
                                        <input type="text" className='default-input mt-6' name="" placeholder='https://askpandia.com/luffy' />
                                        <button>
                                            <img src={copy2} className='absolute top-8 right-1.5' alt="" />
                                        </button>
                                    </div>
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
