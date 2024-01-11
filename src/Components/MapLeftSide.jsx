
function MapLeftSide({items}) {
  return (
    <div className="my-4" >
    {items.map((item,i)=> (
        <div className="px-1 md:px-4 my-2" key={i}>
          <a href={item.link} target={`_blank`} className='flex space-x-3 items-center text-gray-200 font-[500] text-sm md:text-lg' >
              {/*item.icon only for contact array */}
             {item.icon && item.title && <i className={`${item.icon} text-sm md:text-xl`}></i>}
             {/*i+1 = number of the skills  */}
             <div className="flex md:space-x-1 text-sm md:text-lg">
             {!item.icon && <span>{i+1} - </span>} <p> {item.title}</p>
             </div>
          </a>
        </div>
      ))}
</div>
  )
}

export default MapLeftSide