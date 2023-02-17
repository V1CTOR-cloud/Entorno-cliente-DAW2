export interface Country {
    name: { 
        common: string, 
        official: string, 
        nativeName: { 
            spa: { 
                official: string, 
                common: string 
            } 
        } 
    }, 
    currencies: { 
        EUR: { 
            name: string, 
            symbol: string 
        } 
    }, 
    capital: [string], 
    region: string, 
    subregion: string, 
    languages: { 
        por: string
    }, 
    area: number, 
    maps: { 
        googleMaps: string, 
        openStreetMaps: string 
    }, 
    population: number, 
    flags: { 
        png: string, 
        svg: string 
    }, 
    coatOfArms: { 
        png: string, 
        svg: string 
    }
}