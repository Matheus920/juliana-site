function myMap(id, coord1, coord2) {
    var mapProp = { center: new google.maps.LatLng(coord1, coord2), zoom: 16 };
    var map = new google.maps.Map(document.getElementById(id), mapProp);
};


function triggerModal(local) {
    var table = document.querySelector("#modal-table")
    var map = document.querySelector("#modal-map")
    var title = document.querySelector('#modal-title')
    title.innerHTML = '<h2>' + local + '</h2>'
    var modal = $("#modal-place")

    switch (local) {
        case 'Melbourne':
            table.innerHTML = `<table class="table"><tbody> <tr> <th scope="row">Clima</td> <td>Subtropical</td> </tr> <tr> <th scope="row">Língua</td> <td>Inglês</td> </tr> <tr> <th scope="row">Governo</td> <td>Monarquia constitucional</td> </tr> <tr> <th scope="row">Chefe de Estado</td> <td>Isabel II</td> </tr> <tr> <th scope="row">Temperatura máxima - Junho</td> <td>14ºC</td> </tr> <tr> <th scope="row">Temperatura mínima - Junho</td> <td>8ºC</td> </tr> </tbody> </table>`
            map.innerHTML = `<div id="melbourneMap" class="googleMap"></div>`
            myMap('melbourneMap', -37.864508, 144.968250);
            break;
        case 'Oslo':
            table.innerHTML = `<table class="table"> <tbody> <tr> <th scope="row">Clima</td> <td>Temperado oceânico</td> </tr> <tr> <th scope="row">Língua</td> <td>Inglês</td> </tr> <tr> <th scope="row">Governo</td> <td>Monarquia constitucional</td> </tr> <tr> <th scope="row">Chefe de Estado</td> <td>Haroldo V</td> </tr> <tr> <th scope="row">Temperatura mínima - Junho</td> <td>12ºC</td> </tr> <tr> <th scope="row"td>Temperatura máxima - Junho</td> <td>21ºC</td> </tr> </tbody> </table>`
            map.innerHTML = `<div id="osloMap" class="googleMap"></div>`
            myMap('osloMap', 59.913775, 10.737478);
            break;
        case 'Amsterdã':
            table.innerHTML = `<table class="table"><tbody> <tr> <th scope="row">Clima</td> <td>Temperado oceânico</td> </tr> <tr> <th scope="row">Língua</td> <td>Holandês</td> </tr> <tr> <th scope="row">Governo</td> <td>Monarquia constitucional</td> </tr> <tr> <th scope="row">Chefe de Estado</td> <td>Guilherme Alexandre</td> </tr> <tr> <th scope="row">Temperatura mínima - Junho</td> <td>11ºC</td> </tr> <tr> <th scope="row">Temperatura máxima - Junho</td> <td>17ºC</td> </tr> </tbody> </table>`
            map.innerHTML = `<div id="amsterdaMap" class="googleMap"></div>`
            myMap('amsterdaMap', 52.375962, 4.895818);
            break;
        case 'Vancouver':
            table.innerHTML = `<table class="table"> <tbody> <tr> <th scope="row">Clima</td> <td>Temperado continental</td> </tr> <tr> <th scope="row">Língua</td> <td>Inglês</td> </tr> <tr> <th scope="row">Governo</td> <td>Democracia parlamentar e monarquia constitucional</td> </tr> <tr> <th scope="row">Chefe de Estado</td> <td>Isabel II</td> </tr> <tr> <th scope="row">Temperatura máxima - Junho</td> <td>20ºC</td> </tr> <tr> <th scope="row">Temperatura mínima - Junho</td> <td>12ºC</td> </tr> </tbody> </table>`
            map.innerHTML = `<div id="vancouverMap" class="googleMap"></div>`
            myMap('vancouverMap', 49.244358, -123.046798);
            break;
        case 'Chernobyl':
            table.innerHTML = `<table class="table"> <tbody> <tr> <th scope="row">Informações relevantes</td> <td>Local abandonado devido ao desastre nuclear; há somente cerca de 500 habitantes; aberta ao turismo</td> </tr> <tr> <th scope="row">Temperatura máxima - Junho</td> <td>23ºC</td> </tr> <tr> <th scope="row">Temperatura mínima - Junho</td> <td>12ºC</td> </tr> </tbody> </table>`
            map.innerHTML = `<div id="chernobylMap" class="googleMap"></div>`
            myMap('chernobylMap', 51.272855, 30.224230);
            break;
        case 'Frankfurt':
            table.innerHTML = `<table class="table"> <tbody> <tr> <th scope="row">Nome</td> <td>ICE 3</td> </tr> <tr> <th scope="row">Velocidade máxima</td> <td>300 km/h</td> </tr> <tr> <th scope="row">Destino</td> <td>Berlim</td> </tr> <tr> <th scope="row">Justificativa</td> <td>Muito interesse em viajar de trem-bala</td> </tr> </tbody> </table>`
            map.innerHTML = `<div id="frankfurtMap" class="googleMap"></div>`
            myMap('frankfurtMap', 50.052908, 8.569861);
            break;
        default:
            break;
    }
    modal.modal('toggle')

}