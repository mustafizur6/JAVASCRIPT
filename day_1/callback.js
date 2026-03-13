
function fetchData(callback){
    console.log("Fetching Data.....");
    setTimeout(() => {
        callback("Data is loaded successfully")
    }, 2000);
}

function displayData(message){
    console.log(message)
}

fetchData(displayData) 