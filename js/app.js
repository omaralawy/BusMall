'use strict';
var itemimages = [
    'bag.jpg',
    'banana.jpg',
    'bathroom.jpg',
    'boots.jpg',
    'breakfast.jpg',
    'bubblegum.jpg',
    'chair.jpg',
    'cthulhu.jpg',
    'dog-duck.jpg',
    'dragon.jpg',
    'pen.jpg',
    'pet-sweep.jpg',
    'scissors.jpg',
    'shark.jpg',
    'sweep.png',
    'tauntaun.jpg',
    'unicorn.jpg',
    'usb.gif',
    'water-can.jpg',
    'wine-glass.jpg'
];
// Globals 
var leftItemimage = document.querySelector('#left_item_img');
var centerItemimage = document.querySelector('#center_item_img');
var rightItemimage = document.querySelector('#right_item_img');
var items = [];
var totalClick =0;
var leftItemimageRandom;
var rightItemimageRandom;
var centerItemimageRandom;
function Item(name) {
    this.name = name;
    this.urlimage = `images/${this.name}`;
    items.push(this);
    this.clicks =0;
    this.views =0;
};

function randomImages() {
    leftItemimageRandom = items[randomNumber(0, items.length - 1)];
    rightItemimageRandom = items[randomNumber(0, items.length - 1)];
    centerItemimageRandom = items[randomNumber(0, items.length - 1)];
    while (leftItemimageRandom === centerItemimageRandom || leftItemimageRandom === rightItemimageRandom || centerItemimageRandom === rightItemimageRandom) {
        leftItemimageRandom = items[randomNumber(0, items.length - 1)];
        rightItemimageRandom = items[randomNumber(0, items.length - 1)];
        centerItemimageRandom = items[randomNumber(0, items.length - 1)];
    }


    leftItemimage.setAttribute('alt', leftItemimageRandom.name);
    leftItemimage.setAttribute('src', leftItemimageRandom.urlimage);
    leftItemimageRandom.views++;
    rightItemimage.setAttribute('alt', rightItemimageRandom.name);
    rightItemimage.setAttribute('src', rightItemimageRandom.urlimage);
    rightItemimageRandom.views++;
    centerItemimage.setAttribute('alt', centerItemimageRandom.name);
    centerItemimage.setAttribute('src', centerItemimageRandom.urlimage);
    centerItemimageRandom.views++;
    while (leftItemimageRandom === centerItemimageRandom || leftItemimageRandom === rightItemimageRandom || centerItemimageRandom === rightItemimageRandom) {
        leftItemimageRandom = items[randomNumber(0, items.length - 1)];
        rightItemimageRandom = items[randomNumber(0, items.length - 1)];
        centerItemimageRandom = items[randomNumber(0, items.length - 1)];
    }
}


for (var i = 0; i < itemimages.length; i++) {
    new Item(itemimages[i]);
}
// console.log(items);
randomImages();
//  just test switch
// switch clickItem(e) {
//     case e.target.id === 'left_item_img' :
//         randomImages();
//         case e.target.id === 'right_item_img' :
//         randomImages();
//         case e.target.id === 'center_item_img' :
//         randomImages();
// };


var ss = document.getElementById('rr');
// console.log(ss);
ss.addEventListener('click', clickItem);
function clickItem(e) {
    if (e.target.id === 'left_item_img') {
        randomImages();
        totalClick++;
        
        leftItemimageRandom.clicks = leftItemimageRandom.clicks + 1;
    }
    else if (e.target.id === 'center_item_img') {
        centerItemimageRandom.clicks = centerItemimageRandom.clicks + 1;
        totalClick++;
        randomImages();
    }
    else if (e.target.id === 'right_item_img') {
        rightItemimageRandom.clicks = rightItemimageRandom.clicks + 1;
        totalClick++;
        randomImages();
    }
    if (totalClick === 25) {
        leftItemimage.remove();
        rightItemimage.remove();
        centerItemimage.remove();
        ss.removeEventListener('click', clickItem);
        for (var i = 0; i < items.length ; i++) {
            var urresultThings = document.getElementById("allshopitem");
            var liResult = document.createElement('li');
            urresultThings.appendChild(liResult);
            liResult.textContent = `${items[i].name} had ${items[i].clicks} clicks and was viewed ${items[i].views} `;
        }
 
    }
}




// randomHelper func :)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
