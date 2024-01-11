
function MapUnderInput({data}) {
  return (
    <div className="md:pl-[22px] flex flex-wrap gap-[10px] ">
    {data.map((item,i)=> (
       <div className="text-[white]" key={i}>
          {i+1} - {item.title}
       </div>
     ))}
     </div> 
  )
}

export default MapUnderInput