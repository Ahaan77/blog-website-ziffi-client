import { useState } from "react"
import { useMutation } from '@apollo/client';
import { CREATE_BLOG } from "../Queries";

const Create = () => {

    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const [success, setSuccess] = useState(false)
    const date = new Date()
    const [createBlog] = useMutation(CREATE_BLOG);

    const handleSubmit = (e) => {
        if (title.length !== 0 && content.length !== 0) {
            e.preventDefault();
            createBlog({ variables: { title, content, date: date } });
            setSuccess(true)
        }
    };


    return (
        <div className="flex justify-center items-center h-full relative mt-20">
            <div className="w-1/2 bg-[#181622] border border-white border-opacity-30 rounded-xl ">
                <p className='text-3xl text-white mt-5 ml-5'>Create New Blog</p>
                <div className="mx-5 mt-5">
                    <input className="w-full bg-gray-800 p-2 rounded-md text-white" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" />
                </div>
                <div className="mx-5 mt-5">
                    <textarea className="w-full h-[20vh] bg-gray-800 p-2 rounded-md text-white" value={content} onChange={(e) => setContent(e.target.value)} placeholder="Add Description..." />
                </div>
                <div className="mt-5 mb-7 w-full flex justify-center">
                    <div onClick={!success ? handleSubmit : null} className="px-4 py-2 bg-green-500 hover:bg-green-700 hover:transition duration-200 font-bold text-white rounded-md cursor-pointer">{success === false ? <span>Create</span> : <span>Blog Created Successfully</span>}</div>
                </div>
                {success &&
                    <a href="/">
                        <div className="mt-5 mb-7 w-full flex justify-center text-white underline cursor-pointer">
                            Go back
                        </div>
                    </a>
                }

            </div>
        </div>
    )

}

export default Create