import { Component, OnDestroy, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CitasService } from '../service/citas-service.service';

@Component({
  selector: 'app-configuracion-app',
  templateUrl: './configuracion-app.page.html',
  styleUrls: ['./configuracion-app.page.scss'],
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonList, IonItem, IonLabel, 
  ]
})

export class ConfiguracionAppPage implements OnInit, OnDestroy {
  configuracion!: { borrarCitaInicio: boolean; };
  borrarCitaInicio!: boolean;
  
  constructor(private citasService: CitasService) { }

  ngOnInit(): void {
    this.configuracion = this.citasService.getConfiguracion();
    this.borrarCitaInicio = this.configuracion.borrarCitaInicio;
  }

  ngOnDestroy(): void {
    this.configuracion = { borrarCitaInicio: this.borrarCitaInicio };
    this.citasService.setConfiguracion(this.configuracion);
  }
}

