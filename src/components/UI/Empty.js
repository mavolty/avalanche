import styles from './Empty.module.scss';

function Empty({ title, text }) {
  return (
    <div className={styles.container}>
      <svg
        width="480"
        height="350"
        viewBox="0 0 480 350"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.illustration}
      >
        <circle cx="240" cy="175" r="174.545" fill="#E9D7FE" />
        <circle cx="56.727" cy="44.0909" r="17.4545" fill="#F4EBFF" />
        <circle cx="432" cy="275.364" r="13.0909" fill="#F4EBFF" />
        <circle cx="54.5457" cy="301.545" r="21.8182" fill="#F4EBFF" />
        <circle cx="458.181" cy="100.818" r="21.8182" fill="#F4EBFF" />
        <circle cx="416.727" cy="24.4546" r="15.2727" fill="#F4EBFF" />
        <g filter="url(#filter0_dd_543_28935)">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M247.605 35.3636C211.089 35.3636 178.788 53.4075 159.131 81.0654C152.713 79.5517 146.018 78.7507 139.137 78.7507C91.2133 78.7507 52.3633 117.601 52.3633 165.525C52.3633 213.449 91.2133 252.299 139.137 252.299L139.211 252.299H356.072C398.006 252.299 432 218.305 432 176.371C432 134.438 398.006 100.444 356.072 100.444C353.094 100.444 350.155 100.616 347.266 100.949C330.645 62.371 292.279 35.3636 247.605 35.3636Z"
            fill="#F9F5FF"
          />
          <circle
            cx="139.137"
            cy="165.525"
            r="86.774"
            fill="url(#paint0_linear_543_28935)"
          />
          <circle
            cx="247.605"
            cy="143.831"
            r="108.468"
            fill="url(#paint1_linear_543_28935)"
          />
          <circle
            cx="356.073"
            cy="176.371"
            r="75.9273"
            fill="url(#paint2_linear_543_28935)"
          />
        </g>
        <g filter="url(#filter1_b_543_28935)">
          <path
            d="M178.909 244.818C178.909 211.079 206.261 183.727 240 183.727V183.727C273.74 183.727 301.091 211.079 301.091 244.818V244.818C301.091 278.558 273.74 305.909 240 305.909V305.909C206.261 305.909 178.909 278.558 178.909 244.818V244.818Z"
            fill="#6941C6"
            fillOpacity="0.4"
          />
          <path
            d="M262.91 267.727L251.837 256.655M257.819 242.273C257.819 253.519 248.702 262.636 237.455 262.636C226.209 262.636 217.092 253.519 217.092 242.273C217.092 231.026 226.209 221.909 237.455 221.909C248.702 221.909 257.819 231.026 257.819 242.273Z"
            stroke="white"
            strokeWidth="5.09091"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
        <defs>
          <filter
            id="filter0_dd_543_28935"
            x="8.72691"
            y="35.3636"
            width="466.909"
            height="304.208"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="8.72727"
              operator="erode"
              in="SourceAlpha"
              result="effect1_dropShadow_543_28935"
            />
            <feOffset dy="17.4545" />
            <feGaussianBlur stdDeviation="8.72727" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.04 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_543_28935"
            />
            <feColorMatrix
              in="SourceAlpha"
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              result="hardAlpha"
            />
            <feMorphology
              radius="8.72727"
              operator="erode"
              in="SourceAlpha"
              result="effect2_dropShadow_543_28935"
            />
            <feOffset dy="43.6364" />
            <feGaussianBlur stdDeviation="26.1818" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0.0627451 0 0 0 0 0.0941176 0 0 0 0 0.156863 0 0 0 0.1 0"
            />
            <feBlend
              mode="normal"
              in2="effect1_dropShadow_543_28935"
              result="effect2_dropShadow_543_28935"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect2_dropShadow_543_28935"
              result="shape"
            />
          </filter>
          <filter
            id="filter1_b_543_28935"
            x="161.455"
            y="166.273"
            width="157.091"
            height="157.091"
            filterUnits="userSpaceOnUse"
            colorInterpolationFilters="sRGB"
          >
            <feFlood floodOpacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImage" stdDeviation="8.72727" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_543_28935"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_543_28935"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_543_28935"
            x1="72.5072"
            y1="108.192"
            x2="225.911"
            y2="252.299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9D7FE" />
            <stop offset="0.350715" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_543_28935"
            x1="164.318"
            y1="72.1651"
            x2="356.073"
            y2="252.299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9D7FE" />
            <stop offset="0.350715" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <linearGradient
            id="paint2_linear_543_28935"
            x1="297.771"
            y1="126.205"
            x2="432"
            y2="252.299"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#E9D7FE" />
            <stop offset="0.350715" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.content}>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.text}>{text}</p>
      </div>
    </div>
  );
}

export default Empty;
