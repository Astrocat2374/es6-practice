var greeting = () => {
    console.log("hi");
}

greeting();

var battleToads = ["frogo", "toadi", "leonardo"];

var battleToadsSetence = battleToads.map((character) => {
    return character + " is from Battletoads";
})

console.log(battleToadsSetence);