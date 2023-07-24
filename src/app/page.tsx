import PostCard from "./components/ArticleCard";
import { Post } from "./types";

async function getPosts() {
  // fetchはデフォルトでキャッシュを使用：https://developer.mozilla.org/ja/docs/Web/API/Fetch_API/Using_Fetch
  // cache: "no-cache"でキャッシュを使用しない
  const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
    cache: "no-cache",
  });
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
      <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
        <h1>新着投稿</h1>
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <PostCard post={post} />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
