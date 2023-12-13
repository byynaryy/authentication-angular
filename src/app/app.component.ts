import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'authentication-angular';
  greeting: any = {};
  id: number = 0;
  str: any = "";

  constructor(private http: HttpClient) {
   
    // Gets a plain text from the application EnableCorsClassMethodLevelSpringMvc
    //http.get('http://localhost:8080/api/v1/cors/method/level',  { responseType: 'text' }).subscribe(data => console.log(data));
    //http.get('http://localhost:8080/api/v1/cors/method/level', {responseType: 'text'}).subscribe(data => this.str = data);

    // Gets id and content from the application AuthenticationSpringBoot
    http.get('http://localhost:8080/resource').subscribe({next: (data) => console.log(data)});
    //http.get('http://localhost:8080/resource').subscribe(data => this.greeting = data);
    
    // Gets user or null ( If Spring Security is not set or the user is not authenticated) from the the application AuthenticationSpringBoot
    //http.get('http://localhost:8080/user').subscribe({next: (data) => console.log(data)});
  }

}
