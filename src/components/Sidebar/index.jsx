import FormControlLabel from "@mui/material/FormControlLabel";
import { Button, Checkbox, Rating } from "@mui/material";
import "../Sidebar/style.css";
import { Collapse } from "react-collapse";
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import { useState } from "react";
import 'react-range-slider-input/dist/style.css'
import RangeSlider from 'react-range-slider-input';


const Sidebar = () => {
  const [isOpenCategoryFilter, setisOpenCategoryFilter] = useState(true);
  const [isOpenAvailableFilter, setisOpenAvailableFilter] = useState(true);
  const [isOpenSizeFilter, setisOpenSizeFilter] = useState(true);
  return (
    <aside className="sidebar py-5">
      <div className="box">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Shop By Category
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !color-[#000]"
            onClick={() => setisOpenCategoryFilter(!isOpenCategoryFilter)}
          >
            {isOpenCategoryFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenCategoryFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full"
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Fashion"
              className="w-full "
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3  ">
        <h3 className="w-full  mb-3 text-[16px] font-[600] flex items-center pr-5">
          Availabilty
          <Button
            className="!w-[30px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !color-[#000]"
            onClick={() => setisOpenAvailableFilter(!isOpenAvailableFilter)}
          >
            {isOpenAvailableFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenAvailableFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Available"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="In Stock"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Not Available"
              className="w-full "
            />
          </div>
        </Collapse>
      </div>

      <div className="box mt-3 ">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
          Size
          <Button
            className="!w-[34px] !h-[30px] !min-w-[30px] !rounded-full !ml-auto !color-[#000]"
            onClick={() => setisOpenSizeFilter(!isOpenSizeFilter)}
          >
            {isOpenSizeFilter === true ? <FaAngleUp /> : <FaAngleDown />}
          </Button>
        </h3>
        <Collapse isOpened={isOpenSizeFilter}>
          <div className="scroll px-4 relative -left-[13px]">
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Small(25)"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Medium(17)"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="Large(15)"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XL(10)"
              className="w-full "
            />
            <FormControlLabel
              control={<Checkbox size="small" />}
              label="XXL(12)"
              className="w-full "
            />
          </div>
        </Collapse>
      </div>
      <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
         Filter By Price
          </h3>
       <RangeSlider/>
       <div className="flex pt-4 pb-2 priceRange">
        <span className="text-[13px]">
          From: <strong className="text-dark">Rs: {100}</strong>
        </span>
        <span className="ml-auto text-[13px]">
          From: <strong className="text-dark">Rs: {500}</strong>
        </span>
       </div>
      </div>
       <div className="box mt-4">
        <h3 className="w-full mb-3 text-[16px] font-[600] flex items-center pr-5">
         Filter By Rating
          </h3>
       <div className="w-full">
        <Rating name="size-small"defaultValue={5} size="small" readOnly/>
       </div>
       <div className="w-full">
        <Rating name="size-small"defaultValue={4} size="small" readOnly/>
       </div>
       <div className="w-full">
        <Rating name="size-small"defaultValue={3} size="small" readOnly/>
       </div>
       <div className="w-full">
        <Rating name="size-small"defaultValue={2} size="small" readOnly/>
       </div>
       <div className="w-full">
        <Rating name="size-small"defaultValue={1} size="small" readOnly/>
       </div>
      </div>
    </aside>
  );
};

export default Sidebar;
