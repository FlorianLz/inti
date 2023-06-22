import {locationHelper} from "@/helper/location.helper";
import {ISearchPlace} from "@/interfaces/SearchPlace.interface";
export const searchPlaceFactory = {
    searchPlace: async (rawSearch: any) => {
        console.log(rawSearch);
        let finalSearch = rawSearch.features.map((search: any): ISearchPlace => {
            return {
                id: search.id,
                name: search.place_name,
                city: search.text_fr,
                country: search.context[search.context.length - 1].text_fr,
                coordinates: search.center,
                distanceFromParis: locationHelper.calculateDistance(search.center[1], search.center[0], 48.8534, 2.3488),
            }
        });
        return finalSearch.sort((a: any, b: any) => {
            return a.distanceFromParis - b.distanceFromParis;
        });
    }
}