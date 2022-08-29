# vue3-ts-demo

本仓库是我学习了b站上一个项目实战项目的源码

# 下载使用  

首先复制仓库链接, 下载仓库到本地

```
git clone https://github.com/taochunhui824/vue3-ts-demo.git
```

cmd命令(每个人知识储备程度不同,我就这样尽可能详细讲吧, 希望能帮到你) 进入到vue3-ts-demo文件夹

执行下面命令, 下载项目所需要的依赖
```
npm install
```

然后执行下面命令来启动项目
```
npm run serve
```

每个人网速或者npm的镜像不同, 可能需要等待一会儿, 如果没有什么问题, 会显示下面内容

<img width="436" alt="WX20220826-102232@2x" src="https://user-images.githubusercontent.com/21376192/186809067-9b20dc17-6f2a-4cd1-9edf-9f4991f0170b.png">


打开浏览器输入地址
```
http://localhost:8080/
```  

就可以进入系统  

# 界面展示  

登录页面展示  

<img width="1680" alt="登陆" src="https://user-images.githubusercontent.com/21376192/186809503-106b5388-40df-4b79-b326-053458fade73.png">

用户名是 admin 密码是 123456

登录成功后会进入系统主页面

系统主页面

商品列表  
<img width="1680" alt="商品列表" src="https://user-images.githubusercontent.com/21376192/186809611-6f709977-4234-4a6c-a1be-8100152b12b4.png">

用户列表页面  

<img width="1680" alt="用户列表" src="https://user-images.githubusercontent.com/21376192/186809681-163a39a9-e134-4087-b71d-06525754277d.png">  

角色列表  

<img width="1680" alt="角色列表" src="https://user-images.githubusercontent.com/21376192/186809731-b5ef4fa3-232c-48f0-87f5-6dc496cf4a68.png">  

分配角色权限  

<img width="1680" alt="分配" src="https://user-images.githubusercontent.com/21376192/186809800-2cd4f9cf-5e92-4f28-aae8-2a3947425fca.png">

# 编写流程(可代替看视频)  

想学别的,没有想法再去完善了, 就先这样吧

项目搭建
登录页面
登录逻辑
在登录成功之后, 会跳转到首页  
![68747470733a2f2f66697273746275636b65742d313330303434383039302e636f732e61702d6368656e6764752e6d7971636c6f75642e636f6d2f63627a5f626f6f6b5f696d616765732f696d6167652d32303232303632323136323832313131322e706e67](https://user-images.githubusercontent.com/21376192/186809951-b7a9d204-23be-463b-8f8c-f4320c3e653f.png)  

同时, 可以查看本地localStorage, 保存了token信息  

![68747470733a2f2f66697273746275636b65742d313330303434383039302e636f732e61702d6368656e6764752e6d7971636c6f75642e636f6d2f63627a5f626f6f6b5f696d616765732f696d6167652d32303232303632323136323533313333342e706e67](https://user-images.githubusercontent.com/21376192/186810000-3e2eb86b-665a-4dcd-ab1e-e725daa9746f.png)  
# 最后  

花了两天时间来敲这个项目demo, 收获还是很多的, 关于vue3的新特性,与vue2不同的用法, 还有使用ts

有问题欢迎大家来Issues提 继续加油

