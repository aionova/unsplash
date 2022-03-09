import { Photo } from "../types/Photo";
import { UNSPLASH_ACCESS_KEY } from "../constants/variables";

export const getPhotos = async(page = 1): Promise<Photo[]> => {
    return fetch(
        `https://api.unsplash.com/photos?page=${page}&per_page=9&client_id=${UNSPLASH_ACCESS_KEY}`,
    )
        .then(data => {
            return data.json();
        })
        .catch((error) => {
            console.error(error);
        });
}
