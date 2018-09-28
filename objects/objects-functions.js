let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}


let otherBook = {
    title: '1956',
    author: 'George Orwell',
    pageCount: 365
}

// const getSummary =((book) => console.log(`${book.title} and ${book.author}`))



let getSummary = function(book){
    return {
        summary: `${book.title} and ${book.author}`,
        pageCountSummary: `${book.title} and ${book.pageCount}`
    }
}

let bookSummary =  getSummary(myBook)
console.log(bookSummary.summary)



let convertFahrenheit =function(fahrenheit){
    return {
        fahrenheit,
        kelvin: (fahrenheit + 458.67)*(5 / 9),
        celsius: (fahrenheit - 32)*(5/9)
    }
}
let temps = convertFahrenheit(74)
console.log(temps.kelvin)