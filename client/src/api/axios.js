import axios from "axios";

// export default axios.create({
//     baseURL : 'http://localhost:3001' ,
//     // headers:  { "authoriza": accountService.GetTokenCookies()
//     // }
// })


// axios.interceptors.request.use((request) =>{

   
//         request.headers.Authorization = 'Bearer '+accountService.GetTokenCookies()

//     return request    https://servers-7ssr.onrender.com/
   
// })

const Axios = axios.create({
        // baseURL : 'http://localhost:3001' ,
        baseURL : 'https://servers-7ssr.onrender.com/' ,
    })
    
Axios.defaults.withCredentials = true
    // Axios.interceptors.request.use((request) =>{
    
    //    if(accountService.BooleanToken()){
    //         request.headers.Authorization = 'Bearer '+accountService.GetTokenCookies()
    //    }
    //     return request
       
    // })
    export default Axios
