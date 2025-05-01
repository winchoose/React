import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './stepOne.css'
const stepOne = ({components, setComponents}) => {

        const navigate = useNavigate();
    
        const OnClick = () => {
            navigate('/stepTwo');
        }
    
    const [animationKey, setAnimationKey] = useState(0);

    const baseOnclick = (imgPath) => {
        setComponents({
            ...components,
            base: imgPath,
        })
        setAnimationKey(prevKey => prevKey + 1);
    }

    return (
        <div className="stepone">
            <h1>콘/컵 선택</h1>
            <div className='choice'>
            <img src="softcon.png" onClick={() => baseOnclick('softcon.png')}/>
            <img src="cup.png" onClick={() => baseOnclick('cup.png', '400vh')}/>
            </div>
            <div className='state'>
            {components.base && <img key={animationKey} src={components.base} className={components.base === 'cup.png' ? 'cup-animation' : 'default-animation'}/>}
            </div>
            <div className='next'>
            <button onClick={OnClick}>아이스크림 선택 ➡</button>
            </div>
        </div>
    )
  };
  
  export default stepOne;