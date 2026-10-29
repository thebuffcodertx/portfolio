
import { Link } from "react-router";

export default function BlogCard({ post }) {
  const formattedDate = new Date(
    `${post.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="blog-card">
      <div className="blog-card-meta">
        <span className="blog-category">
          {post.category}
        </span>

        <span>{formattedDate}</span>
        <span>{post.readingTime}</span>
      </div>

      <h2>
        <Link to={`/blog/${post.slug}`}>
          {post.title}
        </Link>
      </h2>

      <p>{post.excerpt}</p>

      <Link
        to={`/blog/${post.slug}`}
        className="blog-read-link"
      >
        Read Article
        <i
          className="bi bi-arrow-right"
          aria-hidden="true"
        />
      </Link>
    </article>
  );
}
