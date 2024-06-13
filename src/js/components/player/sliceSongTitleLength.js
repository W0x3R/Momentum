export const sliceSongTitleLength = (e) => (e.title).length > 28 ? (e.title).slice(0, 28) + '...' : e.title
