import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss'],
})
export class DataVisualizationComponent implements OnInit {
  @Input() data: any[] | undefined;

  constructor() {}

  ngOnInit(): void {}
}
