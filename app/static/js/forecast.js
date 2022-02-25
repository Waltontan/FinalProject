$("#predict_button").click(() => {

    var fixed_acidity = $("#fixed_acidity").val();
    var volatile_acidity = $("#volatile_acidity").val();
    var citric_acid = $("#citric_acid").val();
    var residual_sugar = $("#residual_sugar").val();
    var chlorides = $("#chlorides").val();
    var free_sulfur_dioxide = $("#free_sulfur_dioxide").val();
    var total_sulfur_dioxide = $("#total_sulfur_dioxide").val();
    var density = $("#density").val();
    var pH = $("#pH").val();
    var sulphates = $("#sulphates").val();
    var alcohol = $("#alcohol").val();

    console.log(fixed_acidity)
    console.log(volatile_acidity)
    console.log(citric_acid)
    $.getJSON(`/api/predict/${fixed_acidity}/${volatile_acidity}/${citric_acid}/${residual_sugar}/${chlorides}/${free_sulfur_dioxide}/${total_sulfur_dioxide}/${density}/${pH}/${sulphates}/${alcohol}`, (predicted) => {
        var predicted_quality = Math.floor(predicted.prediction)
        var img_src = ""
        var temp_text = ""
        if (predicted_quality > 6) {
            img_src = "static/img/hot.png"
            temp_text = `It is a hot sunny day. The temperature is expected to be ${predicted_quality}.`
        } else if (predicted_quality > 4) {
            img_src = "static/img/perfect.png"
            temp_text = `It is a perfect day to be out. The temperature is expected to be ${predicted_quality}.`
        } else {
            img_src = "static/img/cold.png"
            temp_text = `It is a shivering cold day. The temperature is expected to be ${predicted_quality}.`
        }

        $("#predicted_quality").html(`
        <div class="card" style="width: 18rem;">
            <img src="${img_src}" class="card-img-top">
            <div class="card-body">
            <p class="card-text">${temp_text}</p>
            </div>
        </div>
        `)
    });
});
