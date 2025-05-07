import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './stepFour.css'
const stepFour = ({components, setComponents}) => {

        const navigate = useNavigate();
    
        const OnClick = () => {
            navigate('/completion');
        }
    
    const [animationKey, setAnimationKey] = useState(0);

    const toppingOnclick = (imgPath) => {
        setComponents({
            ...components,
            topping: imgPath,
        })
        setAnimationKey(prevKey => prevKey + 1);
    }

    return (
        <div className="stepfour">
            <h1>stepFour</h1>
            <div className='topping'>
                <img src="blueberry.png" onClick={() => toppingOnclick('blueberry.png')}/>
                <img src="cherry.png" onClick={() =>toppingOnclick('cherry.png')}/>
                <img src="chocoSnacks.png" onClick={() =>toppingOnclick('chocoSnacks.png')}/>
                <img src="jelly.png" onClick={() =>toppingOnclick('jelly.png')}/>
                <img src="marshmallow.png" onClick={() =>toppingOnclick('marshmallow.png')}/>
                <img src="snacks.png" onClick={() =>toppingOnclick('snacks.png')}/>
            </div>
            <div className='state4'>
    {components.base && (
        <img
            src={components.base}
            className={components.base === 'cup.png' ? 'cup-animation' : 'default-animation'}
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
        key={animationKey}
        src={components.topping}
        className={`topping-image ${components.base === 'cup.png' ? 'topping-cup' : 'topping-cone'} ${components.topping === 'jelly.png' ? 'topping-jelly' : 'topping-small'}`}
    />
)}
</div>
<div className='next'>
            <button onClick={OnClick}>완성 나만의 아이스크림! ➡</button>
            </div>
        </div>
    )
  };
  
  export default stepFour;