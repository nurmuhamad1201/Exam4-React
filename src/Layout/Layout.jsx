import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';

import ListItemText from '@mui/material/ListItemText';

import { Link, Outlet } from "react-router-dom";
import logo from '../img/Logo.png'
import Switcher from "../components/Switcher";
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import Aos from "aos";
import burger from '../img/icons8-burger-64.png'

const Layout = () => {
  useEffect(() => {
    Aos.init({duration: 3000});
    } , [])

    const [openburger, setOpenBurger] = useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpenBurger(newOpen);
    };
    
    const { t, i18n } = useTranslation();

    const changeLanguage = (language) => {
      i18n.changeLanguage(language);
      localStorage.setItem('i18nextLng', language);
    };
    const DrawerList =  (
      <Box 
        sx={{ width: 250 }}
        role="presentation"
        onClick={toggleDrawer(false)}
      >
        <List>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/" className="text-black no-underline">
                <ListItemText primary={t("nav.home")} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/contact" className="text-black no-underline">
                <ListItemText primary={t("nav.PricinG")} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/" className="text-black no-underline">
                <ListItemText primary={t("nav.About")} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/" className="text-black no-underline">
                <ListItemText primary={t("nav.blog")} />
              </Link>
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton>
              <Link to="/" className="text-black no-underline">
                <ListItemText primary={t("nav.Contact")} />
              </Link>
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <div  className="p-4">
          <button
            onClick={() => changeLanguage('en')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          >
            Eng
          </button>
          <button
            onClick={() => changeLanguage('ru')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full mb-2"
          >
            Russian
          </button>
          <button
            onClick={() => changeLanguage('tj')}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full"
          >
            Tajik
          </button>
        </div>
      </Box>
    );
    

  return (
    <div  className=" dark:bg-[#1E1E1E] dark:text-[white] ">

     <header data-aos="zoom-out-left" className=" px-[50px] sticky top-0 z-10 py-[10px] text-white  bg-[#1E1E1E]">

     <nav  className="flex  justify-between items-center  ">
          <Link to="/"><img src={logo} alt="" /></Link>
        <ul className="flex lg:hidden xs:hidden md:hidden gap-5">
          <Link to="/">{t("nav.home")}</Link>
          <Link to="/contact">{t("nav.PricinG")}</Link>
          <Link to="/">{t("nav.About")}</Link>
          <Link to="/">{t("nav.blog")}</Link>
          <Link to="/">{t("nav.Contact")}</Link>
        </ul>
        <div className=" flex justify-between items-center  ">
        <button onClick={() => changeLanguage('en')} className="bg-blue-500 lg:hidden xs:hidden md:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Eng</button>
      <button onClick={() => changeLanguage('ru')} className="bg-blue-500 lg:hidden xs:hidden md:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"> Russian</button>
     <button onClick={() => changeLanguage('tj')} className="bg-blue-500 lg:hidden xs:hidden md:hidden hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Tajik</button>
    <Button className=' hidden lg:block xs:block md:block ' onClick={toggleDrawer(true)}><img className=' hidden lg:block xs:block md:block ' src={burger} alt="" /></Button>
      <Drawer className='dark:bg-[#1E1E1E]' open={openburger} onClose={toggleDrawer(false)}>
        {DrawerList}
      </Drawer>
        <Switcher />
        </div>
      </nav>
     </header>
      <Outlet />


      <footer className="  py-8 px-[150px] lg:px-0 md:px-8">
  <h1 className="text-xl font-bold mb-4">Build a beautiful product with align</h1>

  <div  className="flex flex-wrap justify-between gap-4">
    <ul className="flex flex-col">
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.home")}</Link></li>
      <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">{t("nav.PricinG")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.About")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.blog")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.Contact")}</Link></li>
    </ul>
    <ul className="flex flex-col">
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.home")}</Link></li>
      <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">{t("nav.PricinG")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.About")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.blog")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.Contact")}</Link></li>
    </ul>
    <ul className="flex flex-col">
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.home")}</Link></li>
      <li><Link to="/contact" className="text-blue-600 hover:text-blue-800">{t("nav.PricinG")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.About")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.blog")}</Link></li>
      <li><Link to="/" className="text-blue-600 hover:text-blue-800">{t("nav.Contact")}</Link></li>
    </ul>

    
  </div>
</footer>


    </div>
  );
};

export default Layout;
