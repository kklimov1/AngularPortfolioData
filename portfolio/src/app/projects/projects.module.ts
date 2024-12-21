import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksAnalysisComponent } from './stocks-analysis/stocks-analysis.component';
import { SparkAnalysisComponent } from './spark-analysis/spark-analysis.component';
import { TopMenuModule } from "../top-menu/top-menu.module";



@NgModule({
  declarations: [
    StocksAnalysisComponent,
    SparkAnalysisComponent,
  ],
  imports: [
    CommonModule,
    TopMenuModule
]
})
export class ProjectsModule { }
