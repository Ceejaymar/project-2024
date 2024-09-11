const LogoGradient = ({ width, height }: { width: number; height: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    data-name="Layer 2"
    viewBox="0 0 201.48 67.25"
    width={width}
    height={height}
    // {...props}
  >
    <defs>
      <linearGradient
        id="a"
        x1={-6.18}
        x2={189.66}
        y1={24.24}
        y2={90.48}
        gradientUnits="userSpaceOnUse"
      >
        <stop offset={0} stopColor="#b19ff9" />
        <stop offset={0.45} stopColor="#03dac6" />
        <stop offset={0.66} stopColor="#f2a229" />
        <stop offset={1} stopColor="#b19ff9" />
      </linearGradient>
      <linearGradient
        xlinkHref="#a"
        id="b"
        x1={-1.06}
        x2={194.78}
        y1={9.1}
        y2={75.34}
      />
      <linearGradient
        xlinkHref="#a"
        id="c"
        x1={4.51}
        x2={200.35}
        y1={-7.39}
        y2={58.85}
      />
      <linearGradient
        xlinkHref="#a"
        id="d"
        x1={6.4}
        x2={202.24}
        y1={-12.95}
        y2={53.29}
      />
    </defs>
    <g data-name="Layer 2">
      <path
        d="M27.4 50.61c-6.34 0-8.86-2.03-8.86-9.2V0H0v42c0 14.95 9.68 23.69 26.43 23.69h3V50.61H27.4Z"
        style={{
          strokeWidth: 0,
          fill: 'url(#a)',
        }}
      />
      <path
        d="M107.26 33.63c0 19.86-14.96 33.62-35.77 33.62S35.72 53.49 35.72 33.63 50.55 0 71.49 0s35.77 13.88 35.77 33.62Zm-19.26 0c0-13.64-5.86-18.54-16.51-18.54S54.98 20 54.98 33.63s5.74 18.54 16.51 18.54S88 47.38 88 33.63Z"
        style={{
          fill: 'url(#b)',
          strokeWidth: 0,
        }}
      />
      <path
        d="M201.48 55.76c0 5.7-4.29 9.65-10.26 9.65s-10.26-3.95-10.26-9.65 4.26-9.64 10.26-9.64 10.26 3.98 10.26 9.64Z"
        style={{
          fill: 'url(#c)',
          strokeWidth: 0,
        }}
      />
      <path
        d="M174.68 46.67c0 15.19-15.08 20.58-30.27 20.58-17.83 0-27.52-6.94-30.87-21.18h17.59c1.2 4.55 3.23 7.06 12.68 7.06 8.14 0 11.84-1.32 11.84-5.26 0-4.55-1.8-5.38-12.08-7.42-11.73-2.27-27.76-6.22-27.76-20.82C115.81 6.11 129.21 0 144.77 0s26.32 6.94 29.31 19.86h-17.59c-1.68-4.07-3.59-5.74-11.13-5.74-8.02 0-10.77 1.67-10.77 5.38 0 3.47 2.63 4.79 13.16 6.82 12.32 2.39 26.92 6.1 26.92 20.34Z"
        style={{
          fill: 'url(#d)',
          strokeWidth: 0,
        }}
      />
    </g>
  </svg>
);

export default LogoGradient;
