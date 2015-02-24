$(document).ready(function(){
  // Spinners
  $('form.spinnable').on('ajax:before', function(evt, xhr, status){ $('#spinner').show();})
  $('form.spinnable').on('ajax:after', function(evt, xhr, status){ $('#spinner').hide();})

  // DatePickers
  $('.datepicker').datepicker();

  //$('#select-image').on('click', function(e) {
  //  debugger
  //
  //  // Show a modal of images to select.
  //
  //  //on select
  //      // close the modal and put the id into the hidden field value
  //  // on anything else
  //      // close the modal
  //})

});
