import { useContext, useEffect, useState } from "react"
import { MyContext } from "../../App"
import Card from "../Card/Card";
import "./CardGallery.css";

export default function CardsGallery() {

    const [cards, setCards] = useState([]);
    const { setIsLoader } = useContext(MyContext);

    const getData = async () => {
        setIsLoader(true);

        const res = await fetch(`https://monkfish-app-z9uza.ondigitalocean.app/bcard2/cards`);

        if (res.ok) {
            const data = await res.json();
            setCards(data);
        }
        setIsLoader(false);
    }

    useEffect(() => {
        getData();
    }, []);

    return (
        <div className="CardGallery">
            {
                cards.map((card) =>
                    <Card key={card._id} card={card}/>
                )
            }
        </div>
    )
}