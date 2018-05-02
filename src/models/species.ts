export class Species {
    name: string;
    classification: string; 
    designation: string;
    average_height: number;
    skin_colors: string ;
    hair_colors:string;
    eye_colors: string ;
    average_lifespan: number ;
    homeworld: string ;
    language: string;
    people: Array<number>;
    films: Array<number> ;
    created: Date;
    edited: Date;
    url: string;
      
        constructor(species?: any) {
          this.name = species && species.name || null;
          this.classification = species && species.classification || null;
          this.designation = species && species.designation || null;
          this.average_height = species && species.average_height || null;
          this.skin_colors = species && species.skin_colors || null;
          this.hair_colors = species && species.hair_colors || null;
          this.eye_colors = species && species.eye_colors || null;
          this.average_lifespan = species && species.average_lifespan || null;
          this.homeworld = species && species.homeworld || null;
          this.language = species && species.language || null;
          this.people = species && species.people || null;
          this.films = species && species.films || null;
          this.created = species && species.created || null;
          this.edited = species && species.edited || null;
          this.url = species && species.url || null;
        }
    }