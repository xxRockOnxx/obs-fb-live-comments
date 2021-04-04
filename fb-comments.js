// Step 1
// Copy the original WebSocket function
// because we are going to override it.
const NativeWebSocket = window.WebSocket;

// Override original WebSocket so we can
// have a reference to the instance FB will use.
// They only use 1 connection (at least based on my experience).
// Can't find a way to make a connection to them manually.
window.WebSocket = function(...args) {
  const instance = new NativeWebSocket(...args);
  window.chat = instance;
  return instance;
}

// Step 2
// Remove all elements in the page.
Array.prototype.forEach.call(document.body.children, function (el) {
  document.body.removeChild(el);
})

// Create our chat container
const ID = 'obs-fb-live-comments';
const containerElement = document.createElement('div');
containerElement.id = ID;

// Put our container to the page.
document.body.appendChild(containerElement);

// Make the webpage transparent and hide scrollbar
// so we can use it as overlay in OBS.
document.documentElement.style.setProperty('overflow', 'hidden', 'important');
document.body.style.setProperty('overflow', 'hidden', 'important');
document.body.style.setProperty('background', 'rgba(0,0,0,0)', 'important');

function createCommentElement({ author, message }) {
  const commentEl = document.createElement('div');
  commentEl.classList.add('message');

  const authorEl = document.createElement('div');
  authorEl.classList.add('message__author');
  authorEl.textContent = author;

  const bodyEl = document.createElement('div')
  bodyEl.classList.add('message__body')
  bodyEl.textContent = message;

  commentEl.appendChild(authorEl);
  commentEl.appendChild(bodyEl);

  return commentEl;
}

// (You need Babelify the code under to support optional chaining.
// Babel has an online REPL. Just run it there.)

// Listen for new comments and do stuff
window.chat.addEventListener('message', evt => {
  const decoder = new TextDecoder("utf-8");
  const rootJson = decoder.decode(evt.data);

  // The message seems to container a "topic" name at the start.
  // I think it is MQTT stuff and I do not know how to work with it
  // especially in the browser AND without loading external scripts.
  const normalizedJson = rootJson.slice(rootJson.indexOf('{'))

  try {
    const parsedJson = JSON.parse(normalizedJson)
    const rootData = parsedJson.frames?.[0].data

    if (!rootData) {
      return;
    }

    console.log("Has rootData. Parsing data now.")

    const parsedData = JSON.parse(atob(rootData.data))

    if (!parsedData) {
      return;
    }

    console.log("Has parsedData. Parsing comment now.")

    const comment = parsedData?.data?.live_video_comment_create_subscribe?.comment

    if (!comment) {
      return;
    }

    console.log('Has a comment.', { comment });

    console.log({
      author: comment.author.name,
      message: comment.body.text,
    })

    // Insert comment element to the container
    containerElement.appendChild(createCommentElement({
      author: comment.author.name,
      message: comment.body.text,
    }));

    // Scroll to the last comment
    document.body.scrollTop = document.body.scrollHeight;
  } catch(e) {
    // not the data we want or just dont crash at all whatever happens.
  }
});
