
timer_counter() 
    {
        variable:1;
    }
    timer_check()
    {

    }
    drawn_sketch()
    {
        string
    }
    answer_holder()
    {

    }
    score()
    {
        variable:0;
    }
    function setup() {
        canvas = createCanvas(280, 280);
        canvas.center();
        backgroung("orange");
        canvas.mouseReleased(classifyCanvas);
        synth = window.speechSynthesis;
    }

    function clearCanvas() {
        background("white");
    }

    function gotResult(error, results) {
        if (error ){
            console.error(error);
        }
        console.log(results);
        document.getElementById('label').innerHTML = 'label: ' + results[0].label;

        document.getElementById('confidence').innerHTML = 'Confidence: ' + Math.round(resultsp[0].confidence * 100) + '%';

        utterThis = new SpeechSynthesisUtterance(results[0].label);
        synth.speak(utterThis);
    }