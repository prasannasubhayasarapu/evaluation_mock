function displayCar() {
    console.log("This is a Car")
}
function displayTruck(){
 console.log("This is a Truck")
}
function displayBike(){
 console.log("This is a Bike")
}
function vehicleInfo(vehicleCategory, callbackFn){
console.log(`VehicleCategory: ${vehicleCategory}`);
}
vehicleInfo("Car", displayCar)
vehicleInfo("Truck", displayTruck)
vehicleInfo("Bike", displayBike)
