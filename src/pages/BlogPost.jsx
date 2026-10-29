
import { Link, useParams } from "react-router";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { getPost } from "../content/posts";
import "../styles/BlogPost.css";

export default function BlogPost() {
  const { slug } = useParams();
  const post = getPost(slug);

  if (!post) {
    return (
      <section className="article-section">
        <div className="article-container">
          <h1>Article not found</h1>
          <Link to="/blog">Back to Blog</Link>
        </div>
      </section>
    );
  }

  const formattedDate = new Date(
    `${post.date}T12:00:00`
  ).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article className="article-section">
      <div className="article-container">
        <Link to="/blog" className="article-back">
          <i className="bi bi-arrow-left" aria-hidden="true" />
          Back to Blog
        </Link>

        <header className="article-header">
          <span className="blog-category">
            {post.category}
          </span>

          <h1>{post.title}</h1>

          <p>
            {formattedDate} · {post.readingTime}
          </p>
        </header>

        <div className="article-content">
          <ReactMarkdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => <h2>{children}</h2>,
            }}
          >
            {post.content}
          </ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
