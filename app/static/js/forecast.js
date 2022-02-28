function predict_quality() {

    var fixed_acidity = d3.select("#fixed_acidity").property("value");
    console.log(`fixed_acidity = ${fixed_acidity}`);
    if (fixed_acidity > 9.2) {
        d3.select("#fixed-acidity-header").html("Fixed Acidity").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (fixed_acidity < 7.1) {
        d3.select("#fixed-acidity-header").html("Fixed Acidity").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#fixed-acidity-header").html("Fixed Acidity").append("text").style('color', 'Black')
    }

    var volatile_acidity = d3.select("#volatile_acidity").property("value");
    console.log(`volatile_acidity = ${volatile_acidity}`);
    if (volatile_acidity > 0.64) {
        d3.select("#volatile-acidity-header").html("Volatile Acidity").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (volatile_acidity < 0.39) {
        d3.select("#volatile-acidity-header").html("Volatile Acidity").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#volatile-acidity-header").html("Volatile Acidity").append("text").style('color', 'Black')
    }
    var citric_acid = d3.select("#citric_acid").property("value");
    console.log(`citric_acid = ${citric_acid}`);
    if (citric_acid > 0.42) {
        d3.select("#citric-acid-header").html("Citric Acid").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (citric_acid < 0.09) {
        d3.select("#citric-acid-header").html("Citric Acid").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#citric-acid-header").html("Citric Acid").append("text").style('color', 'Black')
    }

    var residual_sugar = d3.select("#residual_sugar").property("value");
    console.log(`residual_sugar = ${residual_sugar}`);
    if (residual_sugar > 2.6) {
        d3.select("#residual-sugar-header").html("Residual Sugar").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (residual_sugar < 1.9) {
        d3.select("#residual-sugar-header").html("Residual Sugar").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#residual-sugar-header").html("Residual Sugar").append("text").style('color', 'Black')
    }

    var chlorides = d3.select("#chlorides").property("value");
    console.log(`chlorides = ${chlorides}`);
    if (chlorides > 0.09) {
        d3.select("#chlorides-header").html("Chlorides").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (chlorides < 0.07) {
        d3.select("#chlorides-header").html("Chlorides").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#chlorides-header").html("Chlorides").append("text").style('color', 'Black')
    }

    var free_sulfur_dioxide = d3.select("#free_sulfur_dioxide").property("value");
    console.log(`free_sulfur_dioxide = ${free_sulfur_dioxide}`);
    if (free_sulfur_dioxide > 21) {
        d3.select("#free-sulfur-dioxide-header").html("Free Sulphur Dioxide").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (free_sulfur_dioxide < 7) {
        d3.select("#free-sulfur-dioxide-header").html("Free Sulphur Dioxide").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#free-sulfur-dioxide-header").html("Free Sulphur Dioxide").append("text").style('color', 'Black')
    }

    var total_sulfur_dioxide = d3.select("#total_sulfur_dioxide").property("value");
    console.log(`total_sulfur_dioxide = ${total_sulfur_dioxide}`);
    if (total_sulfur_dioxide > 62) {
        d3.select("#total-sulfur-dioxide-header").html("Total Sulphur Dioxide").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (total_sulfur_dioxide < 22) {
        d3.select("#total-sulfur-dioxide-header").html("Total Sulphur Dioxide").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#total-sulfur-dioxide-header").html("Total Sulphur Dioxide").append("text").style('color', 'Black')
    }

    var density = d3.select("#density").property("value");
    console.log(`density = ${density}`);
    if (density > 0.9978) {
        d3.select("#density-header").html("Density").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (density < 0.9956) {
        d3.select("#density-header").html("Density").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#density-header").html("Density").append("text").style('color', 'Black')
    }

    var pH = d3.select("#pH").property("value");
    console.log(`pH = ${pH}`);
    if (pH > 3.4) {
        d3.select("#pH-header").html("pH").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (pH < 3.21) {
        d3.select("#pH-header").html("pH").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#pH-header").html("pH").append("text").style('color', 'Black')
    }

    var sulphates = d3.select("#sulphates").property("value");
    console.log(`sulphates = ${sulphates}`);
    if (sulphates > 0.73) {
        d3.select("#sulphates-header").html("Sulphates").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (sulphates < 0.55) {
        d3.select("#sulphates-header").html("Sulphates").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#sulphates-header").html("Sulphates").append("text").style('color', 'Black')
    }

    var alcohol = d3.select("#alcohol").property("value");
    console.log(`alcohol = ${alcohol}`);
    if (alcohol > 11.1) {
        d3.select("#alcohol-header").html("Alcohol").append("text").attr('text-align', 'right').text("    (HIGH)").style('color', 'red')
    } else if (alcohol < 9.5) {
        d3.select("#alcohol-header").html("Alcohol").append("text").attr('text-align', 'right').text("    (LOW)").style('color', 'Blue')
    } else {
        d3.select("#alcohol-header").html("Alcohol").append("text").style('color', 'Black')
    }

    url = `/api/predict/${fixed_acidity}/${volatile_acidity}/${citric_acid}/${residual_sugar}/${chlorides}/${free_sulfur_dioxide}/${total_sulfur_dioxide}/${density}/${pH}/${sulphates}/${alcohol}`

    d3.json(url).then(function (data) {

        console.log(data);

        var predicted_value = Object.values(data.prediction)

        console.log(`predicted value is ${predicted_value}`)

        if (predicted_value > 6) {
            img_src = "static/img/Winner.png"
            temp_text = `Award-Winning Wine of Quality ${predicted_value}.`
        } else if (predicted_value > 4) {
            img_src = "static/img/standard.jpeg"
            temp_text = `You have Drinkable Wine of Quality ${predicted_value}.`
        } else {
            img_src = "static/img/poison2.jpg"
            temp_text = `You have Potent Poison of Quality ${predicted_value}.`
        }

        console.log(temp_text)
        d3.select("#predicted_quality")
            .html("")
            .append("div")
            .attr("class", "card")
            .append('h2').text(`${temp_text}`)
            .append('img')
            .attr('class', 'picture')
            .attr('src', img_src)
            .attr('style', "width:500px;")
        {/* <H1>PREDICTION IS </H1> */ }
    });
}

d3.selectAll("#predict_button").on("click", predict_quality)


function preset1() {
    d3.select("#fixed_acidity").attr('value', 7.4)
    d3.select("#volatile_acidity").attr('value', 0.98)
    d3.select("#citric_acid").attr('value', 0.05)
    d3.select("#residual_sugar").attr('value', 2.1)
    d3.select("#chlorides").attr('value', 0.061)
    d3.select("#free_sulfur_dioxide").attr('value', 20)
    d3.select("#total_sulfur_dioxide").attr('value', 49)
    d3.select("#density").attr('value', 0.9970)
    d3.select("#pH").attr('value', 3.29)
    d3.select("#sulphates").attr('value', 0.55)
    d3.select("#alcohol").attr('value', 9.7)
}

function preset2() {
    d3.select("#fixed_acidity").attr('value', 7.4)
    d3.select("#volatile_acidity").attr('value', 0.61)
    d3.select("#citric_acid").attr('value', 0.01)
    d3.select("#residual_sugar").attr('value', 2)
    d3.select("#chlorides").attr('value', 0.074)
    d3.select("#free_sulfur_dioxide").attr('value', 13)
    d3.select("#total_sulfur_dioxide").attr('value', 38)
    d3.select("#density").attr('value', 0.99748)
    d3.select("#pH").attr('value', 3.48)
    d3.select("#sulphates").attr('value', 0.65)
    d3.select("#alcohol").attr('value', 9.8)
}
function preset3() {
    d3.select("#fixed_acidity").attr('value', 7.9)
    d3.select("#volatile_acidity").attr('value', 0.54)
    d3.select("#citric_acid").attr('value', 0.34)
    d3.select("#residual_sugar").attr('value', 2.5)
    d3.select("#chlorides").attr('value', 0.076)
    d3.select("#free_sulfur_dioxide").attr('value', 8)
    d3.select("#total_sulfur_dioxide").attr('value', 17)
    d3.select("#density").attr('value', 0.99235)
    d3.select("#pH").attr('value', 3.2)
    d3.select("#sulphates").attr('value', 0.72)
    d3.select("#alcohol").attr('value', 13.1)
}
d3.selectAll("#poison_button").on("click", preset1)
d3.selectAll("#standard_button").on("click", preset2)
d3.selectAll("#award_button").on("click", preset3)
