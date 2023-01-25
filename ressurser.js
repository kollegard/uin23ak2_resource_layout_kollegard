const resources = [
    {
        category: "HTML",
        text: "HTML står for HyperText Markup Language, og er et strukturspråk som brukes for å lage strukturer til nettside- og applikasjonsgrensesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/html/"
            },
            {
                title: "HTML Living standard",
                url: "https://html.spec.whatwg.org/multipage/"
            },
            {
                title: "HTML.com Tutorials",
                url: "https://html.com/"
            },
        ]
    },
    {
        category: "CSS",
        text: "CSS står for Cascading StyleSheets, og brukes for å sette stilregler på HTML-elementer.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/css/"
            },
            {
                title: "W3C HTML & CSS Standards",
                url: "https://www.w3.org/standards/webdesign/htmlcss.html"
            },
            {
                title: "W3C CSS Validator",
                url: "https://jigsaw.w3.org/css-validator/"
            },
            {
                title: "CSS Tricks",
                url: "https://css-tricks.com/"
            },
        ]
    },
    {
        category: "JavaScript",
        text: "JavaScript er et scriptspråk basert på EcmaScript. JavaScript kjører direkte i nettleseren, og brukes ofte til å manipulere HTML og CSS i webgrensnesnitt.",
        sources: [
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/js/"
            },
            {
                title: "MDN Web Docs",
                url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "React",
        text: "React er et rammeverk bygget i JavaScript. React bruker komponenter og states for å lage en levende frontend.",
        sources: [
            {
                title: "React documentation",
                url: "https://reactjs.org/docs/getting-started.html"
            },
            {
                title: "W3Schools",
                url: "https://www.w3schools.com/REACT/DEFAULT.ASP"
            },
            {
                title: "How to read JavaScript Documentation",
                url: "https://www.youtube.com/watch?v=O3iR-CIufKM"
            },
        ]
    },
    {
        category: "Sanity and headless CMS",
        text: "Sanity er et headless CMS som står for innholdsadministrasjon. Innhold hentes inn i applikasjoner via GROQ-spørringer.",
        sources: [
            {
                title: "Sanity documentation",
                url: "https://www.sanity.io/docs"
            },
            {
                title: "OnCrawl: a beginners guide to headless CMS",
                url: "https://www.oncrawl.com/technical-seo/beginners-guide-headless-cms/"
            },
            {
                title: "Section.io: Getting started with Sanity CMS",
                url: "https://www.section.io/engineering-education/getting-started-with-sanity-cms/"
            },
        ]
    },
]

let show = ""
let navigation = ""

resources.map((meny) =>{
    navigation += `<button id="${meny.category.split(" ").join("")}" onclick="display(event)" class="inactive">${meny.category}</button>`
    //fikk veiledning av studass til display(event)
    //event er en innebygd funksjon, som tillater brukeren å se alt som skjer med det event står ved. 
    //man kan i tillegg lage stier, slik som i if-testen nedenfor

    //meny.category.split.join er hentet fra: https://www.geeksforgeeks.org/how-to-remove-spaces-from-a-string-using-javascript/
})

function display(event){
    show=""

    resources.map((cat) =>{
        document.querySelector(`#${cat.category.split(" ").join("")}`).classList.add("inactive")   
        //legger til denne linje slik at knapper som tidligere er aktive/ ikke inactive, nå blir inactive, 
        //slik at det kun er gjeldende fane som er blå.

        if (cat.category.split(" ").join("") === event.target.id) {
            //fikk veiledning av studass til å lage linjen over.
            show += `<ul><h2>${cat.category}</h2>
            <p>${cat.text}</p>`
                cat.sources.map(source => {show += 
                `<li><a href ="${source.url}">${source.title}</a></li>`})
            show += `</ul></article>`
            document.querySelector(`#${cat.category.split(" ").join("")}`).classList.toggle("inactive")
        }
})
document.getElementById("info").innerHTML = show
}

document.getElementById("nav").innerHTML = navigation