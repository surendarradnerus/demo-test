var request = new XMLHttpRequest();
request.open('get','https://raw.githubusercontent.com/rvsp/restcountries-json-data/master/res-countries.json',true);
request.send();
request.onload=function(){
    var data= JSON.parse(request.response);
    console.log(data);
    var res =[];
    for(let i=0;i<data.length;i++){
         res.push(data[i].population)
    }
    var result = res.reduce((acc,item)=>acc+item);
    console.log(result)
    }
