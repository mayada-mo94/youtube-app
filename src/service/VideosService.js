const SEARCH_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0&maxResults=5';
const STATISTICS_VIDEOS_URL = 'https://www.googleapis.com/youtube/v3/videos?part=statistics&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0';
const SEARCH_VIDEO_URL = 'https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0';

import * as  axios from 'axios';
import { uuid } from 'vue-uuid';

const getVideos = async function () {
    try {
        let dataResult = [];
        const response = await axios.get(SEARCH_VIDEOS_URL)
        await Promise.all(response.data.items.map(async (value) => {
            let videoId = value.id.videoId;
            let statisticsUrl =`${STATISTICS_VIDEOS_URL}&id=${videoId}`;
            await axios.get(statisticsUrl).then((viewsCount) => {
                let viewCount = viewsCount.data.items[0].statistics.viewCount;
                var item = {
                    videoViewCount: viewCount,
                    videoTitle: value.snippet.title,
                    videoDescription: value.snippet.description,
                    videoImgUrl: value.snippet.thumbnails.medium.url,
                    videochannelId: value.snippet.channelId,
                    videoChannelName: value.snippet.channelTitle,
                    videoRowKey:uuid.v1(),
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
    try {
        let dataResult = [];
        let searchForVideo= `${SEARCH_VIDEO_URL}&q=${data}`;
        const response = await axios.get(searchForVideo)
        await Promise.all(response.data.items.map(async (value) => {
            let videoId = value.id.videoId;
            let statisticsUrl =`${STATISTICS_VIDEOS_URL}&id=${videoId}`;
            await axios.get(statisticsUrl).then((viewsCount) => {
                let viewCount = viewsCount.data.items[0].statistics.viewCount;
                var item = {
                    videoViewCount: viewCount,
                    videoTitle: value.snippet.title,
                    videoDescription: value.snippet.description,
                    videoImgUrl: value.snippet.thumbnails.medium.url,
                    videochannelId: value.snippet.channelId,
                    videoChannelName: value.snippet.channelTitle,
                    videoRowKey:uuid.v1(),
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

export const VideosService = {
    getVideos,
    searchForVideo
};