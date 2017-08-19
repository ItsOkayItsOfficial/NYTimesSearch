/*
* Author: BLT
* Project Name: NYTimes Search Js
* Version:1
* Date: 08.19.17
* URL: https://itsokayitsofficial.github.io/NYTimesSearch/
*/



$('#runSearch').on('click', function(){
console.log('yo');
var searchTerm = "obama"; //$('#searchTerm').val();
var numRecords = 2//$('#numRecordsSelect').val();
var startYear = 2015//$('#startYear').val();
var endYear = 2016//$('#endYear').val();
var APIKey = "57ddfac8eda34183b33a1b960813d8e1";
var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += '?' + $.param({
  'APIKey': "57ddfac8eda34183b33a1b960813d8e1",
  'q': searchTerm,
  'fq': numRecords,
  'begin_date': startYear,
  'end_date': endYear,
});
console.log(url);
$.ajax({
  url: url,
  method: 'GET',
}).done(function(result) {
  console.log(result);
}).fail(function(err) {
  throw err;
});
});
