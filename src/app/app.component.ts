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
      title: 'HOME',
      url: '/david',
      icon: 'home'
    },
    {
      title: 'EINSTELLUNGEN',
      url: '/nikolai-page',
      icon: 'settings'
    },
    {
      title: 'QUIZ',
      url: '/quiz-page',
      icon: 'help-circle'
    },
    {
      title: 'FRAGEN',
      url: '/fragen',
      icon: 'clipboard'
    },
    {
      title: 'EINSTELLUNGEN',
      url: '/nikolai-page',
      icon: 'settings'
    },
    {
      title: 'PROFIL',
      url: '/kaspar',
      icon: 'contact'
    },
    {
      title: 'jakob-page',
      url: '/jakob',
      icon: 'list'
    },
    {
      title: 'Freunde',
      url: '/arthur',
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
