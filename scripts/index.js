// How many characters names start with "A"?

let charA = characters.filter(item => item["name"].charAt(0) == "A").length
console.log(`There are ${charA} characters whose names start with "A".`); // 168

//  How many characters names start with "Z"?

let charZ = characters.filter(item => item["name"].charAt(0) == "Z").length
console.log(`There are ${charZ} characters whose names start with "Z".`); // 8

//  How many characters are dead?

let charDead = characters.filter(item => item["died"].length > 0).length
console.log(`There are ${charDead} dead characters.`); // 553

//  Who has the most titles?

let titleSort = characters.sort( (a, b) => b["titles"].length - a["titles"].length)
let mostTitles = titleSort[0]["name"]
console.log(`The character with the most titles is ${mostTitles}.`) // Balon Greyjoy

//  How many are Valyrian?

let valyrianCount = characters.filter(i => i["culture"] == "Valyrian").length
console.log(`There are ${valyrianCount} characters who are Valyrian.`) 


//  What actor plays "Hot Pie" (and don't use IMDB)?
// find name equals hot pie and return playedBy field
let hotPie = characters.find(i => i.name == "Hot Pie").playedBy[0]
console.log(`The actor who plays "Hot Pie" is played by ${hotPie}.`)


// ## BONUS:
//  How many characters are not in the tv show?
let numCharNotInTv = characters.filter(item => item["tvSeries"].length == 1).length
console.log(`There are ${numCharNotInTv} characters not in the tv show.`) 

//  Produce a list characters with the last name "Targaryen"
let targaryanArray = []
let targaryens = characters.filter(item => item["name"].includes("Targaryen"))
let targaryanLoop = targaryens.forEach(item => targaryanArray.push(item["name"]))

console.log(`Here's a list of all the characters with the last name "Targaryen": ${targaryanArray}`)

//  Create a histogram of the houses (it's the "allegiances" key)

let allegiances = characters.filter(item => {
    if (item.allegiances.length > 0) {
        return item["allegiances"]
    }
})

// Stores an array of all the house links
let houseArray = []

let houses = allegiances.forEach(function(item) {
    houseArray.push(item.allegiances[0])
})


var counts = {};
houseArray.forEach(function(item) { counts[item] = (counts[item] || 0)+1; });

console.log(counts)
