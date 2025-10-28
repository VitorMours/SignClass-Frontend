// authService.ts
import type { 
    LoginCredentialsInterface, 
    SignupCredentials, 
    AuthApiResponse 
} from "../interfaces/authInterface";

import userService from "./userService";

const authService = {
    login: async (data: LoginCredentialsInterface): Promise<AuthApiResponse> => {
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,
                password: data.password,
            })
        });
        
        const responseData = await response.json().catch(() => null);
        
        if (!response.ok) {
            throw new Error(responseData?.message || `HTTP error! status: ${response.status}`);
        }

        return {
            data: responseData,
            status: response.status,
            statusText: response.statusText,
            ok: response.ok
        };
    },

    signup: async (data: SignupCredentials): Promise<AuthApiResponse> => {
        const response = await fetch('/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        });

        const responseData = await response.json().catch(() => null);

        if (!response.ok) {
            throw new Error(responseData?.message || `HTTP error! status: ${response.status}`);
        }

        return {
            data: responseData,
            status: response.status,
            statusText: response.statusText,
            ok: response.ok
        };
    },

    authorize: async (data: AuthApiResponse): Promise<string> => {
        localStorage.setItem("refresh", data.data.refresh);
        localStorage.setItem("access", data.data.access);
        localStorage.setItem("email", data.data.email);

        // TODO: Preciso pegar a informacao do usuario por meio do service
        try{
            const response = await userService.getUserData(data.data.email);
            const userData = response.data[0];
            const userName: string = userData.first_name;
            return userName;
        }catch(error){
            console.log(error);
            return "Visitante";
        }

    }
};

export default authService;