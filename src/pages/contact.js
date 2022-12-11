import React from 'react';
import Layout from '../components/Layout';
import RecipesList from '../components/RecipesList';
import { Link, graphql } from 'gatsby';

const Contact = ({
  data: {
    allContentfulRecipe: { nodes: recipes },
  },
}) => {
  return (
    <Layout>
      <main className='page'>
        <section className='contact-page'>
          <article className='contact-info'>
            <h3>Want To Get In Touch</h3>
            <p>
              Four dollar toast biodiesel plaid salvia actually pickled banjo
              bespoke mlkshk intelligentsia edison bulb synth.
              <br />
              <br />
              Cardigan prism bicycle rights put a bird on it deep v.
              <br />
              <br />
              Hashtag swag health goth air plant, raclette listicle fingerstache
              cold-pressed fanny pack bicycle rights cardigan poke.
            </p>
          </article>
          <article>
            <form className='form contact-form'>
              <div className='form-row'>
                <label htmlFor='name'>your name</label>
                <input type='text' name='name' id='name' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>your email</label>
                <input type='email' name='email' id='email' />
              </div>
              <div className='form-row'>
                <label htmlFor='email'>message</label>
                <textarea name='message' id='message'></textarea>
              </div>
              <button type='submit' className='btn block'>
                submit
              </button>
            </form>
          </article>
        </section>
        <section className='featured-recipes'>
          <h5>Look at this awesome sauce</h5>
          <RecipesList recipes={recipes} />
        </section>
      </main>
    </Layout>
  );
};

export const query = graphql`
  query {
    allContentfulRecipe(
      filter: { featured: { eq: true } }
      sort: { title: ASC }
    ) {
      nodes {
        id
        title
        cookTime
        prepTime
        image {
          gatsbyImageData(layout: CONSTRAINED, placeholder: BLURRED)
        }
      }
    }
  }
`;

export default Contact;
