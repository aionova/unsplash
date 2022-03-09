import React, { useState, useEffect } from 'react';
import styles from './Gallery.module.scss';
import { Card } from "../Card";
import { getPhotos } from "../../api/photosApi";
import { Photo } from "../../types/Photo";
import { nanoid } from 'nanoid';

export const Gallery = () => {
    const [cards, setCards] = useState([] as Photo[]);
    const [currentPage, setCurrentPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        getPhotos()
            .then(loadedCards => {
                const preparedCards = loadedCards.map((card) => ({
                    ...card,
                    key: nanoid(),
                }))
                setCards(preparedCards);
            })
            .catch((error) => {
                console.log(error)
                setIsError(true);
            })
    }, [])

    useEffect(() => {
        setIsLoading(true);

        getPhotos(currentPage + 1)
            .then(loadedCards => {
                const preparedCards = loadedCards.map((card) => ({
                    ...card,
                    key: nanoid(),
                }))
                setCards([...cards, ...preparedCards]);
            })
            .catch((error) => {
                console.log(error)
                setIsError(true);
            });
        setIsLoading(false);
    }, [currentPage])

    return (
        <div className={styles.wrapper}>
            {isError && 'Sorry, unexpected error occurred. Please try again later.'}
            <div className={styles.gallery}>
                {cards.map(card => (
                        <Card
                            user={card.user}
                            urls={card.urls}
                            description={card.description}
                            key={card.key}
                            links={card.links}
                        />
                    ))}
            </div>
            <button
                className={styles.button}
                onClick={() => {setCurrentPage(currentPage + 1)}}
            >
                {isLoading ? 'Loading' : 'Load More'}
            </button>
        </div>
    );
}
