import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  animals: Array<Object>;
  constructor() { 
    this.animals = [
      {
        name: 'Mike',
        type: 'Dog',
        birth: '8.8.2010'
      },
      {
        name: 'Kitty',
        type: 'Cat',
        birth: '8.8.2011'
      },
      {
        name: 'Jessi',
        type: 'Giraffe',
        birth: '8.9.2010'
      },
      {
        name: 'Mike',
        type: 'Elephant',
        birth: '8.8.2017'
      },
      {
        name: 'Donk',
        type: 'Cow',
        birth: '1.8.2007'
      }
    ];  
  }

  ngOnInit() {
  }

}
