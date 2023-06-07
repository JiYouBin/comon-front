import { Link } from "react-router-dom/cjs/react-router-dom";
import Navi from "../Navi/Navi";
import './AboutUs.css';
import topic1 from './img/topic1.png'
import topic2 from './img/topic2.png'

const AboutProject = ({ history }) => {

    const handlerAboutUsMain = () => {
        history.push(`/user/aboutus`)
    };

    return (
        <div className="about_container">
            <Navi history={history} />
            <div className='sidemenu_aboutus_box'>
                <div className='about_logo' onClick={handlerAboutUsMain}></div>
                <ul className='sidemenu_aboutus'>
                    <li><Link to='/user/about/team'>팀원 소개</Link></li>
                    <li><Link to='/user/about/project'>프로젝트 소개</Link></li>
                    <li><Link to='/user/about/schedule'>진행 일정</Link></li>
                    <li><Link to='/user/about/skill'>주요 기능 설명</Link></li>
                </ul>

            </div>
            <div className='body'>
                <img src={topic1} />
                <hr />
                <img src={topic2} />
            </div>
        </div>
    );
}
export default AboutProject;