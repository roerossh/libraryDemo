## 接口

写在前面:

接口, 多义词, 可以表示以下2种意思

像`java` 接口, `typescript接口`这种.

` Java/c++`中, 定义一个类,  也就是只能有哪些变量和方法, 接口本身只是个壳子, 具体的变量和方法需要你自己去编程实现(大概哈);

Typescript`中(同`java/c++`), 定义一个类包含哪些变量和方法,  除此之外, 还能通过自定义接口来合并类型声明.

`typescript`: JavaScript的超集, 其实就是比JS多了一些功能, 项目构建的时候会编译成javascript

类型声明: 弱等于接口吧, 有点儿像化学课上的 化学价, 不好解释, 但其实没啥神秘的, 一种约定

一些typescript的栗子:



```typescript
 interface IPeople {
   age: number; // 这是一句类型声明, 强制要求age的类型必须是数字, 如果是其他的类型, ts报错
   name: string;
   family: IFamily;
 }
 
 interface IFamily {
   father: string;
   mother: string;
   brother?: string; // ?表示可选
 }
 
const mary: IPeople = { // mary: IPeople 是类型声明, 表示mary的类型需要遵循IPeople接口所描述的规范, 不能多写或少些IPeople中定义好的属性, 对应属性的类型(:后 main)也要正确
  age: 1,
   name: "mary",
   family: {
     father: "Jack",
     mother: "Rose",
   } 
 };
 
```

 2. 网络通信中的接口. 比如我在Google上搜movie这个操作, 会发起一个get请求查询数据:

 ![image-20190322170712369](/Users/roe/Library/Application Support/typora-user-images/image-20190322170712369.png)

 其中, https://www.google.com/后面的`complete/complete/search`就是接口名, 再后面一串是http请求头里携带的查询参数:

![image-20190322171330220](/Users/roe/Library/Application Support/typora-user-images/image-20190322171330220.png)



所以, **大多数时候说的写接口**:

> 都是后端定义一个这个接口名, 前端发起请求的时候传入该接口名,  后端收到这个请求时, 就后续有很多工作要做了.  
>
> 比如上面发起一个http get请求去查询mary的信息,  后端可能:
>
> - 需要去调更上游的服务(递归式查询); 
>
> -  判断发起请求的这个客户端是否有权限;
>
> -  是否跨域; 
>
> - 对服务器查询到的数据做一些处理(比如梅老师说的转pdf), 这一步一般工作量有点儿大. 
>
>   **最后,要给前端返回响应数据(response), 这个数据又是以1条中的接口规范返回的**.  

```typescript
function getMary(){
  // 第一个参数是接口名, 第二个是http请求的配置, 存在请求头里, get是封装好的http get请求
  // 返回的数据符合1条定义, 与IPeople接口定义的一致
  const mary: IPeople = get('api/getPeopleInfo/:name', {
    withCredentials: true,
    params: {
      name: "mary"
    },
  })
}
```

