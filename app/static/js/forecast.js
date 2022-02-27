function predict_quality(){

    var fixed_acidity =d3.select("#fixed_acidity").property("value");
    console.log(`fixed_acidity = ${fixed_acidity}`);
    var volatile_acidity =d3.select("#volatile_acidity").property("value");
    console.log(`volatile_acidity = ${volatile_acidity}`);
    var citric_acid =d3.select("#citric_acid").property("value");
    console.log(`citric_acid = ${citric_acid}`);
    var residual_sugar =d3.select("#residual_sugar").property("value");
    console.log(`residual_sugar = ${residual_sugar}`);
    var chlorides =d3.select("#chlorides").property("value");
    console.log(`chlorides = ${chlorides}`);
    var free_sulfur_dioxide =d3.select("#free_sulfur_dioxide").property("value");
    console.log(`free_sulfur_dioxide = ${free_sulfur_dioxide}`);
    var total_sulfur_dioxide =d3.select("#total_sulfur_dioxide").property("value");
    console.log(`total_sulfur_dioxide = ${total_sulfur_dioxide}`);
    var density =d3.select("#density").property("value");
    console.log(`density = ${density}`);
    var pH =d3.select("#pH").property("value");
    console.log(`pH = ${pH}`);
    var sulphates =d3.select("#sulphates").property("value");
    console.log(`sulphates = ${sulphates}`);
    var alcohol =d3.select("#alcohol").property("value");
    console.log(`alcohol = ${alcohol}`);

    url = `/api/predict/${fixed_acidity}/${volatile_acidity}/${citric_acid}/${residual_sugar}/${chlorides}/${free_sulfur_dioxide}/${total_sulfur_dioxide}/${density}/${pH}/${sulphates}/${alcohol}`

    d3.json(url).then(function(data){

        console.log(data);

        var predicted_value = Object.values(data.prediction)

        console.log (`predicted value is ${predicted_value}`)
        
        if (predicted_value > 6) {
            img_src = "static/img/hot.png"
            temp_text = `This is a winner wine of quality ${predicted_value}.`
        } else if (predicted_value > 4) {
            img_src = "static/img/perfect.png"
            temp_text = `I guess this is drinkable. Quality is ${predicted_value}.`
        } else {
            img_src = "static/img/cold.png"
            temp_text = `This is not worth drinking ${predicted_value}.`
        }

        console.log(temp_text)

    });
}

d3.selectAll("#predict_button").on("click",predict_quality)