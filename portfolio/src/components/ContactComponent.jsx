import React from 'react'
import '../css/ContactComponent.css'
import Gmail from '../../public/gmail.png'
import Line from '../../public/line.png'
import Phone from '../../public/phone.png'

function ContactComponent() {
    return (
        <div className='mt-5' id='list-contact'>
            <div className="title-contact text-center ">
                ติดต่อ
            </div>
            <div className="box-contact mb-2">
                <div className="row">
                    <div className="col-4 sub-box-contact text-center">
                        <img src={Phone} alt="" />
                        <div className='text-truncate'>095-285-0223</div>
                    </div>
                    <div className="col-4 sub-box-contact text-center">
                        <img src={Gmail} alt="" />
                        <div className='text-truncate'> suwitlichoeiwara@gmail.com</div>
                    </div>
                    <div className="col-4 sub-box-contact text-center">
                        <img src={Line} alt="" />
                        <div className='text-truncate'>
                            fswl.1203
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactComponent