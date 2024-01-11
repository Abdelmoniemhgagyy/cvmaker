import { configureStore } from "@reduxjs/toolkit";
import  MyReducer  from "./Reducer.jsx";

 const store = configureStore ({reducer: {

    data:MyReducer
}
})

export default store