import { useMutation } from "@apollo/client";
import { SignUp_Mutation } from "../ApolloClient/ROOT_MUTATIONS"
import { useEffect, useState } from "react";
import loadingStatus from "../helpers/loadingStatus";

const useSignUp = () => {
    // const { data, loading, error } = useMutation(SignUp_Mutation, {
    //     variables: { "userinputData": UserinputData }, onCompleted: () => { }
    // })

    const [signUp, { loading, error, data }] = useMutation(SignUp_Mutation);
    const [loadingState, setLoadingState] = useState(loadingStatus.isLoading);

    const signUpUser = async (userinputData) => {
        try {
            console.log(userinputData)
            const response = await signUp({ variables: { userinputData } })
            console.log(response)
        }
        catch (error) {
            return (error.massage)
        }
    }

    useEffect(() => {
        if (loading) {
            setLoadingState(loadingStatus.isLoading);
        }
        if (!loading) {
            setLoadingState(loadingStatus.loaded);
        }
        if (error) {
            setLoadingState(loadingStatus.hasErrored);
        }
    }, [data])


    return { data, loadingState, signUpUser }

}
export default useSignUp;