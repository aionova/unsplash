import React from 'react';
import styles from './Card.module.scss';
import {Photo} from "../../types/Photo";

export const Card = ({ user, urls, description, links }: Partial<Photo>) => {
    if (!urls || !user) {
        return null;
    }

    return (
        <div className={styles.card}>
            <img
                srcSet={`${urls.thumb} 300w, ${urls.small} 768w, ${urls.regular} 1280w`}
                src={urls.thumb}
                alt={description}
                className={styles.img}
                loading="lazy"
            />
            <a
                className={styles.download}
                href={links?.download}
                target="_blank"
            >
                Download
            </a>

            <div className={styles.text}>
                <p className={styles.name}>
                    {user.name}
                </p>
                <p>
                    {description}
                </p>
            </div>
            <div className={styles.background} />
        </div>
    );
}
