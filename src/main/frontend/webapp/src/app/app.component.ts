import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Student } from './domain/student';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'webapp';
  str: string;
  id: string;
  student: Student;
  fname: string;
  lname: string;
  flag: boolean;
  constructor(private http: HttpClient) {
    this.student = {};
  }

  ngOnInit() {
    this.flag = false;
    this.student.id = 'test';
    //'http://localhost:8080/hello'
    // console.log(
    //   this.http
    //     .get<Student>('https:fantasy.premierleague.comdrfbootstrap-static.json')
    //     .subscribe(res => {
    //       console.log(JSON.stringify(res));
    //       this.student = JSON.parse(JSON.stringify(res));
    //       this.fname = this.student.firstName;
    //       this.lname = this.student.lastName;
    //       this.str = this.lname;
    //     })
    // );
    let header = new Headers({ 'Content-Type': 'application/json' });
    console.log(
      this.http
        .get('https://fantasy.premierleague.com/drf/element-summary/1')
        .subscribe(res => {
          this.str = JSON.stringify(res);
        })
    );
  }

  onClick() {
    this.flag = true;
    // this.student.id = 'billu';
    // this.student.firstName = this.fname;
    // this.student.lastName = this.lname;

    this.http
      .post('http://localhost:8080/postMethod', this.student)
      .subscribe(
        res => console.log(JSON.stringify(res)),
        error => console.log(error)
      );

    this.fname = '';
    this.lname = '';
  }
}
