/**
 * Created by Sahil Makhijani on 4/20/2017.
 */
$(document).ready(function () {
    // Add robot
    $("#newForm").submit(function (event) {
        event.preventDefault();
        var url = "https://southernct-443-robots-api.herokuapp.com/api/robots";
        var form = {name: $("#name").val(), description: $("#description").val(), in_stock: $("#stock").val()};
        $.post(url, form)
            .done(function (data, textStatus, xhr) {
                window.location = "/robots";
            })
            .fail(function (xhr, textStatus, errorThrown) {
                alert("ERROR: " + errorThrown);
            });
    });

    // Delete robot
    $(".delete").click(function () {
        var row = $(this).parent().siblings();
        $.ajax({
            method: "DELETE",
            url: "https://southernct-443-robots-api.herokuapp.com/api/robots/" + row.eq(0).text(),
            data: {
                _id: row.eq(0).text(),
                name: row.eq(1).children().text(),
                description: row.eq(2).text(),
                in_stock: row.eq(3).text(),
                created_at: row.eq(4).text(),
                updated_at: row.eq(5).text()
            }
        })
            .done(function () {
                window.location = "/robots";
            })
            .fail(function (xhr, textStatus, errorThrown) {
                alert("ERROR: " + errorThrown);
            });
    });
});