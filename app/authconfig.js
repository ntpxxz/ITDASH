export const authConfig={
providers:[],
pages: {
    signIn: "/login"
},
callbacks:{
    authorized({auth,request}){
const isLoggedIn = auth?.user
const isOnDashboard = request.nextUrl.pathname.startsWith("/dashboard")
if(isOnDashboard){
    if(isLoggedIn) return 
    return
}else if(isLoggedIn){
    return Response.redirect(new URL("/daashboard".request.nextUrl))
}return true

    }
}
}
