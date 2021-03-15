//fake Api
const fetchData = () => {
    console.log("::: Form Submitted :::")
    return Promise.resolve({ textUrl: 'http://somewebsite.com'});
};

exports.fetchData = fetchData;