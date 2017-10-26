import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { FormsModule } from '@angular/forms';

var firebaseConfig = {
  apiKey: "AIzaSyA8GjmJQV2FeyF--8P-LKSatIcAf6LXJ3o",
  authDomain: "attraction-6c456.firebaseapp.com",
  databaseURL: "https://attraction-6c456.firebaseio.com",
  projectId: "attraction-6c456",
  storageBucket: "attraction-6c456.appspot.com",
  messagingSenderId: "703890433565"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFirestoreModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
