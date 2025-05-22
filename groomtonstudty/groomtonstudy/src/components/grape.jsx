import {
  grapeGraphContainer,
  centerChampion,
  relatedChampion,
  championImage,
  svgStyle,
  grapeDefault,
} from './grape.css.ts';

import championChart from '../data/championshipChart.json';
import championData from '../data/champion.json';

const Grape = ({ selectedChampion }) => {
  if (!selectedChampion) {
    return (
      <div className={grapeDefault}>
        챔피언을 선택하세요
      </div>
    );
  }

  // 중심 위치 및 반지름
  const centerX = 800;
  const centerY = 400;
  const radius = 380;

  // 한글 이름 → 이미지 경로 매핑
  const championMap = Object.values(championData.data).reduce((acc, champ) => {
    acc[champ.name] = `/championTitle/${champ.id}_0.jpg`;
    return acc;
  }, {});

  // 관계 가져오기
  const relations = championChart[selectedChampion.name] || [];

  return (
    <div className={grapeGraphContainer}>
      {/* 중앙 챔피언 */}
      <div
        className={centerChampion}
        style={{ top: `${centerY}px`, left: `${centerX}px` }}
      >
        <img src={selectedChampion.img} className={championImage} />
      </div>

      {/* 선 + 텍스트 설명 */}
      <svg className={svgStyle}>
        {relations.map(([relatedName, relationText], index) => {
          const angle = (2 * Math.PI / relations.length) * index;
          const x = centerX + radius * Math.cos(angle);
          const y = centerY + radius * Math.sin(angle);

          const midX = (centerX + x) / 2;
          const midY = (centerY + y) / 2;

              const angleRad = Math.atan2(y - centerY, x - centerX);
              const angleDeg = (angleRad * 180) / Math.PI;

          // 선에서 수직 방향으로 글씨 띄우기
          const offset = 20;
          const offsetX = midX + offset * Math.cos(angleRad + Math.PI / 2);
          const offsetY = midY + offset * Math.sin(angleRad + Math.PI / 2);

          // ✅ 뒤집힌 글씨 방지용 보정
          const adjustedAngleDeg =
            angleDeg > 90 || angleDeg < -90 ? angleDeg + 180 : angleDeg;

          return (
            <g key={relatedName}>
              <line
                x1={centerX}
                y1={centerY}
                x2={x}
                y2={y}
                stroke="white"
                strokeWidth="2"
              />
              <text
                x={offsetX}
                y={offsetY}
                fill="white"
                fontSize="12"
                textAnchor="middle"
                dominantBaseline="middle"
                transform={`rotate(${adjustedAngleDeg}, ${offsetX}, ${offsetY})`}
              >
                {relationText}
              </text>
            </g>
          );
        })}
      </svg>

      {/* 주변 챔피언 */}
      {relations.map(([relatedName, relationText], index) => {
        const angle = (2 * Math.PI / relations.length) * index;
        const x = centerX + radius * Math.cos(angle);
        const y = centerY + radius * Math.sin(angle);

        const relatedImg = championMap[relatedName];
        if (!relatedImg) {
          console.warn('이미지 없음:', relatedName);
          return null;
        }

        return (
          <div
            key={relatedName}
            className={relatedChampion}
            style={{ top: `${y}px`, left: `${x}px` }}
            title={relationText}
          >
            <img src={relatedImg} className={championImage} />
          </div>
        );
      })}
    </div>
  );
};

export default Grape;
