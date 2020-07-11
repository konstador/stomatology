$(".accordion_item").click(function () {
    $(".accordion_item").removeClass("accordion_item--active");
    $(this).toggleClass("accordion_item--active");
});