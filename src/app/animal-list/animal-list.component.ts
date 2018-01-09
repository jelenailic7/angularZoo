import { Component, OnInit } from '@angular/core';
import { Animal } from '../animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<Object>;
  constructor() { 
    this.animals = [
        new Animal ('Dog','Mike',''),
        new Animal ('Kitty', 'Cat','8.8.2011'),
        new Animal ('Jessi','Girraffe','8.9.2010'),
        new Animal ('Mike','Elephant','8.8.2017'),
        new Animal ('Mink','Cow','1.8.2007')

    ];  
  }
  removeAnimal(animal)
  {
    let index = this.animals.indexOf(animal);
    this.animals.splice(index,1);
  }
  ngOnInit() {
  }

}
