import type { LoginCredentialsInterface, SignupCredentials, LoginResponseInterface } from "../interfaces/authInterface";

const authService = {
    login: async (data: LoginCredentialsInterface): Promise<LoginResponseInterface> => {
        const response = await fetch('/api/auth/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email: data.email,  // Removi as template strings desnecessárias
                password: data.password
            })
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                message: `HTTP error! status: ${response.status}`
            }));
            throw new Error(errorData.message || 'Login failed');
        }

        return await response.json();
    },

    signup: async (data: SignupCredentials): Promise<LoginResponseInterface> => {
        const response = await fetch('/api/auth/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)  // Pode enviar o objeto diretamente
        });

        if (!response.ok) {
            const errorData = await response.json().catch(() => ({
                message: `HTTP error! status: ${response.status}`
            }));
            throw new Error(errorData.message || 'Signup failed');
        }

        return await response.json();
    },
};

export default authService;