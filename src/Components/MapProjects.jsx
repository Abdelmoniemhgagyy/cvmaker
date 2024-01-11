
function MapProjects({projects}) {
  console.log(projects)
  return (
    <>
    { projects && projects.length > 0 ? (
      <> 
       <h3 className=" md:p-4 mt-5 md:text-2xl text-blue-700  uppercase">Projects :</h3>
      <div className="flex flex-wrap">
       {projects&&projects.map((item,i)=> 
          <div className="ml-[50px]  leading-[1.8] md:min-w-[400px] text-sm md:text-lg" key={i}>
              <div className="flex ">
                  <i className="fa-solid fa-caret-right mr-2 mt-1"></i>
                   <a href={item.url} target="_blank" className="max-w-[90%] cursor-pointer" rel="noreferrer">{item.title}</a>
              </div>
  
          </div>
        )}
      </div>
       <hr  className='mx-auto w-[50%] p-0  my-6 border border-1 border-gray-500 rounded-full'/>
       
      </>):null}
      </>
  )
}

export default MapProjects