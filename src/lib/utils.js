export const CHANGE_SCREEN_DELAY_MS = 500;

export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const fadePreset = {
    duration: CHANGE_SCREEN_DELAY_MS
};