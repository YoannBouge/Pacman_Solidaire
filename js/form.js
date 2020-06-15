var assoc1 = document.getElementById('assoc1');
var assoc2 = document.getElementById('assoc2');
var assoc3 = document.getElementById('assoc3');

function addScript( src ) {
    var s = document.createElement( 'script' );
    s.setAttribute( 'src', src );
    document.body.appendChild( s );
}

window.addEventListener("load", function(event) {

assoc1.onclick = function() {
    // $.ajax({
    //     type: "POST",
    //     url: './test.php',//url to file
    //     data: {"association":"assoc1"}
    // });
    console.log("asso1")

    // addScript("https://paypal.com/sdk/js?client-id=YOUR_CLIENT_ID");
};

assoc2.onclick = function() {
    sessionStorage.setItem("association", "assoc2");
    // jQuery('#assoc2').load('test.php?association=assoc2');
    // $.ajax({
    //     type: "POST",
    //     url: 'test.php',//url to file
    //     data: {"association":"assoc2"}
    // });
    // $.post(
    //     "ajax/test.php?association=assoc2", 
    //     {success: function(result){
    //                 console.log(result);
    //   }
    //  });
    // addScript("https://paypal.com/sdk/js?client-id=YOUR_CLIENT_ID");
};

assoc3.onclick = function() {
    // $.ajax({
    //     type: "POST",
    //     url: './test.php',//url to file
    //     data: {"association":"assoc3"}
    // });
    console.log("asso1")
    // addScript("https://paypal.com/sdk/js?client-id=YOUR_CLIENT_ID");
};


})