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
        let div = document.createElement('div')

    })
}
