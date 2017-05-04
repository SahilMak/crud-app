/**
 * Created by Sahil Makhijani on 5/3/2017.
 */
$(document).ready(function () {
    var url = "http://localhost:3000/orders/new";
    var stock = 0;
    var description = "";
    // Autofill robot name
    if (window.location.href.indexOf("new") > -1) {
        getName($("select").val());
        $("select").change(function () {
            getName($(this).val());
        });
        function getName(id) {
            $.getJSON('https://southernct-443-robots-api.herokuapp.com/api/robots/' + id, function (robot) {
                stock = robot.in_stock;
                description = robot.description;
                $("#robot_name").val(robot.name);
                $("#stock").text("/ " + robot.in_stock);
            });
        }
    }
    // New order
    $("#newOrder").submit(function (event) {
        event.preventDefault();
        // PUT
        $.ajax({
            method: "PUT",
            url: 'https://southernct-443-robots-api.herokuapp.com/api/robots/' + $("select").val(),
            data: {name: $("#robot_name").val(), description: description, in_stock: stock - parseInt($("#quantity").val())}
        })
            .fail(function (xhr, textStatus, errorThrown) {
                alert("ERROR: " + errorThrown);
            });
        // POST
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