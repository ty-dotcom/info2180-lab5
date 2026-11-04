function handleLookup(){
    const lookupBtn = document.querySelector('#lookup');
    lookupBtn.addEventListener('click', (event)=>{
        event.preventDefault();        
        const input = document.querySelector('#country');
        const country = input.value;
        const result = document.querySelector('#result');
        searchCountry(country, result);
    })
}

function searchCountry(country, container){
    const url = `world.php?country=${encodeURIComponent(country)}`;
    fetch(url)
        .then(res => {
            if (!res.ok){
                throw new Error("Country not found");
            }
            return res.text();
        })
        .then(data => {
            container.innerHTML = data;
        })
        .catch(() => {
            container.innerHTML = "<h4 class='not-found'> COUNTRY NOT FOUND. <h4>";
        });
}

window.onload = function(){
    handleLookup();
}
