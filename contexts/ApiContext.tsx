import { createContext } from "react";
import {QueryClient,useQuery,dehydrate} from 'react-query';
interface initial{
    LobbyQuery:any,
    refetch:any
}
let initValue!:initial;
export const ApiContext = createContext(initValue);
// fetching api's
const lobbyDataFetch = async () => await(await fetch('/api/library_data')).json();

export function ApiProvider(props:any){
    const LobbyQuery = useQuery('lobby_data',lobbyDataFetch);
    if(LobbyQuery.isLoading){
       return <div>...Loading</div>
    }
    if(LobbyQuery.isError){
       return  <div>...Error</div>
    }
    return <ApiContext.Provider value={{LobbyQuery:LobbyQuery.data,refetch:LobbyQuery.refetch}}>{props.children}</ApiContext.Provider>

}
