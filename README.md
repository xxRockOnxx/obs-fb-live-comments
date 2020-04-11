# OBS Facebook Live Comments

This is for Facebook users who do not want to create a Facebook Page and share their stream publicly just to show their comments feed on their stream.

It is not impossible but there are some steps you have to follow.

## Instructions

- Go to [Facebook developers page](https://developers.facebook.com/apps/) and create an app. Don't worry you don't need to know coding. App does not mean android/ios/desktop app in this context.

- Create a [Test App](https://developers.facebook.com/docs/apps/test-apps/) version of your app.<br/>
 `user_video` permission requires an App Review and to get around it since you're just using it for your personal account and not by the public is to use a Test App.
 
- Go to [Facebook Graph Explorer](https://developers.facebook.com/tools/explorer/?method=GET&path=%7Blive-video-id%7D&version=v6.0) and generate an Access Token.<br/>
 **Important Note**: Under `Facebook App` dropdown, select the Test version of your app otherwise you will not be able to select the `user_video` permission.

- Copy your Live Video's ID. ex: If your link is `https://www.facebook.com/1234567890/videos/0987654321` then your id would be `0987654321`

- Test in Graph Explorer if you can retrieve your Live Video's info. If you can then proceed to the next step.

- Replace `video_id` and `access_token` in the following link: https://obs-fb-live-comments.web.app?video_id=0987654321&access_token=abc123

- In OBS, add the link above as your browser source.

## FAQs

### How do I change the font-size?

Open up your Browser Source and add the following Custom CSS:

```css
.comment {
  font-size: 24px; // the default is 18px
}
```

### The comment is clipped or not wrapping to the next line

Change your Browser Source resolution.

For the default font-size of 18px, I start with 640x360.

### New comments are not loading anymore after an hours or two

According to the Facebook [documentation](https://developers.facebook.com/docs/facebook-login/access-tokens/#termtokens):

> User access tokens come in two forms: **short-lived tokens** and **long-lived tokens**.
>
>Short-lived tokens usually have a lifetime of about an hour or two, while long-lived tokens usually have a lifetime of about 60 days. 

If you are going to stream for longer hours, you have to get a long-lived-token.

Do the following steps to get one:

- Go Facebook [Graph Explorer](https://developers.facebook.com/tools/explorer)
- Put this in the address bar:
  ```
  oauth/access_token?grant_type=fb_exchange_token&client_id={app-id}&client_secret={app-secret}&fb_exchange_token={your-access-token}
  ```
- Replace `app-id`, `app-secret`, and `your-access-token` with yours. Do not include the `{` and `}`.

Note: App ID and App Secret can be found on your App's Dashboard. Go to `Settings` then `Basic`.

## Contributing

Feel free to fork this repo and submit a pull request.
