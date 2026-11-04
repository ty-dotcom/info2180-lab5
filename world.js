function handleLookup(){

    const countrylookupBtn = document.querySelector('#lookup');
    const citylookupBtn = document.querySelector('#lookup-cities');
    const result = document.querySelector('#result');
    const input = document.querySelector('#country');

    countrylookupBtn.addEventListener('click', (event)=>{
        event.preventDefault();        
        let country = input.value;
        searchCountry(country, '', result);
    });
    citylookupBtn.addEventListener('click', (event)=>{
        event.preventDefault();        
        let country = input.value;
        searchCountry(country, 'cities', result);
    });
}

function searchCountry(country, lookup, container){
    const url = `world.php?country=${encodeURIComponent(country)}&lookup=${encodeURIComponent(lookup)}`;
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
