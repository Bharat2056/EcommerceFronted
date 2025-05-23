import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { FiMinusSquare } from "react-icons/fi";
import { FaRegSquarePlus } from "react-icons/fa6";
import { useState } from "react";



const CategoryCollapse = () => {
    const [submenuIndex, setSubmenuIndex] = useState(null);
      const [innersubmenuIndex, setInnerSubmenuIndex] = useState(null);
    
      const toggleDrawer = (newOpen) => () => {
        props.setOpenCatpanel(newOpen);
      };
       const openSubmenu = (index) => {
    if (submenuIndex === index) {
      setSubmenuIndex(null);
    } else {
      setSubmenuIndex(index);
    }
  };

  const openInnerSubmenu = (index) => {
    if (innersubmenuIndex === index) {
      setInnerSubmenuIndex(null);
    } else {
      setInnerSubmenuIndex(index);
    }
}
  return (
    <div className="scroll">
      <ul className="w-full">
        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <Button className="w-full !text-left !justify-start !px-3 !text-black">
              Fashion
            </Button>
          </Link>
          {submenuIndex === 0 ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(0)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(0)}
            />
          )}

          {submenuIndex === 0 && (
            <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-black">
                    Bags
                  </Button>
                </Link>

                {innersubmenuIndex === 0 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(0)}
                  />
                )}

                {innersubmenuIndex === 0 && (
                  <ul className="inner_submenu w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        Bags1
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        Bags2
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        Bags3
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>

        <li className="list-none flex items-center relative flex-col">
          <Link to="/" className="w-full">
            <Button className="w-full !text-left !justify-start !px-3 !text-black">
              Fashion
            </Button>
          </Link>
          {submenuIndex === 1 ? (
            <FiMinusSquare
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(1)}
            />
          ) : (
            <FaRegSquarePlus
              className="absolute top-[10px] right-[15px] cursor-pointer"
              onClick={() => openSubmenu(1)}
            />
          )}

          {submenuIndex === 1 && (
            <ul className="submenu  w-full pl-3">
              <li className="list-none relative">
                <Link to="/" className="w-full">
                  <Button className="w-full !text-left !justify-start !px-3 !text-black">
                    Bags
                  </Button>
                </Link>

                {innersubmenuIndex === 1 ? (
                  <FiMinusSquare
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                  />
                ) : (
                  <FaRegSquarePlus
                    className="absolute top-[10px] right-[15px] cursor-pointer"
                    onClick={() => openInnerSubmenu(1)}
                  />
                )}

                {innersubmenuIndex === 1 && (
                  <ul className="inner_submenu  w-full pl-3">
                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        Bags1
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        Bags2
                      </Link>
                    </li>

                    <li className="list-none relative mb-1">
                      <Link
                        to="/"
                        className="link w-full !text-left !justify-start !px-3 transition text-[14px]"
                      >
                        Bags3
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
};


export default CategoryCollapse
