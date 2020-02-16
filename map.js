  var elChild = document.getElementById('elChild');

  $(document).ready(function() {
    $('#my-unique-link').on('click', function(e) {
      console.log("Does this work");
      var id = $(this).attr('id');
      console.log(id);
    });
  });
