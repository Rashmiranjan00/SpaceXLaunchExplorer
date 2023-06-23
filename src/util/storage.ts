import AsyncStorage from '@react-native-async-storage/async-storage';

export enum AsyncStorageKeys {
    UserToken = 'user_token',
}

// If a valid string is passed then only it is stored, else key is removed
const setToken = async (
    key: string,
    token?: string | null,
): Promise<boolean> => {
    try {
        if (typeof token === 'string' && token !== '') {
            await AsyncStorage.setItem(key, token);
        } else {
            await AsyncStorage.removeItem(key);
        }
        return true;
    } catch (e) {
        // saving error
        return false;
    }
};

const getToken = async (key: string): Promise<string | null> => {
    try {
        const token = await AsyncStorage.getItem(key);
        return token;
    } catch (e) {
        // error reading token
        return null;
    }
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const saveUserToken = async (token?: string | null) =>
    setToken(AsyncStorageKeys.UserToken, token);

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const loadUserToken = async () => getToken(AsyncStorageKeys.UserToken);
