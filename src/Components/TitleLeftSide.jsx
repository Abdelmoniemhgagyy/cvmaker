function TitleLeftSide({title,items}) {
  return (
    <>
      {items&&items.length ?

       (<> 
          {/* Header Left section  */}
            <div className='mt-2  md:mt-5 text-center  md:mx-2 md:p-2 rounded-full text-black bg-blue-200 uppercase  '>
                <p className='font-[400] text-md md:text-lg tracking-[1.8px]'>{title}</p>
            </div>
            {/* End Header Left section  */}
       </>):null
        }
         
  </>
  )
}

export default TitleLeftSide