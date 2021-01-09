export const initialState = {
    user: null,
    playlist: [],
    spotify: null,
    discover_weekly: null,
    top_artists: null,

    playing: false,
    item: null,

    //remove token and make it null after complete building
   // token: "BQDtOvksPI7eD6LjSNoAFo-LVjJhQXHNtaKMQXb3tTwmKlpvH1S2oMXbuyPECzxXA0LhNM2HIFvJoUaEchrIkPaUAvWWXoWGQBj8ac-_FoZ3K5c-PyVWoztEAH4bTVjb_ThI-OwybZerlqTfnpOo-hjKadPRjpC1MAojJUVZLi1D"

};

const reducer = (state, action) => {
console.log(action);

switch(action.type){
    case 'SET_USER':
    return {
        ...state,
        user: action.user
    };

    case "SET_PLAYING":
      return {
        ...state,
        playing: action.playing,
      };

    case "SET_ITEM":
        return {
          ...state,
          item: action.item,
        };

    case "SET_DISCOVER_WEEKLY":
            return {
              ...state,
              discover_weekly: action.discover_weekly,
            };
      
    case "SET_TOP_ARTISTS":
            return {
              ...state,
              top_artists: action.top_artists,
            };

    case 'SET_TOKEN':
        return {
            ...state,
            token: action.token
        };

    case "SET_SPOTIFY":
            return {
              ...state,
              spotify: action.spotify,
            };

    case 'SET_PLAYLIST':
            return {
                ...state,
                playlists: action.playlists,
            };

    case 'SET_DISCOVER_WEEKLY':
                return {
                    ...state,
                    discover_weekly: action.discover_weekly,
                };

    default:
        return state;
}
}

export default reducer;