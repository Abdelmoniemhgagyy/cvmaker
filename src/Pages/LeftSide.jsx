import TitleLeftSide from "../Components/TitleLeftSide"
import MapLeftSide from "../Components/MapLeftSide"
import { useSelector } from "react-redux"

function LeftSide() {
  const state = useSelector((stata)=>stata.data.items)
  const technical_skills = useSelector((stata)=>stata.data.technical_skills)
  const personal_skills = useSelector((stata)=>stata.data.personal_skills)
  // console.log(skills)
   const contact =[
    {
       id:1,
       title:state.email,
       icon:"fa-solid fa-envelope" ,
       link:"mailto:moniemhgagy@gmail.com?subject=Contact"
    },
    {
       id:2,
       title:state.phone,
       icon:state.phone ? "fa-solid fa-phone":" ",
       link:""
    },
   
   
    {
       id:3,
       title:state.linked&&"Linked in ",
       icon:state.linked?`fa-brands fa-linkedin`:" " ,
       link:state.linked
    },
    {
       id:4,
       title:state.github ? "Github": " ",
       icon:state.github?" fa-brands fa-github":" " ,
       link:state.github
    },
    {
       id:5,
       title:state.portfolio?"Portfolio":" ",
       icon:state.portfolio?"fa-solid fa-circle-user":" " ,
       link:state.portfolio
    },
    // {
    //    id:6,
    //    title:"Whatsapp",
    //    icon:"fa-brands fa-whatsapp" ,
    //    link:`https://api.whatsapp.com/send?phone=%2B201557221816&dat
    //          a=ARD0Zh9NsRHYnFZYHPG8McNvfVgQa7rFk5Fn08mKrUOWkySeHej6NE-C6pt0t6RZL3YKrf-8-6AWiG60BCsvLbucbRbhDcRGsDpLGpsQO7MV1m5Thm9saVqj-
    //          -W-Ds253VJy7XHdxJGto3oKIWNxILbmgg&source=FB_Page&app=facebook&entry_point=page_cta`
    // },

    // {
    //     id:7,
    //     title:"Telegram",
    //     icon:"fa-brands fa-telegram" ,
    //     link:"https://t.me/hgagq"
    //  },
    //  {
    //     id:7,
    //     title:"",
    //     icon:" <i className=''></i> " ,
    //     link:""
    //  },
    // xacogo2335@watrf.com
    // hepox21847@watrf.com
]

  return (
    <div className='bg-[#323b4c] text-white md:px-2  pt-8  md:min-w-[300px]  '>

      {/* Name And Job Title  */}
        <div className='text-md md:text-xl text-center leading-[1.6]'>
            <p >{state.full_name}</p>
            <p>{state.job_title}</p>
        </div>
       {/* End Name And Job Title  */}


      {/* sections in left side  */}
       <TitleLeftSide title="contact" items={state.phone}/>
       <MapLeftSide items={contact}/>
        {contact.length ? <hr  className='mx-8 md:mx-12 mt-3 border border-[1px] rounded-full'/>:null}


       <TitleLeftSide title=" TECHNICAL SKILLS " items={technical_skills}/>
         <MapLeftSide items={technical_skills}/>
        {technical_skills.length ? <hr  className='mx-12 mt-3 border border-[1px] rounded-full'/>:null}
 
       <TitleLeftSide title="PERSONAL SKILLS" items={personal_skills}/>
          <MapLeftSide items={personal_skills}/>
        {personal_skills.length ? <hr  className='mx-12 my-5 border border-[1px] rounded-full'/>:null}
      {/*End sections in left side  */}
    </div>
  )
}

export default LeftSide