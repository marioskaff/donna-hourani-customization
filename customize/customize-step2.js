var step2MySelfSelector = $("#step2-my-self");
var step2SomeoneElseSelector = $("#step2-somebody-else");

function step2Setup() {
  var step1Value = step1Selector.find("input[name='person']").val();
  var selector =
    step1Value === "Myself" ? step2MySelfSelector : step2SomeoneElseSelector;

  step3Selector.find(".back-botton").attr("href", "#" + selector.attr("id"));

  selector.find("input").change(function () {
    if (selector.find("form").validate().checkForm()) {
      selector.find(".form-wrapper").removeClass("is--off");
    }
  });

  selector.find(".next-botton").click(function () {
    if (!selector.find("form").valid()) {
      return false;
    }

    const name = selector.find("input[name='name']").val();
    const country = selector.find("input[name='country']").val();
    const month = selector.find("input[name='month']").val();
    const emailAddress = selector.find("input[name='email']").val();
    const phoneNumber = selector.find("input[name='phone-number']").val();

    // localStorage.setItem("Name", name);
    // localStorage.setItem("Country", country);
    // localStorage.setItem("Month", month);
    // localStorage.setItem("Email Address", emailAddress);
    // localStorage.setItem("Phone Number", phoneNumber);

    step3Setup();
    showNextSection(selector);
    selector.find(".next-section-link").click();
  });
}
