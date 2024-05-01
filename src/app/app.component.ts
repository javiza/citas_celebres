import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { CitasService } from './service/citas-service.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true,
  imports: [IonApp, IonRouterOutlet],
})

export class AppComponent implements OnInit {
  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.citasService.initializeDatabase();
  }
}