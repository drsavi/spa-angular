import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styles: [
  ]
})
export class DataBindingComponent {
  public contadorClique: number = 0;
  public urlImagem: string = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTP3v50SOEXIaKPhetzYbMfxwMsgWApntlyjZHvA6GShRFeQAZ8h1oJdC3UR0R8-ViL7cw&usqp=CAU";
  public nome: string = "";

  adicionarClique(){
    this.contadorClique++;
  }

  zerarContador(){
    this.contadorClique = 0;
  }

  KeyUp(event: any){
    this.nome = event.target.value;
  }
}

