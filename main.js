let obj , f , n = "";

obj = {
    car : [
    {
        "companyName" : "Toyota",
        "carName" : ['Toyota Avalon' , 'Toyota Camry' , 'Toyota Corolla']
    },

    {
        "companyName" : "Honda",
        "carName" : ['Honda All New City' , 'Honda WR-V' , 'Honda Jazz']
    },

    {
        "companyName" : "Tesla",
        "carName" : ['Tesla Model Y' , 'Tesla Model X' , 'Tesla Model S']
    }

    ]
};

for ( f in obj.car){
    n +="<h1>" + obj.car[f].companyName+"</h1>";

    for (j in obj.car[f].carName){

        n +=obj.car[f].carName[f]+"<br>";
    }
}

document.getElementById("one").innerHTML = n;