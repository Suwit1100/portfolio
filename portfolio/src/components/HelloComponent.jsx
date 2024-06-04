import React from 'react'
import "../css/HelloComponent.css"
import { MdWavingHand } from "react-icons/md";
import Profilepng from '../../public/profile.png'
function HelloComponent(props) {
    const { downloadFile } = props;

    return (
        <div className="row d-flex align-items-center box-hello-d" id='home'>
            <div className="col-md-8">
                <div className='box-hello'>
                    <div className='hello text-center text-wrap'><i className='hi'><MdWavingHand></MdWavingHand></i>สวัสดีครับ</div >
                    <div className='hello text-center text-wrap'>ผมชื่อสุวิทย์ ลีเจ้ยวาระ</div >
                    <p className='mt-2'>
                        เป็นนักศึกษาจบใหม่ จากมหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์
                        &nbsp;<strong>ผมกำลังมองหางานตำแหน่ง Web Devloper</strong> และผมมีความสนใจในการเขียนโค้ดและพัฒนาเว็บแอปพลิเคชัน
                    </p>
                    <div className="row">
                        <div className="col-12 ">
                            <button className='btn btn-outline-success form-control' onClick={() => downloadFile()}>ดาวโหลด Resume</button>
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