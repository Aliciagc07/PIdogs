import "./button.css"

function Button(props) {
    return (
        <div className="container-button">
            <button>
                {props.name}
            </button>
        </div>
    )
}

export default Button;