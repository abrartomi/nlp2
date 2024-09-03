import axios from "axios";
const { validateUrl } = require("./checkName");

const input = document.getElementById("URI");

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');
    form.addEventListener('submit', handleSubmit);
});

document.addEventListener('DOMContentLoaded', function () {
    input.addEventListener("change", (e) => {
        e.preventDefault();
        hide_error();
        show_results(false);
    });
});

// handle the submit
async function handleSubmit(e) {
    e.preventDefault();

    const form = document.querySelector("form");

    if (!validateUrl(input.value)) { 
        show_error();
        document.getElementById("error").innerHTML = "Enter a valid URL";
        input.value = "";
        return;
    }

    loading(true);

    try {
        const { data } = await axios.post(
            'http://localhost:8000/',
            { URI: input.value },  
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        );
        display_results(data);
    } catch (error) {
        console.error("Error during submission:", error);
        document.getElementById("error").innerHTML = "An error occurred while sending data.";
        show_error();
        loading(false);
    }
}

const display_results = data => {
    loading(false);

    if (data.msg) {
        show_error();
        show_results(false);
        document.getElementById("error").innerHTML = `${data.msg}`;
        return;
    }

    hide_error();
    show_results(true);

    document.getElementById("agreement").innerHTML = `Agreement: ${data.sample.agreement}`;
    document.getElementById("subjectivity").innerHTML = `Subjectivity: ${data.sample.subjectivity}`;
    document.getElementById("confidence").innerHTML = `Confidence: ${data.sample.confidence}`;
    document.getElementById("irony").innerHTML = `Irony: ${data.sample.irony}`;
    document.getElementById("score_tag").innerHTML = `Score Tag: ${data.sample.score_tag}`;
}

const loading = (bool) => {
    const loader = document.getElementById('loader');
    if (bool) {
        loader.style.display = 'block';
        return;
    }
    loader.style.display = 'none';
}

const show_results = (bool) => {
    document.querySelectorAll("ul li").forEach(element => {
        element.style.display = bool ? "block" : "none";
    });
}

const show_error = () => document.getElementById("error").style.display = "block";
const hide_error = () => document.getElementById("error").style.display = "none";

export { handleSubmit };
