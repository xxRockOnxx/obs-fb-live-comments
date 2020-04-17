const ID = "obs-fb-live-comments";
const container = document.createElement("div");

// Create our very own container
container.id = ID;
document.body.appendChild(container);

// Move comments to our container
const commentList = document.querySelector(".UFIList");
container.appendChild(commentList);

// Remove all elements in this page that is not ours, a script, or a link tag.
Array.prototype.forEach.call(document.body.children, function (el) {
  const tag = el.tagName.toLowerCase();

  if (el.id !== ID && tag !== "script" && tag !== "link") {
    document.body.removeChild(el);
  }
});

// Put our own stylesheet
const style = document.createElement("style");
style.type = "text/css";

const styleContent = document.createTextNode(
  "body{background:rgba(0,0,0,0) !important; overflow: hidden !important;}#obs-fb-live-comments{width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:16px}.UFIComment{background:rgba(0,0,0,0)}.UFICommentContentBlock{display:flex;align-items:center}.UFICommentContent{font-size:20px}.UFICommentBody{color:#fff;text-shadow:-1px -1px 0 #000,1px -1px 0 #000,-1px 1px 0 #000,1px 1px 0 #000}.UFICommentActions{display:none}"
);

style.appendChild(styleContent);
document.head.appendChild(style)
