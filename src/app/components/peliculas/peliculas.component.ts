import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { Pelicula } from '../../models/pelicula';

@Component({
  selector: 'peliculas',
  templateUrl: './peliculas.component.html',
  styleUrls: ['./peliculas.component.css']
})
export class PeliculasComponent implements OnInit, DoCheck, OnDestroy {

  public titulo: string;
  public peliculas: Pelicula[];
  public favorita!: Pelicula;
  public fecha: any;

  constructor() {
    this.titulo = "Componente Peliculas";
    this.peliculas = [
      new Pelicula("Spiderman 4", 2019, "https://i.pinimg.com/originals/f0/21/25/f02125f52cfe6baa0c429403ec8b0508.jpg" ),
      new Pelicula("Los vengadores Endgame", 2018, "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/vengadores-endgame-salarios-actores-1562843145.jpg" ),
      new Pelicula("Batman vs Superman", 2015, "https://hips.hearstapps.com/es.h-cdn.co/fotoes/images/peliculas/batman-v-superman-el-amanecer-de-la-justicia/batman-v.-superman-el-amanecer-de-la-justicia-nuevo-trailer/86629613-1-esl-ES/Batman-v.-Superman-El-Amanecer-de-la-Justicia-Nuevo-trailer.jpg?crop=1xw:0.9221902017291066xh;center,top&resize=480:*" )
      
    ];
    this.fecha = new Date(2020, 8, 12);
   }

  ngOnInit(): void {
    console.log(this.peliculas);
  }

  ngDoCheck(){

  }

  cambiarTitulo(){
    this.titulo = "El titulo ha sido cambiado!!";
  }

  ngOnDestroy(){
    console.log("El componente se va a eliminar");
  }

  mostrarFavorita(event:any){
    this.favorita = event.pelicula;
  }

}
