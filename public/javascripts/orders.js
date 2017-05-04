/**
 * Created by Sahil Makhijani on 5/3/2017.
 */
$(document).ready(function () {
    var url = "http://localhost:3000/orders/new";
    // Autofill robot name
    getName($("select").val());
    $("select").change(function () {
        getName($(this).val());
    });
    function getName(id) {
        $.getJSON('https://southernct-443-robots-api.herokuapp.com/api/robots/' + id, function (robot) {
            console.log(robot.name);
            $("#robot_name").val(robot.name);
        });
    }

    // New order
    $("#newOrder").submit(function (event) {
        event.preventDefault();
        var form = {robot_id: $("select").val(), robot_name: $("#robot_name").val(), quantity: $("#quantity").val()};
        $.post(url, form)
            .done(function (data, textStatus, xhr) {
                window.location = "/orders";
            })
            .fail(function (xhr, textStatus, errorThrown) {
                alert("ERROR: " + errorThrown);
            });
    });
});