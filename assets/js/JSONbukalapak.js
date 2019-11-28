$(document).ready(function () {
    $.getJSON('myjson.json',
        function (data) {
            for (var i = 0; i < data.Bukalapak.length; i++) {
                $('.bukalapak').append('<div class="card" style="width:200px;height:400px;display:block;margin:30px;margin-top:20px;margin-left:39px;float:left;" >' +
                    '<a href="#"><img src="' + data.Bukalapak[i].Thumbnail + '"' + 'class="card-img-top" style="height:190px;"></a>' +
                    '<div class="card-body">' +
                    '<b>' + data.Bukalapak[i].Nama + '</b>' +
                    '<p>' + data.Bukalapak[i].Harga + '</p>' + '<span><small>' + data.Bukalapak[i].Lokasi + '</small></span>' +
                    '<div class="rating"><img src="assets/images/star.png" style ="width:16px; height:16px;" >' +
                    '<img src="assets/images/star.png" style ="width:16px; height:16px;" >' +
                    '<img src="assets/images/star.png" style ="width:16px; height:16px;" >' +
                    '<img src="assets/images/star.png" style ="width:16px; height:16px;" >' +
                    '<img src="assets/images/star.png" style ="width:16px; height:16px;" >' +
                    '</div>' + '<div class="btn btn-danger auto mt-3">Beli</div>' +
                    '</div></div>')
            }
        });
});