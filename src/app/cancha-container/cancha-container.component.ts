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
  minArea: any;
  curColor: any;
  images: any;
  constructor() {
    this.vertical = false;
  }

  ngOnInit() {
  }

  animation() {
    let self = this;
    this.svg.transition()
      .duration(7500)
      .tween('precision', function () {
        let area = d3.interpolateRound(100, 200);
        let color = d3.interpolateRgb('rgb(255,0,255)', 'rgb(0,255,0)');
        return function (t) {
          self.minArea = area(t);
          self.curColor = color(t);
          self.render();
        };
      })
      .transition()
      .duration(7500)
      .tween('precision', function () {
        let area = d3.interpolateRound(200, 100);
        let color = d3.interpolateRgb('rgb(0,255,0)', 'rgb(255,0,255)');
        return function (t) {
          self.minArea = area(t);
          self.curColor = color(t);
          self.render();
        };
      })
      .transition()
      .duration(2500)
      .each('end', self.animation);
  }

  render() {
    this.images.attr('x', this.minArea);
  }

  changeOrientation() {
    this.vertical = !this.vertical;
  }

  clickAction() {
    this.svg = d3.select('#field1');
    this.images = d3.select('#image1');
    this.animation();
  }
}
