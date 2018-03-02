export const ENABLE = 'ENABLE';
export const DISABLE = 'DISABLE';

export const enableContent = () => {
    return {
        type: ENABLE
    }
}

export const disableContent = () => {
    return {
        type: DISABLE
    }
}
