setInterval(function() {
    var local = moment();
    $("#local_date").text(local.format("MMMM D, YYYY"));
    $("#local_time").text(local.format("HH:mm:ss"));
    $("#columbus_time").text(local.clone().tz("America/New_York").format("HH:mm"));
    $("#huntsville_time").text(local.clone().tz("America/Chicago").format("HH:mm"));
    $("#sf_time").text(local.clone().tz("America/Los_Angeles").format("HH:mm"));
    $("#azo_time").text(local.clone().tz("America/New_York").format("HH:mm"));
    $("#utc_time").text(local.clone().utc().format("HH:mm"));
    $("#epoch_time").text(local.unix());
}, 1000);
