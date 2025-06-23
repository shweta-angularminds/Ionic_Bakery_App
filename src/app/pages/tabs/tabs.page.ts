import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {
  IonTabs,
  IonTab,
  IonTabButton,
  IonIcon,
  IonLabel,
  IonTabBar,
} from '@ionic/angular/standalone';
import { home,location, cart, person, heart } from 'ionicons/icons';
import { addIcons } from 'ionicons';
@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [
    IonTabBar,
    IonLabel,
    IonIcon,
    IonTabButton,

    IonTabs,
    CommonModule,
    FormsModule,
  ],
})
export class TabsPage implements OnInit {
  constructor() {
     addIcons({ heart, cart, person, home,location });
  }

  ngOnInit() {}
}
