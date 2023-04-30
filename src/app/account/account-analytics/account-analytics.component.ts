import { Component, OnInit } from '@angular/core';
import { DataVisualizationService } from '../../@core/services/data-visualization.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-account-analytics',
  templateUrl: './account-analytics.component.html',
  styleUrls: ['./account-analytics.component.scss'],
})
export class AccountAnalyticsComponent implements OnInit {
  todoList$: Observable<any> | undefined;

  constructor(private visualizationService: DataVisualizationService) {
    this.todoList$ = visualizationService.getTodoList();
  }

  ngOnInit(): void {}
}
