import { writable } from "svelte/store";

export const storeData = (data, loading, error) => {
    return {
        data: data ? data : null,
        loading: loading ? loading : false,
        error: error ? error : null
    }
};

export const store = {
    projects: writable(storeData())
};