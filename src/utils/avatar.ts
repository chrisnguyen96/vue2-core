export function defaultAvatar(e: { target: { src: string; } }) {
    e.target.src = '/images/default/avatar-default.png';
}

export function defaultImage(e: { target: { src: string; } }) {
    e.target.src = '/images/default/no-image.png';
}