let quotes = [];
let container = document.getElementById("qoute-container");
let text = document.getElementById('qoute-box')
let author = document.getElementById('qoute-author')
let twitter = document.getElementById('twitter')
let next = document.getElementById('next-qoute')


function displayQuotes(){
  qoute = quotes[Math.floor(Math.random() * quotes.length)];
  text.textContent =qoute.text;
  if(!qoute.author){
    author.textContent = 'Uknown'
  }else{
    author.textContent = qoute.author;
  }
  
}

 async function getQoutes(){
  const apiurl = 'https://type.fit/api/quotes';
  let response = await fetch(apiurl);
  quotes =  await response.json()
  try{
    displayQuotes()
  }catch(e){
    text.textContent = e;
    author.textContent =' '
  }
}

function tweetQuote(){
  let tweetUrl = `https://twitter.com/intent/tweet?text=${qoute.text} ${qoute.author}`;
  try{
    window.open(tweetUrl,'_blank');
  }catch(e){
    alert(e)
  }
}

next.addEventListener('click', getQoutes)
twitter.addEventListener('click', tweetQuote)