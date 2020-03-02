'use strict';
    var itemimages =[
        'bag.jpg',
        'banana.jpg',
        'bathroom.jpg',
        'boots.jpg',
        'breakfast.jpg',
        'bubblegum.jpg',
        'chair.jpg',
        'clthulhu.jpg',
        'dog-duck.jpg',
        'dragon.jpg',
        'pen.jpg',
        'pet.jpg',
        'scissors.jpg',
        'shark.jpg',
        'sweep.png',
        'tauntaun.jpg',
        'unicorn..jpg',
        'usb.gif',
        'water.jpg',
        'win.jpg'
     ];
     // Globals 
     var leftItemimage = document.querySelector('#left_item_img');
     var centerItemimage = document.querySelector('#center_item_img');
     var rightItemimage = document.querySelector('#right_item_img');
     var items = [];
    //  var totalClick =1;
    function Item(name){
        this.name = name;
        this.urlimage = `img/${this.name}`;
        items.push(this);
    };
    function randomImages() { 
        var leftItemimage = items[randomNumber(0 , items.length-1 )];
        var centerItemimage = items[randomNumber(0 , items.length-1)];
        var rightItemimage = items[randomNumber(0 , items.length-1)];
        leftItemImage.setAttribute('src' , leftItemImage.urlimage);
        leftItemImage.setAttribute('alt' , leftItemimage.name);
        centerItemImage.setAttribute('src' , centerItemImage.urlimage);
        venterItemImage.setAttribute('alt' , centerItemimage.name);
        rightItemImage.setAttribute('src' , rightItemImage.urlimage);
        rightItemImage.setAttribute('alt' , rightItemimage.name);
        while (lefItemimage === rightItemimage ) {
            
        }
    }
    
    for (var i = 0; i < itemimages.length; i++) {
           new Item(itemimages[i]);
    } 
    console.log(items);
     randomImages();






    // randomHelper func :)
    function randomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }
   