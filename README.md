# youtube-app

this project is include demo link:
youtube-app-part1
https://drive.google.com/file/d/12u3nRoTY47IqLQGAx6-Ez4DqojbiDJ4u/view?usp=sharing

youtube-app-part11
https://drive.google.com/file/d/1SnstHsW7HUEsAUv8pioJoj_mc9IBvptu/view?usp=sharing

## Steps of Configuring 
clone: https://github.com/mayada-mo94/youtube-app.git

make sure you in [master] branch.

## Run App
```
- npm install
- npm run serve 
to run unit test 
- npm run test:unit 

```
## Project Includes 
- the main page:
    - is a search page /search?query={txt}

- in the Desktop
    - the heder is fixed when scrolling
    - the page will use enless scrolling when you scroll to the end of the page
    - u can use search box to filter or filter by query string like: /search?query={txt}
    - click on channel name to navigate to channel detail, 
    - u can use /channel/{channelId} to naviagte to channel detail directly.
- in the mobile 
    - the header contains logo search text and search icon.
    - the channel has load more items when u click will be loading more items
