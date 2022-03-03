import * as React from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';
import Layout from '../components/layout';
import { StaticImage } from 'gatsby-plugin-image';
import { imageWrapper } from '../styles/index.module.css';

export default function IndexPage() {
  const data = useStaticQuery(graphql`
    query GetBlogPosts {
      allMdx {
        nodes {
          frontmatter {
            date(fromNow: true)
            title
            description
          }
          id
          slug
        }
      }
    }
  `);
  const posts = data.allMdx.nodes;
  return (
    <Layout>
      <div className={imageWrapper}>
        <StaticImage
          src="../images/ivana-la-61jg6zviI7I-unsplash.jpg"
          alt="a corgi sitting on a bed with red paper hearts all over it. it looks unamused."
          placeholder="dominantColor"
          width={300}
          height={300}
        />
      </div>
      <h1>Hello Frontend Masters!</h1>
      <Link to="/about">Learn About</Link>
      <h2>Check out my recent blog posts</h2>
      {posts.map((post) => (
        <li key={post.id}>
          <Link to={post.slug}>{post.frontmatter.title}</Link>{' '}
          <small>posted {post.frontmatter.date}</small>
        </li>
      ))}
    </Layout>
  );
}
