import { IconConfig } from '@Utils/types/config';
import { IconGenerator } from './icons';

const AvailableWarehouse: IconGenerator = (color, secondColor) => ({
  svgViewBoxValue: {
    width: 21.753,
    height: 17.914,
  },
  iconPath: (
    <g>
      <defs>
        <clipPath id="clipPath">
          <rect
            id="Rectangle_7"
            data-name="Rectangle 7"
            width="25"
            height="20.5"
            fill={color || IconConfig.defaultColor}
          />
        </clipPath>
      </defs>
      <g id="Group_770" data-name="Group 770" transform="translate(-220.97 -114.312)">
        <g id="Group_20" data-name="Group 20" transform="translate(220.97 114.312)">
          <g id="Group_19" data-name="Group 19" clipPath="url(#clipPath)">
            <path
              id="Path_27"
              data-name="Path 27"
              d="M242.723,118.426v-.017c0-.009,0-.017,0-.026s0-.013,0-.017,0-.014,0-.022,0-.013-.009-.022a.033.033,0,0,0-.009-.017c0-.009,0-.018-.009-.022s0-.009-.009-.017a.107.107,0,0,0-.013-.022s0,0,0-.009l-2.264-3.655a.44.44,0,0,0-.374-.207h-15.9a.44.44,0,0,0-.352.176l-2.709,3.651s0,0,0,.009-.009.013-.013.022a.02.02,0,0,0-.009.017c0,.009-.009.014-.013.022s0,.013-.009.017,0,.014-.009.022,0,.013-.009.022,0,.013,0,.022,0,.014,0,.022,0,.013,0,.017a.22.22,0,0,1,0,.022v1.418a2.172,2.172,0,0,0,.634,1.546,2.122,2.122,0,0,0,1.149.6v9.831a.442.442,0,0,0,.44.44h17.3a.442.442,0,0,0,.44-.44v-9.835a2.163,2.163,0,0,0,1.784-2.144Zm-1.229-.4h-2.422l-1.471-2.774h2.18Zm-11.416-2.774-.868,2.774h-3.519l1.775-2.774Zm2.612,0,.867,2.774h-3.422l.867-2.774Zm3.911,0,1.471,2.774h-3.589l-.867-2.774Zm-6.628,3.655h3.744v1.321a1.872,1.872,0,0,1-3.744,0Zm-4.62,0H229.1v1.321a1.872,1.872,0,0,1-3.744,0Zm1.454,4.043a2.639,2.639,0,0,0,.414.031,2.754,2.754,0,0,0,2.312-1.26,2.751,2.751,0,0,0,4.638-.022,2.752,2.752,0,0,0,2.326,1.282,2.85,2.85,0,0,0,.392-.027v4.766H226.805Zm9.686-.85a1.876,1.876,0,0,1-1.872-1.872V118.9h3.744v1.321a1.873,1.873,0,0,1-1.872,1.872Zm-12.156-6.848h2.078l-1.775,2.774h-2.356Zm-2.488,4.581V118.9h2.6v.925a1.286,1.286,0,0,1-1.1,1.286.447.447,0,0,0-.154-.027.476.476,0,0,0-.176.036,1.29,1.29,0,0,1-1.167-1.295Zm1.788,11.539v-9.412a2.113,2.113,0,0,0,1.057-.581l.022-.022a2.791,2.791,0,0,0,1.216,1.3v5.5a.441.441,0,0,0,.44.44h10.958a.441.441,0,0,0,.44-.44v-5.492A2.772,2.772,0,0,0,239,121.368l0,0a2.155,2.155,0,0,0,1.057.581v9.412Zm18.207-11.539a1.292,1.292,0,0,1-1.172,1.295.476.476,0,0,0-.176-.036.451.451,0,0,0-.155.027,1.286,1.286,0,0,1-1.1-1.286V118.9h2.6v.925Zm0,0"
              transform="translate(-220.97 -114.334)"
              fill={color || IconConfig.defaultColor}
            />
            <path
              id="Path_1806"
              data-name="Path 1806"
              d="M4648.284-2544.585l-5.572,5.774-2.186-2.055"
              transform="translate(-4633.113 2554.500)"
              fill="none"
              stroke={secondColor || IconConfig.defaultColor}
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
            />
          </g>
        </g>
      </g>
    </g>
  ),
});

export { AvailableWarehouse };