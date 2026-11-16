// Tableau des personnes
const persons = [
    { nom: "nom-1", prenom: "prenom-1", points: 5 },
    { nom: "nom-2", prenom: "prenom-2", points: 10 },
    { nom: "nom-3", prenom: "prenom-3", points: 15 }
];

// Compteur du nombre de lignes
let lignes = 0;
// Compteur du total des points
let total_points = 0;
// Initialisation du tableau
init();

function init() {

    // Parcourir le tableau persons
    for (const person of persons) {

        // Insérer chaque personne
        doInsert(person.nom, person.prenom, person.points);
    }
}
function doInsert(nom, prenom, points) {

    // Incrémenter le compteur
    lignes++;

    // Ajouter les points à total_points
    total_points += points;

    // Récupérer le numéro de la ligne
    let num = lignes;

    // Appeler la fonction qui insère la ligne
    doInsertRowTable(num, nom, prenom, points);

    // Actualiser le résumé
    update_summary();
}

function doNewData() {

    // Récupérer les éléments HTML
    const elt_nom = document.getElementById("form_nom");
    const elt_prenom = document.getElementById("form_prenom");
    const elt_points = document.getElementById("form_points");

    // Récupérer les valeurs saisies
    let nom = elt_nom.value;
    let prenom = elt_prenom.value;
    let points = parseInt(elt_points.value);

    // Vérifier les données saisies
if (nom.trim() === "" || prenom.trim() === "" || isNaN(points)) {

    window.alert("Formulaire incomplet !");

} else {

    // Appeler doInsert avec les nouvelles données
    doInsert(nom, prenom, points);

    // Insérer les données dans persons
    persons.push({ nom: nom, prenom: prenom, points: points });

    // Vider les champs
    elt_nom.value = "";
    elt_prenom.value = "";
    elt_points.value = "";
}
}

function doInsertRowTable(num, nom, prenom, points) {

    // Récupérer l'élément table
    const table = document.querySelector("table");

    // Créer une nouvelle ligne
    const row = document.createElement("tr");

    // Affecter la classe à la ligne
    row.setAttribute("class", "row");

    // Créer les cinq colonnes
    const col1 = document.createElement("td");
    const col2 = document.createElement("td");
    const col3 = document.createElement("td");
    const col4 = document.createElement("td");
    const col5 = document.createElement("td");

    // Remplir le contenu des colonnes
    col1.innerText = num;
    col2.innerText = nom;
    col3.innerText = prenom;
    col4.innerText = points;

    // Créer une checkbox dans la dernière colonne
    const checkbox = document.createElement("input");
    checkbox.setAttribute("type", "checkbox");
    col5.append(checkbox);

    // Affecter les classes CSS
    col1.setAttribute("class", "col_number");
    col2.setAttribute("class", "col_text");
    col3.setAttribute("class", "col_text");
    col4.setAttribute("class", "col_text");
    col5.setAttribute("class", "col_chkbox");

    // Ajouter les colonnes à la ligne
    row.append(col1);
    row.append(col2);
    row.append(col3);
    row.append(col4);
    row.append(col5);

    // Ajouter la ligne au tableau
    table.querySelector("tbody").append(row);
}
function update_summary() {

    document.getElementById("p1").innerText =
        lignes + " ligne(s)";

    document.getElementById("p3").innerText =
        "Totale point(s)= " + total_points;
}
function consoleTableau() {
    console.log(persons);
}