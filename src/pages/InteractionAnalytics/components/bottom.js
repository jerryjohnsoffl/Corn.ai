import cardData from "./cardData";
import Card from "./card";
import ratingImage from "./img-source/rating.svg";


function Bottom() {

    let ratingData = cardData.map((cardItem)=> {
        return(
            <Card
            icon={cardItem.icon}
            cardName={cardItem.name}
            rating={cardItem.rating}
            ratingImage={ratingImage}
            />
        )
    })


    return(
        <div className="bottom w-100 flex flex-center">
            <div className="grid">
                {ratingData}
            </div>
        </div>
    )
}

export default Bottom;