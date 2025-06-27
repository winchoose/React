import "./Button.css"

const Button = ({text, type, onclick}) => {
    return (
    <button onclick={onclick} className={`Button Button_${type}`}>
        {text}
    </button>
    )
}

export default Button