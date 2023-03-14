$(document).ready(function () {
  $("#Button1").click(function () {
    $("p").hide();
    $("ul li").hide();
    console.log(1);
  });

  $("#Button2").click(function () {
    $("p").show();
    $("ul li").show();
    console.log(1);
  });

  // $("div").click(function () {
  //   console.log(this);
  //   $(this).hide();
  // this hide every div we click on it
  // });
  $("div").click(function () {
    console.log(this);
    $(".myrowclass").hide();
    // this hide every my rowclass we click on it
  });
});
function DisplayMessage(e, text) {
  console.log(e);
  alert(text);
}
function ChangeEmptyDiv() {
  $("#emptydiv").addClass("myrowclass");
  $("#emptydiv").html(" <h1> mia </h1>");
}
