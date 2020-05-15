package com.hendisantika.onlinebookstore.controller;

import com.hendisantika.onlinebookstore.model.Book;
import com.hendisantika.onlinebookstore.repository.BookRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by IntelliJ IDEA.
 * Project : online-book-store
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 15/05/20
 * Time: 17.08
 */
@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping(path = "books")
public class BookController {

    private byte[] bytes;

    @Autowired
    private BookRepository bookRepository;

    @GetMapping("/get")
    public List<Book> getBooks() {
        return bookRepository.findAll();
    }
}
