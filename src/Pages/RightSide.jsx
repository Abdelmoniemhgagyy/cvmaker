import MapRightSide from "../Components/MapRightSide.jsx"
import MapProjects from "../Components/MapProjects.jsx"
import { useSelector } from "react-redux"





function RightSide() {

   const state = useSelector((state)=>state.data)
    const educations =state.educations
    const objectives =state.objectives
    const experiences=state.experiences
    const cources=state.cources
    const Projects=state.projects.projects



  return (
    <div className='pl-[20px] bg-white'>
        <MapRightSide data={objectives} title="objectives"/>
        <MapRightSide data={educations} title="education"/>
        <MapRightSide data={experiences} title="experiences"/>
        <MapRightSide data={cources} title="cources"/>
        
        <MapProjects projects={Projects}/>

  

    </div>
  )
}

export default RightSide