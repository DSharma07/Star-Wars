export class People {
    name : string;
    height: string; 
    mass: string; 
    hair_color: string; 
    skin_color: string; 
    eye_color: string; 
    birth_year: string;
    gender: string;
    homeworld: string;
    films: Array<number>;
    species: Array<number>;
    vehicles: Array<number>;
    starships: Array<number>;
    created: Date;
    edited: Date;
    url: string;
    
      constructor(people?: any) {
        this.name = people && people.name || null;
        this.height = people && people.height || null;
        this.mass = people && people.mass || null;
        this.hair_color = people && people.hair_color || null;
        this.skin_color = people && people.skin_color || null;
        this.eye_color = people && people.eye_color || null;
        this.birth_year = people && people.birth_year || null;
        this.gender = people && people.gender || null;
        this.homeworld = people && people.homeworld || null;
        this.films = people && people.films || null;
        this.species = people && people.species || null;
        this.vehicles = people && people.vehicles || null;
        this.starships = people && people.starships || null;
        this.created = people && people.created || null;
        this.edited = people && people.edited || null;
        this.url = people && people.url || null;
      }
  }