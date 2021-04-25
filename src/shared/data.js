import * as  axios from 'axios';
//let BASE_URL= 'https://www.googleapis.com/youtube/v3/docs/search';

const getVideos = async function () {
    // cant just return this, because its not what we want
    // return response.data;
    // but what if there is bad data in the response?
    // let data = response.data;
    // Let's parse it better
    try {
        const response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0")

        console.log(response.data.items)
        return response.data.items;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const searchForVideo = async function(data){
    console.log('hello' +data);
}
export const data = {
    getVideos,
    searchForVideo
};