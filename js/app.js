'use strict';
var itemimages = [
    'bag.jpg', 'banana.jpg',
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
var picRelod = [];
var totalClick = 0;
var leftItemimageRandom;
var rightItemimageRandom;
var centerItemimageRandom;
// Item = [];

function Item(name) {
    this.name = name.split('.')[0];
    this.urlimage = `images/${name}`;
    this.clicks = 0;
    this.views = 0;
    items.push(this);
};

for (var i = 0; i < itemimages.length; i++) {
    new Item(itemimages[i]);
}

function randomImages() {
    leftItemimageRandom = items[randomNumber(0, items.length - 1)];
    rightItemimageRandom = items[randomNumber(0, items.length - 1)];
    centerItemimageRandom = items[randomNumber(0, items.length - 1)];


    while (leftItemimageRandom === centerItemimageRandom || leftItemimageRandom === rightItemimageRandom || centerItemimageRandom === rightItemimageRandom || picRelod.includes(leftItemimageRandom) || picRelod.includes(rightItemimageRandom) || picRelod.includes(centerItemimageRandom)) {
        leftItemimageRandom = items[randomNumber(0, items.length - 1)];
        rightItemimageRandom = items[randomNumber(0, items.length - 1)];
        centerItemimageRandom = items[randomNumber(0, items.length - 1)];
        picRelod = [];

    }

    picRelod.push(leftItemimageRandom);
    picRelod.push(rightItemimageRandom);
    picRelod.push(centerItemimageRandom);




    leftItemimage.setAttribute('alt', leftItemimageRandom.name);
    leftItemimage.setAttribute('src', leftItemimageRandom.urlimage);
    leftItemimageRandom.views++;
    rightItemimage.setAttribute('alt', rightItemimageRandom.name);
    rightItemimage.setAttribute('src', rightItemimageRandom.urlimage);
    rightItemimageRandom.views++;
    centerItemimage.setAttribute('alt', centerItemimageRandom.name);
    centerItemimage.setAttribute('src', centerItemimageRandom.urlimage);
    centerItemimageRandom.views++;

}
randomImages();
gitItem();

// local storeg 
function setItem() {
    var write = JSON.stringify(items);
    localStorage.setItem('pic', write);
}

function gitItem() {
    var read = localStorage.getItem('pic');
    items = JSON.parse(read);
    randomImages();
}





console.log(picRelod);

var container = document.getElementById('container');
// console.log(ss);
container.addEventListener('click', clickItem);
function clickItem(e) {
    if (e.target.id === 'left_item_img') {
        randomImages();
        totalClick++;

        leftItemimageRandom.clicks = leftItemimageRandom.clicks + 1;
    }
    else if (e.target.id === 'center_item_img') {
        centerItemimageRandom.clicks = centerItemimageRandom.clicks + 1;
        // console.log(centerItemimageRandom);
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
        container.removeEventListener('click', clickItem);
        for (var i = 0; i < items.length; i++) {
            var urresultThings = document.getElementById("allshopitem");
            var liResult = document.createElement('li');
            urresultThings.appendChild(liResult);
            liResult.textContent = `${items[i].name} had ${items[i].clicks} clicks and was viewed ${items[i].views} time`;
        }

        chartView();
    }
    setItem();
}

// randomHelper func :)
function randomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function chartView() {
    // clicks, views, items 
    var names = [];
    var voted = [];
    var showed = [];
    // console.log(voted);

    for (let i = 0; i < items.length; i++) {
        var picName = items[i].name;
        names.push(picName);

        var picVoted = items[i].clicks;
        voted.push(picVoted);

        var picShowed = items[i].views;
        showed.push(picShowed);
    }

    // chart js code
    var ctx = document.getElementById('myChart').getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: names,
            datasets: [{
                label: '# of Votes',
                data: voted,
                label: '# of Showed',
                data: showed,
                backgroundColor: [
                    'rgba(255, 99, 132, 0.2)',
                    'rgba(54, 162, 235, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(153, 102, 255, 0.2)',
                    'rgba(255, 159, 64, 0.2)'
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                    'rgba(54, 162, 235, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(75, 192, 192, 1)',
                    'rgba(153, 102, 255, 1)',
                    'rgba(255, 159, 64, 1)'
                ],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}