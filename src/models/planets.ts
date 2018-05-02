export class Planet {
    name : string;
    rotation_period: number; 
    orbital_period: number; 
    diameter: number; 
    climate: string; 
    gravity: string; 
    terrain: string;
    surface_water: string;
    population: number;
    residents: Array<number>;
    films: Array<number>;
    created: Date;
    edited: Date;
    url: string;
    
      constructor(planet?: any) {
        this.name = planet && planet.name || null;
        this.rotation_period = planet && planet.rotation_period || null;
        this.orbital_period = planet && planet.orbital_period || null;
        this.diameter = planet && planet.diameter || null;
        this.climate = planet && planet.climate || null;
        this.gravity = planet && planet.gravity || null;
        this.terrain = planet && planet.terrain || null;
        this.surface_water = planet && planet.surface_water || null;
        this.population = planet && planet.population || null;
        this.residents = planet && planet.residents || null;
        this.films = planet && planet.films || null;
        this.created = planet && planet.created || null;
        this.edited = planet && planet.edited || null;
        this.url = planet && planet.url || null;
      }
  }