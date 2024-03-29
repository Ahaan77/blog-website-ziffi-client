import { useState, useEffect, useMemo } from "react"
import { useNavigate } from "react-router-dom"
import CreateButton from "./CreateButton"
import { useQuery } from "@apollo/client"
import { BLOGS_QUERY } from "../Queries"

const Blogs = () => {

    //Populate Blogslist array
    const { data } = useQuery(BLOGS_QUERY); //GraphQL get blogs data
    const navigate = useNavigate()

    console.log("data ==>", data)
    
    return (
        <>
            <div className='mt-20 mx-20 relative '>
                {data?.blogs?.map((blog) => {
                    return (
                        <div id={blog?.id} onClick={() => navigate(`/blog/${blog?.id}`)} className='flex justify-center'>
                            <div style={{ zIndex: 9990 }} className=' overflow-hidden w-3/4 mb-10 bg-[#181622] cursor-pointer border border-white border-opacity-30 rounded-xl hover:scale-[1.03] hover:transition duration-200 hover:duration-200'>
                                <p className='text-3xl text-white mt-5 ml-5'>{blog?.title}</p>
                                <p className='text-base mt-3 ml-5 text-white text-opacity-50 mb-6 mr-5'> {blog?.content.slice(0, 250)}...</p>
                             
                            </div>
                        </div>
                    )
                })
                }
            </div>
            <CreateButton />
        </>
    )
}

export default Blogs