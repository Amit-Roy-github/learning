import React from "react";


const divClassName = 'flex ps-4 pe-8 items-center border rounded border-gray-200';
function Div(proops) {
   return (
      <div className={divClassName}>
         <Input  />
         <Label tag = {proops.tag} />
      </div>
   )
}

const inputClassName = 'w-6 h-6 bg-gray-100 border-gray-300 rounded ';
function Input() {
   return (
      <input type="checkbox" name="" id="" className={inputClassName} />
   )
}

const labelClassName = 'py-4 ms-2 text-2xl font-bold text-gray-900';
function Label(proops) {
   return (
      <label htmlFor="" className={labelClassName}>
         {proops.tag }
      </label>
   )
}

export default Div;