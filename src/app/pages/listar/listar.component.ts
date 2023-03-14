import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
public mostrartarea: any = false; 
public lista = []; 
public  prueba:any;

  constructor() { }

  ngOnInit() {
    this.listartareas();
  }

  mostrartareas(){
    console.log("mostrar tarea");
    this.mostrartarea = true;
  }

  // guardartarea(){
  //   const formelenment = document.getElementById("guardartarea");
  //   let nombresave = document.getElementById("nombre").value;
  //   let apellidosave = document.getElementById("descripcion").value;
  //   let telefonosave = document.getElementById("estado").value;
  // }

  listartareas(){
    //const formelenment = document.getElementById("guardartarea");

    fetch('http://localhost:8080/getpersonas')
    .then(data => {
    return data.json();
    })
    .then(post => {
    console.log('post',post);
    this.lista = post;
    

        for (let i = 0; i < 3; i++) {
          this.lista = post[i];
          console.log(this.lista);
        }
    
    });

  }

}
