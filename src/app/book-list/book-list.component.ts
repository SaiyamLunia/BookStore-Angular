import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private bookService: BookService) { }
  bookArray = [];
  showDeletedMessage: boolean;
  searchText: string = "";

  ngOnInit() {
    // this.bookService.listBooks().subscribe(
    //   list => {
    //     this.bookArray = list.map(item => {
    //       return {
    //         $key: item.key,
    //         ...item.payload.val()
    //       };
    //     });
    //   });
  }

  onDelete($key) {
    if (confirm('Are you sure to delete this record ?')) {
      this.bookService.deleteBook($key);
      this.showDeletedMessage = true;
      setTimeout(() => this.showDeletedMessage = false, 3000);
    }
  }


  filterCondition(customer) {
    return customer.fullName.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1;
  }
// data = [
//   {
//     bookIsbn: 1,
//     bookTitle: "Title1",
//     bookAuthor: "Author1",
//     bookCategory: "Game",
//     bookPrice: 500
//   },
//   {
//     bookIsbn: 2,
//     bookTitle: "Title2",
//     bookAuthor: "Author2",
//     bookCategory: "Horror",
//     bookPrice: 125
//   }
// ];

//   settings = {
//     columns: {
//       bookIsbn: {
//         title: 'ID'
//       },
//       bookTitle: {
//         title: 'TITLE'
//       },
//       bookAuthor: {
//         title: 'AUTHOR'
//       },
//       bookCategory: {
//         title: 'CATEGORY'
//       },
//       bookPrice: {
//         title: 'PRICE'
//       }
//     }
//   };
}
