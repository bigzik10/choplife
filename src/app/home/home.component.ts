import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  items = [
    {
      image: '../../assets/images/mcdonalds.png',
      rating: 4.5,
      title: 'McDonalds',
    },
    {
      image: '../../assets/images/kfc.png',
      rating: 4.5,
      title: 'KFC',
    },
    {
      image: '../../assets/images/burgerking.png',
      rating: 4.5,
      title: 'BurgetKing',
    },
    {
      image: '../../assets/images/carrefour.png',
      rating: 4.5,
      title: 'Carrefour',
    },
    {
      image: '../../assets/images/pizzahut.png',
      rating: 4.5,
      title: 'Pizza Hut',
    },
    {
      image: '../../assets/images/papajohn.png',
      rating: 4.5,
      title: "PapaJohn's",
    },
    {
      image: '../../assets/images/subway.png',
      rating: 4.5,
      title: 'Subway',
    },
    {
      image: '../../assets/images/tacobell.png',
      rating: 4.5,
      title: 'TacoBell',
    },
  ];
}
