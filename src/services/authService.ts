interface LoginCredentials {
    email: string;
    password: string;
}

interface SignupCredentials {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
}

interface User {
    id: string;
    email: string;
    first_name: string;
    last_name: string;
}

interface AuthResponse {
    user: User;
    token: string;
    message?: string;
}

const authService = {
    login: async (data: LoginCredentials): Promise<AuthResponse> => {
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

    signup: async (data: SignupCredentials): Promise<AuthResponse> => {
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

    logout: async (): Promise<void> => {
        // Remove token do localStorage ou faz requisição para logout no backend
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        
        // Se quiser fazer logout no backend também:
        // const response = await fetch('/api/auth/logout', {
        //     method: "POST",
        //     headers: {
        //         "Authorization": `Bearer ${localStorage.getItem('token')}`
        //     }
        // });
    }
};

export default authService;