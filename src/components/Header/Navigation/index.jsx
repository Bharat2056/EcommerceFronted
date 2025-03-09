import { Button } from "@mui/material";
import React, { useState } from "react";
import { GoRocket } from "react-icons/go";
import { LiaAngleDownSolid } from "react-icons/lia";
import { RiMenu2Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import CategoryPanel from "./CategoryPanel";
import "../Navigation/style.css";

const Navigation = () => {
  const [isOpenCatpanel, setOpenCatpanel] = useState(false);

  const openCategorypanel = () => {
    setOpenCatpanel(true);
  };
  return (
    <>
      <nav >
        <div className="container flex items-center justify-end gap-8">
          <div className="col-1 w-[20%]">
            <Button
              className="!text-black gap-2 w-full"
              onClick={openCategorypanel}
            >
              <RiMenu2Fill className="text-[18px]  " />
              Shop by Categories
              <LiaAngleDownSolid className="text-[13px] ml-auto font-bold " />
            </Button>
          </div>
          <div className="col-2 w-[60%]">
            <ul className="flex items-center gap-4 nav">
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Home
                  </Button>
                </Link>
              </li>
              <li className="list-none relative">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252] !py-4">
                    Electronics
                  </Button>
                </Link>
                <div className="submenu absolute top-[0%] left-[0%] min-w-[200px] bg-white shadow-md opacity-0 transition-all">
                  <ul>
                    <li className="list-none w-full relative">
                      <Link to="/" className="w-full">
                        <Button className="!text=[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none !py-4">
                          Men
                        </Button>
                      </Link>

                      <div className="submenu absolute top-[0%] left-[100%] min-w-[150px] bg-white shadow-md opacity-0 transition-all">
                        <ul>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none !py-4">
                                Tshirt
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none !py-4">
                                Women
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none !py-4">
                                Kids
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none !py-4">
                                Boys
                              </Button>
                            </Link>
                          </li>
                          <li className="list-none w-full">
                            <Link to="/" className="w-full">
                              <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                                Girls
                              </Button>
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Women
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Kids
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Boys
                        </Button>
                      </Link>
                    </li>
                    <li className="list-none w-full">
                      <Link to="/" className="w-full">
                        <Button className="!text-[rgba(0,0,0,0.8)] w-full !text-left !justify-start !rounded-none">
                          Girls
                        </Button>
                      </Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Fashion
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Featness
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Jwellery
                  </Button>
                </Link>
              </li>
              <li className="list-none">
                <Link to="/" className="link transition text-[14px] font-[500]">
                  <Button className="link transition !font-[500] !text-[rgba(0,0,0,0.8)] hover:!text-[#ff5252]">
                    Groceries
                  </Button>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-2 w-[20%]">
            <p className="text-[14px] font-[500] flex items-center gap-3 mb-0 mt-0">
              <GoRocket />
              Free International Delivery
            </p>
          </div>
        </div>
      </nav>
      <CategoryPanel
        setOpenCatpanel={setOpenCatpanel}
        isOpenCatpanel={isOpenCatpanel}
      />
    </>
  );
};

export default Navigation;
