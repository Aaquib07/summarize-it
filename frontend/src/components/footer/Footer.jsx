import React from 'react'
import './footer.css'
import { MdCopyright } from "react-icons/md"

const Footer = () => {
  return (
    <div className='footer'>
        <div className="copyright">
            <MdCopyright />
            <p>2024 Summarizit. All rights reserved.</p>
        </div>
    </div>
  )
}

export default Footer