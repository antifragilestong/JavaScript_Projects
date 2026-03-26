
// KVPs function assignment



function my_Dictionary() {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"Labrador",
        Age: 3,
        Sound:"Bark!!"
    };
    document.getElementById("AnDictionary").innerHTML=Animal.Sound;
   
}

// KVPs function with delete command

function my_DictionaryDel() {
    var Animal = {
        Species:"Dog",
        Color:"Brown",
        Breed:"Labrador",
        Age: 3,
        Sound:"Bark!!"
    };
    delete Animal.Sound;
    document.getElementById("AnDictionaryDel").innerHTML=Animal.Sound;
}