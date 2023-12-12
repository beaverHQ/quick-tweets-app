import { type QIconProps } from "./icon";


const BookmarksIcon = ({active}: QIconProps) => {
  return (
    <>
      {
        active ?
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path d="M16.9 20.5C16.7 20.5 16.6 20.5 16.5 20.4L9.00005 14.9L1.50005 20.3C1.30005 20.5 1.00005 20.5 0.700049 20.4C0.500049 20.3 0.300049 20 0.300049 19.7V2.6C0.300049 1.4 1.30005 0.400002 2.50005 0.400002H15.3C16.5 0.400002 17.5 1.4 17.5 2.6V19.7C17.5 20 17.3001 20.2 17.1 20.4C17.1 20.5 17 20.5 16.9 20.5Z" fill="#D9D9D9"/>
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="21" viewBox="0 0 18 21" fill="none">
            <path d="M16.9 20.5C16.743 20.5 16.588 20.45 16.458 20.356L8.99998 14.928L1.54198 20.358C1.31398 20.522 1.01198 20.548 0.759976 20.418C0.509976 20.291 0.349976 20.033 0.349976 19.751V2.6C0.349976 1.36 1.35998 0.349998 2.59998 0.349998H15.398C16.638 0.349998 17.648 1.36 17.648 2.6V19.75C17.648 20.032 17.49 20.29 17.238 20.418C17.132 20.473 17.015 20.5 16.898 20.5H16.9ZM8.99998 13.25C9.15497 13.25 9.30998 13.298 9.43998 13.394L16.15 18.277V2.6C16.15 2.188 15.813 1.85 15.4 1.85H2.59998C2.18698 1.85 1.84998 2.188 1.84998 2.6V18.277L8.55998 13.394C8.68998 13.298 8.84498 13.25 8.99998 13.25Z" fill="#D9D9D9"/>
          </svg>
      }
    </>
  );
}
 
export default BookmarksIcon;