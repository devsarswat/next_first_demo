//Temparary data
const users =[
    {id:1,name:"dev"},
    {id:2,name:"dev2"},
    {id:3,name:"dev3"},
    {id:4,name:"dev4"},
]
const posts =[
    {id:1,title:"post1",body: "...", userid:1},
    {id:2,title:"post2",body: "...", userid:4},
    {id:3,title:"post3",body: "...", userid:2},
    {id:4,title:"post4",body: "...", userid:3},

]

export const getPosts = async ()=>{
 return posts   
}
export const getPost = async (id)=>{
    const post = posts.find((post)=>post.id === parseInt(id))
    return post
}
export const getUser =async (id)=>{
    const user= users.find((user)=>user.id === parseInt(id))
    return user
}
