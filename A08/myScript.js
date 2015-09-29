/**
 * Created by Grant Shimogawa on 9/28/2015.
 */

$(document).ready(function(){
    $("p.answer").hide();
});

$(document).ready(function(){
    $("h3.1").click(function(){
        $("p.1").toggle();
        if ($("h3.1 span").text() == "[+]") {
            $("h3.1 span").text("[-]");
        } else {
            $("h3.1 span").text("[+]");
        }
    });
});

$(document).ready(function(){
    $("h3.2").click(function(){
        $("p.2").toggle();
        if ($("h3.2 span").text() == "[+]") {
            $("h3.2 span").text("[-]");
        } else {
            $("h3.2 span").text("[+]");
        }
    });
});

$(document).ready(function(){
    $("h3.3").click(function(){
        $("p.3").toggle();
        if ($("h3.3 span").text() == "[+]") {
            $("h3.3 span").text("[-]");
        } else {
            $("h3.3 span").text("[+]");
        }
    });
});

$(document).ready(function(){
    $("h3.4").click(function(){
        $("p.4").toggle();
        if ($("h3.4 span").text() == "[+]") {
            $("h3.4 span").text("[-]");
        } else {
            $("h3.4 span").text("[+]");
        }
    });
});

$(document).ready(function(){
    $("h3.5").click(function(){
        $("p.5").toggle();
        if ($("h3.5 span").text() == "[+]") {
            $("h3.5 span").text("[-]");
        } else {
            $("h3.5 span").text("[+]");
        }
    });
});

