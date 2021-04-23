
var searchInput = document.getElementById("search");
var searchButton = document.getElementById("search-button");

function search(){
    var searchInput = document.getElementById("search");
    var result = searchInput.value;
    if (result == "google")
        window.alert("Yandex круче. Но это не точно");
    window.alert(result);   
}
 
searchButton.addEventListener("click", search); 


// Задание 5
 let cat = {  
    name: "John",  
    age: 5       
  };

  let dog = {  
    name: "Job",  
    age: 4       
  };

  let hamster = {  
    name: "Jo",  
    age: 3       
  };
  let pets = [cat, dog, hamster];

  function grab() {
    var animal = pets[0].name;
    window.alert(animal);
  }

  searchButton.addEventListener("click", grab);


  /* Задание 6

  function superSum(a, b) { 
    alert(a + b);
  }

  superSum (76, 6);
  */



  /* Задание 7

function max(arr){
    var max = arr[0];
    for(var i=1; i<arr.length; i++){
      if(arr[i] > max){
        max = arr[i];   
      }
     }
   alert(max);
   }

   max([4, 7, 9, 5, 1, 75, 53, 30, 76, 89]);

   function min(arr){
    var min = arr[0];
    for(var i=1; i>arr.length; i++){
      if(arr[i] < min){
        min = arr[i];   
      }
     }
   alert(min);
   }

   min([4, 7, 9, 5, 1, 75, 53, 30, 76, 89]);
*/


//Задание 8
let a = 1, b = 2;
a = a ^ b;
b = a ^ b;
a = a ^ b;
    
console.log('a is now:', a);
console.log('b is now:', b);

let numArray = [3, 6, 8, 9, 29, 69, 85];

function findMax(numArray) {
    var max = numArray[0];
    for(var i=1; i<numArray.length; i++) {
        if(numArray[i] > max) {
            max = numArray[i];   
        }
    }
    
    return max;
}

function showFindMax(numArray) {
    alert(findMax(numArray));   
}

window.setTimeout(showFindMax, 5000, numArray)
