/*
* Author: BLT
* Project Name: NYTimes Search Js
* Version:1
* Date: 08.19.17
* URL: https://itsokayitsofficial.github.io/NYTimesSearch/
*/
$(document).ready(function(){

    event.preventDefault();

    $("#runSearch").on("click", function(){
            var searchTerm = $('#searchTerm').val();
            var numRecords = $('#numRecordsSelect').val();
            var startYear = $('#startYear').val();
            var endYear = $('#endYear').val();
            var APIKey = "57ddfac8eda34183b33a1b960813d8e1";
            var queryurl = "https://api.nytimes.com/svc/search/v2/articlesearch.json";

    queryurl += '?' + $.param({
        'api-key': "57ddfac8eda34183b33a1b960813d8e1",
        'q': searchTerm,
        'begin_date': startYear,
        'end_date': endYear,
        });
    console.log(queryurl);

            $.ajax({
            url: queryurl,
            method: 'GET',
        }).done(function(result) {
        
            for (var i =0; i < numRecords; i++){
            var articleDiv = $('<div>');
            var articleHead = $('<h1>');
            articleHead.html(result.response.docs[i].headline.main);
            var author = $('<h2>');
            author.html(result.response.docs[i].byline.original);
            var sections = $('<p>');
            sections.html(result.response.docs[i].type_of_material);
            var date = $('<p>');
            date.html(result.response.docs[i].pub_date);
            var link = $('<a>')
            link.attr('href', result.response.docs[i].web_url);
            link.text(result.response.docs[i].web_url);
            articleDiv.append(articleHead);
            articleDiv.append(author);
            articleDiv.append(sections);
            articleDiv.append(date);
            articleDiv.append(link);
            $('#articles').append(articleDiv);
            }
            }

        });
    });


});
