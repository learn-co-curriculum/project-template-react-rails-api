// tslint:disable-next-line:no-any
export function applyMixins(derivedClass, baseClass) {
    // tslint:disable:typedef
    baseClass.forEach(function (baseClass) {
        Object.getOwnPropertyNames(baseClass.prototype).forEach(function (name) {
            if (name !== 'isMounted' && name !== 'replaceState') {
                derivedClass.prototype[name] = baseClass.prototype[name];
            }
        });
    });
}
