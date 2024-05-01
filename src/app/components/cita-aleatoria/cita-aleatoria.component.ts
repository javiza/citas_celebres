import { Component, OnInit } from '@angular/core';
import { CitasService } from '../../service/citas-service.service'
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, 
  IonHeader, IonItem, IonLabel, IonList, IonTitle } from '@ionic/angular/standalone';

@Component({
  selector: 'app-cita-aleatoria',
  templateUrl: './cita-aleatoria.component.html',
  styleUrls: ['./cita-aleatoria.component.scss'],
  standalone: true,
  imports:[ IonHeader, IonCard, IonTitle, IonList,
     IonItem, IonLabel, IonCardHeader, IonCardTitle, IonCardContent]
})

export class CitaAleatoriaComponent implements OnInit {
  citaAleatoria!: { frase: string; autor: string; };

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.citaAleatoria = this.citasService. getCitaAleatoria();
  }
}



