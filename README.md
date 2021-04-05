# OBS Facebook Live Comments

This is for Facebook users who do not want to create a Facebook Page and share their stream publicly just to show their comments feed on their stream.

**Use this at your own Risk**.

I attempted making a proper app that allows people to login using their Facebook account and simply copying a link to their Browser Source ([see more here](https://github.com/xxRockOnxx/obs-fb-live-comments/issues/2)) similar to TidyLabs if you are DLive user, but unfortunately Facebook did not approve the app.

The app requires approval from Facebook so it can access your Live Streams but according to [here](https://developers.facebook.com/docs/facebook-login/permissions/#reference-user_videos):

> ### user_videos
>
> Requires App Review
>
> The `user_videos` permission allows your app to read a list of videos uploaded by a user.
>
>  Allowed Usage:
>  - Display a person's videos on a TV via a set-top box or display their videos in a digital photo frame.
>  - Provide people with the ability to edit or create new video content using existing videos.
>  - Provide people with the ability to display their video with owners within their app, like in dating or social apps.

Hence, the disapproval. If I have to point it out to you, what we want is not part of the Allowed Usage.

**BUT**, "Where there is a will, there is a way", so here you go.

## Instructions (Updated Apr 04, 2021; Better code that doesn't rely on DOM)
Instructions at https://obs-fb-live-comments.web.app

Tired of updating both the website and this README file so just head over there.

The website is much more visited than the repo.
