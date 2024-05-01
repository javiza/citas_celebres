import { Component } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFabButton } from '@ionic/angular/standalone';
import { CitaAleatoriaComponent } from '../components/cita-aleatoria/cita-aleatoria.component';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonicModule, IonHeader,IonToolbar, IonTitle, IonContent, 
    CitaAleatoriaComponent, IonFabButton, RouterModule 
  ],
})
export class HomePage {
  constructor() {}
}
