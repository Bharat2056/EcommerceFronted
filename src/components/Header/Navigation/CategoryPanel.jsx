import Box from "@mui/material/Box";
import { IoCloseSharp } from "react-icons/io5";
import Drawer from "@mui/material/Drawer";
import CategoryCollapse from "../../CategoryCollapse";

const Categorypanel = (props) => {
  const toggleDrawer = (newOpen) => () => {
    props.setOpenCatpanel(newOpen);
  };

  const DrawerList = (
    <Box sx={{ width: 250 }} role="presentation" className="categoryPanel">
      <h3 className="p-3 text-[16px] font-[500] flex items-center justify-between">
        Shop by Categories
        <IoCloseSharp
          className="cursor-pointer text-[20px] "
          onClick={toggleDrawer(false)}
        />
      </h3>

      <CategoryCollapse/>
    </Box>
  );
  return (
    <>
      <Drawer open={props.isOpenCatpanel} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
    </>
  );
};

export default Categorypanel;
