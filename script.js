$(document).ready(function() {
    $("ul .nav-item a").click(function() {
        $("a").removeClass("av");
        $(this).addClass("av");
    })
    $('#telepon').click(function() {
        alert('coming soon untuk no yang bisa di hubungi silahkan lihat di paling bawah');
    });
    $('#layanan').mouseenter(function() {
        $('#paragraf').show(1000);
    });

});