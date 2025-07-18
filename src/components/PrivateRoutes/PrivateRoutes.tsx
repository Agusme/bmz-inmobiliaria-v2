import { ReactNode } from "react";
import { useAuthStore } from "../../store/authStore";
import { Navigate } from "react-router-dom";

type Props ={
    children:ReactNode;
}
export default function PrivateRoutes({children}:Props) {
 const isAuthenticated = useAuthStore((state)=> state.isAuthenticated) /* le decís que te devuelva solo la propiedad isAuthenticated del estado. */
return isAuthenticated ? children : <Navigate to='/' />
}
