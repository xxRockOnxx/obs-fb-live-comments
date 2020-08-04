const ID = "obs-fb-live-comments";
const container = document.createElement("div");

// Create our very own container
container.id = ID;
document.body.appendChild(container);

// Move comments to our container
const commentList = document.querySelector('.eg9m0zos.datstx6m');
container.appendChild(commentList);

// Remove all elements in this page that is not ours, a script, or a link tag.
Array.prototype.forEach.call(document.body.children, function (el) {
  const tag = el.tagName.toLowerCase();

  if (el.id !== ID && tag !== "script" && tag !== "link" && tag !== "style") {
    document.body.removeChild(el);
  }
});

// Put our own stylesheet
const style = document.createElement("style");
style.type = "text/css";

const styleContent = document.createTextNode("html{font-size:16px;} body{background:rgba(0,0,0,0) !important;overflow: hidden !important;}#obs-fb-live-comments{width:100vw;height:100vh;display:flex;flex-direction:column;justify-content:flex-end;padding-bottom:16px }.eg9m0zos.datstx6m {background:rgba(0,0,0,0);height: auto !important; overflow-y: hidden !important;}._6coi.oygrvhab.ozuftl9m.l66bhrea.linoseic,.pgctjfs5.sf5mxxl7.q9uorilb{display:none}.nqmvxvec.s45kfl79.emlxlaya.bkmhp75w.spb7xbtv.a8c37x1j.fv0vnmcu.rs0gx3tq.l9j0dhe7{ align-self:center !important;}");
style.appendChild(styleContent);
document.head.appendChild(style)

// Scroll to the last comment
commentList.scrollTop = commentList.scrollHeight
