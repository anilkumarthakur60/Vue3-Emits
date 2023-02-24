import axios from "axios";

export function useImages() {

   async function searchImages(term) {
            const response = await axios.get('http://localhost:8000/api/medias', {
            headers: {
                // "Authorization": 'Client-ID 61EfJ7zYOIuKm7_AAqxlB2yxLYTtajIUkBesXBICYkk',
                "Content-Type": 'application/json',
                "Accept": 'application/json'
            },
            params: {

            },
        });
        return response;
    }

    return {
        searchImages
    };
}
