import { useContext } from "react"
import { AuthContext } from "../contexts/LoginAuthenticator"

const useAuthenticator = () => {
    const context = useContext(AuthContext)

    return context
}

export default useAuthenticator
