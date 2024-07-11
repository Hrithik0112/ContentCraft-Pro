
"use client"
import React, { useState } from 'react'
import SearchSection from './_components/SearchSection'
import TemplateList from './_components/TemplateList'

const DashBoard = () => {
  const [userSearchInput, setuserSearchInput] = useState<string>('')
  return (
    <div>
      {/* search sction */}
      <SearchSection onSearchInput={(value : string) => setuserSearchInput(value)} />

      {/* template list */}
      <TemplateList userSearchInput={userSearchInput}/>
    </div>
  )
}

export default DashBoard