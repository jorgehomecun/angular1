import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent {

  mostrar = true;

  frase: any = {
    mensaje: 'Bienvenidos a todos',
    autor: 'Ben Parker'
  };

  personajes: String[] = ['thor', 'venom', 'america'];
}
