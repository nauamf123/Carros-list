import { Injectable } from '@angular/core';
import { AbstractTableData } from '../../shared/abstract.table.data';

@Injectable({
  providedIn: 'root'
})
export class CarrosTableService extends AbstractTableData {

  constructor() { super(); }

  getData() {
    return [
      { sku: "1", marca: 'Volkswagen', modelo: 'Gol', placa: 'fea-10231231', valor_fipe: 4190000, cor:'cinza'},
      { sku: "2", marca: 'Fiat', modelo: ' Uno', placa: 'sow-2945123', valor_fipe: 22990, cor:'azul'},
      { sku: "3", marca: 'Fiat', modelo: 'Palio', placa: 'rjo-0384213', valor_fipe:  5557600, cor:'preto'},
      { sku: "4", marca: 'Volkswagen', modelo: 'Fox/CrossFox', placa: 'ssd-8437284', valor_fipe: 4296900, cor:'amarelo'},
      { sku: "5", marca: 'Fiat', modelo: 'Siena', placa: 'skj-105053221234', valor_fipe: 20688, cor:'vermelho'},
      
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
      marca: {
        title: 'Nome',
        type: 'string',
        filter: true,
        width: '15%',
      },
      modelo: {
        title: 'Modelo',
        type: 'string',
        filter: true,
        width: '20%',
      },
     placa: {
        title: 'placa',
        type: 'string',
        filter: true,
        width: '10%',
      },
      valor_fipe: {
        title: 'valor_fipe',
        type: 'number',
        filter: true,
        width: '10%',
      },
     cor: {
        title: 'cor',
        type: 'string',
        filter: true,
        width: '10%',
    },
}
  };

}