import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from './book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class BookService {
  constructor(private http: HttpClient) { }
  // private userUrl = '/api';
  private userUrl = 'http://localhost:4567/'
public listBooks(){
  console.log("#######################################")
  return this.http.get<Book[]>(this.userUrl+'getAllBookDetails');
}
public editBooks(book: Book){
  return this.http.post(this.userUrl+'updateBook', JSON.stringify(book), httpOptions)
}
public createBooks(book: Book){ 
  console.log(book)
  return this.http.post(this.userUrl+'addBook', JSON.stringify(book), httpOptions);
}
public deleteBook(book: Book){
  return this.http.delete(this.userUrl+'deleteBook/' + book.bookIsbn, httpOptions);
}
}

