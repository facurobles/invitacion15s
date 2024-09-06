import { Component } from '@angular/core';

@Component({
  selector: 'app-regalo',
  templateUrl: './regalo.component.html',
  styleUrls: ['./regalo.component.css']
})
export class RegaloComponent {

  estado = false

  cambiarEstado(){
    this.estado = !this.estado
  }

}
