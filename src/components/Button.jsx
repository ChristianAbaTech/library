
const Button = (text) => {
    return(
        <button onClick={() => console.log("click")}>
            {text}
        </button>
    )
}

export default Button