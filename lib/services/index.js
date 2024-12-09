import { request, gql } from 'graphql-request';

const graphqlAPI =
  'https://us-west-2.cdn.hygraph.com/content/ckwdieryh003k01xpdrau9db0/master';

  export const getMax3PostsCards = async (currentPostId, currentPostTags) => {
    const query = gql`
      query getRelatedPosts($currentPostId: ID!, $tags: [ID]!) {
        blogPosts(
          first: 3
          orderBy: date_DESC
          where: {
            isHidden: false
            isFeaturedTwo: false
            isFeaturedOne: false
            id_not: $currentPostId
            tags_some: { id_in: $tags }
          }
        ) {
          id
          slug
          title
          summery
          image {
            url
            width
            height
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, {
      currentPostId,
      tags: currentPostTags.map((tag) => tag.id),
    });
  
    // If no related posts found, fetch the last 3 posts excluding the current post
    if (result.blogPosts.length === 0) {
      const fallbackQuery = gql`
        query getFallbackPosts($currentPostId: ID!) {
          blogPosts(
            first: 3
            orderBy: date_DESC
            where: {
              isHidden: false
              isFeaturedTwo: false
              isFeaturedOne: false
              id_not: $currentPostId
            }
          ) {
            id
            slug
            title
            summery
            image {
              url
              width
              height
            }
          }
        }
      `;
      const fallbackResult = await request(graphqlAPI, fallbackQuery, {
        currentPostId,
      });
      return fallbackResult.blogPosts;
    }
  
    return result.blogPosts;
  };
  export const getMembersTotalNumber = async () => {
    const query = gql`
      query getMembersTotalNumber {
        members(first: 1) {
          number
        }
      }
    `;
  
    const result = await request(graphqlAPI, query);
    return result.members[0].number;
  };
  export const getPostDetails = async (slug) => {
    const query = gql`
      query GetPostDetails($slug: String!) {
        blogPosts(where: { slug: $slug }) {
          id
          isHidden
          title
          slug
          summery
          date
          author
          articleType
          updatedAt
          createdAt
          image {
            url
            width
            height
          }
          richText {
            html
          }
          tags {
            id
            name
            slug
          }
          authorReference {
            id
            name
            slug
            linkedin
            bio
            twitterCreator
            image {
              url
            }
          }
          authorSecondary {
            id
            name
            slug
            linkedin
            bio
            twitterCreator
            image {
              url
            }
          }
          canonical_url
          titleBottom
          titleTop
          removeToc
          metaKeywords
          postBanners {
            buttonLink
            buttonText
            id
            shortText
            title
            image {
              height
              width
              url
            }
          }
          asideButtonLink
          asideButtonText
          asideTitle
          asideIcon {
            url
          }
        }
      }
    `;
  
    const result = await request(graphqlAPI, query, { slug });
    return result.blogPosts;
  };  