
const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const number = document.getElementsByClassName("ilist");

    const output = document.getElementById("minivan");
    const output = document.getElementById("standard");
    const output = document.getElementById("budget");

    output.innerHTML = "";
    $("minivan").hide()
    $("standard").hide()
    $("budget").hide()

    for (const value of optionlist) {
        if (value >= 6) {
            $("minivan").show()
            output.insertAdjacentHTML("beforeend", "minivan")
        }

    }

    $(document).ready(function () {
    $("select").change(function () {
        $(this).find("option:selected")
               .each(function () {
            var optionValue = $(this).attr("value");
            if (optionValue) {
                $(".booking-examples").not("." + optionValue).hide();
                $("." + optionValue).show();
            } else {
                $(".booking-examples").hide();
            }
        });
    }).change();
    
});
})

