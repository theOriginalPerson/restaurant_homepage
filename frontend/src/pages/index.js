import * as React from "react"
import { Link, graphql } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = ({ data }) => (
  <Layout>
    <Seo title="Los Pollos Hermanos" />
    <div id="main">
          <section id="about">
            <div className="aboutDiv">
              <h1 className="aboutHeading">About Us</h1>
              <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque semper hendrerit augue vel fermentum. 
              Morbi eu quam sed nisi tempus maximus. Curabitur ac eros at lectus faucibus efficitur vitae eu mi. Nam dapibus, 
              purus eget ultricies pulvinar, nibh lectus facilisis mauris, in suscipit urna dui sit amet augue. Nullam sit amet 
              tellus nec lorem molestie aliquet pharetra in lectus. In hac habitasse platea dictumst. Phasellus consequat justo eu 
              eros malesuada, vel mollis magna dictum. Nullam rhoncus, nunc vitae tristique molestie, felis purus accumsan mauris, 
              in posuere dui massa ac enim. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porta viverra odio 
              eu vestibulum. Mauris pretium, dui nec dignissim bibendum, ante erat mattis felis, eu blandit quam est id lorem. 
              Curabitur commodo turpis at nulla dictum varius. Maecenas luctus sapien a malesuada sodales. Sed imperdiet sem in 
              scelerisque semper. Fusce pharetra justo dolor, quis ultricies diam rhoncus ac.
              </p>
              <img className="imgLayout" src="https://media.timeout.com/images/105541804/750/422/image.jpg"/>
            </div>
          </section>

          <section id="menu">
            <div className="menuDiv">
              <h1 className="menuHeading">Menu</h1>
              <ol>
                {data.allStrapiItem.edges.map(document => (
                  <li key={document.node.id}>
                    <h2>{document.node.food_name}............ ${document.node.price}</h2>
                    <p>{document.node.description}</p>
                    <div className="imagesDiv"><GatsbyImage className="images" image={document.node.image.localFile.childImageSharp.gatsbyImageData}/></div>
                  </li>
                ))}
              </ol>
            </div>
          </section>

          <section id="order">
            <div className="orderDiv">
              <h1 className="orderHeading">Order</h1>
              <div className="orderFormDiv">
                <form id="orderForm">

                  <input type="text" placeholder="First Name"></input><br />

                  <input type="text" placeholder="Last Name"></input><br />

                  <input type="text" placeholder="Item"></input><br />

                  <input type="number" placeholder="Item No."></input><br />

                  <label>Visa/Debit</label>
                  <input type="text" placeholder="XXXX - XXXX - XXXX - XXXX"></input><br />

                  <input type="submit"></input>
                </form>
              </div>
            </div>
          </section>
        </div>
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query MyQuery {
    allStrapiItem {
      edges {
        node {
          food_name
          description
          id
          price
          image {
            localFile {
              childImageSharp {
                gatsbyImageData(height: 500, width: 500)
              }
            }
          }
        }
      }
    }
  }

`