import { useEffect, useRef, useState } from "react";

type PostType={
    title:string,
    body:string,
    id:number
}
const Posts=()=>{

    let abortController=useRef<AbortController|undefined>(undefined)
    const [posts,setPosts]=useState<PostType[]|undefined>(undefined);
const [page,setPage]=useState(1);
const [isLoading,setLoading]=useState(false);



    useEffect(()=>{
        setLoading(true);
        abortController.current?.abort();
        abortController.current=new AbortController();


        fetch("https://jsonplaceholder.typicode.com/posts?_page="+page+"&_limit=10",{
            signal:abortController.current?.signal})
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            setPosts(response);
                setLoading(false);
                console.log("Load...");



        })
    },[page])
    // if(isLoading)
    //     return (
    //         <>
    //         Loading...
    //         </>
    //     )
    return (
        
        <>
        <button onClick={()=>setPage(page+1)}>Next</button>
        <table>
            <thead>
                <tr>
                    <th>Sr.No.</th>
                <th>Title</th>
                <th>Body</th>
                </tr>
            </thead>
            <tbody>
                {
                    posts?.map((item)=>{
                        return (
                            <tr>
                                <td>{item.id}</td>
                                <td>{item.title}</td>
                                <td>{item.body}</td>
                            </tr>
                        )
                    })
                }
            </tbody>

        </table>
        
        </>
    )


}
export default Posts;
