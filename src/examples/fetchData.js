import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

const getData = graphql`
  {
    site {
      info: siteMetadata {
        author
        description
        simpleData
        title
        complexData {
          age
          name
        }
        person {
          age
          name
        }
      }
    }
  }
`;

const FetchData = () => {
  const {
    site: {
      info: { title },
    },
  } = useStaticQuery(getData);
  return (
    <div>
      <h2>Site title: {title}</h2>
    </div>
  );
};

export default FetchData;
