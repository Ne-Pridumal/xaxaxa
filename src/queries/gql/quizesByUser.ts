import { gql } from '@apollo/client';

export const quizesByUserQuery = gql`
  query Quizes($id: ID!) {
    answers(filters: { user: { id: { eq: $id } } }) {
      data {
        id
        attributes {
          progress {
            counter
            quiz {
              data {
                attributes {
                  title
                  finishDate
                  publishedAt
                  description
                  image {
                    data {
                      attributes {
                        url
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`