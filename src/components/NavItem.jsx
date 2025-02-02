import Button from "./ui/Button.jsx";

const NavItem = ({itemTitle, changePage}) => {
    return (
        <Button callback={() => changePage(itemTitle)} >{itemTitle}</Button>
    );
};

export default NavItem;

// className={'bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white'}