import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { loadUserToken } from './AsyncStore';

// eslint-disable-next-line
export async function getApolloClient(): Promise<ApolloClient<any>> {
    const cache = new InMemoryCache();

    const httpLink = createHttpLink({
        uri: 'https://spacex-production.up.railway.app/',
    });

    const authLink = setContext(async (_, { headers }) => {
        // get the authentication token from local storage if it exists
        const token = await loadUserToken();
        // return the headers to the context so httpLink can read them
        return {
            headers: {
                ...headers,
                authorization: token !== null ? `Bearer ${token}` : '',
            },
        };
    });

    const client = new ApolloClient({
        link: authLink.concat(httpLink),
        cache,
    });

    return client;
}
