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

// const AddBook_Mutation = gql``

export { Login_Mutation, SignUp_Mutation }