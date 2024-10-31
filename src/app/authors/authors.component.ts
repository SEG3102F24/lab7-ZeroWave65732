import { Component } from '@angular/core';
import {ActivatedRoute, Router, RouterOutlet} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-authors',
  standalone: true,
  imports: [
    RouterOutlet,
    NgIf,
    FormsModule
  ],
  templateUrl: './authors.component.html',
  styleUrl: './authors.component.css'
})

export class AuthorsComponent {
  author: any;
  noAuthor: any;

  constructor(private http: HttpClient) {}

  submit(value: string): void {
    this.http
      .get(`http://localhost:8080/books-api/authors/${value}`)
      .subscribe(
        (data: any) => {
          this.author = data;
          this.noAuthor = null;
        },
        (error) => {
          this.noAuthor = true;
        }
      );
  }
}
