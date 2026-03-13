let day ;
let date = new Date().getDay();

switch (date) {
    case 0:
        day = 'sunday';
        break;
    case 1: 
        day = "monday";
        break;
    case 2:
        day = "tuesday";
        break;
    case 3:
        day = "wednesday";
        break;
    case 4:
        day = 'thursday';
        break;
    case 5:
        day = 'friday';
        break;
    case 6:
        day = 'saturday';
        
}
console.log(day)


let a = 2;
let dayy;
switch(a){
    case 0:
        dayy = 'sunday';
        break;
    case 1:
        dayy = 'monday';
        break;
    case 2: 
        dayy = 'tuesday';
        break;
    case 3:
        dayy = 'wednesday'
        break;
    case 4:
        dayy = 'thursday'
    }
    console.log(dayy)

    let text;
    let x = 0;
    switch(x) {
        case 0:
            text = 'off'
            break;
        case 1:
            text = 'on';
            break;
        default : 
           text = 'no value found'
    }
    console.log(text)