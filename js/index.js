
$('nav li').hover(
    function() {
        $('ul', this).stop().slideDown(200);
    },
    function() {
        $('ul', this).stop().slideUp(200);
    });

    console.log("Your index.js file is loaded correctly!");

