/**
 * Created by Sahil Makhijani on 4/20/2017.
 */
$(document).ready(function () {
    // Add robot
    $("#newForm").submit(function (event) {
        console.log("Is anything happening?");
        event.preventDefault();
        console.log("Anything?");
        var url = "https://southernct-443-robots-api.herokuapp.com/api/robots";
        console.log("ANYTHING?");
        var form = {name: $("#name").val(), description: $("#description").val(), in_stock: $("#stock").val()};
        console.log("You made it this far!");
        $.post(url, form)
            .done(function (data, textStatus, xhr) {
                console.log("Done!");
                window.location = "/robots";
            })
            .fail(function (xhr, textStatus, errorThrown) {
                alert("ERROR: " + errorThrown);
            });
    });
});