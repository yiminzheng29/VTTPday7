package vttp.day7;

import java.io.Console;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

public class Books {
    public static void main(String[] args) {


        String fileName = "books.txt";
		List<String> list = new ArrayList<>();
        Console cons = System.console();
        String input = cons.readLine();
        String[] terms = input.split(" ");

		try (Stream<String> stream = Files.lines(Paths.get(fileName))) {
            

			//1. filter line 3
			//2. convert all content to upper case
			//3. convert it into a List
                list = stream
                        .map(String::toUpperCase)
                        .filter(line -> line.contains(terms[1].toUpperCase()))
                        .collect(Collectors.toList());

		} catch (IOException e) {
			e.printStackTrace();
		}
        if (terms[0].equals("Search")) {
            if (list.size() > 0) {

                for (int i = 0; i<list.size(); i++) {
                    System.out.printf("%d. %s\n", i+1, list.get(i));
                }
            } else {
                System.out.printf("Your search of %s produces no results", terms[1]);
            }
        }

        if (terms[0].equals("Count")) {
            if (list.size()>0) {
                System.out.printf("There are %d books with the phrase '%s' in the title.\n", list.size(), terms[1]);
            } else {
            System.out.println("There are no books");
            }
        }
    }

        }