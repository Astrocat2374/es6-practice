var color = ["blue", "green", "yellow"];

for(i = 0; i < color.length; i++){
    console.log("forLoop: ", color[i]);
}

color.forEach(function(element) {
    console.log("forEach: ", element);
})

function colorLoop(element) {
    console.log("detached forEach: ", element);
}

color.forEach(colorLoop);

//--------------------------------------------------------------------------------------------

var num = [1,2,3,4];
var sum = 0;

num.forEach(function(i) {
    sum += i;
})

console.log("forEach sum: ", sum);

//--------------------------------------------------------------------------------------------

function handlePosts() {
    var posts = [
      { id: 23, title: 'Daily JS News' },
      { id: 52, title: 'Code Refactor City' },
      { id: 105, title: 'The Brightest Ruby' }
    ];
    
    // refactor code below
    posts.forEach(function(i){
        console.log(i);
    })
}

//--------------------------------------------------------------------------------------------

var area = 0;

var images = [
    { height: 10, width: 30 },
    { height: 20, width: 90 },
    { height: 54, width: 32 }
];

var areas = [
    
];

images.forEach(function(i){
    area = i.height * i.width;
    console.log(area);
})