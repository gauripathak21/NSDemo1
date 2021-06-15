import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {
  customerData:any;
  displayedColumns: string[] = ['Name', 'Email', 'Number', 'PAN'];
  constructor() { }

  ngOnInit(): void {
  }

}
