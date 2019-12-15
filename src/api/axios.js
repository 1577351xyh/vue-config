import  axios from 'axios'
import Cookies from 'js-cookie'
import { MessageBox, Message } from "element-ui";
import el from "element-ui/src/locale/lang/el";

//axios实例
const http = axios.create({
    // 基地址
    host:'https://www.fastmock.site/mock/fcb7c7570f88a0da3be5df1ee8a6d9c9',
    baseURL:'https://www.fastmock.site/mock/fcb7c7570f88a0da3be5df1ee8a6d9c9/api',
    timeout:10000 //超时
});

http.login = ()=>{
    return http.get('/login')
};
http.userinfo = (token)=>{
    return http.get('/userinfo',{
        params:{
            token
        }
    })
};
//请求拦截
http.interceptors.request.use(
    config=>{
        if(Cookies.get('token')){
            config.headers['X-Token'] = Cookies.get('token')
        }
        return config;
    },
    //请求的错误处理
    error => {
        return Promiss.reject(error)
    }
);


//响应拦截
http.interceptors.response.use(
    response=>{
        const res = response.data;
        //200
        if(res.code!==200){
            Message({
                message:res.message || 'error'
            })
        }
        //令牌过期,过期登录
        if(res.code===501){
            MessageBox.confirm(
                '登录异常,请重新登录',
                '确认登录信息',{
                    confirmButtonText: "重新登录",
                    cancelButtonText: "取消",
                    type: "warning"
                }
            ).then(()=>{
                //如果点击确定了
                //重新发送请求,刷新页面
                console.log('我要重新获取token')
                location.reload();
            })
            return Promise.reject(new Error(res.message)||'error')
        }else{
            return res;
        }
    },
    error => {
        Message({
            message: error.message,
            type: "error",
            duration: 5 * 1000
        });
        return Promise.reject(error);
    }
)

export default http;
