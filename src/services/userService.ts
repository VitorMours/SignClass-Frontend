import useUser from "../hooks/useUser";


interface UserApiResponse {
    data: any;
    status: number;
    statusText: string;
    ok: boolean;
}

const userService = {
    getUserData: async (email: string): Promise<UserApiResponse> => {
        const response = await fetch(`/api/users?email=${email}`);
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
    }
};

export default userService;

