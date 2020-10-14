import React from 'react';
import GalleryCard from '../gallery/GalleryCard';
import TypeConstants from "../../utils/TypeConstants.js"

function Home() {
    const testCard = {
        id: "some-id",
        title: "pattern title",
        subheader: "pattern company",
        image: "bar",
        cardType: TypeConstants.PATTERN
    }

    return (
        <div>
            <GalleryCard
                title={testCard.title}
                subheader={testCard.subheader}
                id={testCard.id}
                image={testCard.image}
                cardType={testCard.cardType}
            />
        </div>
    )
}

export default Home;