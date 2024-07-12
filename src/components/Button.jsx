let Button = ({className, toggle, target, text})=>{
    return(
        <>
        <button type="button" className={className} data-bs-toggle={toggle} data-bs-target={target}>{text}</button>
        </>
    );
}

export default Button