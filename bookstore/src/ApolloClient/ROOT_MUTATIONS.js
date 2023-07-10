import { gql } from "@apollo/client";

const Login_Mutation = gql`
mutation ($userInfo: loginUserDataInput!) {
        login(userInfo: $userInfo) {
            token
        }
}
`

const SignUp_Mutation = gql`
mutation($userinputData: RegistrationInput!){
  register(UserinputData: $userinputData)
}
`

const AddBook_Mutation = gql`
mutation($bookInfo: PostBookInput!){
  addBook(bookInfo: $bookInfo) {
    author
    genres
    id
    price
    title
  }
}
`

const DeleteBook_Mutation = gql`
mutation($bookUuid: UUID!){
  rmBook(book_uuid: $bookUuid)
}`

export { Login_Mutation, SignUp_Mutation, AddBook_Mutation, DeleteBook_Mutation }