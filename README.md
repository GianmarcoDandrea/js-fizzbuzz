### ESERCIZIO:
 Scrivi un programma che stampi in console i numeri da 1 a 100,
 ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”.  
 Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

### SOLUZIONE

Imposto il ciclo for da 0 a 100

Per ogni iterazione:

    SE ( il numero è divisibile per 5 AND per 3)   
    salvo parola FizzBuzz; 
    salvo il colore corrispondente;

    SE ( il numero è divisibile per 5  )   
    salvo parola Buzz; 
    salvo il colore corrispondente;

    SE ( il numero è divisibile per 3 )   
    salvo parola Fizz;
    salvo il colore corrispondente;

    ALTRIMENTI   
    scrivo il numero;
    salvo il colore corrispondente;

Salvo la variabile in uscita
fine ciclo  

Stampo il numero o la parola nella cella con in colore corrispondente


