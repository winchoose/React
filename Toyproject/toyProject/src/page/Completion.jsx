import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Completion.css'
const Completion = ({components, setComponents}) => {
    const navigate = useNavigate();

    const OnClick = () => {
        navigate('/');
    }

    return (
        <div className="completion">
            <h1>완성</h1>
            <div className='state5'>
            {components.base && (
    <img
        src={components.base}
        className={`${components.base === 'cup.png' ? 'cup-animation' : 'default-animation'} completion-animation`}
    />
)}
    {components.icecream && (
        <img
            src={components.icecream}
            className={`icecream-image ${components.base === 'cup.png' ? 'icecream-cup' : 'icecream-cone'}`}
        />
    )}
{components.syrup && (
    <img
        src={components.syrup}
        className={`syrup-image ${components.base === 'cup.png' ? 'syrup-cup' : 'syrup-cone'}`}
    />
)}
{components.topping && (
    <img
        src={components.topping}
        className={`topping-image ${components.base === 'cup.png' ? 'topping-cup' : 'topping-cone'} ${components.topping === 'jelly.png' ? 'topping-jelly' : 'topping-small'}`}
    />
)}
            </div>
            <div className='next'>
            <button onClick={OnClick}>다른 아이스크림 만들러 가기 ➡</button>
            </div>
        </div>
    )
  };
  
  export default Completion;