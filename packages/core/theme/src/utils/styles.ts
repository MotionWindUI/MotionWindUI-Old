interface PluginInterface<T> {
    [key: string]: T;
}

function printKeys<T>(obj: PluginInterface<T>) {
    for (const key in obj) {
        console.log(key);
    }
}
