import { Component, OnInit } from '@angular/core';
import { Stock } from '../stock-manage/stock-manage.component';

@Component({
  selector: 'app-stockForm',
  templateUrl: './stockForm.component.html',
  styleUrls: ['./stockForm.component.css']
})
export class StockFormComponent implements OnInit {
  stock: Stock;
  constructor() { }

  ngOnInit() {
    this.stock = new Stock(1, '第一只股票', 1.99, 3.5, '这是第一只股票', ['IT', '互联网'])
    
  }

}
