'use client';

import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';
export default function HeroSvg() {
  return (
    <>
      {/* <div className='relative'>
        <div className='xl:block hidden absolute bg-gradient-to-r from-zinc-900 -top-20 left-15  w-52 h-52'></div>
      </div> */}
      <svg
        viewBox='0 0 2361 1430'
        fill='none'
        xmlns='http://www.w3.org/2000/svg'
      >
        <line
          x1='175.222'
          y1='344.559'
          x2='349.222'
          y2='430.559'
          stroke='#8B27DA'
        />
        <line
          x1='349.776'
          y1='430.56'
          x2='523.776'
          y2='343.56'
          stroke='#8B27DA'
        />
        <line
          x1='174.777'
          y1='344.559'
          x2='349.777'
          y2='257.552'
          stroke='#8B27DA'
        />
        <line x1='524.5' y1='345' x2='524.5' y2='518' stroke='#8B27DA' />
        <line x1='699.5' y1='257' x2='699.5' y2='433' stroke='#8B27DA' />
        <line
          x1='350.222'
          y1='258.559'
          x2='524.222'
          y2='344.559'
          stroke='#8B27DA'
        />
        <line
          x1='524.776'
          y1='344.56'
          x2='698.776'
          y2='257.56'
          stroke='#8B27DA'
        />
        <line
          x1='525.222'
          y1='171.559'
          x2='699.222'
          y2='257.559'
          stroke='#8B27DA'
        />
        <line
          x1='349.777'
          y1='258.559'
          x2='524.777'
          y2='171.552'
          stroke='#8B27DA'
        />
        <line x1='874.5' y1='171.01' x2='873.5' y2='345.003' stroke='#8B27DA' />
        <line
          x1='699.776'
          y1='258.56'
          x2='873.776'
          y2='171.56'
          stroke='#8B27DA'
        />
        <line
          x1='700.222'
          y1='85.5586'
          x2='874.222'
          y2='171.559'
          stroke='#8B27DA'
        />
        <line
          x1='524.779'
          y1='172.558'
          x2='701.779'
          y2='85.5513'
          stroke='#8B27DA'
        />
        <line x1='0.5' y1='431.007' x2='0.5' y2='644.007' stroke='#8B27DA' />
        <line
          x1='175.5'
          y1='518.007'
          x2='175.5'
          y2='731.007'
          stroke='#8B27DA'
        />
        <line
          x1='0.224627'
          y1='643.56'
          x2='175.225'
          y2='731.56'
          stroke='#8B27DA'
        />
        <line
          x1='1.22154'
          y1='431.559'
          x2='175.222'
          y2='517.559'
          stroke='#8B27DA'
        />
        <line
          x1='175.776'
          y1='517.56'
          x2='349.776'
          y2='430.56'
          stroke='#8B27DA'
        />
        <line
          x1='0.777403'
          y1='431.559'
          x2='175.777'
          y2='344.552'
          stroke='#8B27DA'
        />
        <line
          x1='349.5'
          y1='605.007'
          x2='349.5'
          y2='818.007'
          stroke='#8B27DA'
        />
        <line
          x1='174.225'
          y1='730.56'
          x2='349.225'
          y2='818.56'
          stroke='#8B27DA'
        />
        <line
          x1='175.222'
          y1='518.559'
          x2='349.222'
          y2='604.559'
          stroke='#8B27DA'
        />
        <line
          x1='349.223'
          y1='430.552'
          x2='524.223'
          y2='517.559'
          stroke='#8B27DA'
        />
        <line
          x1='349.225'
          y1='817.56'
          x2='524.225'
          y2='905.56'
          stroke='#8B27DA'
        />
        <line
          x1='350.222'
          y1='605.56'
          x2='524.222'
          y2='691.56'
          stroke='#8B27DA'
        />
        <line
          x1='524.776'
          y1='691.561'
          x2='698.776'
          y2='604.561'
          stroke='#8B27DA'
        />
        <line
          x1='525.222'
          y1='518.559'
          x2='699.222'
          y2='604.559'
          stroke='#8B27DA'
        />
        <line
          x1='349.777'
          y1='605.56'
          x2='524.777'
          y2='518.553'
          stroke='#8B27DA'
        />
        <line
          x1='525.5'
          y1='692.007'
          x2='525.5'
          y2='905.007'
          stroke='#8B27DA'
        />
        <line
          x1='700.5'
          y1='779.007'
          x2='700.5'
          y2='992.007'
          stroke='#8B27DA'
        />
        <line
          x1='525.225'
          y1='904.56'
          x2='700.225'
          y2='992.56'
          stroke='#8B27DA'
        />
        <line
          x1='699.782'
          y1='991.557'
          x2='874.782'
          y2='906.557'
          stroke='#8B27DA'
        />
        <line
          x1='875.5'
          y1='691.007'
          x2='875.5'
          y2='907.007'
          stroke='#8B27DA'
        />
        <line
          x1='526.222'
          y1='692.559'
          x2='700.222'
          y2='778.559'
          stroke='#8B27DA'
        />
        <line
          x1='700.776'
          y1='778.56'
          x2='874.776'
          y2='691.56'
          stroke='#8B27DA'
        />
        <line
          x1='701.222'
          y1='605.559'
          x2='875.222'
          y2='691.559'
          stroke='#8B27DA'
        />
        <line
          x1='1135.5'
          y1='1037.45'
          x2='1135.5'
          y2='1251.55'
          stroke='#8B27DA'
        />
        <line x1='1310.5' y1='1124.9' x2='1310.5' y2='1339' stroke='#8B27DA' />
        <line
          y1='-0.5'
          x2='196.085'
          y2='-0.5'
          transform='matrix(0.892471 0.451105 -0.447408 0.89433 1135 1251.55)'
          stroke='#8B27DA'
        />
        <line
          x1='1136.22'
          y1='1038.01'
          x2='1311.22'
          y2='1125.55'
          stroke='#8B27DA'
        />
        <line
          x1='1310.22'
          y1='950.552'
          x2='1486.22'
          y2='1037.55'
          stroke='#8B27DA'
        />
        <line x1='1485.5' y1='1212.8' x2='1485.5' y2='1428' stroke='#8B27DA' />
        <line
          y1='-0.5'
          x2='196.29'
          y2='-0.5'
          transform='matrix(0.891539 0.452943 -0.445581 0.895242 1310 1340.1)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.936'
          y2='-0.5'
          transform='matrix(0.897733 -0.440541 0.433283 0.901258 1485 1428)'
          stroke='#8B27DA'
        />
        <line
          x1='1660.5'
          y1='1123.89'
          x2='1660.5'
          y2='1342.12'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.488'
          y2='-0.5'
          transform='matrix(0.894659 0.44675 -0.439439 0.898272 1311 1125.91)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.941'
          y2='-0.5'
          transform='matrix(0.892577 -0.450894 0.443548 0.89625 1486 1212.8)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.488'
          y2='-0.5'
          transform='matrix(0.894659 0.44675 -0.439439 0.898272 1486 1038.01)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.837'
          y2='-0.5'
          transform='matrix(0.893599 -0.448865 0.441536 0.897243 1311 1125.91)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.837'
          y2='-0.5'
          transform='matrix(0.893599 -0.448865 0.441536 0.897243 1136 1037.9)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.014'
          y2='-0.5'
          transform='matrix(0.897371 -0.441276 0.432554 0.901608 1660 1340.99)'
          stroke='#8B27DA'
        />
        <line
          x1='1835.5'
          y1='1036.25'
          x2='1835.5'
          y2='1254.93'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.023'
          y2='-0.5'
          transform='matrix(0.892201 -0.451638 0.442811 0.896615 1661 1125.34)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1661 950.196)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.919'
          y2='-0.5'
          transform='matrix(0.893226 -0.449608 0.440801 0.897605 1486 1038.28)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.014'
          y2='-0.5'
          transform='matrix(0.897371 -0.441276 0.432554 0.901608 1835 1252.8)'
          stroke='#8B27DA'
        />
        <line x1='1487.5' y1='862.003' x2='1486.5' y2='1038' stroke='#8B27DA' />
        <line
          x1='1836.5'
          y1='690.003'
          x2='1835.52'
          y2='862.003'
          stroke='#8B27DA'
        />
        <line
          x1='2011.5'
          y1='778.003'
          x2='2010.5'
          y2='954.003'
          stroke='#8B27DA'
        />
        <line
          x1='1313.5'
          y1='775.009'
          x2='1310.5'
          y2='950.009'
          stroke='#8B27DA'
        />
        <line
          x1='2010.5'
          y1='948.062'
          x2='2010.5'
          y2='1166.74'
          stroke='#8B27DA'
        />
        <line
          x1='2010.22'
          y1='988.553'
          x2='2187.22'
          y2='1077.62'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.023'
          y2='-0.5'
          transform='matrix(0.892201 -0.451638 0.442811 0.896615 1836 1037.15)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1836 862.007)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.919'
          y2='-0.5'
          transform='matrix(0.893226 -0.449608 0.440801 0.897605 1661 950.087)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1837 689.087)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.023'
          y2='-0.5'
          transform='matrix(0.892201 -0.451638 0.442811 0.896615 2012 776.154)'
          stroke='#8B27DA'
        />
        <line
          x1='2011.22'
          y1='602.55'
          x2='2186.22'
          y2='687.625'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.919'
          y2='-0.5'
          transform='matrix(0.893226 -0.449608 0.440801 0.897605 1837 689.087)'
          stroke='#8B27DA'
        />
        <line
          x1='2185.5'
          y1='863.155'
          x2='2185.5'
          y2='1078.8'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.014'
          y2='-0.5'
          transform='matrix(0.897371 -0.441276 0.432554 0.901608 2185 1078.8)'
          stroke='#8B27DA'
        />
        <line
          x1='2360.5'
          y1='774.062'
          x2='2360.5'
          y2='992.743'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 2011 776.087)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 2011 776.087)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.023'
          y2='-0.5'
          transform='matrix(0.892201 -0.451638 0.442811 0.896615 2186 863.155)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.023'
          y2='-0.5'
          transform='matrix(0.892201 -0.451638 0.442811 0.896615 2186 863.155)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 2186 688.007)'
          stroke='#8B27DA'
        />
        <line x1='1394.5' y1='436' x2='1394.5' y2='651.644' stroke='#8B27DA' />
        <line
          y1='-0.5'
          x2='195.014'
          y2='-0.5'
          transform='matrix(0.897371 -0.441276 0.432554 0.901608 1394 651.798)'
          stroke='#8B27DA'
        />
        <line
          x1='1569.5'
          y1='347.062'
          x2='1569.5'
          y2='565.743'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1220 349.087)'
          stroke='#8B27DA'
        />
        <line
          x1='1047.23'
          y1='260.554'
          x2='1220.23'
          y2='348.554'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.023'
          y2='-0.5'
          transform='matrix(0.892201 -0.451638 0.442811 0.896615 1395 436.154)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1395 261.007)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.919'
          y2='-0.5'
          transform='matrix(0.893226 -0.449608 0.440801 0.897605 1220 349.087)'
          stroke='#8B27DA'
        />
        <line
          x1='1220.5'
          y1='347.697'
          x2='1223.5'
          y2='517.991'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='193.993'
          y2='-0.5'
          transform='matrix(0.891783 0.452463 -0.454309 0.890844 873.001 173)'
          stroke='#8B27DA'
        />
        <line
          x1='1221.22'
          y1='172.561'
          x2='1395.23'
          y2='260.554'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.818'
          y2='-0.5'
          transform='matrix(0.893688 -0.448689 0.441711 0.897157 1046 260.861)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1486 863.086)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='194.568'
          y2='-0.5'
          transform='matrix(0.894288 0.447491 -0.438705 0.898631 1661 775.007)'
          stroke='#8B27DA'
        />
        <line
          y1='-0.5'
          x2='195.919'
          y2='-0.5'
          transform='matrix(0.893226 -0.449608 0.440801 0.897605 1486 864.086)'
          stroke='#8B27DA'
        />
        <path d='M1660.5 775.998L1836 689.998' stroke='#8B27DA' />
        <line
          x1='960.5'
          y1='951.007'
          x2='960.5'
          y2='1164.01'
          stroke='#8B27DA'
        />
        <line
          x1='960.225'
          y1='1163.56'
          x2='1135.22'
          y2='1251.56'
          stroke='#8B27DA'
        />
        <line
          x1='961.224'
          y1='951.56'
          x2='1135.22'
          y2='1038.55'
          stroke='#8B27DA'
        />
        <line
          x1='1136.22'
          y1='864.56'
          x2='1310.22'
          y2='951.553'
          stroke='#8B27DA'
        />
        <line
          x1='960.777'
          y1='951.559'
          x2='1135.78'
          y2='864.552'
          stroke='#8B27DA'
        />
        <line
          x1='1487.22'
          y1='689.56'
          x2='1661.22'
          y2='776.553'
          stroke='#8B27DA'
        />
        <line
          x1='1662.22'
          y1='602.56'
          x2='1836.22'
          y2='689.553'
          stroke='#8B27DA'
        />
        <line
          x1='1486.78'
          y1='689.559'
          x2='1661.78'
          y2='602.552'
          stroke='#8B27DA'
        />
        <line
          x1='1837.22'
          y1='515.56'
          x2='2011.22'
          y2='602.553'
          stroke='#8B27DA'
        />
        <line
          x1='1661.78'
          y1='602.559'
          x2='1836.78'
          y2='515.552'
          stroke='#8B27DA'
        />
        <line
          x1='1313.22'
          y1='776.56'
          x2='1487.22'
          y2='863.553'
          stroke='#8B27DA'
        />
        <line
          x1='1312.78'
          y1='776.559'
          x2='1487.78'
          y2='689.552'
          stroke='#8B27DA'
        />
        <line
          x1='874.774'
          y1='906.554'
          x2='1048.77'
          y2='818.561'
          stroke='#8B27DA'
        />
        <line
          x1='1049.5'
          y1='603.007'
          x2='1049.5'
          y2='819.007'
          stroke='#8B27DA'
        />
        <line
          x1='874.776'
          y1='690.56'
          x2='1048.78'
          y2='603.56'
          stroke='#8B27DA'
        />
        <line
          x1='875.222'
          y1='517.559'
          x2='1049.22'
          y2='603.559'
          stroke='#8B27DA'
        />
        <line
          x1='699.777'
          y1='604.559'
          x2='874.777'
          y2='517.552'
          stroke='#8B27DA'
        />
        <line
          x1='1048.78'
          y1='818.552'
          x2='1222.78'
          y2='732.559'
          stroke='#8B27DA'
        />
        <line
          x1='1223.5'
          y1='517.007'
          x2='1223.5'
          y2='733.007'
          stroke='#8B27DA'
        />
        <line
          x1='1048.78'
          y1='604.56'
          x2='1222.78'
          y2='517.56'
          stroke='#8B27DA'
        />
        <line
          x1='1049.22'
          y1='431.559'
          x2='1223.22'
          y2='517.559'
          stroke='#8B27DA'
        />
        <line
          x1='1223.22'
          y1='565.552'
          x2='1397.22'
          y2='651.552'
          stroke='#8B27DA'
        />
        <line
          x1='873.777'
          y1='518.559'
          x2='1048.78'
          y2='431.552'
          stroke='#8B27DA'
        />
        <line
          x1='873.222'
          y1='0.558597'
          x2='1047.22'
          y2='86.5586'
          stroke='#8B27DA'
        />
        <line
          x1='697.777'
          y1='87.5591'
          x2='872.777'
          y2='0.552457'
          stroke='#8B27DA'
        />
        <line
          x1='1046.5'
          y1='259.994'
          x2='1048.51'
          y2='431.994'
          stroke='#8B27DA'
        />
        <line
          x1='1047.22'
          y1='86.5586'
          x2='1221.22'
          y2='172.559'
          stroke='#8B27DA'
        />
        <line
          x1='873.777'
          y1='172.56'
          x2='1048.78'
          y2='85.5529'
          stroke='#8B27DA'
        />
        <line x1='699.5' y1='430' x2='699.5' y2='605' stroke='#8B27DA' />
        <line
          x1='699.222'
          y1='431.559'
          x2='873.222'
          y2='517.559'
          stroke='#8B27DA'
        />
        <line
          x1='874.222'
          y1='344.559'
          x2='1048.22'
          y2='430.559'
          stroke='#8B27DA'
        />
        <line
          x1='698.777'
          y1='431.559'
          x2='873.777'
          y2='344.552'
          stroke='#8B27DA'
        />
      </svg>
    </>
  );
}
