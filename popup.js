$(function(){

    $('#addurl').click(function(){ 

        chrome.storage.local.get('urlval',function(items){
            //get the youtube address from input
            var newurlval = $('#urlval').val();

        //substract youtube id from url
        // copy from https://gist.github.com/takien/4077195
        function yt_id(url){
          var ytid = '';
          url = url.replace(/(>|<)/gi,'').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
          if(url[2] !== undefined) {
            id = url[2].split(/[^0-9a-z_]/i);
            id = id[0];
          } else { id = url; }
            return id;
        }
            
       var ytid = yt_id(newurlval)

       //use YouTube id to compose YouTube version 3 url;
       var ytv3 = "http://www.youtube.com/v/"+ytid+"?version=3?wwwcohomeus=.swf";



        $('#con_url').text(ytv3);
        $('urlval').val('');


        });
    }); 
});
