import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  headElements = ['Index','ID', 'Title', 'Author', 'Description', 'Price','Publish Date','Action']
  books: Book[];
  constructor(private router: Router, private bookService: BookService) { }

  ngOnInit() {
    this.bookService.listBooks()
      .subscribe( data => {
        console.log(data);
        this.books = data;
      });
    }

    deleteBook(book: Book): void {
      this.bookService.deleteBook(book)
        .subscribe( data => {
          this.books = this.books.filter(u => u !== book);
        })
    }

    editBook(book: Book) {
      this.router.navigate(['edit'],{queryParams: book, skipLocationChange: true});
    }

}
