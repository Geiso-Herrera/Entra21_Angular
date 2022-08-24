import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  resultado!: number
  tamanho:number = 100


  constructor() { }

  ngOnInit(): void {
  }

  minhafunc() {
    alert("Qualquer coisa")
  }
  somar() {
    this.resultado = 1 + 2
  }
  subtrair(a: number, b: number) {
    this.resultado = a - b
  }
  multiplicar() {
    let a: number = Number(prompt("informe o primeiro numero"))
    let b: number = Number(prompt("informe o segundo numero"))
    this.resultado = a * b
  }
  dividir(a: number, b: number) {
    this.resultado = a/b
  }
  aumentar(){
    this.tamanho+=10
  }
  diminuir(){
    this.tamanho-=5
  }
}
