import React from 'react'
import "../css/HelloComponent.css"
import { MdWavingHand } from "react-icons/md";
import Profilepng from '../../public/profile.png'
function HelloComponent() {
    return (
        <div className="row d-flex align-items-center box-hello-d">
            <div className="col-md-8">
                <div className='box-hello'>
                    <div className='hello text-wrap'><i className='hi'><MdWavingHand></MdWavingHand></i>สวัสดีครับ ผมชื่อสุวิทย์ ลีเจ้ยวาระ เป็นนักศึกษาจบใหม่ สาขาวิทยาการคอมพิวเตอร์</div >
                    <p className='mt-2'>
                        ผมกำลังมองหางานตำแหน่ง Web Devloper และผมมีความสนใจในการเขียนโค้ดและพัฒนาเว็บแอปพลิเคชัน
                    </p>
                    <div className="row">
                        <div className="col-12 ">
                            <button className='btn btn-outline-success form-control'>ดาวโหลด Resume</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 text-center mt-2">
                <img className="profile" src={Profilepng} alt="" />
            </div>
        </div>

    )
}

export default HelloComponent