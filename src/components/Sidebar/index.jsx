import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Checkbox } from "@mui/material";
import '../Sidebar/style.css';
import { Collapse } from "react-collapse";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";


const Sidebar = () => {
  const [isOpenCategoryFilter, setisOpenCategoryFilter]=useState(true);
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">Shop By Category
           <Button className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !color-[#000]"  onClick={()=>setisOpenCategoryFilter(!isOpenCategoryFilter)}><FaAngleDown /></Button></h3>
        <Collapse isOpened={isOpenCategoryFilter}>
        <div className="scroll px-3 relative -left-[10px]">
          <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"  />
          <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"  />
          <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"  />
          <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"  />
          <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"  />
          <FormControlLabel control={<Checkbox size="small" />} label="Fashion" className="w-full"  />
        </div>
        </Collapse>
      </div>
    </aside>
  );
};

export default Sidebar;
