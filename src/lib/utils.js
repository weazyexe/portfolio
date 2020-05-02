export const sleep = (ms) => {
    return new Promise(resolve => setTimeout(resolve, ms));
}

export const inAnimationParams = {
    duration: 1000
}

export const outAnimationParams = {
    duration: 50
}