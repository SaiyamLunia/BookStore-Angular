import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { Router } from '@angular/router';
import { BookService } from '../book.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.css']
})
export class CreateBookComponent implements OnInit {
  createForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private router: Router,
    private bookService: BookService,
    private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm = this.formBuilder.group({
      bookTitle: ['', Validators.required],
      bookAuthor: ['', [Validators.required]],
      bookIsbn: ['', Validators.required],
      bookPublishDate: ['', Validators.required],
      bookPrice: ['', [Validators.required, Validators.pattern("^\\d+(?:\\.\\d{1,2})?$")]],
      bookDescription: ['', Validators.required]
    });
  }

  book: Book = new Book();

  createBook() {
    if (!this.createForm.invalid) {
      this.bookService.createBooks(this.createForm.value).subscribe(data => {
        alert("Book created successfully.");
        this.router.navigate(['']);
      });
    }
    else{
      alert("Enter the Details First.");
      console.log("Error Shown here.")
    }
  }
}
