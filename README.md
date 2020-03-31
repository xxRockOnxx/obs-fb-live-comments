# OBS Facebook Live Comments

## Instructions

- Download the `index.html` file on this repo

- Go to [Facebook developers page](https://developers.facebook.com/apps/) and create an app.

- Create a [Test App](https://developers.facebook.com/docs/apps/test-apps/) version of your app.<br/>
 `user_video` permission requires an App Review and to get around it since you're just using it for your personal account and not by the public is to use a Test App.
 
- Go to [Facebook Graph Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Blive-video-id%7D&version=v6.0) and generate an Access Token.<br/>
 **Important Note**: Under `Facebook App` dropdown, select the Test version of your app otherwise you will not be able to select the `user_video` permission.

- Copy your Live Video's ID. ex: If your link is `https://www.facebook.com/1234567890/videos/0987654321` then your id would be `0987654321`

- Test in Graph Explorer if you can retrieve your Live Video's info. If you can then proceed to the next step.

- edit `index.html` with notepad or any editor of your choice and replace the `videoId` and `accessToken` variables in the `script` part

- In OBS, you can add this html file in a Browser source

## Contributing

Feel free to fork this repo and submit a pull request.
