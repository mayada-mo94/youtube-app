const STATISTICS_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0';
const CHANNEL_URL = 'https://www.googleapis.com/youtube/v3/channels?part=brandingSettings,statistics&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0';
const VIDEO_OF_CHANNEL_URL = 'https://www.googleapis.com/youtube/v3/search?key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0&part=snippet,id&order=date&maxResults=2';

import * as  axios from 'axios';
var numeral = require("numeral");

const getChannelData = async function (channelId) {
    try {
        if (channelId) {
            let channelUrl =`${CHANNEL_URL}&id=${channelId}`;
            const response = await axios.get(channelUrl)
            return {
                subscriberCount: numeral(response.data.items[0].statistics.subscriberCount).format("0,0"),
                channelTitle: response.data.items[0].brandingSettings.channel.title,
                bannerUrl: response.data.items[0].brandingSettings.image.bannerExternalUrl,
            };
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}
const getVideosOfChannel = async function (id) {
    try {
        if (id) {
            let dataResult = [];
            const response = await axios.get(`${VIDEO_OF_CHANNEL_URL}&channelId=${id}`)
            response.data.items.forEach(async function (value) {
                let videoId = value.id.videoId;
                let statisticsUrl =`${STATISTICS_VIDEOS_URL}&id=${videoId}`;
                var viewsCount = await axios.get(statisticsUrl)
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
            return dataResult;
        }
    }
    catch (error) {
        console.error(error);
        return [];
    }
}

export const Channel = {
    getChannelData,
    getVideosOfChannel
};