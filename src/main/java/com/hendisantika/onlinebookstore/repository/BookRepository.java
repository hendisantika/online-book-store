package com.hendisantika.onlinebookstore.repository;

import com.hendisantika.onlinebookstore.model.Book;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by IntelliJ IDEA.
 * Project : online-book-store
 * User: hendisantika
 * Email: hendisantika@gmail.com
 * Telegram : @hendisantika34
 * Date: 15/05/20
 * Time: 17.06
 */
public interface BookRepository extends JpaRepository<Book, Long> {
}
