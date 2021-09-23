// Create our chat container
const ID = "obs-fb-live-comments";
const containerElement = document.createElement("div");
containerElement.id = ID;

function createCommentElement({ author, message }) {
  const commentEl = document.createElement("div");
  commentEl.classList.add("message");

  const authorEl = document.createElement("div");
  authorEl.classList.add("message__author");
  authorEl.textContent = author;

  const bodyEl = document.createElement("div");
  bodyEl.classList.add("message__body");
  bodyEl.textContent = message;

  commentEl.appendChild(authorEl);
  commentEl.appendChild(bodyEl);

  return commentEl;
}

function websocketHandler(evt) {
  const decoder = new TextDecoder("utf-8");
  const rootJson = decoder.decode(evt.data);

  // The message seems to contain a "topic" name at the start and end of the data.
  // I think it is MQTT stuff and I do not know how to work with it
  // especially in the browser AND without loading external scripts.
  const startOfJson = rootJson.indexOf("{");
  const endOfJson = rootJson.lastIndexOf("}");
  const normalizedJson = rootJson.slice(startOfJson, endOfJson + 1);

  try {
    const parsedJson = JSON.parse(normalizedJson);

    // Not all OBS version supports Optional Chaining atm.
    // const comment = parsedJson?.data?.live_video_comment_create_subscribe?.comment;

    const comment = (((parsedJson || {}).data || {}).live_video_comment_create_subscribe || {}).comment;

    // The message received does not contain a comment.
    // Could be for other stuff that we don't need.
    if (!comment) {
      return;
    }

    console.log("Has a comment.", comment);

    // Insert comment element to the container
    containerElement.appendChild(
      createCommentElement({
        author: comment.author.name,
        message: comment.body.text,
      })
    );

    // Scroll to the last comment
    document.body.scrollTop = document.body.scrollHeight;
  } catch (e) {
    // not the data we want and just dont crash at all whatever happens.
  }
}

// Copy the original WebSocket function
// because we are going to override it.
const NativeWebSocket = window.WebSocket;

// Override original WebSocket so we can
// have a reference to the instance FB will use.
// Can't find a way to make a connection to them manually.
window.WebSocket = function (...args) {
  const instance = new NativeWebSocket(...args);

  // Listen for new comments and do stuff.
  instance.addEventListener("message", websocketHandler);

  return instance;
};

// Remove all elements in the page.
Array.prototype.forEach.call(document.body.children, function (el) {
  document.body.removeChild(el);
});

// Put our container to the page.
document.body.appendChild(containerElement);

// Make the webpage transparent and hide scrollbar
// so we can use it as overlay in OBS.
document.documentElement.style.setProperty("overflow", "hidden", "important");
document.body.style.setProperty("overflow", "hidden", "important");
document.body.style.setProperty("background", "rgba(0,0,0,0)", "important");
