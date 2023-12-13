import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent {
   
    title = 'authentication-angular';
    greeting: any = {};
    id: number = 0

    constructor(private http: HttpClient) {
   
        // Gets id and content from the application AuthenticationSpringBoot
        http.get('http://localhost:8080/resource').subscribe(data => this.greeting = data);
        
    }

}
