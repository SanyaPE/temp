export function randomName(...args: Array<string>[]) {
    return args.map((arr) => arr[Math.floor(Math.random() * arr.length)]).join(' ');
}
