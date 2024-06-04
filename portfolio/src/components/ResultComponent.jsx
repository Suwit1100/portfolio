import React from 'react'
import Expend from '../../public/project/expend.png'
import Search from '../../public/project/search.png'
import Task from '../../public/project/task.png'
import '../css/ResultComponent.css'

function ResultComponent() {
    return (
        <div>
            <div className="title-result text-center">
                ผลงาน
            </div>
            <div className="row">
                <div className="col-12 col-md-6 box-result text-center">
                    <img src={Expend} alt="" />
                </div>
                <div className="col-12 col-md-6 box-result text-center">
                    <img src={Search} alt="" />
                </div>
                <div className="col-12 col-md-6 box-result text-center">
                    <img src={Task} alt="" />
                </div>
                <div className="col-12 col-md-6 box-result text-center"></div>
            </div>
        </div>
    )
}

export default ResultComponent