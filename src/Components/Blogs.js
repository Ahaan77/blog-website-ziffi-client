const Blogs = ({ blogList }) => {
    return (
        <div className='mt-20 mx-20 relative '>
            {blogList?.map((blog) => {
                return (
                    <div className='flex justify-center'>
                        <div style={{ zIndex: 9998 }} className='h-40 overflow-hidden w-3/4 mb-10 bg-[#181622] cursor-pointer border border-white border-opacity-30 rounded-xl hover:scale-[1.03] hover:transition duration-200 hover:duration-200'>
                            <p className='text-3xl text-white mt-5 ml-5'>{blog?.title}</p>
                            <p className='text-base mt-3 ml-5 text-white text-opacity-50'> {blog?.content.slice(0, 300)}...</p>
                        </div>
                    </div>
                )
            })
            }
        </div>
    )
}

export default Blogs