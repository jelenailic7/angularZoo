export class Animal {
    species;
    name;
    dateOfBirth;

    constructor(species,name,dateOfBirth)
    {
        this.species = species;
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        return this;
    }
}
