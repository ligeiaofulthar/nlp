import { checkUrl } from './urlChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let textUrl = document.getElementById('apitext').value
    console.log("::: Form Submitted :::", event, textUrl)

    if (checkUrl(textUrl)) {
        fetchData('http://localhost:5000/sentiment', textUrl)
        .then(res => {
            document.getElementById('score_tag').innerHTML = 'Polarity: '+polarity(res.score_tag);
            document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
            document.getElementById('text').innerHTML = `Url: ${res.url}`;

            const badge = document.getElementsByClassName('badge--selector');
            for (var i=0; i<badge.length; i++) {
                badge[i].classList.add("badge");
            }
        })
    }
};

const fetchData = async(textUrl = {},  data = {}) => {
    const resp = await fetch(textUrl, {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify({url: data }),
    })

    try {
        const apiAnswer = await resp.json()
        console.log('JSON:', apiAnswer)
        return apiAnswer;

    } catch(error) {
        console.log('error', error);
    }
}

function polarity(result) {
    if (result === 'P+') {
        result = 'Strong Positive';
    } else if (result === 'P') {
        result = 'Positive';
    } else if (result === 'NEU') {
        result = 'Neutral';
    } else if (result === 'N') {
        result = 'Negative';
    } else if (result === 'N+') {
        result = 'Strong Negative';
    } else {
        result = 'without Sentiment';
    }
    return result;
}

export { handleSubmit }