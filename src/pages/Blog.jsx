
import BlogCard from "../components/BlogCard";
import { posts } from "../content/posts";
import "../styles/Blog.css";

export default function Blog() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date) - new Date(a.date)
  );

  return (
    <section className="blog-section">
      <div className="blog-container">
        <header className="blog-heading">
          <span className="blog-eyebrow">
            THE ENGINEERING JOURNAL
          </span>

          <h1>Notes from the Journey.</h1>

          <div className="blog-divider" />

          <p>
            Documenting what I'm learning, what I'm
            building, and what I'm figuring out
            along the way.
          </p>
        </header>

        <div className="blog-list">
          {sortedPosts.map((post) => (
            <BlogCard
              key={post.slug}
              post={post}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
