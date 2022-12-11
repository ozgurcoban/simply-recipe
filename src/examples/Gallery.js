import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import styled from 'styled-components';

const query = graphql`
  {
    allFile(filter: { extension: { ne: "svg" } }) {
      nodes {
        name
        childImageSharp {
          gatsbyImageData(
            layout: FIXED
            placeholder: BLURRED
            width: 200
            height: 200
          )
        }
      }
    }
  }
`;
const Gallery = () => {
  const data = useStaticQuery(query);
  const nodes = data.allFile.nodes;
  return (
    <Wrapper>
      {nodes.map((image, i) => {
        const { name } = image;
        const pathToImage = getImage(image);
        return (
          <article key={i} className='item'>
            <GatsbyImage
              className='gallery-img'
              alt={name}
              image={pathToImage}
            />
            <p>{name}</p>
          </article>
        );
      })}
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-wrap: wrap;

  .item {
    margin-right: 1rem;
  }

  .gallery-img {
    border-radius: 0.5rem;
  }
`;

export default Gallery;
