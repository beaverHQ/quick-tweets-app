import { Flex } from "@chakra-ui/react";


import Menu from "./Menu";
import HomeIcon from "../components/icons/Home";
import ExploreIcon from "../components/icons/Explore";
import NotificationIcon from "../components/icons/NotificationIcon";
import MessagesIcon from "../components/icons/MessagesIcon";
import ListsIcon from "../components/icons/ListsIcon";
import BookmarksIcon from "../components/icons/BookmarksIcon";
import ProfileIcon from "../components/icons/ProfileIcon";
import MoreIcon from "../components/icons/MoreIcon";


const menulist = [
  {icon: HomeIcon, name: "Home", active: true},
  {icon: ExploreIcon, name: "Explore", active: false},
  {icon: NotificationIcon, name: "Notifications", active: false},
  {icon: MessagesIcon, name: "Messages", active: false},
  {icon: ListsIcon, name: "Lists", active: false},
  {icon: BookmarksIcon, name: "Bookmarks", active: false},
  {icon: ProfileIcon, name: "Profile", active: false},
  {icon: MoreIcon, name: "More", active: false},
];

const MenuList = () => {
  return (
      <Flex
      flexDirection={'column'}
    >
      {
        menulist.map((menu, i) => <Menu 
          key={i}
          Icon={menu.icon}
          name={menu.name}
          active={menu.active}
        />)
      }
    </Flex>    
  );
}
 
export default MenuList;
