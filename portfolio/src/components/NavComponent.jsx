import React from 'react'
import '../css/NavComponent.css'
function NavComponent() {

    return (
        <nav className="navbar navbar-expand-lg fixed-top bg-white">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Suwit Dev</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav nav-pills">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#home">หน้าหลัก</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link " href="#list-about">เกี่ยวกับฉัน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#list-result">ผลงาน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href='#list-contact'>ติดต่อ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent