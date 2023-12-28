var quoteList = [{
    "quote":"Do not take life too seriously. You will not get out alive.",
    "author":"--Elbert Hubbard"},
    {
        "quote":"The best revenge is massive success.",
        "author":"--Frank Sinatra"
    },
    {   "quote":"It's not what happens to you, but how you react to it that matters.",
    "author":"--Epictetus"
    }
      
]
function getQuote()
{
    var num = Math.round(Math.random()*quoteList.length)
    document.getElementById("quote").innerHTML=quoteList[num].quote;
    document.getElementById("author").innerHTML=quoteList[num].author;
}




























