//3.print all countries names, regions,sub-region and populations:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var results = JSON.parse(request.response);
    for(let i = 0; i < results.length; i++){
        let country = results[i];
        console.log("Country Names : "+country.name.common); 
        console.log("Regions : "+country.region); 
        console.log("subRegion : "+country.subregion); 
        console.log("Population : "+country.population);
    }
   
}
