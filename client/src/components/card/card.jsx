import "./card.css"

function card(props) {
    return (
        <div>
            <img src={props.image} alt="" />
            <h1>{props.name}</h1>
            <p>{props.temperamets}</p>
            <h3>{props.weight}</h3>
        </div>
    )
}

export default card;