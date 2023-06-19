import {searchPlaceRepository} from "@/repository/searchPlace.repository";
import {searchPlaceFactory} from "@/factory/searchPlace.factory";

export const searchPlaceService = {
    searchPlace: async (search: string) => {
        const rawSearch = await searchPlaceRepository.searchPlace(search);
        return await searchPlaceFactory.searchPlace(rawSearch);
    }
}