/*const axios = require('axios');

Set your API key and the YouTube channel ID
const API_KEY = "AIzaSyDAFvCVeuxRviLd5Oa44G6r5dYM8u6BgEg";
const CHANNEL_ID = "CHANNEL_ID";

async function fetchLatestVideos() {
    try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
            params: {
                part: 'snippet',
                channelId: CHANNEL_ID,
                maxResults: 5, // Number of videos to fetch
                order: 'date', // Order by date (latest first)
                key: AIzaSyDAFvCVeuxRviLd5Oa44G6r5dYM8u6BgEg
            }
            console.log(response);
        });

        Extract titles of the latest videos
        const videos = response.data.items.map(item => item.snippet.title);

        return videos;
    } catch (error) {
        console.error('Error fetching latest videos:', error);
        return [];
    }
}

fetchLatestVideos()
    .then(videos => {
        console.log("Latest Videos:");
        videos.forEach(videoTitle => {
            console.log(videoTitle);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
*/

fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(res));

