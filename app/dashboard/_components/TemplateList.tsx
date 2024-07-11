import Templates from "@/app/(data)/Templates";
import React, { useEffect, useState } from "react";
import TemplatCard from "./TemplatCard";

export interface TEMPLATE {
  name: string;
  desc: string;
  category: string;
  icon: string;
  aiPrompt: string;
  slug: string;
  form: FORM[];
}

export interface FORM {
  label: string;
  field: string;
  name: string;
  required?: boolean;
}
const TemplateList = ({userSearchInput} : any) => {

    const [templateList, setTemplateList] = useState(Templates)

    useEffect(() => {
     if(userSearchInput){
        const filterData = Templates.filter(item => item.name.toLocaleLowerCase().includes(userSearchInput.toLocaleLowerCase()))
        setTemplateList(filterData)
     }
     else{
        setTemplateList(Templates)
     }
    }, [userSearchInput])
    
  return (
    <div className="grid grid-cols-2 md:gricol3 lg:grid-cols-4 p-10 gap-5">
      {templateList.map((item: TEMPLATE, index: number) => (
        <TemplatCard {...item} />
      ))}
    </div>
  );
};

export default TemplateList;
