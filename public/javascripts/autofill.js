/**
 * Created by Sahil Makhijani on 5/3/2017.
 */
$(document).ready(function () {
    // New order
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
});