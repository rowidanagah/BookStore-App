import { gql } from '@apollo/client';

export const GET_BOOKS_QUERY = gql`
  query books{
      getBooks {
          title
          price
          id
          genres
          author
    }
}`

export const GET_BOOK_DETAIL_QUERY = gql`
  query($bookUuid: UUID!)  {
  book(book_uuid: $bookUuid) {
    author
    genres
    id
    price
    title
  }
}`

