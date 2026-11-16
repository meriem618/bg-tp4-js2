
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
