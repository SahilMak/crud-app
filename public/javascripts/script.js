/**
 * Created by Sahil Makhijani on 4/20/2017.
 */
$(document).ready(function () {
    var url = "https://southernct-443-robots-api.herokuapp.com/api/robots/";
    var location = window.location.href;
    // Add robot
    $("#newForm").submit(function (event) {
        event.preventDefault();
        var form = {name: $("#name").val(), description: $("#description").val(), in_stock: $("#stock").val()};
        $.post(url, form)
            .done(function (data, textStatus, xhr) {
                window.location = "/robots";
            })
            .fail(function (xhr, textStatus, errorThrown) {
                alert("ERROR: " + errorThrown);
            });
    });
    // Edit robot
    $(".edit").click(function () {
        var id = $(this).parent().siblings().eq(0).text();
        window.location = "/robots/" + id + "/edit";
    });
    $("#editForm").submit(function (event) {
        event.preventDefault();
        var id = location.split("robots/")[1].split("/edit")[0];
        $.ajax({
            method: "PUT",
            url: url + id,
            data: {name: $("#name").val(), description: $("#description").val(), in_stock: $("#stock").val()}
        })
            .done(function () {
                window.location = "/robots/" + id;
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
            url: url + row.eq(0).text(),
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