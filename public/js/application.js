document.getElementById('submitform').onclick = function() {
    pis("my-form").submit(["quantity","imgfile","textinput"]);
}

$(function() {

    // this is just a super-simple demo of JS

	var demoHeaderBox;


    // simple demo to show create something via javascript on the page
    if ($('#javascript-header-demo-box').length !== 0) {
    	demoHeaderBox = $('#javascript-header-demo-box');
    	demoHeaderBox
    		.hide()
    		.text('Hello from JavaScript! This line has been added by public/js/application.js')
    		.css('color', 'green')
    		.fadeIn('slow');
    }

    // if #javascript-ajax-button exists
    if ($('#javascript-ajax-button').length !== 0) {

        $('#javascript-ajax-button').on('click', function(){

            // send an ajax-request to this URL: current-server.com/songs/ajaxGetStats
            // "url" is defined in views/_templates/footer.php
            $.ajax(url + "songs/ajaxGetStats")
                .done(function(result) {
                    // this will be executed if the ajax-call was successful
                    // here we get the feedback from the ajax-call (result) and show it in #javascript-ajax-result-box
                    $('#javascript-ajax-result-box').html(result);
                })
                .fail(function() {
                    // this will be executed if the ajax-call had failed
                })
                .always(function() {
                    // this will ALWAYS be executed, regardless if the ajax-call was success or not
                });
        });
    }

});
function submit_by_id() {
    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;

    if(validation())// Calling validation function
      {
        document.getElementById("form_id").submit();//form submission
        alert(" Name : "+name+" \n Email : "+email+" \n Form Id : "+document.getElementById("form_id").getAttribute("id")+"\n\n Form Submitted Successfully......");
      }
}
