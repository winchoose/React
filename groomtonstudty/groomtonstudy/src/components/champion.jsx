import {
  me, text, meImg, profileImg, me2, divider, scrollContainer
} from './champion.css.ts';

import championData from '.././data/champion.json';

const champions = Object.values(championData.data).map((champ) => ({
  name: champ.name,
  title: champ.title,
  img: `/championTitle/${champ.id}_0.jpg`,
}));


const Champion = () => {

    const handleChampionClick = (champion) => {
};

    return (
        <div className="Champion">
            <div className={me}>
                <button className={meImg}>
                    <img src="me.jpg" className={profileImg}/>
                </button>
                <div className={text}>
                    <h1>표식남기고 도망</h1>
                    <h3>🟢온라인</h3>
                </div>
            </div>
            <hr/>
            <div className={scrollContainer}>
            {champions.map((c, index) => (
            <div key={c.name}>
                <div className={me2} onClick={() => handleChampionClick(c)}>
                <button className={meImg}>
                    <img src={c.img} className={profileImg} />
                </button>
                <div className={text}>
                    <h1>{c.name}</h1>
                    <h3>{c.title}</h3>
                </div>
                </div>
                {index < champions.length - 1 && <hr className={divider} />}
            </div>
            ))}
            </div>
        </div>
    )
};

export default Champion;