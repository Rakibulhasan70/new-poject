import React, { useState } from 'react'
import ModalVideo from 'react-modal-video'
import './VideoModal.scss'

function VideoModal({isOpen,setOpen}) {
  
    return (
        <React.Fragment>
           <ModalVideo channel='vimeo' autoplay isOpen={isOpen} videoId="94686522" onClose={() => setOpen(false)} />
        </React.Fragment>
    )
}

export default VideoModal
