
import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';
import { SQLite, SQLiteObject } from '@ionic-native/sqlite/ngx';

@Injectable({
  providedIn: 'root'
})
export class CitasService {
  private citas: { frase: string, autor: string }[] = [];
  private configuracion = { borrarCitaInicio: false };
  private db!: SQLiteObject;

  constructor(
    private nativeStorage: NativeStorage,
    private sqlite: SQLite
  ) {}

  getCitaAleatoria(): { frase: string, autor: string } {
    return this.citas[Math.floor(Math.random() * this.citas.length)];
  }

  getCitas(): { frase: string, autor: string }[] {
    return this.citas;
  }

  agregarCita(frase: string, autor: string): void {
    this.db.executeSql('INSERT INTO citas (frase, autor) VALUES (?, ?)', [frase, autor])
      .then(() => {
        this.loadCitas();
      })
      .catch(e => console.log('Error inserting cita:', e));
  }

  eliminarCita(index: number): void {
    const cita = this.citas[index];
    this.db.executeSql('DELETE FROM citas WHERE frase = ? AND autor = ?', [cita.frase, cita.autor])
      .then(() => {
        this.loadCitas();
      })
      .catch(e => console.log('Error deleting cita:', e));
  }

  getConfiguracion(): { borrarCitaInicio: boolean } {
    return this.configuracion;
  }

  setConfiguracion(config: { borrarCitaInicio: boolean }): void {
    this.configuracion = config;
    this.nativeStorage.setItem('configuracion', JSON.stringify(config))
      .then(() => console.log('Configuracion saved'))
      .catch(error => console.error('Error saving configuracion:', error));
  }

  initializeDatabase() {
    this.sqlite.create({
      name: 'citas.db',
      location: 'default'
    }).then((db: SQLiteObject) => {
      this.db = db;
      this.db.executeSql(
        'CREATE TABLE IF NOT EXISTS citas (id INTEGER PRIMARY KEY AUTOINCREMENT, frase TEXT, autor TEXT)', [])
        .then(() => {
          console.log('Table created');
          this.loadCitas();
          this.loadConfiguracion();
        })
        .catch(e => console.log('Error creating table:', e));
    }).catch(e => console.log('Error creating database:', e));
  }

  loadCitas() {
    this.db.executeSql('SELECT * FROM citas', []).then(res => {
      this.citas = [];
      for (let i = 0; i < res.rows.length; i++) {
        this.citas.push({ frase: res.rows.item(i).frase, autor: res.rows.item(i).autor });
      }
    }).catch(e => console.log('Error loading citas:', e));
  }

  loadConfiguracion() {
    this.nativeStorage.getItem('configuracion').then(
      value => this.configuracion = value ? JSON.parse(value) : { borrarCitaInicio: false },
      error => console.error('Error loading configuracion:', error)
    );
  }
}