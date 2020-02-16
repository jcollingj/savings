  var elChild = document.getElementById('elChild');

  $(document).ready(function() {
    $('[class^="zipclick"]').on('click', function(e) {
      
      var zipCode = $(this).attr('id');
      console.log(zipCode);
      numberZipCode =parseInt(zipCode);
      console.log(numberZipCode);

      switch (zipCode) {
        case 75050: console.log("I hate myself"); break;
        case 75051: console.log("I hate myself more"); break;

      };
      
      
    });
  });
