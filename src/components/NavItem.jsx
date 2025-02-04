import Button from "./ui/Button.jsx";

const NavItem = ({itemTitle, changePage}) => {
    return (
        <Button callback={() => changePage(itemTitle)}>{itemTitle}</Button>
    );
};

export default NavItem;
