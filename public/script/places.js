 function myMap(id, coord1, coord2) { 
    var mapProp= {center:new google.maps.LatLng(coord1, coord2),zoom:16};
    var map=new google.maps.Map(document.getElementById(id),mapProp);
};

myMap('osloMap', 59.913775, 10.737478);
myMap('vancouverMap', 49.244358, -123.046798);
myMap('amsterdaMap', 52.375962, 4.895818);
myMap('melbourneMap', -37.864508, 144.968250);
myMap('chernobylMap',51.272855, 30.224230);
myMap('frankfurtMap', 50.052908, 8.569861);

var lugares = document.querySelectorAll('.lugar');

for(var i = 0; i < lugares.length; i++){
    lugares[i].addEventListener('mouseenter', function(){
        this.children[2].style.display = 'block';
    });

    lugares[i].addEventListener('mouseleave', function(){
        this.children[2].style.display = 'none';
    });
}

