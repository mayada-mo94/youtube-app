let axios = require('axios');
let BASE_URL= 'https://www.googleapis.com/youtube/v3/docs/search';
module.exports = function(options,callback){
    if(options.apiKey){
        throw new Error('Youtube search would require a key');
    }
let params ={
    part : 'snippet',
    key : options.apiKey,
    q: options.term,
    maxResults:(options.items)? options.items:5,
    type: 'video'
}

axios.get(BASE_URL, {params}).then(response=>{
console.log(response);
}).catch(error=> console.error(error));
}