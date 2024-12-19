import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StocksAnalysisComponent } from './stocks-analysis/stocks-analysis.component';
import { SparkAnalysisComponent } from './spark-analysis/spark-analysis.component';
import { StocksCodeComponent } from './stocks-code/stocks-code.component';
import { SparkCodeComponent } from './spark-code/spark-code.component';
import { TopMenuModule } from "../top-menu/top-menu.module";



@NgModule({
  declarations: [
    StocksAnalysisComponent,
    SparkAnalysisComponent,
    StocksCodeComponent,
    SparkCodeComponent
  ],
  imports: [
    CommonModule,
    TopMenuModule
]
})
export class ProjectsModule { }
