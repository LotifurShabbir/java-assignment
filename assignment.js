
// FEET TO MILE CONVERSION START

function feetToMile(feet){
    if(feet<0){
        return "Enter a positive number !";
    }

    var mile = feet / 5280;
    return mile;
}

var result = feetToMile(-34);
console.log(result);

// END

//WOODCALCULATOR START

function woodCalculator(chair, table, bed){
    let woodForChair = chair * 1; 
    let woodForTable = table * 3;
     let woodForBed = bed * 5; 
     let totalWood = woodForChair + woodForTable + woodForBed; 
     return totalWood; 
   }; 
     let totalWoodNeed = woodCalculator(2, 2, 2);
     console.log(totalWoodNeed);

// END

// BRICKCALCULATOR START

function brickCalculator(tala) {
    if (tala <= 10) {
        var Eit = (tala * 15 * 1000);
        return Eit;
    }

    else if (tala > 10 && tala < 20) {
        var Eit = (10 * 15 * 1000) + (tala - 10) * 12 * 1000;
    return Eit;
}

    else if (tala => 20) {
    var Eit = (10 * 15 * 1000) + (10 * 12 * 1000) + (tala - 20) * 10 * 1000;
return Eit;
    }
}

var result = brickCalculator(30)
console.log(result);

// END

// FIND TINY START

function tinyFriend(names){

    var tiny = names[0];
    for(i = 0; i<names.length;i++)
    {
        var currentName = names[i];
        if(currentName.length<tiny.length)
        {
            tiny = currentName;
        }
    }
    return tiny;
}

result = tinyFriend(['Jhankar-vai','Tanvir-vai','Shadhin-vai', 'Rasel-vai', 'Srikanto-vai']);
console.log(result);

// END