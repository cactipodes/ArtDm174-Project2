const baseURL = 'https://aunyce.com/artdm-174/proj/proj2/proj2-images/';
const slide = document.getElementsByClassName('slide');
//const coffeeImg = document.getElementsByClassName('image');
const coffee = ['coffee1.jpg', 'coffee2.jpg', 'coffee3.jpg', 'coffee4.jpg', 'coffee5.jpg', 'coffee6.jpg', 'coffee7.jpg', 'coffee8.jpg', 'coffee9.jpg', 'coffee10.jpg'];
let index = 0;
 /*
slide.onclick = function(e){  //error-group of items

    console.log('inside');

    e.preventDefault();
    index++;

    if(index >= coffee.length){
        index = 0;
    }

    image.src = baseURL + coffee[index];
    console.log(index);
}*/

//fitText(document.querySelector('h1'), 0.80);

for (var i = 0; i < slide.length; i++) {  //for each item in slide collection
    slide[i].onclick = function(e){  //assign on click function to slide collection item
        e.preventDefault();

        //console.log(e.target.src); //debug outputs
        //console.log(baseURL + coffee[index]);  //debug outputs

        if(e.target.src == baseURL + coffee[index]){
            index ++;
        }
        e.target.src = baseURL + coffee[index];  //this(current) slide src is equal to base url + coffee[index]
        index ++;  //increment once
        if(index >= coffee.length){  //if index is greater than length index is 0
            index = 0;
        }   
    }
}