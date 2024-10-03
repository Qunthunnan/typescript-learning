interface Post {
	userId: number;
	id: number;
	title: string;
	body: string;
}

let posts: Post[] = [];

fetch("https://jsonplaceholder.typicode.com/posts")
	.then((response) => response.json())
	.then((data) => {
		if (Array.isArray(data) && "id" in data[0] && "title" in data[0]) {
			posts = data;
			generatePosts(posts);
		}
	});

function generatePosts(posts: Post[]): void {
	const container = document.createElement("div") as HTMLElement;
	container.classList.add("container");
	posts.forEach((post) => {
		const postWrapper = document.createElement("div") as HTMLElement;
		postWrapper.classList.add("block");
		postWrapper.innerHTML = `
                <span>ID: ${post.id}</span>
                <span>UserID: ${post.userId}</span>
                <h3>${post.title}</h3>
                <p>${post.body}</p>
        `;
		container.append(postWrapper);
	});
	document.body.append(container);
}

async function returnPromise(data: string): Promise<Post[]> {
	return [
		{
			id: 5,
			userId: 5,
			title: "sfhkshf",
			body: "sfjsfh",
		},
	];
}

// let fetchPost: Promise<Post>;
// fetchPost.then(result => {})

type FunctType = ReturnType<typeof returnPromise>;
type FunctTypeAwait = Awaited<FunctType>;
