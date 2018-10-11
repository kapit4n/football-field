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
  minArea2: any;
  curColor: any;
  images: any;

  destiny: any;
  origin: any;

  routes: any[];

  constructor() {
    this.vertical = false;
    this.origin = {x: 200, y: 200};
    this.destiny = { x: 200, y: 200};
    this.routes = [];
  }

  ngOnInit() {
  }

  animation() {
    if (!this.svg) {
      this.svg = d3.select('#field1');
      this.images = d3.select('#image1');
    }

    const self = this;
    this.svg.transition()
      .duration(2000)
      .tween('precision', function () {
        let area = d3.interpolateRound(self.origin.x, self.destiny.x);
        let area2 = d3.interpolateRound(self.origin.y, self.destiny.y);

        let color = d3.interpolateRgb('rgb(255,0,255)', 'rgb(0,255,0)');
        return function (t) {
          self.minArea = area(t);
          self.minArea2 = area2(t);
          self.curColor = color(t);
          self.render();
        };
      }).on('end', () => {
        if (this.routes.length > 0) {
          this.origin.x = this.destiny.x;
          this.origin.y = this.destiny.y;
          this.destiny.x = this.routes[0].x;
          this.destiny.y = this.routes[0].y;
          this.routes =  this.routes.splice(1);
          console.log('END0');
          this.animation();
        } else {
          console.log('END1');
        }

      });
  }

  render() {
    this.images.attr('x', this.minArea).attr('y', this.minArea2);
  }

  goHere(event) {
    if (this.routes.length > 0) {
      this.routes.push({ x: event.offsetX, y: event.offsetY});
    } else {
      this.routes.push({ x: event.offsetX, y: event.offsetY});
      this.origin.x = this.destiny.x;
      this.origin.y = this.destiny.y;
      this.destiny.x = event.offsetX;
      this.destiny.y = event.offsetY;
      this.animation();
    }
  }

  changeOrientation() {
    this.vertical = !this.vertical;
  }

  stopTransition() {
    d3.selectAll('image').transition();
  }

  clickAction() {
    this.animation();
  }
}
