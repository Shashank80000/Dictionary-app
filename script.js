let searchInput = document.getElementById('searchInput'); 
let searchBtn = document.getElementById('searchBtn');

const getData = async (searchValue) => {
    let data = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchValue}`)
    let jsonData = await data.json()
    

    document.querySelector('.text').innerHTML = "";
    let div= document.createElement('div')
    div.classList.add('detail');
    div.innerHTML =`
                <h2></h2>
                <p> </p>
                <p> Word : <span>${jsonData[0].word}</span> </p>
                <p>Meaning : <span>${jsonData[0].meanings[0].definitions[0].definition}</span> </p>
                <p>Example : <span>${jsonData[0].meanings[0].definitions[0].example == undefined ? "Not found" : jsonData[0].meanings[0].definitions[0].example }</span> </p>
                <p>Synonyms : <span>${jsonData[0].meanings[0].synonyms[0] == undefined ? "Not found" : jsonData[0].meanings[0].synonyms[0] }  </span> </p>
                
                <a href=${jsonData[0].sourceUrls[0]} target= "_blank"> read more About the word </a> 
    `
    document.querySelector('.text').appendChild(div)


    console.log(jsonData)   
    console.log(jsonData[0].word)
    console.log(jsonData[0].meanings[0].definitions[0].definition)



}

    searchBtn.addEventListener('click', function(){
        let searchValue = searchInput.value;
        if(searchValue === ""){
            alert('Please enter a word')}
        else{
            getData(searchValue)
        }



    })
