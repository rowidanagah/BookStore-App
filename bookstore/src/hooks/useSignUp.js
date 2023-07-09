import { useMutation } from "@apollo/client";
import { SignUp_Mutation } from "../ApolloClient/ROOT_MUTATIONS"

const useSignUp = () => {
    // const { data, loading, error } = useMutation(SignUp_Mutation, {
    //     variables: { "userinputData": UserinputData }, onCompleted: () => { }
    // })

    const [signUp, { loading, error, data }] = useMutation(SignUp_Mutation);

    const signUpUser = async (userinputData) => {
        try {
            const response = await signUp({ variables: { userinputData } })
            console.log("ressssss", response)
        }
        catch (error) {
            return (error.massage)
        }
    }

    return { data, loading, error, signUpUser }

}
export default useSignUp;