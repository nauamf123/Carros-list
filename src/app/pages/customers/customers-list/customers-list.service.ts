import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CustomersServiceList  extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { name: "João", cpf: '2021423123', rg: '2112412312',  dataNascimento: "20/04/1999" },
      { name: "Maria", cpf: '2021423123', rg: '2112412312',  dataNascimento: "10/12/1940" },
      { name: "Allan", cpf: '2021423123', rg: '2112412312',  dataNascimento: "09/10/2001" },
    ];
  }

  getColumns() {
    return {
      name: {
        title: 'Nome',
        type: 'string',
        filter: true,
        width: '15%',
      },
      cpf: {
        title: 'cpf',
        type: 'string',
        filter: true,
        width: '20%',
      },
      rg: {
        title: 'Rg',
        type: 'string',
        filter: true,
        width: '10%',
      },
      dataNascimento: {
        title: 'DataNascimento',
        type: 'date',
        filter: true,
        width: '10%',
      },
    }
  };

}
