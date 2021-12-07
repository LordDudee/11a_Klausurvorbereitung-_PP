/* DATENSTRUKTUREN */

/* Primitives */

// let a  // var - Definition oder Deklaration

// Wertzuweisung / Assignment
// a = true; // boolean (true, false)
// a = "Hallo"; // string
// a = 2; // number

// console.log(a);
// console.log(typeof a);

/* Arrays */

// let arr;
// arr = new Array();
// arr = [];
// arr = [false,true,false,true];
// arr = ["a","b","c"];

// // Index beginnt mit 0
// console.log(arr);
// console.log(arr[0]);
// console.log(arr[3]);
// console.log(arr.length);
// console.log(arr[arr.length-1]);
// console.log(arr[4]);

/* Array -Info, nicht klausurrelevant*/
// let arr = [];
// console.log(arr);
// arr.push("a");
// console.log(arr);
// arr.push("b");
// console.log(arr);
// arr.pop();
// console.log(arr);
// arr.pop();
// console.log(arr);

/* Objekte */

let obj = {};
obj     = {x:10, y:"Hallo"};

// console.log(obj);
// console.log(obj.x); // Dot-Sysntax
// console.log(obj.y);

obj = {
            val0: 10,
            sub1: {
                    val1: "hi",
                    val2: 2
            }
    }

    // console.log(obj);
    // console.log(obj.val0);
    // console.log(obj.sub1.val1);
    // console.log(obj.sub1.val2);
    // {{{{ ...}}}} --> nested object

    /*DOM*/
    // DOM  --> Modell der HTMl-Struktur
    // DOM --> Document Object Model
    // DOM --> nach dem Parsen / Laden der HTML-Seite  
    
    // console.log(document);
    // console.log(document.body);
    // console.log(document.body.children);
    // console.log(document.body.children[0]);
    // console.log(document.body.children[0].innerText);
    // document.body.children[0].innerText = "Hi";
    // console.log(document.getElementById("test"));
    // document.getElementById("test").innerHTML = "Hallo Text!"

    /* ENTSCHEIDUNGSSTRUKTUREN | CONTROL FLOW*/

    // let cond;

    // cond = true;
    // cond = (6 > 4);
    // cond = (6 < 4);
    // cond = (4 == 4); // Test auf Wert
    // // cond = (4 === "4"); // Test auf Wert UND Typ
    // console.log(cond);

    // if (cond) {
    //     console.log("Aussage wahr");
    // } else {
    //     console.log("Aussage falsch");
    // }


    // switch (key) {
    //     case value:
            
    //         break;
    
    //     default:
    //         break;
    // }


    /* FUNKTIONEN */

    // 1. Kapselung
    // test(); // Call
    // function test() { // Fkt.-Rumpf
    //    console.log("Testausgabe");
    // }

    // 2. return
    // console.log(test());
    // function test() { // Fkt.-Rumpf
    //      // .. macht irgend etwas
    //     return "Testausgabe" // Lieferung an die Stelle des calls
    //     console.log("Hallo"); // nach return Abbruch!
    //  }

    // 3. Parameter 
    // console.log(test("Milda"));
    //  function test(firstName) { // Fkt.-Rumpf
    //     // .. macht irgend etwas
    //    return "Hallo " + firstName; // Lieferung an die Stelle des calls
    // }


    // 4. Fkt-Call aus Funktionen

    // console.log(test("Ernesto"));
    // function test(firstName) // Parameter
    // {
    //     let ausgabe = grussformel() + firstName + "!";
    //     return ausgabe;  
    // }

    // function grussformel() {
    //     return "Hola, ";
    // // return "Hello, ";
    // }

// rechner()