import {searchPlaceRepository} from "@/repository/searchPlace.repository";
import {searchPlaceFactory} from "@/factory/searchPlace.factory";
import {ISearchPlace} from "@/interfaces/SearchPlace.interface";

export const searchPlaceService = {
    searchPlace: async (search: string): Promise<ISearchPlace[]> => {
        const rawSearch = await searchPlaceRepository.searchPlace(search);
        return await searchPlaceFactory.searchPlace(rawSearch);
    }
}