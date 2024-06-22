import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar } from '@ionic/angular/standalone';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.page.html',
  styleUrls: ['./products-list.page.scss'],
  standalone: true,
  imports: [ CommonModule, FormsModule, IonicModule]
})
export class ProductsListPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
