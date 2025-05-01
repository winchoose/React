import { useNavigate } from 'react-router-dom';
import './stepTwo.css'
const stepTwo = () => {
    const navigate = useNavigate();

    const OnClick = () => {
        navigate('/stepOThree');
    }

    return (
        <div className="steptwo">
            <h1>stepTwo</h1>
        </div>
    )
  };
  
  export default stepTwo;