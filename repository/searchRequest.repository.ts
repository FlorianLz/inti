import {ISearchInput} from "@/interfaces/SearchInput.interface";
import {ITrip} from "@/interfaces/Trip.interface";

export const searchRequestRepository = {
    getResultsForRequest: async (searchInput: ISearchInput): Promise<ITrip[]> => {
        const res = await fetch('http://localhost:8800/search', {
            mode: 'cors',
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({data: searchInput})
        })
        return await res.json()
    }
}