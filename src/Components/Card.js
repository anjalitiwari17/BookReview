import React, { useState } from "react";

const Card = ({ book }) => {
    const [selectedCard, setSelectedCard] = useState(null);

    const toggleCard = (index) => {
        // Toggle the card to show/hide short description
        setSelectedCard(selectedCard === index ? null : index);
    };

    return (
        <>
            {book.map((item, index) => {
                const thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                const title = item.volumeInfo.title;
                const authors = item.volumeInfo.authors ? item.volumeInfo.authors.join(', ') : 'Unknown Author';
                const publisher = item.volumeInfo.publisher || 'Unknown Publisher';
                const releaseDate = item.volumeInfo.publishedDate || 'Unknown Date';
                const rating = item.volumeInfo.averageRating || 'No Rating';
                const description = item.volumeInfo.description ? item.volumeInfo.description.substring(0, 100) + '...' : 'No Description';
                
                // Assuming review is available under item.volumeInfo.reviews or similar
                const review = item.volumeInfo.reviews ? item.volumeInfo.reviews : 'No Reviews Available';

                return (
                    <div key={index} className="card" onClick={() => toggleCard(index)}>
                        <img src={thumbnail} alt={title} />
                        <h3 className="title">{title}</h3>
                        
                        {/* If this card is clicked, show more details */}
                        {selectedCard === index && (
                            <div className="additional-info">
                                <p><strong>Author:</strong> {authors}</p>
                                <p><strong>Publisher:</strong> {publisher}</p>
                                <p><strong>Release Date:</strong> {releaseDate}</p>
                                <p><strong>Rating:</strong> {rating}</p>
                                <p><strong>Description:</strong> {description}</p>
                                <p><strong>Review:</strong> {review}</p>
                            </div>
                        )}
                    </div>
                );
            })}
        </>
    );
};

export default Card;
