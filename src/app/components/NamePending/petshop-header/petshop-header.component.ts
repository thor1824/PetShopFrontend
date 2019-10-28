import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petshop-header',
  templateUrl: './petshop-header.component.html',
  styleUrls: ['./petshop-header.component.css']
})
export class PetshopHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      console.log('seach');
    }
  }
}
