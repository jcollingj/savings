<script>
  var elChild = document.getElementById('elChild');

  $(document).ready(function() {
    $('#my-unique-link').on('click', function(e) {
       elChild.innerHTML = '<iframe src="https://www.google.com/maps/d/embed?mid=1w-S6gCaj_4kBfkCAzwR9dU2yfu8" width="100%" height="480"></iframe>'
    });
  });
</script> 
