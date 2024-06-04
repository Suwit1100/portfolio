import React from 'react'
import Expend from '../../public/project/expend.png'
import Search from '../../public/project/search.png'
import Task from '../../public/project/task.png'
import Github from '../../public/project/github.png'
import '../css/ResultComponent.css'

function ResultComponent() {
    return (
        <div>
            <div className="title-result text-center mt-5 mb-4">
                ผลงาน
            </div>
            <div className="row g-4">
                <a className="col-6 col-md-3 box-result text-center my-2" href='https://harmonious-pony-284bce.netlify.app/'>
                    <img src={Expend} alt="" />
                    <div className="des-result mt-1">ระบบบันทึกรายรับรายจ่าย</div>
                </a>
                <a className="col-6 col-md-3 box-result text-center my-2" href='https://zesty-sherbet-d1a2d5.netlify.app/'>
                    <img src={Search} alt="" />
                    <div className="des-result mt-1">ค้นหารูปภาพด้วย API</div>
                </a>
                <a className="col-6 col-md-3 box-result text-center my-2" href='https://taupe-genie-4c0daa.netlify.app/'>
                    <img src={Task} alt="" />
                    <div className="des-result mt-1">ระบบจัดการงาน</div>
                </a>
                <a href='https://github.com/Suwit1100' className="col-6 col-md-3 box-result text-center my-2">
                    <img src={Github} alt="" />
                    <div className="des-result mt-1">โปรเจคเพิ่มเติม Github</div>
                </a>
            </div>
        </div>
    )
}

export default ResultComponent