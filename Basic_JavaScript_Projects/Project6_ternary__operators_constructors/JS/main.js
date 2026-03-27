
// Ternary Operator Constructors assignment


function Ride_Function() {
    var HeightTall, Can_ride;
    HeightTall = document.getElementById("Height").value;
    Can_ride = (HeightTall < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {
    var EnAge, Can_Vote;
    EnAge = document.getElementById("Age").value;
    Can_Vote = (EnAge >= 18) ? "You can ":"You are not old enough to ";
    document.getElementById("Votenow").innerHTML = Can_Vote + "vote.";
}

// Keywords, 'this and new' used in function. Constructors
function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}
var Jack = new Vehicle("Dodge","Viper",2020,"Red");
var Emily = new Vehicle("Jeep","Trail Hawk", 2019,"White and Black");
var Erik = new Vehicle("Ford","Pinto",1971,"Mustard");

function Ncarfunction() {
    document.getElementById("Keyw_and_Construct").innerHTML =
    "Erik drives a "+Erik.Vehicle_Color+"-colored "+Erik.Vehicle_Model+
    " manufactured in "+Erik.Vehicle_Year;
}

function Enterfunction() {
    var Owname
    Owname = document.getElementById("New_and_This").value;
    document.getElementById("Ownamecar").innerHTML =
    Owname.Vehicle_Color+" "+Owname.Vehicle_Model+
    " manufactured in "+Owname.Vehicle_Year;
}

// A nested function assignment

function add_gift() {
    var Received = document.getElementById("Gift").value;
    var Agift = "Erik has a Pinto and a ";
            function more_car(str) {
            Agift= Agift + str;
            }

    more_car(Received);
    document.getElementById("Nested_Function").innerHTML = Agift;
  
}