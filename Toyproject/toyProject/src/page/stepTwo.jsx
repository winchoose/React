import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './stepTwo.css';

const StepTwo = ({ components, setComponents }) => {
    const navigate = useNavigate();
    const [animationKey, setAnimationKey] = useState(0);

    
    const icecreamOnClick = (imgPath) => {
        setComponents({
            ...components,
            icecream: imgPath,
        });
        setAnimationKey((prevKey) => prevKey + 1); 
    };

    const onClick = () => {
        navigate('/stepThree');
    };

    return (
        <div className="steptwo">
            <h1>Step Two</h1>
            <div className="iceCream">
                <img src="blueIcecream.png" onClick={() => icecreamOnClick('blueIcecream.png')} />
                <img src="chocoIcecream.png" onClick={() => icecreamOnClick('chocoIcecream.png')} />
                <img src="greenIcecream.png" onClick={() => icecreamOnClick('greenIcecream.png')} />
                <img src="pinkIcecream.png" onClick={() => icecreamOnClick('pinkIcecream.png')} />
                <img src="purpleIcecream.png" onClick={() => icecreamOnClick('purpleIcecream.png')} />
                <img src="redIcecream.png" onClick={() => icecreamOnClick('redIcecream.png')} />
                <img src="whiteIcecream.png" onClick={() => icecreamOnClick('whiteIcecream.png')} />
                <img src="yellowIcecream.png" onClick={() => icecreamOnClick('yellowIcecream.png')} />
            </div>
            <div className='state2'>
                {components.base && (
                <img src={components.base}
                className={components.base === 'cup.png' ? 'cup-animation' : 'default-animation'}/>)}
                {components.icecream && (
                <img
                key={animationKey}
                src={components.icecream}
                className={`icecream-image ${components.base === 'cup.png' ? 'icecream-cup' : 'icecream-cone'}`}
            />)}
            </div>
            <div className='next'>
            <button onClick={onClick}>시럽 선택 ➡</button>
            </div>
        </div>
    );
};

export default StepTwo;
