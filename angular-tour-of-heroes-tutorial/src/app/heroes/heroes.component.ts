import { Component, OnInit } from '@angular/core';

//Component is always included
//@Component is a decorator function that specifies the Angular metadata for the component.
@Component({
  selector: 'app-heroes', //CSS element selector
  templateUrl: './heroes.component.html', //location of component's template file
  styleUrls: ['./heroes.component.css'] //component's private CSS styles
})
export class HeroesComponent implements OnInit { //always export, so you can import somewhere else

  constructor() { }
  hero = 'Windstorm';

  ngOnInit(): void { //lifecyle hook. Logic goes here for initialization
  }

}
