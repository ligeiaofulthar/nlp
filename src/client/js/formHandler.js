document.getElementById('generate').addEventListener('click', handleSubmit);

function handleSubmit(event) {
    event.preventDefault()

    //event.preventDefault()

    // check what text was put into the form field
    let text = document.getElementById('apitext').value
    console.log("::: Form Submitted :::", event, text)

    fetch('/sentiment', {
    method: 'POST',
    mode: 'cors',
    credentials: 'same-origin',
    cache: "no-cache",
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    },
    body: JSON.stringify( {text: text }),
    })
    .then(res => res.json())
    .then(res => {
        document.getElementById('results').innerHTML = res.status;
        document.getElementById('results').innerHTML = res.model;
        console.log(res.status);
    })
    // getSentiment()
    // postData('/sentiment', {
    //     text: apitext
    // })
    // .then(updateUI);

};



// const postData = async ( url = '', data = {})=>{
//     const req = await fetch(url, {
//     method: 'POST',
//     credentials: 'same-origin',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify(data),

//   });

//   try {
//       const newData = await req.json();
//       return newData;
//   }
//   catch(error) {
//       console.log("error", error);
//   }
// }

export { handleSubmit }

// function handlesubmit(event) {
//     event.preventDefault()

//     // check what text was put into the form field

//     let text = document.getElementById('apitext').value;
//     console.log(text);
//     console.log("::: Form Submitted :::")

//     fetch('/sentiment',{
//         method: 'POST', 
//         credentials: 'same-origin', 
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify({text:text})
//     })
//     .then(res => res.json())
//     // .then(function(res) {
//     //     document.getElementById('results-status').innerHTML = res.status.msg;
//     //     document.getElementById('results-model').innerHTML = res.model;
//     //     document.getElementById('results-agreement').innerHTML = res.agreement;
        
//     // })
    
// }

// export { getData }