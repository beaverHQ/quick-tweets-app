import { type QIconProps } from "./icon";


const ListsIcon = ({active}: QIconProps) => {
  return (
    <>
      {
        active ?
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.75 0H2.25C1.013 0 0 1.013 0 2.25V17.75C0 18.987 1.013 20 2.25 20H17.75C18.987 20 20 18.987 20 17.75V2.25C20 1.013 18.987 0 17.75 0ZM9 14.75H5C4.586 14.75 4.25 14.414 4.25 14C4.25 13.586 4.586 13.25 5 13.25H9C9.414 13.25 9.75 13.586 9.75 14C9.75 14.414 9.414 14.75 9 14.75ZM15 10.75H5C4.586 10.75 4.25 10.414 4.25 10C4.25 9.586 4.586 9.25 5 9.25H15C15.414 9.25 15.75 9.586 15.75 10C15.75 10.414 15.414 10.75 15 10.75ZM15 6.75H5C4.586 6.75 4.25 6.414 4.25 6C4.25 5.586 4.586 5.25 5 5.25H15C15.414 5.25 15.75 5.586 15.75 6C15.75 6.414 15.414 6.75 15 6.75Z" fill="#D9D9D9"/>
          </svg> :
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path d="M17.75 20H2.25C1.01 20 0 18.99 0 17.75V2.25C0 1.01 1.01 0 2.25 0H17.75C18.99 0 20 1.01 20 2.25V17.75C20 18.99 18.99 20 17.75 20ZM2.25 1.5C1.836 1.5 1.5 1.837 1.5 2.25V17.75C1.5 18.163 1.836 18.5 2.25 18.5H17.75C18.164 18.5 18.5 18.163 18.5 17.75V2.25C18.5 1.837 18.164 1.5 17.75 1.5H2.25Z" fill="#D9D9D9"/>
            <path d="M15 6.64H5C4.586 6.64 4.25 6.303 4.25 5.89C4.25 5.477 4.586 5.14 5 5.14H15C15.414 5.14 15.75 5.475 15.75 5.89C15.75 6.305 15.414 6.64 15 6.64ZM15 10.75H5C4.586 10.75 4.25 10.414 4.25 10C4.25 9.586 4.586 9.25 5 9.25H15C15.414 9.25 15.75 9.586 15.75 10C15.75 10.414 15.414 10.75 15 10.75ZM10 14.86H5C4.586 14.86 4.25 14.525 4.25 14.11C4.25 13.695 4.586 13.36 5 13.36H10C10.414 13.36 10.75 13.697 10.75 14.11C10.75 14.523 10.414 14.86 10 14.86Z" fill="#D9D9D9"/>
          </svg>
      }
    </>
  );
}
 
export default ListsIcon;