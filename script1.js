document.addEventListener("DOMContentLoaded", function() {
  var fabToggle = document.getElementById("fab-toggle");
  var fabLinks = document.getElementsByClassName("fab-links")[0];

  fabToggle.addEventListener("click", function() {
    fabLinks.classList.toggle("show");
  });

  document.addEventListener("click", function(event) {
    var target = event.target;
    var isFab = target.closest("#fab");

    if (!isFab && fabLinks.classList.contains("show")) {
      fabLinks.classList.remove("show");
    }
  });
});
