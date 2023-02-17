export interface Response {
  data: { id: number; first_name: string; last_name: string }[];
}

//***************** */

export interface Games {
    data: Datum[];
    meta: Meta;
}

export interface Datum {
    id:       number;
    ast:      number | null;
    blk:      number | null;
    dreb:     number | null;
    fg3_pct:  number | null;
    fg3a:     number | null;
    fg3m:     number | null;
    fg_pct:   number | null;
    fga:      number | null;
    fgm:      number | null;
    ft_pct:   number | null;
    fta:      number | null;
    ftm:      number | null;
    game:     Game;
    min:      null | string;
    oreb:     number | null;
    pf:       number | null;
    player:   Player;
    pts:      number | null;
    reb:      number | null;
    stl:      number | null;
    team:     Team;
    turnover: number | null;
}

export interface Game {
    id:                 number;
    date:               Date;
    home_team_id:       number;
    home_team_score:    number;
    period:             number;
    postseason:         boolean;
    season:             number;
    status:             Status;
    time:               Time;
    visitor_team_id:    number;
    visitor_team_score: number;
}

export enum Status {
    Final = "Final",
}

export enum Time {
    Empty = " ",
}

export interface Player {
    id:            number;
    first_name:    FirstName;
    height_feet:   null;
    height_inches: null;
    last_name:     LastName;
    position:      string;
    team_id:       number;
    weight_pounds: null;
}

export enum FirstName {
    Michael = "Michael",
}

export enum LastName {
    Jordan = "Jordan",
}

export interface Team {
    id:           number;
    abbreviation: Abbreviation;
    city:         City;
    conference:   Conference;
    division:     Division;
    full_name:    FullName;
    name:         Name;
}

export enum Abbreviation {
    Was = "WAS",
}

export enum City {
    Washington = "Washington",
}

export enum Conference {
    East = "East",
}

export enum Division {
    Southeast = "Southeast",
}

export enum FullName {
    WashingtonWizards = "Washington Wizards",
}

export enum Name {
    Wizards = "Wizards",
}

export interface Meta {
    total_pages:  number;
    current_page: number;
    next_page:    number;
    per_page:     number;
    total_count:  number;
}

//****************** */


export interface Character {
    info:    Info;
    results: Result[];
}

export interface Info {
    count: number;
    pages: number;
    next:  string;
    prev:  null;
}

export interface Result {
    id:       number;
    name:     string;
    status:   Status;
    species:  Species;
    type:     string;
    gender:   Gender;
    origin:   Location;
    location: Location;
    image:    string;
    episode:  string[];
    url:      string;
    created:  Date;
}

export enum Gender {
    Female = "Female",
    Male = "Male",
    Unknown = "unknown",
}

export interface Location {
    name: string;
    url:  string;
}

export enum Species {
    Alien = "Alien",
    Human = "Human",
}

export enum Status {
    Alive = "Alive",
    Dead = "Dead",
    Unknown = "unknown",
}

//************************ */



export interface Episode {
    id:         number;
    name:       string;
    air_date:   string;
    episode:    string;
    characters: string[];
    url:        string;
    created:    Date;
}