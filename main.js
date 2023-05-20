fetch ("https://rickandmortyapi.com/api/character?page=5")
    .then((res) => {  
        return res.json();
    })
    .then((data) => {
        let arr = data.results
        console(arr);
    })

let wrap = document.querySelector(".wrapper")

function addCard(block) {
    block.forEach(val => {
        let div = document.createElement('div');

        let img = document.createElement('img');
        img.src = val.image;

        let h1 = document.createElement('h1');
        h1.innerText = val.name; 

        div.append(img)
    })
}
