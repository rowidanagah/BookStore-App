import { useMutation } from "@apollo/client";
import { Login_Mutation } from "../ApolloClient/ROOT_MUTATIONS";

const useLogin = () => {
    const { data, loading, error } = useMutation(Login_Mutation, {
        variables: {}, onCompleted: () => { }
    })
}

export default useLogin;