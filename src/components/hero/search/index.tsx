"use client";

import Divider from "@/components/divider";
import TextInput from "@/components/forms/input/text_input";
import SelectBox from "@/components/selectbox";
import React, { useState } from "react";
import { CiSearch } from "react-icons/ci";

export default function SearchPanel() {
  const categories = ["All Categories", "Cars", "House"];
  const [selected, setSelected] = useState(categories[0]);
  const location = ["Location", "Abuja", "Lagos"];
  const [locate, setLocate] = useState(location[0]);
  return (
    <div className="bg-white w-full flex space-x-6 px-24 py-3 h-[4.87rem] rounded-[3.125rem]">
      <div className="flex space-x-2">
        <TextInput
          className="w-54 md:w-72"
          name="search"
          label="Item"
          placeholder="Search Vidza Shop"
        />
        <Divider className="h-12" />
      </div>
      <div className="flex space-x-1">
        <SelectBox
          label="Select"
          className="w-60 flex flex-col items-start"
          options={categories}
          value={selected}
          onChange={setSelected}
        />
        <Divider className="h-12" />
      </div>
      <div className="flex space-x-1">
        <SelectBox
          label="Where"
          className="w-60 flex flex-col items-start"
          options={location}
          value={locate}
          onChange={setLocate}
        />
        <Divider className="h-12" />
      </div>
      <div className="flex justify-center items-center"><CiSearch className="text-primary text-2xl" /></div>
    </div>
  );
}
