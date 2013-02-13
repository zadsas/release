$(function () {
  $('#application-list').tablesorter();

  $("textarea#application_status_notes").autoGrow();

  $('#datetimepicker1').datetimepicker({
    language: 'en'
  });

  $('.environment-typeahead').typeahead({ source: ['staging', 'production'] });

  $('.version-typeahead').typeahead({ source: ['release_', 'build-'] });
});