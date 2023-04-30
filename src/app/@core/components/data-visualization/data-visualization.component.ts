import {
  ChangeDetectorRef,
  Component,
  Input,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss'],
})
export class DataVisualizationComponent implements OnInit, OnDestroy {
  @Input() data$: Observable<any[]> | undefined;
  private data: any[] | undefined;
  private chart!: Chart;
  private subscription: Subscription | undefined;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.subscription = this.data$?.subscribe((data) => {
      this.data = data;
      this.renderOnCanvas(this.data);
      this.cd.markForCheck();
    });
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  sortByCompleted(ascending: boolean) {
    if (this.data) {
      if (ascending) {
        this.data.sort((a, b) => {
          if (a.completed < b.completed) {
            return -1;
          }
          if (a.completed > b.completed) {
            return 1;
          }
          return 0;
        });
      } else {
        this.data.sort((a, b) => {
          if (a.completed < b.completed) {
            return 1;
          }
          if (a.completed > b.completed) {
            return -1;
          }
          return 0;
        });
      }
      this.renderOnCanvas(this.data);
    }
    this.cd.markForCheck();
  }

  sortByIncomplete(ascending: boolean) {
    if (this.data) {
      if (ascending) {
        this.data.sort((a, b) => {
          if (a.notCompleted < b.notCompleted) {
            return -1;
          }
          if (a.notCompleted > b.notCompleted) {
            return 1;
          }
          return 0;
        });
      } else {
        this.data.sort((a, b) => {
          if (a.notCompleted < b.notCompleted) {
            return 1;
          }
          if (a.notCompleted > b.notCompleted) {
            return -1;
          }
          return 0;
        });
      }
      this.renderOnCanvas(this.data);
    }
    this.cd.markForCheck();
  }

  private renderOnCanvas(data: any[]) {
    if (this.chart) {
      this.chart.destroy();
    }
    const chartElement = document.getElementById(
      'myChart'
    ) as HTMLCanvasElement;

    const completedData = data.map((item) => item.completed);
    const notCompletedData = data.map((item) => item.notCompleted);
    const labels = data.map((item) => `User ${item.userId}`);

    this.chart = new Chart(chartElement, {
      type: 'bar',
      data: {
        labels: labels,
        datasets: [
          {
            label: 'Completed',
            data: completedData,
            backgroundColor: 'rgba(54, 162, 235, 0.2)',
            borderColor: 'rgba(54, 162, 235, 1)',
            borderWidth: 1,
          },
          {
            label: 'Not Completed',
            data: notCompletedData,
            backgroundColor: 'rgba(255, 99, 132, 0.2)',
            borderColor: 'rgba(255, 99, 132, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }
}
