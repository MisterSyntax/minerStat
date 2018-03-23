export const OPEN_LIGHTBOX = 'OPEN_LIGHTBOX';
export const CLOSE_LIGHTBOX = 'CLOSE_LIGHTBOX';
export const SET_LIGHTBOX_CONTENT = 'SET_LIGHTBOX_CONTENT';

export const openLightBox = content => ({
    type: OPEN_LIGHTBOX,
    content,
});

export const closeLightBox = () => ({
    type: CLOSE_LIGHTBOX,
});
