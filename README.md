# OBS Facebook Live Comments

This is for Facebook users who do not want to create a Facebook Page and share their stream publicly just to show their comments feed on their stream.

https://obs-fb-live-comments.web.app/

## FAQs

## Comments are sometimes now shown.

See the answer [here](https://github.com/xxRockOnxx/obs-fb-live-comments/issues/2).

### How do I change the font-size?

Open up your Browser Source and add the following Custom CSS:

```css
.comment {
  font-size: 24px; // the default is 20px
}
```

### The comment is clipped or not wrapping to the next line

Change your Browser Source resolution.

For the default font-size of 20px, I start with 640x360.

## Tips

Your `access_token` "generally lasts about 60 days", according to Facebook documentation.

What that means is that you don't have to log-in here every time you need a link for your stream... unless it doesn't work anymore for some reason.

"But how?" you might ask. You can just change the `video_id` part in the link with your stream's id.

**Example #1**, If your link looks like:

```
https://www.facebook.com/112233445566/videos/9876543210
```

then your `video_id` is `9876543210`.

**Example #2**, If your link looks like:

```
https://www.facebook.com/live/producer/123456789
```

then your `video_id` is `123456789`.

## Contributing

Feel free to fork this repo and submit a pull request.
