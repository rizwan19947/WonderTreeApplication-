import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { groupBy, map, mergeMap, reduce } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class DataVisualizationService {
  constructor(private httpClient: HttpClient) {}

  /**
   * Grouping the data in a suitable format to be able to provide usable data points from the initial ungrouped format
   */
  public getTodoList() {
    return this.httpClient
      .get<any[]>('https://jsonplaceholder.typicode.com/todos')
      .pipe(
        map((todos: any[]) => {
          const groupedData = todos.reduce((acc, curr) => {
            const { userId, completed } = curr;
            acc[userId] = acc[userId] || {
              userId,
              completed: 0,
              notCompleted: 0,
            };
            if (completed) {
              acc[userId].completed++;
            } else {
              acc[userId].notCompleted++;
            }
            return acc;
          }, {});

          // Convert the groupedData object back to an array of objects
          return Object.values(groupedData);
        })
      );
  }
}
