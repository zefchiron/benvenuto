/* Test nombre de clients */
$(function() {
    $("#nbreClient").change(function() {
        let max = 12;
        let min = 1;
        $('#checkAlertNbreClient').html(' ');
        $('#nbreClient').removeClass("borderred");
        if ($('#nbreClient').val() > max) {
            $('#nbreClient').val('').addClass("borderred");
            $('#checkAlertNbreClient').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Pas plus de 12 personnes.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        } else if ($('#nbreClient').val() < min) {
            $('#nbreClient').val('').addClass("borderred");
            $('#checkAlertNbreClient').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Pas moins de 1 personne.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        }
    });
});

/* Test sur le nom */
$('#nom').change(function() {
    let cbon = true
    let nom = $('#nom').val();
    let tab = nom.split('')

    for (let i = 0; i < tab.length; i++) {
        let lettreencours = parseInt(tab[i]);
        if (!isNaN(lettreencours)) {
            cbon = false
        }
    }

    $('#checkAlertNom').html('');
    if (cbon) {

        $("#nom").removeClass("borderred");
    } else {

        $('#nom').addClass("borderred");
        $('#checkAlertNom').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Veuillez ne pas saisir de nombre dans votre Nom! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
    }
});

/* Test sur le Prenom */
$('#prenom').blur(function() {
    let cbon = true
    let prenom = $('#prenom').val();
    let tab = prenom.split('');
    for (let i = 0; i < tab.length; i++) {
        let lettreencours = parseInt(tab[i])
        if (!isNaN(lettreencours)) {
            cbon = false
        }

    }
    $('#checkAlertPrenom').html('');
    if (cbon) {

        $("#prenom").removeClass("borderred");
    } else {
        $('#prenom').addClass("borderred");
        $('#checkAlertPrenom').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Veuillez ne pas saisir de nombre dans& votre Prenom! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
    }
});

/* Sbmit */
$('#formulaire').on('submit', function(e) {
    let nom = $('#nom').val(); /* recup du nom */
    let prenom = $('#prenom').val(); /* recup du prenom */
    /* recup des bouton radio */
    let interieur = $('#interieur').prop('checked'); /* true / false */
    let terrasse = $('#terrasse').prop('checked'); /* true / false */
    let pergolla = $('#pergolla').prop('checked'); /* true / false */

    let nbreClient = $('#nbreClient').val(); /* recup du nombre de clients */
    let horaire = $('#horaire').val(); /* recup de l'horaire */
    let bouteille = $('#bouteille').val(); /* recup de la value du vin choisi */
    let confirmation = $('#confirmation').prop('checked'); /* true / false */

    /* Changement du H1 : "Reservation" par "Confirmation" dans le caroussel */
    $('h1').text("Confirmation");
    $('#username').text(nom + ' ' + prenom); /* modifie dans le menu le userName*/

    /* Retire tous les enfants de la div #formulaire */
    $("#formulaire").children().remove();
    /* Nouveaux enfant de la div #formulaire */
    $("#formulaire").append("<h2 class='fw-bold  fs-1 m-5'>R??servation ??ffectu??e</h2>");
    $("#formulaire").append("<div class='fw-bold  fs-1 m-5'> M.Mme. <span id='nomUser'> </span> <span id='prenomUser'> </span> , vous avez r??serv?? une table en <span id='zoneUser'>{zone choisie}</span> de <span id='nombreUser'>{nb de personne}</span> personne(s) pour <span id='heureUser'>{heure}</span>. Vous avez chois : <span id='choix1User'>{avec choisi / n'avez pas choisi}</span>. Vous <span id='choix2User'>{avec choisi / n'avez pas choisi}</span> souhait?? re??evoir de mail de confirmation.</div>");

    /* ajout des donn??e recup??r??es dans les emplacement des span pr??vu pour le message de confiramtion */


    $('#nomUser').text(nom);
    $('#prenomUser').text(prenom);

    $('#nombreUser').text(nbreClient);
    $('#heureUser').text(horaire);

    /* condition en fonctions des choix de la zone */
    if (interieur) {

        $('#zoneUser').text('int??rieure');
    }

    if (terrasse) {

        $('#zoneUser').text('terrasse');
    }

    if (pergolla) {

        $('#zoneUser').text('pergolla');
    };

    /* condition pour les choix de bouteilles */
    switch (bouteille) {
        case "0":
            $('#choix1User').text("pas de bouteille");
            break;
        case "1":
            $('#choix1User').text("vin One");
            break;
        case "2":
            $('#choix1User').text("vin Two");
            break;
        case "3":
            $('#choix1User').text("vin Three");
            break;
        default:
            break;
    };

    /* condition pour l'envoye de mail ou pas */
    if (confirmation) {

        $('#choix2User').text('avez choisi');

    } else {

        $('#choix2User').text(" n'avez pas choisi ");
    }

});