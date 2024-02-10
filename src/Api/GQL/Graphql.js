import { gql } from '@apollo/client';


export const Headline = gql`
query Headlines {
    headlines {
      createdAt
      headlineMid
      headlineTop
      myDPic {
        url
      }
      id
      publishedAt
      updatedAt
    }
  }`