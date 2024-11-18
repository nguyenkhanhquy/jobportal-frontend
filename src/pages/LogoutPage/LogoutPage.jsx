import { useEffect, useCallback, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { getToken, removeToken } from "../../services/localStorageService";
import { logout } from "../../services/authService";
import useAuth from "../../hooks/useAuth";
import CircularProgress from "@mui/material/CircularProgress";

const LogoutPage = () => {
    const { setUser, setIsAuthenticated } = useAuth();
    const hasLogout = useRef(false);
    const navigate = useNavigate();

    const handleLogout = useCallback(async () => {
        const accessToken = getToken();

        try {
            if (accessToken) {
                const data = await logout(accessToken);

                if (!data.success) {
                    if (data?.message) throw new Error(data.message);
                    else throw new Error("Lỗi máy chủ, vui lòng thử lại sau!");
                }

                removeToken();
                setUser({});
                setIsAuthenticated(false);
                navigate("/login");
                toast.success(data?.message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }, [setUser, setIsAuthenticated, navigate]);

    useEffect(() => {
        if (!hasLogout.current) {
            handleLogout();
            hasLogout.current = true;
        }
    }, [handleLogout]);

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100vh",
                width: "100vw",
            }}
        >
            <CircularProgress color="success" />
        </div>
    );
};

export default LogoutPage;
