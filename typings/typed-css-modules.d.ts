// scss不支持类似export这样的模块声明，所以用ts的模块声明来解决
declare module '*.scss' {
    const content: any;
    export = content;
}