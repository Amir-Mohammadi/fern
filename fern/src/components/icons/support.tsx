import { IconConfig } from '@Utils/types/config';
import React from 'react';
import { IconGenerator } from './icons';

const Support: IconGenerator = (color, secondColor) => ({
  svgViewBoxValue: {
    width: 113,
    height: 113.004,
  },
  iconPath: (
    <g id="Group_115" data-name="Group 115" transform="translate(-406.321 -44.423)">
      <path
        id="Path_69"
        data-name="Path 69"
        d="M510.495,95.648V92.1a47.674,47.674,0,0,0-95.348,0v3.551a12.163,12.163,0,0,0-8.826,11.676V124.98a12.153,12.153,0,0,0,12.138,12.142H431.7a3.313,3.313,0,0,0,3.312-3.312V92.1a27.809,27.809,0,0,1,55.617,0V133.81a3.313,3.313,0,0,0,3.312,3.312h5.518v3.752a3.315,3.315,0,0,1-3.312,3.308H474.391a9.949,9.949,0,0,0-9.364-6.621h-4.411a9.933,9.933,0,1,0,0,19.865h4.411a9.952,9.952,0,0,0,9.364-6.624h21.756a9.942,9.942,0,0,0,9.933-9.929v-3.752h1.1a12.154,12.154,0,0,0,12.138-12.142V107.324a12.163,12.163,0,0,0-8.826-11.676ZM465.027,150.8h-4.411a3.31,3.31,0,1,1,0-6.621h4.411a3.31,3.31,0,1,1,0,6.621Zm-36.635-20.3h-9.933a5.523,5.523,0,0,1-5.518-5.518V107.324a5.526,5.526,0,0,1,5.518-5.518h9.933Zm34.429-72.83A34.466,34.466,0,0,0,428.392,92.1v3.089h-6.62V92.1a41.05,41.05,0,1,1,82.1,0v3.089H497.25V92.1A34.465,34.465,0,0,0,462.821,57.668ZM512.7,124.98a5.523,5.523,0,0,1-5.518,5.518H497.25V101.806h9.933a5.526,5.526,0,0,1,5.518,5.518Z"
        transform="translate(0 0)"
        fill={color || IconConfig.defaultColor}
      />
      <path
        id="Path_70"
        data-name="Path 70"
        d="M443.373,98.282a3.311,3.311,0,0,0,5.431-2.547V88.012h1.1a7.734,7.734,0,0,0,7.727-7.723V62.633a7.737,7.737,0,0,0-7.727-7.727H423.424a7.737,7.737,0,0,0-7.727,7.727V80.289a7.734,7.734,0,0,0,7.727,7.723h7.629ZM422.318,80.289V62.633a1.108,1.108,0,0,1,1.107-1.107h26.482a1.1,1.1,0,0,1,1.1,1.107V80.289a1.1,1.1,0,0,1-1.1,1.1h-4.415a3.31,3.31,0,0,0-3.308,3.312v3.964l-7.814-6.511a3.319,3.319,0,0,0-2.118-.766h-8.826a1.107,1.107,0,0,1-1.107-1.1Z"
        transform="translate(26.156 29.244)"
        fill={secondColor || IconConfig.defaultColor}
      />
      <path
        id="Path_71"
        data-name="Path 71"
        d="M431.33,65.022a3.31,3.31,0,0,0,0-6.621H422.5a3.31,3.31,0,0,0,0,6.621Z"
        transform="translate(35.906 38.994)"
        fill={secondColor || IconConfig.defaultColor}
      />
    </g>
  ),
});

export { Support };