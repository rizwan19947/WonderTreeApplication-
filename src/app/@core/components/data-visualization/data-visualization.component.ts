import { ChangeDetectorRef, Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-data-visualization',
  templateUrl: './data-visualization.component.html',
  styleUrls: ['./data-visualization.component.scss'],
})
export class DataVisualizationComponent implements OnInit {
  @Input() data$: Observable<any[]> | undefined;

  constructor(private cd: ChangeDetectorRef) {}

  ngOnInit(): void {
    this.data$?.subscribe((data) => {
      const chartElement = document.getElementById(
        'myChart'
      ) as HTMLCanvasElement;
      if (chartElement) {
        const ctx = chartElement.getContext('2d');
        // Rest of the chart code here
      } else {
        alert('Could not find chart element');
        return;
      }

      const completedData = data.map((item) => item.completed);
      const notCompletedData = data.map((item) => item.notCompleted);
      const labels = data.map((item) => `User ${item.userId}`);

      const chart = new Chart(chartElement, {
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
      this.cd.markForCheck();
    });
  }
}
