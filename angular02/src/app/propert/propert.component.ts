import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-propert',
  templateUrl: './propert.component.html',
  styleUrls: ['./propert.component.css']
})
export class PropertComponent implements OnInit {
  // property
  nome: string = "Geiso"
  sobrenome!: string
  idade: number = 33
  email: string = 'geiso_herrera@hotmail.com'
  cidade: string = 'Jaragua do Sul'
  enderecoImagem: string = "https://c.tenor.com/q7Kq9e6wueMAAAAM/vegeta-orange-justice.gif"
  padrao: string = '100'
  google: string = 'http://google.com'
  alvo: string = '_blank'
  tabela: string = "table table-bordered table-striped"

  constructor() { }

  ngOnInit(): void {
  }

}
