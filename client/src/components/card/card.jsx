import "./card.css"

function Card({ key, image, name, temperamets, weight }) {
    return (
        <div>
            <img src={image} alt="" />
            <h1>{name}</h1>
            <p>{temperamets}</p>
            <h3>{weight}</h3>
        </div>
    )
}

export default Card;