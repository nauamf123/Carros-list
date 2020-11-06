import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class ProductsListTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", name: 'Produto A', description: 'Descrição Produto A', price: 10.99, quantity: 2 },
      { sku: "2", name: 'Produto B', description: 'Descrição Produto B', price: 4.99, quantity: 5 },
      { sku: "3", name: 'Produto C', description: 'Descrição Produto C', price: 3.75, quantity: 9 },
      { sku: "4", name: 'Produto D', description: 'Descrição Produto D', price: 8.34, quantity: 3 },
      { sku: "5", name: 'Produto E', description: 'Descrição Produto E', price: 6.69, quantity: 2 }
    ];
  }

  getColumns() {
    return {
      sku: {
        title: 'SKU',
        type: 'string',
        filter: true,
        width: '10%',
      },
      name: {
        title: 'Nome',
        type: 'string',
        filter: true,
        width: '15%',
      },
      description: {
        title: 'Descrição',
        type: 'string',
        filter: true,
        width: '20%',
      },
      price: {
        title: 'Preço',
        type: 'number',
        filter: true,
        width: '10%',
      },
      quantity: {
        title: 'Estoque',
        type: 'number',
        filter: true,
        width: '10%',
      },
    }
  };

}
