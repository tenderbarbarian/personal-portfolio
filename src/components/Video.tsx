import React from 'react';

const Video = ({ videoSrcURL, videoTitle }) => (
  <div className="video">
    <iframe
      src={videoSrcURL}
      title={videoTitle}
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      frameBorder="0"
      webkitallowfullscreen="true"
      mozallowfullscreen="true"
      allowFullScreen
    />
  </div>
);

// import React, { useState } from 'react';
// import PropTypes from 'prop-types';
// import { useInView } from 'react-intersection-observer';

// const Loader = () => {
//   const maskid = `mask-${Math.random()}`;
//   const paintid = `paint-${Math.random()}`;
//   return (
//     <div>
//       <svg
//         width="247"
//         height="210"
//         viewBox="0 0 247 210"
//         fill="none"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <mask
//           id={maskid}
//           mask-type="alpha"
//           maskUnits="userSpaceOnUse"
//           x="0"
//           y="0"
//           width="265"
//           height="210"
//         >
//           <rect width="265" height="210" fill={`url(#${paintid})`} />
//         </mask>
//         <g className="paths" mask={`url(#${maskid})`}>
//           <path
//             opacity="0.7"
//             d="M3.03412 220.341C-13.3618 248.782 -3.61438 285.16 24.8056 301.593V301.593L149.776 84.8118C166.172 56.3704 156.424 19.9924 128.004 3.55939V3.55939L3.03412 220.341Z"
//             fill={`url(#${paintid})`}
//           />
//           <path
//             opacity="0.7"
//             d="M43.8915 277.869C27.4956 306.31 37.243 342.688 65.663 359.121V359.121L190.633 142.34C207.029 113.899 197.282 77.5205 168.862 61.0875V61.0875L43.8915 277.869Z"
//             fill={`url(#${paintid})`}
//           />
//           <path
//             opacity="0.7"
//             d="M84.749 334.041C68.3531 362.483 78.1005 398.861 106.52 415.294V415.294L231.491 198.512C247.886 170.071 238.139 133.693 209.719 117.26V117.26L84.749 334.041Z"
//             fill={`url(#${paintid})`}
//           ></path>
//         </g>
//         <defs>
//           <linearGradient
//             id={paintid}
//             x1="0"
//             y1="0"
//             x2="203.966"
//             y2="257.386"
//             gradientUnits="userSpaceOnUse"
//           >
//             <stop stopColor="#6A98F0" />
//             <stop offset="1" stopColor="#4961DC" />
//           </linearGradient>
//         </defs>
//       </svg>
//     </div>
//   );
// };

// const IFrame = ({ src, title }) => {
//   const [isLoading, setIsLoading] = useState(true);
//   const [ref, inView] = useInView({
//     threshold: 0,
//     triggerOnce: true,
//   });

//   const handleLoaded = () => {
//     setIsLoading(false);
//   };

//   return (
//     <div className="iframe-wrapper" ref={ref}>
//       <iframe
//         title={title}
//         style={{ opacity: isLoading ? '0' : '1' }}
//         src={inView ? src : undefined}
//         onLoad={handleLoaded}
//         frameBorder="0"
//         allow="accelerometer; autoplay; encrypted-media; gyroscope"
//         allowFullScreen
//       />
//       {isLoading && <Loader />}
//     </div>
//   );
// };

// IFrame.propTypes = {
//   src: PropTypes.string.isRequired,
// };

// export default IFrame;
export default Video;
