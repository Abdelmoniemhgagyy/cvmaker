import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import {Additems, AddArrayItems , Addproject } from "../store/Reducer"
import { useState,useEffect } from "react"

import { Formik,Form,Field } from 'formik';
import { useNavigate } from "react-router-dom";

import MapUnderInput from "../Components/MapUnderInput"

function CvMaker() {
  const navigate = useNavigate()
  const dispatch =useDispatch()



  const state =useSelector((state)=>state.data)

  // item of array 
  const [technicalSkill,setTechnicalSkill] =useState({title:""})
  const [personalSkill,setPersonalSkill] =useState({title:""})
  const [objective,setObjective] =useState({title:""})
  const [education,setEducation] =useState({title:""})
  const [experience,setExperience] =useState({title:""})
  const [cource,setCource] =useState({title:""})
  const [title,setTitle] =useState("")
  const [url,setUrl] =useState("")

  //arrays
  const [technicalSkills,setTechnicalSkills] =useState([])
  const [personalSkills,setPersonalSkills] =useState([])
  const [objectives,setObjectives] =useState([])
  const [educations,setEducations] =useState([])
  const [experiences,setExperiences] =useState([])
  const [cources,setCources] =useState([])

  const [projects,setProjects] =useState([])
  
  
        // send info from form to reducer 
          const handelForm = (values)=>{
                  dispatch(Additems(values))
                  navigate("/cv")
                }
              
        // make array of items
            const handleArray = (array,setArray,item,setItem) => {
              setArray([...array, item]);
              setItem({title:""});
                   };

        // make projects Array
        const handelProjects =()=>{
             setProjects([...projects,{title:title,url:url}])

             setTitle("")
             setUrl("")
        }

  useEffect(() => {
    dispatch( AddArrayItems({item:technicalSkills,array:'technical_skills'}));
    dispatch( AddArrayItems({item:personalSkills,array:'personal_skills'}));
    dispatch( AddArrayItems({item:objectives,array:'objectives'}));
    dispatch( AddArrayItems({item:educations,array:'educations'}));
    dispatch( AddArrayItems({item:experiences,array:'experiences'}));
    dispatch( AddArrayItems({item:cources,array:'cources'}));
    dispatch( Addproject({projects}));
  }, [dispatch, technicalSkills,personalSkills,objectives,educations,experience,cources,projects]);

  return (
    <div className="min-h-screen flex flex-col items-center bg-blue-700 pt-5 mx-auto px-5 md:px-20 ">
      <div><p className="text-center text-[#fff] text-3xl my-2">Cv Maker</p></div>
      <Formik 
      initialValues={{full_name:"",job_title:"",email:"",phone:"",linked:"",github:"",portfolio:""}}
                      onSubmit={handelForm} 
                      className="mx-auto mt-9 w-[80%]">
        
      <Form>
      <Field type="text" name="full_name" className="input-element  p-2 pl-4 my-2 w-full  "
        placeholder="Full Name" />
      <Field type="text" name="job_title" className="input-element  p-2 pl-4 my-2 w-full  " 
        placeholder="Job Title" />

      <Field type="text" name="email" className="input-element  p-2 pl-4 my-2 w-full  " 
        placeholder="Email" />

      <Field type="text" name="phone" className="input-element  p-2 pl-4 my-2 w-full  " 
        placeholder="Phone" />

      <Field type="text" name="linked" className="input-element  p-2 pl-4 my-2 w-full  " 
        placeholder="Linked in Link" />

      <Field type="text" name="portfolio" className="input-element  p-2 pl-4 my-2 w-full  " 
        placeholder="Portfolio in Link" />

      <Field type="text" name="github" className="input-element  p-2 pl-4 my-2 w-full  " 
        placeholder="Github" />



{/*  inputs for arrays  */}
        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
         
            <Field type="text"  
                  onChange={(e) =>setTechnicalSkill({title:e.target.value})}
                  value={technicalSkill.title}
                  className="input-element  p-2 pl-4 my-2  " 
                     placeholder="TECHNICAL SKILLS" />
            <div className="add-item text-md  px-8 p-2 " 
            onClick={()=>handleArray(technicalSkills,setTechnicalSkills,technicalSkill,setTechnicalSkill)}>Add Item</div>
        
         </div>

             <MapUnderInput data={technicalSkills}/>

        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
            <Field type="text"  
                  onChange={(e) =>setPersonalSkill({title:e.target.value})}
                  value={personalSkill.title}
                  className="input-element  p-2 pl-4 my-2  " 
                     placeholder="Personal Skills" />
                     
            <div className="add-item text-md  px-8 p-2 " 
             onClick={()=>handleArray(personalSkills,setPersonalSkills,personalSkill,setPersonalSkill)}>Add Item</div>
        </div>
         <MapUnderInput data={personalSkills}/>
              
        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
            <Field type="text"  
                  onChange={(e) =>setObjective({title:e.target.value})}
                  value={objective.title}
                  className="input-element  p-2 pl-4 my-2  " 
                     placeholder="Objective" />
                   
               
            <div className="add-item text-md  px-8 p-2 " 
             onClick={()=>handleArray(objectives,setObjectives,objective,setObjective)}>Add Item</div>
        </div>
         <MapUnderInput data={objectives}/>
              
        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
              <Field type="text"  
                    onChange={(e) =>setEducation({title:e.target.value})}
                    value={education.title}
                    className="input-element  p-2 pl-4 my-2  " 
                      placeholder="Educations" />
                      
              <div className="add-item text-md  px-8 p-2 " 
              onClick={()=>handleArray(educations,setEducations,education,setEducation)}>Add Item</div>
        </div>
         <MapUnderInput data={educations}/>
              
        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
              <Field type="text"  
                    onChange={(e) =>setExperience({title:e.target.value})}
                    value={experience.title}
                    className="input-element  p-2 pl-4 my-2  " 
                      placeholder="Experiences" />
                      
              <div className="add-item text-md  px-8 p-2 " 
                onClick={()=>handleArray(experiences,setExperiences,experience,setExperience)}>Add Item
              </div>
        </div>
         <MapUnderInput data={experiences}/>
              
        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
              <Field type="text"  
                    onChange={(e) =>setCource({title:e.target.value})}
                    value={cource.title}
                    className="input-element  p-2 pl-4 my-2  " 
                      placeholder="Cources" />
                      
               <div className="add-item text-md  px-8 p-2 " 
                 onClick={()=>handleArray(cources,setCources,cource,setCource)}>Add Item
               </div>
        </div>
         <MapUnderInput data={cources}/>   

        <div className="flex flex-wrap justify-center items-center space-x-1 w-full ">
              <Field type="text"  
                     onChange={(e) =>setTitle(e.target.value)}
                     value={title}
                     className="input-element  p-2 pl-4 my-2  " 
                      placeholder="Name of Project" />
              <Field type="text"  
                     onChange={(e) =>setUrl(e.target.value)}
                     value={url}
                     className="input-element  p-2 pl-4 my-2  " 
                      placeholder="Url of Project" />
                      
               <div className="add-item text-md  px-8 p-2 " 
                 onClick={()=>handelProjects()}>Add Project
               </div>
        </div>

        <MapUnderInput data={projects}/>   

 

{/* End inputs for arrays  */}

         <button className="bg-blue-900 rounded-[20px] mt-3 p-2 px-8
            text-center w-full text-white" >Make Cv</button>
        </Form>
      </Formik>

      {console.log(objective.title)}
     
    </div>
  )
}

export default CvMaker