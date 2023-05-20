fetch ("https://rickandmortyapi.com/api/character?page=5")
    .then((res) => {  
        return res.json();
    })
    .then((data) => {
        let arr = data.results
        console(arr);
    })
