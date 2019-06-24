import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
// import {animate, state, style, transition, trigger} from '@angular/animations';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
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
      if(confirm("Are you sure you want to delete the Book with ISBN: "+book.bookIsbn+" ?")){
      this.bookService.deleteBook(book)
        .subscribe( data => {
          this.books = this.books.filter(u => u !== book);
        })
      }
    }

    editBook(book: Book) {
      this.router.navigate(['edit'],{queryParams: book, skipLocationChange: true});
    }

}
