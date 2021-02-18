## 0.0.2

1. 新增钩子工具类「AsyncSeriesHook<T, C = null>」，T: 钩子参数定义、C: 钩子上下文类型传递定义

## 0.0.1

1. 新增方法

    | 方法        | 参数 | 说明 | 参数说明 | 
    | :-----      | :----: | :----: | :----: |
    | clearAll    | (obj: Object \| Array): void | 清空数据，不改变内存地址 | --- |
    | ascSort     | (arr: any[], sortField?: string): any[] | 正序排序 | arr: 数组、sortField: 排序属性 |
    | descSort    | (arr: any[], sortField?: string): any[] | 倒序排序 | arr: 数组、sortField: 排序属性 |
    | isAsync     | (fn: any): boolean | 判断是否为异步方法。「async func(): Promise\<void\>」 | --- |
    | isPromise   | (obj: any): boolean | 判断是否为Promise对象 | --- |
    | createUUID  | (): string | 生成一个uuid | --- |
    | setCookie   | (name: string, value: string, day = 0, isDomain = false, path = '/'): void | 设置cookie值 | name: cookie名称、value: cookie值、day: 缓存时间、isDomain：是否设置在主域下、path：cookie所属路径，默认为根 |
    | clearCookie | (name: string, isDomain?: boolean): void | 清空cookie值 | name: cookie名称、isDomain: 是否在主域下 |
    | getCookie   | (name: string): string \| null | 获取cookie值 | name: cookie名称 |
    | notNilEmpty | (data: any): boolean | 存在并且不等于空，支持所有数据类型。例：[]、{}都算空值 | --- |
    | isNilOrEmpty | (data: any): boolean | 在当前类型中，不存在或者为空值。例：[]、{}都算空值 | --- |

2. 新增对象

    | 对象 | 说明 |
    | :---- | :----: |
    | QXEvent | 事件对象 |