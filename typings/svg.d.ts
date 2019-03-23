/**
 * 该文件用于在ts中全局声明svg的模块引入方式
 */
// 为svg文件声明统一接口
declare interface SvgrComponent extends React.StatelessComponent<React.SVGAttributes<SVGAElement>>{}

declare module '*.svg' {
    const content: SvgrComponent
    export default content
}