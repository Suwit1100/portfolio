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
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">หน้าหลัก</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">เกี่ยวกับฉัน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">ผลงาน</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link">ติดต่อ</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default NavComponent