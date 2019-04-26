package com.spring.springBoot.springApp;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RestController("/")
@CrossOrigin("http://localhost:4200")
public class NewAppController {


    StudentRepository repo;

    @Autowired
    public NewAppController(StudentRepository repo) {
        this.repo = repo;
    }

    Student s;
    @RequestMapping("hello")
    protected Student test(){
        Optional<Student> o = this.repo.findById("21");
        return o.get();
       // return s;
    }

    @RequestMapping("postMethod")
    public ResponseEntity postMethod(@RequestBody Student student){
        System.out.println("Student name"+student.getFirstName());
        System.out.println("Student name"+student.getLastName());
        this.s = student;
        this.repo.save(this.s);
        return new ResponseEntity(HttpStatus.ACCEPTED);
    }


}
