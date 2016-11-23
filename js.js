function getLocation() {

	// Sets up the options
	var options = {
		  enableHighAccuracy: true,
		  timeout: 5000,
		  maximumAge: 0
		};

		// If geo is turned on, it runs this
		function success(pos) {

		var restaurantLat = document.getElementById('restaurantLat');
		var restaurantLon = document.getElementById('restaurantLon');

		  // Gets your cords	
		  var crd = pos.coords;

		  // This is where we would set the location of the restaurants
		  var locationLat = Number(restaurantLat.value);
		  var locationLon = Number(restaurantLon.value);

		  // This adds the range.
		  var latMax = locationLat + .001;
		  var latMin = locationLat - .001;
		  var lonMax = locationLon + .0001;
		  var lonMin = locationLon - .0001;

		  alert(crd.latitude);
		  alert(crd.longitude);

		  // Does the math and alerts Inside or Outside
		  if (crd.latitude <= latMax && crd.latitude >= latMin && crd.longitude <= lonMax && crd.longitude >= lonMin) { alert('You are inside the range.'); var cib = document.getElementById('checkInButton'); cib.removeAttribute('disabled') } else{ alert('You are outside the range.') };

		 // alert(crd.latitude + ', '  + crd.longitude + ', ' + crd.accuracy);
		};

		function error(err) {
		  alert('ERROR(' + err.code + '): ' + err.message);
		};

		navigator.geolocation.getCurrentPosition(success, error, options);
	}