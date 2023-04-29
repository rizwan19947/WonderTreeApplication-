import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DataVisualizationComponent } from './components/data-visualization/data-visualization.component';

@NgModule({
  declarations: [DataVisualizationComponent],
  exports: [DataVisualizationComponent],
  imports: [CommonModule],
})
export class CoreModule {}
