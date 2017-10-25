function enqueue_my_scripts() {
wp_enqueue_script( 'jquery', '//ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js', array('jquery'), '1.9.1', false); // adding in header
wp_enqueue_script( 'bootstrap-js', get_template_directory_uri().'/js/bootstrap.min.js', array('jquery'), true); // addition of 'get_template_directory_uri()'
}

$(document).ready(function(){
    // Activate Carousel
    $("#braincarousel").carousel();

    // Enable Carousel Indicators
    $(".item1").click(function(){
        $("#braincarousel").carousel(0);
    });
    $(".item2").click(function(){
        $("#braincarousel").carousel(1);
    });
    $(".item3").click(function(){
        $("#braincarousel").carousel(2);
    });
    $(".item4").click(function(){
        $("#braincarousel").carousel(3);
    });

    // Enable Carousel Controls
    $(".left").click(function(){
        $("#braincarousel").carousel("prev");
    });
    $(".right").click(function(){
        $("#braincarousel").carousel("next");
    });
});
