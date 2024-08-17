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
            const response = await signUp({ variables: { userinputData } })
        }
        catch (error) {
            return (error.massage)
        }
    }

    useEffect(() => {
        if (loading) {
            setLoadingState(loadingStatus.isLoading);
        }
        else if (error) {
            setLoadingState(loadingStatus.hasErrored);
        }
        else if (loading !== false) {
            setLoadingState(loadingStatus.loaded);
        }
    }, [loading, error, data])


    return { data, loadingState, signUpUser }

}
export default useSignUp;