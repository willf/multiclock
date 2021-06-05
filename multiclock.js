setInterval(function() {
    var local = moment();
    $("#local_date").text(local.format("YY-MM-DD"));
    $("#local_time").text(local.format("HH:mm:ss"));
    $("#japan_time").text(local.clone().tz("Asia/Tokyo").format("HH:mm"));
    $("#eastern_time").text(local.clone().tz("America/New_York").format("HH:mm"));
    $("#central_time").text(local.clone().tz("America/Chicago").format("HH:mm"));
    $("#pacific_time").text(local.clone().tz("America/Los_Angeles").format("HH:mm"));
    $("#china_time").text(local.clone().tz("Asia/Shanghai").format("HH:mm"));
    $("#utc_time").text(local.clone().utc().format("HH:mm"));
    $("spain_time").text(local.clone().tz("Europe/Madrid").format("HH:mm"));
    $("#epoch_time").text(local.unix());
}, 1000);
