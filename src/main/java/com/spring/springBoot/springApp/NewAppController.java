package com.spring.springBoot.springApp;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController("/")
@CrossOrigin("http://localhost:4200")
public class NewAppController {

    @RequestMapping("hello")
    protected String test(){

        return "Bulli";
    }
}
