const Topbar = () => {

    return (
        <div style={{ zIndex: 9999 }} className='h-20 border-b border-white bg-[#181622] border-opacity-20 sticky top-0 flex items-center justify-between'>
            <div className='text-white text-xl mx-10'>
                Blog Website
            </div>
            <div className='text-white text-sm mx-10 font-light flex items-center'>
                Powered by Ahaan <span className="text-xl ml-1">	&#9749;</span>
            </div>
        </div>
    )

}

export default Topbar