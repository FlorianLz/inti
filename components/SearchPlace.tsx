"use client"
import {useEffect, useState} from "react";
import useDebounce from '@/hooks/useDebounce'
import {searchPlaceService} from "@/service/searchPlace.service";
import {ISearchPlace} from "@/interfaces/SearchPlace.interface";

export default function Search({onChange}: { onChange: (suggestion: ISearchPlace) => void }) {
  const [search, setSearch] = useState('');
  const [refresh, setRefresh] = useState(true);
  const [suggestions, setSuggestions] = useState<ISearchPlace[]>([]);
  const debouncedSearch = useDebounce(search, 1000);

  useEffect(() => {
    if(search === '') setSuggestions([]);
    if (debouncedSearch && refresh) {
      setRefresh(true)
      searchPlaceService.searchPlace(debouncedSearch).then((r) => {
        setSuggestions(r);
        setRefresh(false);
      })
    }
  }, [debouncedSearch]);

  function handleSearch(sugestion: ISearchPlace) {
    setSearch(sugestion.name);
    onChange(sugestion);
    setRefresh(false);
    setTimeout(() => setSuggestions([]), 100);
  }

  return <div className="relative w-full">
      <input type="text" value={search} onChange={(e) => {setRefresh(true);setSearch(e.target.value) }} className="border border-black w-full h-12 px-4 py-3" placeholder="Rechercher une destination"/>
      {suggestions.length > 0 && <div className="absolute top-11 left-0 bg-white border border-black w-full">
          {suggestions.map((suggestion) => <div key={suggestion.id} className="p-2 border-b border-black hover:bg-amber-50 cursor-pointer" onClick={()=>handleSearch(suggestion)}>{suggestion.name}</div>)}
      </div>}
    </div>
}