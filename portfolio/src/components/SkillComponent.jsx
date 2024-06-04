import React from 'react'
import '../css/SkillComponent.css'
import Ajax from '../../public/skill/ajax.png'
import Bootstrap from '../../public/skill/bootstrap.png'
import Css from '../../public/skill/css.png'
import Html from '../../public/skill/html.png'
import Jquery from '../../public/skill/jquery.png'
import Js from '../../public/skill/js.png'
import Laravel from '../../public/skill/laravel.png'
import Mongodb from '../../public/skill/mongodb.png'
import Mysql from '../../public/skill/mysql.png'
import Php from '../../public/skill/php.png'

function SkillComponent() {
    return (
        <div className="row">
            <div className="col-12">
                <div className="title-skill">ทักษะ</div>
            </div>
            <div className="col-12 mt-3">
                <div className="row">
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Html} alt="" />
                        <div className='text-truncate'>HTML</div>
                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Css} alt="" />
                        <div className='text-truncate'>CSS</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Js} alt="" />
                        <div className='text-truncate'>JavaScript</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Bootstrap} alt="" />
                        <div className='text-truncate'>Bootstrap 5</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Jquery} alt="" />
                        <div className='text-truncate'>Jquery</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Ajax} alt="" />
                        <div className='text-truncate'>Ajax</div>
                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Php} alt="" />
                        <div className='text-truncate'>PHP</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Laravel} alt="" />
                        <div className='text-truncate'>Laravel</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Mysql} alt="" />
                        <div className='text-truncate'>MySQL</div>

                    </div>
                    <div className="col-4 col-md-2 box-skill text-center">
                        <img className='skill my-2' src={Mongodb} alt="" />
                        <div className='text-truncate'>MongoDB</div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default SkillComponent