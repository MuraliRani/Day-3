//2.Display all the country flags:

var request = new XMLHttpRequest();
request.open("GET","https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var results = JSON.parse(request.response);
    for(let i = 0; i < results.length; i++){
        let country = results[i];
        console.log("Country Flag : "+country.flags.png); 
    }
   
}
