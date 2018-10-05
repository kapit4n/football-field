import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-cancha-container',
  templateUrl: './cancha-container.component.html',
  styleUrls: ['./cancha-container.component.css']
})
export class CanchaContainerComponent implements OnInit {
  vertical: boolean;
  svg: any;
  ball: any;
  constructor() {
    this.vertical = false;
  }

  ngOnInit() {
  }
  
  changeOrientation() {
    this.vertical = !this.vertical;
  }
}
