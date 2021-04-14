/* Test nombre de clients */
$(function() {
    $("#nbreClient").change(function() {
        let max = 12;
        let min = 1;
        $('#checkAlertNbreClient').html(' ')
        if ($('#nbreClient').val() > max) {
            $('#nbreClient').val(max);
            $('#nbreClient').addClass("borderred");
            $('#checkAlertNbreClient').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Pas plus de 12 personnes.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
        } else if ($('#nbreClient').val() < min) {
            $('#nbreClient').val(min);
            $('#nbreClient').addClass("borderred");
            $('#checkAlertNbreClient').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Pas moins de 1 personne.<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');

        }

    });
});

/* Test sur le nom */
$('#nom').change(function() {

    let nom = $('#nom').val();
    nom = parseInt(nom);
    $('#checkAlertNom').html('');
    if (isNaN(nom)) {

        $("#nom").removeClass("borderred");
    } else {

        $('#nom').addClass("borderred");
        $('#checkAlertNom').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Veuillez ne pas saisir de nombre au début de votre Nom! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
    }
});

/* Test sur le Prenom */
$('#prenom').blur(function() {

    let prenom = $('#prenom').val();
    prenom = parseInt(prenom);
    $('#checkAlertPrenom').html('');
    if (isNaN(prenom)) {

        $("#prenom").removeClass("borderred");
    } else {
        $('#prenom').addClass("borderred");
        $('#checkAlertPrenom').html('<div class="alert alert-danger alert-dismissible fade show fs-3 text-center fw-bold" role="alert">Erreure de saisie! Veuillez ne pas saisir de nombre au début de votre Prenom! <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>');
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
    $("#formulaire").append("<h2 class='fw-bold  fs-1 m-5'>Réservation éffectuée</h2>");
    $("#formulaire").append("<div class='fw-bold  fs-1 m-5'> M.Mme. <span id='nomUser'> </span> <span id='prenomUser'> </span> , vous avez réservé une table en <span id='zoneUser'>{zone choisie}</span> de <span id='nombreUser'>{nb de personne}</span> personne(s) pour <span id='heureUser'>{heure}</span>. Vous avez chois : <span id='choix1User'>{avec choisi / n'avez pas choisi}</span>. Vous <span id='choix2User'>{avec choisi / n'avez pas choisi}</span> souhaité reçevoir de mail de confirmation.</div>");

    /* ajout des donnée recupérées dans les emplacement des span prévu pour le message de confiramtion */


    $('#nomUser').text(nom);
    $('#prenomUser').text(prenom);

    $('#nombreUser').text(nbreClient);
    $('#heureUser').text(horaire);

    /* condition en fonctions des choix de la zone */
    if (interieur) {

        $('#zoneUser').text('intérieure');
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