  var elChild = document.getElementById('elChild');

  $(document).ready(function() {
    $('[class^="zipclick"]').on('click', function(e) {
      
      var zipCode = $(this).attr('id');
      console.log(zipCode);
      numberZipCode =parseInt(zipCode);
      console.log(numberZipCode);
      switch (zipCode) {
case 75050: elChild.innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=1w-S6gCaj_4kBfkCAzwR9dU2yfu8" width="100%" height="480"></iframe>'; break;
case 75051: elChild.innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=1_D4-xnaXSPKzx7mllISBRDiyJTI" width="100%" height="480"></iframe>'; break;
case 75052: elChild.innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=1IrKCoWGy2wrd2OWqRPp-qFJMb7M" width="100%" height="480"></iframe>'; break;
      };
      
      
    });
  });
