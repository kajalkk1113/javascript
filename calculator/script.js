function calculate(){

    let bill=Number(document.getElementById("bill").value);
    let tip=Number(document.getElementById("tip").value);
    let person=Number(document.getElementById("person").value);

    if (bill === 0 || tip === 0 || person === 0) {
    alert("Please fill all the fields");
    return;
}

    let totalTip=(bill*tip)/100;
   let TipPerPerson=totalTip/person;
   let totalPerPerson=(bill+totalTip)/person;

   document.getElementsByTagName("p")[0].innerHTML=
     "Tip per person: ₹"+TipPerPerson.toFixed(2);
        document.getElementsByTagName("p")[1].innerHTML=
       "Total per person: ₹ "+ totalPerPerson.toFixed(2);

}
