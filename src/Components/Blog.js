import { useContext } from "react"
import { BlogContext } from "../Context"

const Blog = () => {

    const { blog } = useContext(BlogContext)

    return (
        <div className='mt-20 mx-20 relative '>

            <div className='flex justify-center'>
                <div style={{ zIndex: 9990 }} className=' w-3/4 mb-10 bg-[#181622] border border-white border-opacity-30 rounded-xl'>
                    <p className='text-3xl text-white mt-5 ml-5'>{blog?.title}</p>
                    <p className='text-base mt-3 ml-5 mr-5 text-white text-opacity-50 mb-6'> {blog?.content}</p>
                </div>
            </div>

        </div>
    )

}

export default Blog