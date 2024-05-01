import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular'; // Importa IonicModule
import { IonContent, IonHeader, IonItem, IonLabel, IonList, IonListHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { CitasService } from '../service/citas-service.service';

interface Cita {
  frase: string;
  autor: string;
}

@Component({
  selector: 'app-gestion-citas',
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'], 
  standalone: true,
  imports: [IonicModule, IonContent, IonHeader, IonTitle, IonToolbar, CommonModule, FormsModule,
    IonList, IonListHeader, IonLabel, IonItem, IonLabel,
  ]
})


export class GestionCitasPage implements OnInit {
  citas: Cita[] = [];
  nuevaCita: Cita = { frase: '', autor: '' };

  constructor(private citasService: CitasService) {}

  ngOnInit() {
    this.citas = this.citasService.getCitas();
  }

  agregarCita() {
    if (this.nuevaCita.frase && this.nuevaCita.autor) {
      this.citasService.agregarCita(this.nuevaCita.frase, this.nuevaCita.autor);
      this.nuevaCita = { frase: '', autor: '' };
    }
  }

  eliminarCita(cita: Cita) {
    const index = this.citas.indexOf(cita);
    if (index !== -1) {
      this.citasService.eliminarCita(index);
    }
  }
}
