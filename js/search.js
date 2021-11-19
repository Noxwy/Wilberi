const search = function(){
    const clickserch = document.getElementById('button-addon2')
    const input = document.querySelector('.search-block > input')
    const searchBtn = document.querySelector('.search-block > button')
    console.log(searchBtn);

    input.addEventListener('input', (event) =>{
        clickserch.addEventListener('click',() =>{
            console.log(event.target.value);
        })
    })
}
search()