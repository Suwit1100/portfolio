import React from 'react'
import '../css/AboutComponent.css'

function AboutComponent() {
    return (
        <div className='box-about mt-3'>
            <div className="row d-flex align-items-center">
                <div className="col-md-4">
                    <div className="box-img text-center">
                        <img className='about' src="https://www.ctvnews.ca/content/dam/ctvnews/en/images/2020/11/12/work-from-home-1-5186089-1627385675007.jpg" alt="" />
                    </div>
                </div>
                <div className="col-md-8 text-center box-text-about">
                    <div className='title-about'>เกี่ยวกับฉัน</div>
                    <p className='content-about'>
                        สวัสดีครับ ผมชื่อฟิล์ม เพิ่งจบการศึกษาใหม่จากสาขาวิทยาการคอมพิวเตอร์ มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี ผมมีความหลงใหลในเขียนโค้ดและพัฒนาเว็บแอปพลิเคชัน
                        ชอบแก้ไขปัญหา และพร้อมที่จะเรียนรู้สิ่งใหม่ๆอยู่เสมอ ผมหวังว่าจะได้นำทักษะและความรู้ที่มีไปทำงานที่ท้าทายและช่วยพัฒนาองค์กรให้เจริญก้าวหน้าต่อไป
                    </p>
                </div>
            </div>
        </div>
    )
}

export default AboutComponent