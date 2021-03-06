"use strict";

$(".menu_link").on("click", function () {
  var section1 = $(this).attr("href");
  var href = $(section1).offset().top;
  $("html, body").animate({
    scrollTop: href
  }, 500);
});
$(".scroll").on("click", function () {
  var section = $(this).attr("href");
  var href = $(section).offset().top;
  $("html, body").animate({
    scrollTop: href
  }, 1000);
});

if (window.matchMedia('(max-width: 767px)').matches) {
  $(function () {
    $('.navbar-toggle, nav').click(function () {
      $('.navbar-toggle').toggleClass('navbar-on');
      $('nav').fadeToggle();
      $('nav').removeClass('nav-hide');
    });
  });
}

if (window.matchMedia('(min-width: 768px)').matches) {
  $('.navbar-toggle').hide();
}

$(document).ready(function () {
  $(".slider").slick({
    infinite: true,
    autoplay: true,
    arrows: false,
    dots: true,
    autoplaySpeed: 5000
  });
});
$('[data-fancybox="gallery"]').fancybox({
  loop: true
});
$(document).ready(function () {
  $(".btn-filter").click(function () {
    var value = $(this).attr("menu_filter");

    if ($(".filter" + value)) {
      $(".filter").not("." + value).hide();
      $(".filter").filter("." + value).show();
    }
  });
});
$(function () {
  $('.active').click();
});
$(function () {
  $("form[name='contact_form']").validate({
    rules: {
      email: {
        required: true,
        email: true
      },
      name: {
        required: true,
        minlength: 3
      },
      phone: {
        required: true,
        minlength: 10,
        maxlength: 13
      }
    },
    messages: {
      name: "Please enter your Name",
      email: "Please enter a valid email address",
      phone: "Please enter your phone"
    },
    submitHandler: function submitHandler(form) {
      form.submit();
    }
  });
});
var map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: {
      lat: 50.446374,
      lng: 30.525577
    },
    zoom: 13.5,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#242f3e"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "administrative.neighborhood",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "geometry.stroke",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.attraction",
      "elementType": "labels",
      "stylers": [{
        "visibility": "on"
      }]
    }, {
      "featureType": "poi.business",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.business",
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.government",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#263c3f"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#6b9a76"
      }]
    }, {
      "featureType": "poi.sports_complex",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [{
        "color": "#38414e"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#212a37"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9ca5b3"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#746855"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [{
        "color": "#1f2835"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#f3d19c"
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [{
        "color": "#2f3948"
      }]
    }, {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#d59563"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#17263c"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#515c6d"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#17263c"
      }]
    }]
  });
  var image = "https://cdn1.worldpng.ru/uploads/2021/2/3/b0df393db0cf55428661c791b4ebb0e3-full.png";
  var beachMarker = new google.maps.Marker({
    position: {
      lat: 50.447604,
      lng: 30.519132
    },
    map: map,
    icon: image
  });
}