import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './stepThree.css'
const stepThree = ({ components, setComponents }) => {
    const navigate = useNavigate();

        const [animationKey, setAnimationKey] = useState(0);
    
        
        const syrupOnClick = (imgPath) => {
            setComponents({
                ...components,
                syrup: imgPath,
            });
            setAnimationKey((prevKey) => prevKey + 1); 
        };

    const OnClick = () => {
        navigate('/stepFour');
    }

    return (
        <div className="stepthree">
            <h1>stepThree</h1>
            <div className='syrup'>
                <img src="chocoSyrup.png" onClick={() => syrupOnClick('chocoSyrup.png')} />
                <img src="greenSyrup.png" onClick={() => syrupOnClick('greenSyrup.png')}/>
                <img src="pinkSyrup.png" onClick={() => syrupOnClick('pinkSyrup.png')}/>
                <img src="purpleSyrup.png" onClick={() => syrupOnClick('purpleSyrup.png')}/>
                <img src="redSyrup.png" onClick={() => syrupOnClick('redSyrup.png')}/>
                <img src="yellowSyrup.png" onClick={() => syrupOnClick('yellowSyrup.png')}/>
            </div>
            <div className='state3'>
    {components.base && (
        <img
            src={components.base}
            className={components.base === 'cup.png' ? 'cup-animation' : 'default-animation'}
        />
    )}
    {components.icecream && (
        <img
            src={components.icecream}
            className={`icecream-fixed ${components.base === 'cup.png' ? 'icecream-cup' : 'icecream-cone'}`}
        />
    )}
    {components.syrup && (
        <img
            key={animationKey}
            src={components.syrup}
            className='syrup-image'
        />
    )}
</div>
<div className='next'>
            <button onClick={OnClick}> 토핑 선택 ➡</button>
            </div>
        </div>
    )
  };
  
  export default stepThree;