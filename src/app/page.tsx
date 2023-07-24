import { Post } from "./types";

async function getPosts() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!res.ok) {
    throw new Error("記事の取得に失敗しました");
  }

  const json = await res.json();
  return json as Post[];
}

export default async function Home() {
  const posts = await getPosts();

  return (
    <>
      <div>
        <h1>新着投稿</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <a href={`/posts/${post.id}`}>{post.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
