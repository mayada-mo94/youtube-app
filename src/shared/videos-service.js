import * as  axios from 'axios';
//let BASE_URL= 'https://www.googleapis.com/youtube/v3/docs/search';

const getVideos = async function () {
    try {
        let dataResult = [];
       const response = await axios.get("https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0&maxResults=5")
       await Promise.all(response.data.items.map(async(value)=>{
        let videId = value.id.videoId;
        await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videId}&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0`).then((viewsCount)=>{
            let viewCount = viewsCount.data.items[0].statistics.viewCount;
            var item = {
                videoViewCount: viewCount,
                videoTitle: value.snippet.title,
                videoDescription: value.snippet.description,
                videoImgUrl: value.snippet.thumbnails.medium.url,
                videochannelId: value.snippet.channelId,
                videoChannelName: value.snippet.channelTitle,
            }
            dataResult.push(item);
        })
       }));
        return dataResult;
    } catch (error) {
        console.error(error);
        return [];
    }
};

const searchForVideo = async function (data) {
    try{
        let dataResult = [];
        const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${data}&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0`)
        await Promise.all(response.data.items.map(async(value)=>{
        let videId = value.id.videoId;
        await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videId}&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0`).then((viewsCount)=>{
            let viewCount = viewsCount.data.items[0].statistics.viewCount;
            var item = {
                videoViewCount: viewCount,
                videoTitle: value.snippet.title,
                videoDescription: value.snippet.description,
                videoImgUrl: value.snippet.thumbnails.medium.url,
                videochannelId: value.snippet.channelId,
                videoChannelName: value.snippet.channelTitle,
            }
            dataResult.push(item);
        })
        }));
        return dataResult;
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export const videos_service = {
    getVideos,
    searchForVideo
};