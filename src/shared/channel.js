 import * as  axios from 'axios';
 var numeral = require("numeral");
//let BASE_URL= 'https://www.googleapis.com/youtube/v3/docs/search';

const getChannelData = async function(id){
     const response = await axios.get(`https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,statistics&id=${id}&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0`)
  console.log(response)
    return {
         subscriberCount : numeral(response.data.items[0].statistics.subscriberCount).format("0,0"),
         channelTitle : response.data.items[0].brandingSettings.channel.title,
         bannerUrl : response.data.items[0].brandingSettings.image.bannerExternalUrl,
    };
}
const getVideosOfChannel = async function(id){
let dataResult=[];
   const response = await axios.get(`https://www.googleapis.com/youtube/v3/search?key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0&channelId=${id}&part=snippet,id&order=date&maxResults=2`)
    response.data.items.forEach(async function (value) {
        let videId = value.id.videoId;
        var viewsCount = await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videId}&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0`)
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
    });
    return dataResult
}
export const channel = {
    getChannelData,
    getVideosOfChannel
};