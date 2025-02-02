const Button = ({children, callback, className}) => {
    return (
        <div onClick={callback ?? (() => {})} className={`${className} text-center bg-red-color border-black border-2 rounded-md px-3 py-2 cursor-pointer hover:bg-red-500 hover:text-white`}>{children}</div>
    );
};

export default Button;