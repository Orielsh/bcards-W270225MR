import "./Card.css"

export default function Card({card}) {
    return (
        <div className="Card">
            {card.title}
        </div>
    )
}