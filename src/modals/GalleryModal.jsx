import { useState } from 'react'
import { Dialog, DialogBackdrop, DialogPanel } from '@headlessui/react'
import { 
    close, 
    gallery1, 
    gallery2, 
    gallery3, 
    gallery4, 
    gallery5, 
    gallery6, 
    gallery7, 
    gallery8, 
    gallery9, 
    gallery10, 
    gallery11, 
    gallery12 
} from '../utils/Images'

export default function GalleryModal({ show, setShow }) {

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
            className="relative transform overflow-hidden rounded-sm sm:px-5 text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 w-12/12 md:w-6/12 data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
          >
            <div className="dark-modal pb-4 sm:p-1 sm:pb-4">
              <div>
                <div className="text-center sm:mt-0">
                  <div className="mt-2">
                    <div>
                      <div className='text-center'>
                            <div className="modal-dialog gallery-modal p-0">
                                <div className="modal-content">
                                    <div className="modal-header flex justify-between">
                                        <h3 className='text-white text-sm md:ms-3'>Preset Photos</h3>
                                        <a type="button" className="" onClick={() => setShow(false)}>
                                            <img src={close} alt="" />
                                        </a>
                                    </div>
                                    <div className="modal-body my-5">
                                        <ul className="nav nav-tabs flex flex-wrap md:justify-center gap-2 md:gap-6" id="myTab" role="tablist">
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home" type="button" role="tab" aria-controls="home" aria-selected="true">Abstract</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile" type="button" role="tab" aria-controls="profile" aria-selected="false">Flat</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact" type="button" role="tab" aria-controls="contact" aria-selected="false">Impressionist</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="lofi-tab" data-bs-toggle="tab" data-bs-target="#lofi" type="button" role="tab" aria-controls="contact" aria-selected="false">Lofi</button>
                                            </li>
                                            <li className="nav-item" role="presentation">
                                                <button className="nav-link" id="minimalist-tab" data-bs-toggle="tab" data-bs-target="#minimalist" type="button" role="tab" aria-controls="contact" aria-selected="false">Minimalist</button>
                                            </li>
                                        </ul>
                                        <div className="tab-content mt-8" id="myTabContent">
                                            <div className="tab-pane fade active show" id="home" role="tabpanel" aria-labelledby="home-tab">
                                                <div className='flex flex-wrap gap-y-4'>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery1} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery2} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery3} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery4} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery2} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery6} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery7} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery8} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery9} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery10} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery11} alt=""/></a>
                                                    </div>
                                                    <div className='w-3/12'>
                                                        <a href="#"><img src={gallery12} alt=""/></a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="chat-box-btn center"><a href="#">Upload Cover</a></div>
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
