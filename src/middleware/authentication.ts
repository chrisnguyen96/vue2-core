export default function authentication(next: () => any, router: any) {
    console.log('middlewares auth test');
    return next();
}