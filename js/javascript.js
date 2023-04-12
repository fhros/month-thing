var month = prompt("Kuukausi tähä");
var answer = month.toLowerCase();

var woawa = document.getElementById("kuukausi");

if (answer === "joulukuu" || answer === "tammikuu" || answer === "helmikuu") {
    woawa.innerText = "talvi on tai jotai en tiiä";
} else if(answer === "maaliskuu" || answer === "huhtikuu" || answer === "toukokuu") {
    woawa.innerText = "kevät on kai siisti ehkä";
} else if(answer === "kesäkuu" || answer === "heinäkuu" || answer === "elokuu") {
    woawa.innerText = "kesä on siistii";
} else if(answer === "syyskuu") {
    woawa.innerText = "syksy on siisti";
} else {
    woawa.innerText = "Syötetty kuukausi ei kelpaa.";
}

console.log(woawa.innerText);