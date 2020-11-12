// document.getElementById('generate').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    //event.preventDefault()

    // check what text was put into the form field
    let text = document.getElementById('apitext').value
    console.log("::: Form Submitted :::", event, text)
    
    fetchData(text)
    // .then(res => res.json())
    .then(res => {
        document.getElementById('score_tag').innerHTML = `Score Tag: ${res.score_tag}`;
        document.getElementById('irony').innerHTML = `Irony: ${res.irony}`;
        document.getElementById('confidence').innerHTML = `Confidence: ${res.confidence}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('text').innerHTML = `Text: ${res.text}`;

    })
};

const fetchData = async(text='') => {
    const resp = await fetch('http://localhost:8080/sentiment', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    // cache: "no-cache",
    headers: {
        'Content-Type': 'application/json',
        // 'Accept': 'application/json'
    },
    body: JSON.stringify( {text: text }),
    });

    try {
        const newData = await resp.json()
        console.log(newData);
        return newData;

    } catch(error) {
        console.log('error', error);
    }
}

export { handleSubmit }
