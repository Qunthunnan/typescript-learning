var posts = [];
fetch("https://jsonplaceholder.typicode.com/posts")
    .then(function (response) { return response.json(); })
    .then(function (data) {
    if (Array.isArray(data) && "id" in data[0] && "title" in data[0]) {
        posts = data;
        generatePosts(posts);
    }
});
function generatePosts(posts) {
    var container = document.createElement("div");
    container.classList.add("container");
    posts.forEach(function (post) {
        var postWrapper = document.createElement("div");
        postWrapper.classList.add("block");
        postWrapper.innerHTML = "\n                <span>ID: ".concat(post.id, "</span>\n                <span>UserID: ").concat(post.userId, "</span>\n                <h3>").concat(post.title, "</h3>\n                <p>").concat(post.body, "</p>\n        ");
        container.append(postWrapper);
    });
    document.body.append(container);
}
