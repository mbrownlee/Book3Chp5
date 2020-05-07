const monthlyRainfall = [23, 13, 27, 20, 20, 31, 33, 26, 19, 12, 14, 12, 10]

const totalRainfall = monthlyRainfall.reduce((accumulator, currentValue) => (accumulator + currentValue), 0
)

console.log(totalRainfall)

const words = ["The", "quick", "brown", "fox", "jumped", "over", "the", "lazy", "dog"]

const sentence = words.reduce((accumulator, currentValue) => 
(accumulator + " " + currentValue ))

console.log(sentence)

console.log("I did it!")