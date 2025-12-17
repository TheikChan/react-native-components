// import { store } from "expo-router/build/global-state/router-store";


export function getAuthToken(storeContainer) {
    return config => {
        let store = storeContainer.getState();
        config.headers['Authorization'] = store.user.accessToken;
        return config;
    };
}

// axios.interceptros.request.use(getAuthToken(this.state.store));