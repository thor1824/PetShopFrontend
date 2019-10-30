import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-petshop-header',
  templateUrl: './petshop-header.component.html',
  styleUrls: ['./petshop-header.component.css']
})
export class PetshopHeaderComponent implements OnInit {
  searchText: string;

  constructor() { }

  ngOnInit() {
  }

  onKeydown(event) {
    if (event.key === 'Enter') {
      console.log(this.searchText);
    }
  }
}
