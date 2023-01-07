$(function() {

    const BILDER = ["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg"];

    for (let i = 0; i < BILDER.length; i++) {
        $("#container").append("<div><img height=\"500px\" style=\"border-radius: 25px\"  src=\"./img/" + BILDER[i] + "\"></div>");
    }

    $("#container > div:gt(0)").hide();

    $("#container").prepend("<a class=\"prev\"><</a>");
    $("#container").prepend("<a class=\"next\">></a>");

    $("h1").css({
        textAlign:  "center",
        marginTop:  "50px"
    });

    $("#container").css({
        width:      "auto",
        margin:     "20px auto 0",
        height:     "auto",
        padding:    "10px 10px 0",
        boxShadow:  "0 -60px 100px rgba(0,0,0,.2)",
        position:   "relative"
    });

    $(".next, .prev").css({
        position:   "absolute",
        top:        "30%",
        "z-index":  499,
        cursor:     "pointer",
        background: "rgba(180,180,180,.75)",
        padding:     "5px 10px",
        borderRadius:  "50%",
        fontSize:       "1.25rem"
    });

    $(".next").css("right", "800px");
	$(".next").css("top", "300px");
    $(".prev").css("left", "20px");
	$(".prev").css("top", "300px");

    $("#container > div").css({
        position:   "absolute",
        top:        "450px",
        left:       "10px",
        right:      "10px",
        bottom:     0,
    });

    $("hr").css({
        maxWidth:   "1000px",
        margin:     "-1px auto 0",
        backgroundImage:    "linear-gradient(to right, rgba(180,180,180,0), rgba(180,180,180,1), rgba(180,180,180,0))",
        height:     "2px",
        border: "none"
    });
    
    $(".next").on("click", function() {
        console.log("first", $("#container > div").first());
        console.log("next", $("#container > div").first().next());
        console.log("prev", $("#container > div").first().next().prev());
        $("#container > div")
        .first()
        .fadeOut(2000)
        .end()
        .eq(1)
        .fadeIn(2000)
        .end()
        .first()
        .appendTo("#container");
    });

    $(".prev").on("click", function() {
        $("#container > div")
        .first()
        .fadeOut(2000)
        .end()
        .last()
        .fadeIn(2000)
        .prependTo("#container");
    });
});