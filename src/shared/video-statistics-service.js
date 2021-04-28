import * as  axios from 'axios';

const getVideosStatistics = async function (videId,videoReturned) {
    try {
        await axios.get(`https://www.googleapis.com/youtube/v3/videos?part=statistics&id=${videId}&key=AIzaSyAHGAQ2HWZf80MmcfNTsraJ_9HSt_-8ob0`).then((viewsCount)=>{
            let viewCount = viewsCount.data.items[0].statistics.viewCount;
            return {
                videoViewCount: viewCount,
                videoTitle: videoReturned.snippet.title,
                videoDescription: videoReturned.snippet.description,
                videoImgUrl: videoReturned.snippet.thumbnails.medium.url,
                videochannelId: videoReturned.snippet.channelId,
                videoChannelName: videoReturned.snippet.channelTitle,
            }
        })
    } catch (error) {
        console.error(error);
        return [];
    }
};

export const videos_statistics_service = {
    getVideosStatistics,
};