import {ISearchInput} from "@/interfaces/SearchInput.interface";
import {searchRequestRepository} from "@/repository/searchRequest.repository";
import {createClientComponentClient, Session} from "@supabase/auth-helpers-nextjs";
import {ITrip} from "@/interfaces/Trip.interface";
import {supabaseAuthInfos} from "@/lib/supabaseClient";

export const searchRequestService = {
    async getSearchRequestResults(searchInput: ISearchInput, session: Session) {
        const results = await searchRequestRepository.getResultsForRequest(searchInput);
        const user = session.user.id;
        const {uuid} = await searchRequestService.saveSearchRequestInDB(searchInput, results, user);
        return {
            uuid: uuid,
            results: results
        };
    },

    async saveSearchRequestInDB(searchInput: ISearchInput, results: ITrip[], user: string) {
        const supabase = createClientComponentClient({
            ...supabaseAuthInfos
        })
        const {data, error} = await supabase
            .from('search_requests')
            .insert([
                {user: user, content: searchInput, result: results},
            ])
            .select('uuid')
        if (error) {
            throw new Error(error.message)
        }
        return data[0];
    }
}