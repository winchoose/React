import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './home.css'
const home = () => {
    const navigate = useNavigate();

    const OnClick = () => {
        navigate('/stepOne');
    }

    return (
        <div className="home">
            <h1>아이스크림 만들기~</h1>
            <button onClick={OnClick}>시작하기</button>
        </div>
    )
  };
  
  export default home;