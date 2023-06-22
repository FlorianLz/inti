export const searchPlaceRepository = {
    searchPlace: async (search: string) => {
        const response = await fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${search}.json?access_token=${process.env.NEXT_PUBLIC_MAPBOX_APIKEY}&limit=5&language=fr&types=country&types=region&types=place&types=locality&types=postcode`);
        return await response.json();
    }
}