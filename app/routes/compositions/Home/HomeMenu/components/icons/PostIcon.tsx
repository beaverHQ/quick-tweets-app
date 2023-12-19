
type PostIconProps = {
  isHovered: boolean;
};

const PostIcon = ({ isHovered }: PostIconProps) => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="58" height="58" viewBox="0 0 65 65" fill="none">
      <g filter="url(#filter0_d_4_2943)">
        <circle cx="32.4241" cy="31.5759" r="28" fill={isHovered ? "rgb(28,155,239, 0.9)" : "#4C9EEB"}/>
      </g>
      <path d="M25.9498 43.4259C27.9163 30.0281 38.4604 22.3364 43.8745 22.2445C43.9298 22.2436 43.9721 22.2917 43.9718 22.3469C43.9362 28.7519 40.5774 29.0617 38.8107 29.2247C38.4024 29.2623 38.0792 29.2922 37.9016 29.3875C36.7051 29.669 35.8781 30.4847 35.5262 30.9007C35.3676 31.0883 36.7391 31.3089 39.1457 31.0982C39.2335 31.0905 39.287 31.1927 39.2307 31.2606C37.238 33.6656 35.0191 34.1508 33.6282 34.455C33.1759 34.5539 32.8111 34.6337 32.5702 34.7542C30.9172 36.3734 28.1237 40.1037 26.1335 43.4929C26.078 43.5873 25.9339 43.5343 25.9498 43.4259Z" fill="white"/>
      <path d="M25 23C25.4142 23 25.75 23.3358 25.75 23.75V27.25H29.25C29.6642 27.25 30 27.5858 30 28C30 28.4142 29.6642 28.75 29.25 28.75H25.75V32.25C25.75 32.6642 25.4142 33 25 33C24.5858 33 24.25 32.6642 24.25 32.25V28.75H20.75C20.3358 28.75 20 28.4142 20 28C20 27.5858 20.3358 27.25 20.75 27.25H24.25V23.75C24.25 23.3358 24.5858 23 25 23Z" fill="white"/>
      <defs>
        <filter id="filter0_d_4_2943" x="0.424072" y="0.575928" width="64" height="64" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
          <feFlood floodOpacity="0" result="BackgroundImageFix"/>
          <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
          <feOffset dy="1"/>
          <feGaussianBlur stdDeviation="2"/>
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_4_2943"/>
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_4_2943" result="shape"/>
        </filter>
      </defs>
    </svg>    
  );
}
 
export default PostIcon;
