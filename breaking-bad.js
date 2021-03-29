const fetch = require("node-fetch");
export async function breakingBad(characters){

    if(characters != null){
        if(typeof characters === 'string') characters=[characters];

        const api_url = "https://www.breakingbadapi.com/api/episodes";
        const response = await fetch(api_url);
        var data = await response.json();
    
        let episodes = data.map(function(episode) {
            if(characters.every(v => episode.characters.includes(v))){
                return "S"+('0' + episode.season.trim()).slice(-2) + ('0' + episode.episode).slice(-2)+ " - "+ episode.title;
            }
        })

        episodes = episodes.filter(function( element ) {
            return element !== undefined;
         });
         return episodes;
    }else{
        return [];
    }
    

}

//breakingBad(["Eliott Schwartz", "Todd Alquist"]);