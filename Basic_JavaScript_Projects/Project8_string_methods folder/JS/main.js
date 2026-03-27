



// show a full concatenated sentence using the concat() method.


function full_Sentence() {

    var part_1 = "I have ";
    var part_2 = "made a concatenated function ";
    var part_3 = "to complete into " ;
    var part_4 = "a full sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML=whole_sentence;
}


function slice_Method() {
    var Sentence = "All work and no play makes Johnny a dull lazy boy.";
    var bitwords = Sentence.slice(27,40);
    document.getElementById("section").innerHTML=bitwords;
}
   
function string_Method() {
    let Xs = "182";
    document.getElementById("ToString").innerHTML = Xs.toString();
    console.log(Xs.toString());
}

function precision_Method() {
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML=X.toPrecision(10);
}


