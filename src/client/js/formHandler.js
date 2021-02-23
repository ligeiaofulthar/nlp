import { checkUrl } from './urlChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let textUrl = document.getElementById('apitext').value
    console.log("::: Form Submitted :::", event, textUrl)

    if (checkUrl(textUrl)) {
        fetchData('http://localhost:8080/sentiment', textUrl)
    // .then(res => res.json())
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
    const resp = await fetch('http://localhost:8080/sentiment', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    // cache: "no-cache",
    headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
    },
    body: JSON.stringify({url: data }),
    });

    try {
        const apiAnswer = await resp.json()
        console.log(apiAnswer);
        return apiAnswer;

    } catch(error) {
        console.log('error', error);
    }
}

// translate api output
function polarity (result) {
  const answers = {
    'P+': 'strong positive',
    'NEU': 'neutral',
    'P': 'positive',
    'N': 'negative',
    'N+': 'strong negative',
    'default': 'without sentiment'
  };
  return (answers[result] || answers['default']);
}

export { handleSubmit }