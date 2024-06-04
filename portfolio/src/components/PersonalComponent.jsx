import React from 'react'
import '../css/PersonalComponent.css'
function PersonalComponent() {
    return (
        <div className='mt-5 main-per'>
            <div className='title-personal text-center'>
                ประวัติ
            </div>
            <div className='px-2'>
                <div className="row">
                    <div className="col-12 sub-text">
                        การศึกษา
                    </div>
                    <div className="box-personal">
                        <strong>ระดับมัธยมศึกษา (2557 - 2563)</strong>
                        <br />
                        โรงเรียนห้วยเม็กวิทยาคม สายวิทย์-คณิต
                        GPAX : 3.47
                        <hr />
                        <strong>  ระดับอุดมศึกษา (2563-2567)</strong>
                        <br />
                        มหาวิทยาลัยเทคโนโลยีราชมงคลธัญบุรี คณะวิทยาศาสตร์และเทคโนโลยี สาขาวิทยาการคอมพิวเตอร์
                        GPAX : 3.56
                    </div>
                </div>
                <div className="row mt-2">
                    <div className="col-12 sub-text">
                        ประสบการณ์ทำงาน
                    </div>
                    <div className="box-personal">
                        <strong>กรกฎาคม-ตุลาคม (2566)
                            บริษัท ไอบิสซิเนส คอร์ปอเรชั่น จำกัด</strong>
                        <br />
                        ตำแหน่ง PHP Developer ทำการพัฒนาเว็บแอปพลิเคชันตามที่ได้รับมอบหมายทั้งด้าน Front-end และ Back-end โดยใช้ Laravel (สหกิจศึกษา)
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PersonalComponent