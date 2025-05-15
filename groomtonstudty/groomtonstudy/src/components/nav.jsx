import {
  navBar, leftSection, rightSection,
  partyButton, menuText, goldButton,
  iconButton, currency, iconImage, divider
} from './nav.css.ts';

const Nav = () => {
  return (
    <div className={navBar}>
      <div className={leftSection}>
        <button className={partyButton}>
          <img src="navstart.png" className={iconImage}/>
          게임 시작
        </button>
        <span className={menuText}>홈</span>
        <span className={menuText}>전략적 팀 전투</span>
        <button className={goldButton}>🎮 LoR</button>
      </div>
      <div className={rightSection}>
        <button className={iconButton}>
          <img src="nav1.png" className={iconImage} alt="leaf" />
        </button>
        <div className={divider} />
        <button className={iconButton}>
          <img src="nav2.png" className={iconImage} alt="gift" />
        </button>
        <div className={divider} />
        <button className={iconButton}>
          <img src="nav3.png" className={iconImage} alt="mail" />
        </button>
        <div className={divider} />
        <button className={iconButton}>
          <img src="nav4.png" className={iconImage} alt="mail" />
        </button>
        <div className={divider} />
        <button className={iconButton}>
          <img src="nav5.png" className={iconImage} alt="mail" />
        </button>
        <div className={currency}>
          <img src="nav6.png" className={iconImage} alt="gold" />
          <span>231</span>
        </div>
        <div className={currency}>
          <img src="nav7.png" className={iconImage} alt="blue essence" />
          <span>6681</span>
        </div>
      </div>
    </div>
  );
};

export default Nav;
