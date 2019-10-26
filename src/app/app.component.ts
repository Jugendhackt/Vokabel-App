import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'List',
      url: '/list',
      icon: 'list'
    },{
      title: 'David',
      url: '/david',
      icon: 'list'
    },
    {
      title: 'nikolai',
      url: '/nikolai-page',
      icon: 'create'
    },
    {
      title: 'Profil',
      url: '/kaspar',
      icon: 'list'
    },
    {
    title: 'Lorenz',
    url: '/lorenz-page',
    icon: 'Lorenz'
    },
    {
      title: 'jakob-page',
      url: '/jakob',
      icon: 'list'
    }
  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
