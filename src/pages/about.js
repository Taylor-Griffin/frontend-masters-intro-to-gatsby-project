import * as React from 'react';
import { Link, graphql } from 'gatsby';
import Layout from '../components/layout';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';

export const query = graphql`
  query CocktailQuery {
    file(name: { eq: "cocktail" }) {
      childImageSharp {
        gatsbyImageData(placeholder: DOMINANT_COLOR)
      }
    }
  }
`;
export default function AboutPage({ data }) {
  return (
    <Layout title="About this Site">
      <GatsbyImage image={getImage(data.file)} alt="an elaborate cocktail " />
      <h1>About this site</h1>
      <Link to="/">Back to home</Link>
    </Layout>
  );
}
