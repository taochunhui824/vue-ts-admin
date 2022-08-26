# vue3-ts-demo
本仓库是我学习了b站上一个项目实战项目的源码

视频名称: 一行行代码带你敲，Vue3+TS电商后台系统项目实战

视频地址:https://www.bilibili.com/video/BV1nr4y1G73d?p=1

# 下载使用  
首先复制仓库链接, 下载仓库到本地  

```
https://github.com/taochunhui824/vue3-ts-demo
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

<img width="436" alt="WX20220826-102232@2x" src="https://user-images.githubusercontent.com/21376192/186802970-f68d2654-c99f-43a6-acad-6afa359abb2b.png">  

打开浏览器输入地址  
```
http://localhost:8080/
```
# 界面展示  

登录页面展示  

![6431661481180_ pic_hd](https://user-images.githubusercontent.com/21376192/186804036-0089fc5b-bdf9-4cf3-a624-1e6cc8a7392b.jpg)  

用户名是 admin 密码是 123456

登录成功后会进入系统主页面

系统主页面

商品列表  

![6441661481287_ pic](https://user-images.githubusercontent.com/21376192/186804230-db06a498-ce26-4a18-8e78-9cdd11f3de7e.jpg)  

用户列表页面  

<img width="1680" alt="WX20220826-103554@2x" src="https://user-images.githubusercontent.com/21376192/186804387-282cdece-0fc4-40ea-8740-c0df9d1e2e47.png">  

角色列表  

<img width="1680" alt="WX20220826-103652@2x" src="https://user-images.githubusercontent.com/21376192/186804509-be2e2ff2-b147-42d1-8445-d1d77e90187d.png">  

# 编写流程(可代替看视频)  

登录页面
登录逻辑
在登录成功之后, 会跳转到首页  

![68747470733a2f2f66697273746275636b65742d313330303434383039302e636f732e61702d6368656e6764752e6d7971636c6f75642e636f6d2f63627a5f626f6f6b5f696d616765732f696d6167652d32303232303632323136323832313131322e706e67](https://user-images.githubusercontent.com/21376192/186804796-56912210-5e60-4cb6-bfad-8a3240a63523.png)  
同时, 可以查看本地localStorage, 保存了token信息  

![68747470733a2f2f66697273746275636b65742d313330303434383039302e636f732e61702d6368656e6764752e6d7971636c6f75642e636f6d2f63627a5f626f6f6b5f696d616765732f696d6167652d32303232303632323136323533313333342e706e67](https://user-images.githubusercontent.com/21376192/186804863-1e5b817e-3b03-4383-b4fb-9278b708ff8f.png)  

# 最后  
花了两天时间来敲这个项目demo, 收获还是很多的, 关于vue3的新特性,与vue2不同的用法, 还有使用ts

本来想顺着把这个页面完善好, 但是比较懒, 这个项目代码基本上是从0跟着一步一步敲出来的,  绝大部分的内容和视频是相同的

感谢自己坚持下来, 看过好多b站以及各种渠道的知识, 这是第一个完整坚持下来的, 虽然它很简单

继续加油吧
