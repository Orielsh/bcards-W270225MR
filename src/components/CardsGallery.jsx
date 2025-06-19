import { useContext, useEffect, useState } from "react"
import { MyContext } from "../App"

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
        <div>
            {
                cards.map((card) =>
                    <div key={card._id}>
                        {card._id}
                    </div>
                )
            }
        </div>
    )
}