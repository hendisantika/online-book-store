package com.hendisantika.onlinebookstore;

import org.junit.jupiter.api.Test;

//@SpringBootTest
class OnlineBookStoreApplicationTests {

    @Test
    void contextLoads() {
    }

    @Test
    void replaceChar() {
        String sentences = "wajahmu bagaikan rembulan";
        System.out.println("sentences = " + sentences);
        for (int i = 0; i < sentences.length(); i++) {
            int asciiValue = sentences.charAt(i);
            if (asciiValue == 32) {
                System.out.print((char) (asciiValue));
            } else {
                System.out.print((char) (asciiValue + 1));
            }
        }
    }
}
