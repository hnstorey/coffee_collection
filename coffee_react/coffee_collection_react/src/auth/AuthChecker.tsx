import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";

interface Props {
    children: React.ReactNode;
}

const AuthChecker = ({ children }: Props) => {
    const { isAuthenticated, loginWithPopup } = useAuth0();
    const navigate = useNavigate();
    useEffect(() => {
        if (!isAuthenticated) {
            navigate("../")
            loginWithPopup()
        }
    }, [])
    return (
        <>{ children }</>
    )
}

export default AuthChecker