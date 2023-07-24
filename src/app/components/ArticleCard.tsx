import Link from "next/link";
import { Post } from "../types";

export default function PostCard({ post }: { post: Post }) {
  return (
    <>
      <Link href={`/articles/${post.id}`}>
        <CardHeader>
          <Heading>{post.title}</Heading>
        </CardHeader>
        <CardBody>
          <Text>{post.body.substring(0, 200)}...</Text>
        </CardBody>
      </Link>
    </>
  );
}

function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className="bg-blue-500 text-white p-5">{children}</div>;
}

function CardBody({ children }: { children: React.ReactNode }) {
  return <div className="bg-white p-5">{children}</div>;
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="text-xl font-bold">{children}</h2>;
}

function Text({ children }: { children: React.ReactNode }) {
  return <p className="text-base text-gray-700">{children}</p>;
}
