import React from 'react'
import '../css/PersonalComponent.css'
function PersonalComponent() {
    return (
        <div className='mt-3 main-per'>
            <div className='title-personal text-center'>
                ประวัติ
            </div>
            <div className="row">
                <div className="col-12 sub-text">
                    การศึกษา
                </div>
                <div className="col-12">
                    <div className="box-personal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque facere maiores doloremque aliquid dolore corrupti error enim quisquam! Reiciendis qui assumenda nisi nam officia doloribus dignissimos deleniti possimus eaque?
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 sub-text">
                    ประสบการทำงาน
                </div>
                <div className="box-personal">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit eaque facere maiores doloremque aliquid dolore corrupti error enim quisquam! Reiciendis qui assumenda nisi nam officia doloribus dignissimos deleniti possimus eaque?
                </div>
            </div>
        </div>
    )
}

export default PersonalComponent