import { checkUrl } from './urlChecker';

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let textUrl = document.getElementById('apitext').value
    console.log("::: Form Submitted :::", event, textUrl)
    
    if (checkUrl(textUrl)) {
        fetchData('/sentiment', textUrl)
    // .then(res => res.json())
    .then(res => {
        document.getElementById('score_tag').innerHTML = 'Polarity: '+polarityChecker(res.score_tag);
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
    const resp = await fetch('/sentiment', {
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
        const newData = await resp.json()
        console.log(newData);
        return newData;

    } catch(error) {
        console.log('error', error);
    }
}

const polarityChecker = (score) => {
    let show;
    switch (score) {
        case "P+":
            show = "strong positive";
          break;
        case "P":
          show = "positive";
          break;
        case "NEU":
          show = "neutral";
          break;
        case "N":
          show = "negative";
          break;
        case "N+":
          show = "strong negative";
          break;
        default:
          show = "Swithout sentiment";
      }
      return show;

    }

export { handleSubmit }
