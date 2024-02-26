import { useEffect, useState } from "react"
import { useMutation } from "@apollo/client"
import { GET_BLOG } from "../Queries"
import { useParams } from "react-router-dom";
import Loader from "./Loader";

const Blog = () => {

    const [getBlog] = useMutation(GET_BLOG);
    const [blogData, setBlogData] = useState({})
    const [loading, setLoading] = useState(true)
    const param = useParams()

    const getBlogData = async () => {
        try {
            const blog = await getBlog({ variables: { id: param?.id } });
            setBlogData(blog?.data?.getBlog)
            setLoading(false)
        } catch (err) {
            console.log(err)
        }
    }

    useEffect(() => {
        getBlogData()
    }, [])

    return (
        <>
            {loading ?
                <Loader /> :
                <div className='mt-20 mx-20 relative '>
                    <div className='flex justify-center'>
                        <div style={{ zIndex: 9990 }} className=' w-3/4 mb-10 bg-[#181622] border border-white border-opacity-30 rounded-xl'>
                            <p className='text-3xl text-white mt-5 ml-5'>{blogData?.title}</p>
                            <p className='text-base mt-3 ml-5 mr-5 text-white text-opacity-50 mb-6'> {blogData?.content}</p>
                        </div>
                    </div>
                </div>
            }
        </>
    )

}

export default Blog