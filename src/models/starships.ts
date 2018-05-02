export class Starship {
  name: string;
  model: string; 
  manufacturer: string;
  cost_in_credits: number;
  length: number ;
  max_atmosphering_speed:string;
  crew: number ;
  passengers: number ;
  cargo_capacity: number ;
  consumables: string;
  yperdrive_rating: string;
  MGLT: string;
  starship_class: string;
  pilots: Array<number>;
  films: Array<number> ;
  created: Date;
  edited: Date;
  url: string;
    
      constructor(starship?: any) {
        this.name = starship && starship.name || null;
        this.model = starship && starship.model || null;
        this.manufacturer = starship && starship.manufacturer || null;
        this.cost_in_credits = starship && starship.cost_in_credits || null;
        this.length = starship && starship.length || null;
        this.max_atmosphering_speed = starship && starship.max_atmosphering_speed || null;
        this.crew = starship && starship.crew || null;
        this.passengers = starship && starship.passengers || null;
        this.cargo_capacity = starship && starship.cargo_capacity || null;
        this.consumables = starship && starship.consumables || null;
        this.yperdrive_rating = starship && starship.yperdrive_rating || null;
        this.MGLT = starship && starship.MGLT || null;
        this.starship_class = starship && starship.starship_class || null;
        this.pilots = starship && starship.pilots || null;
        this.films = starship && starship.films || null;
        this.created = starship && starship.created || null;
        this.edited = starship && starship.edited || null;
        this.url = starship && starship.url || null;
      }
  }