import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router, ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-book',
  templateUrl: './edit-book.component.html',
  styleUrls: ['./edit-book.component.css']
})
export class EditBookComponent implements OnInit {
  book: Book;
  editForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private bookService: BookService,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.queryParams.subscribe({
      next: (data: Book) => {
        this.book = data;
      }
    });

    this.editForm = this.formBuilder.group({
      bookTitle: [this.book.bookTitle, Validators.required],
      bookAuthor: [this.book.bookAuthor, Validators.required],
      bookIsbn: [this.book.bookIsbn, Validators.required],
      bookPublishDate: [this.book.bookPublishDate, Validators.required],
      bookPrice: [this.book.bookPrice, [Validators.required, Validators.pattern("^\\d+(?:\\.\\d{1,2})?$")]],
      bookDescription: [this.book.bookDescription, Validators.required]
    });
  }

  editBook(){
    this.bookService.editBooks(this.editForm.value)
    .subscribe(data => {
      alert("Book Updated successfully.");
      this.router.navigate(['']);
    });
      
  }
}
