//We’ll put all of our “fake” API request handlers inside handlers.js

import { rest } from 'msw'

export default [
  rest.get('/search', (req, res, ctx) => {
    return res(
      ctx.json({
        vidoes: [
          {
            videoChannelName: "Top Channel Albania",
            videoDescription: "Tajvani po përballet me thatësirën më të madhe në më shumë se një shekull. Asnjë tajfun nuk ka prekur tokë në ishull gjatë gjithë vitit të kaluar dhe kjo është ...",
            videoImgUrl: "https://i.ytimg.com/vi/X5JjDJnqEYU/mqdefault.jpg",
            videoTitle: "Top News - Tajvani nën kërcënim/ Përballet me thatësirën më të madhe në një shekull",
            videoViewCount: "2501",
            videochannelId: "UCyny-dfYPbE-CjAkzkZqF8A"
          }, {
            videoChannelName: "MedLife",
            videoDescription: "PRP este o tehnică inovatoare, minim invazivă, care favorizează procesul de apariția a unor factori de creștere și citokine, cu rol vital în capacitatea proprie de ...",
            videoImgUrl: "https://i.ytimg.com/vi/l6sUiddVFhs/mqdefault.jpg",
            videoTitle: "Terapia PRP în afectiunile ortopedice - o tehnică inovatoare și minim invazivă",
            videoViewCount: "358",
            videochannelId: "UCEaojrXnn-NqOSTDM5Z41Lg",
          }, {
            videoChannelName: "Top Channel Albania",
            videoDescription: "Tajvani po përballet me thatësirën më të madhe në më shumë se një shekull. Asnjë tajfun nuk ka prekur tokë në ishull gjatë gjithë vitit të kaluar dhe kjo është ...",
            videoImgUrl: "https://i.ytimg.com/vi/X5JjDJnqEYU/mqdefault.jpg",
            videoTitle: "Top News - Tajvani nën kërcënim/ Përballet me thatësirën më të madhe në një shekull",
            videoViewCount: "2501",
            videochannelId: "UCyny-dfYPbE-CjAkzkZqF8A"
          }, {
            videoChannelName: "MedLife",
            videoDescription: "PRP este o tehnică inovatoare, minim invazivă, care favorizează procesul de apariția a unor factori de creștere și citokine, cu rol vital în capacitatea proprie de ...",
            videoImgUrl: "https://i.ytimg.com/vi/l6sUiddVFhs/mqdefault.jpg",
            videoTitle: "Terapia PRP în afectiunile ortopedice - o tehnică inovatoare și minim invazivă",
            videoViewCount: "358",
            videochannelId: "UCEaojrXnn-NqOSTDM5Z41Lg",
          },
          {
            videoChannelName: "Top Channel Albania",
            videoDescription: "Tajvani po përballet me thatësirën më të madhe në më shumë se një shekull. Asnjë tajfun nuk ka prekur tokë në ishull gjatë gjithë vitit të kaluar dhe kjo është ...",
            videoImgUrl: "https://i.ytimg.com/vi/X5JjDJnqEYU/mqdefault.jpg",
            videoTitle: "Top News - Tajvani nën kërcënim/ Përballet me thatësirën më të madhe në një shekull",
            videoViewCount: "2501",
            videochannelId: "UCyny-dfYPbE-CjAkzkZqF8A"
          }, {
            videoChannelName: "MedLife",
            videoDescription: "PRP este o tehnică inovatoare, minim invazivă, care favorizează procesul de apariția a unor factori de creștere și citokine, cu rol vital în capacitatea proprie de ...",
            videoImgUrl: "https://i.ytimg.com/vi/l6sUiddVFhs/mqdefault.jpg",
            videoTitle: "Terapia PRP în afectiunile ortopedice - o tehnică inovatoare și minim invazivă",
            videoViewCount: "358",
            videochannelId: "UCEaojrXnn-NqOSTDM5Z41Lg",
          },
          {
            videoChannelName: "Головне Управління",
            videoDescription: "27 квітня у Дніпрі проведено спеціальні об'єктові навчання з питань цивільного захисту на базі ТОВ \"Фрост\". Під час навчань відпрацьовано ліквідацію ...",
            videoImgUrl: "https://i.ytimg.com/vi/j4nXsWQrnhs/mqdefault.jpg",
            videoTitle: "м. Дніпро: відпрацьовано ліквідацію можливої надзвичайної ситуацій на хімічно-небезпечному об&#39;єкті",
            videoViewCount: "138",
            videochannelId: "UCT3ZTEAnWML45ScZvaU3aBw",
          }]
      })
    )
  })
]