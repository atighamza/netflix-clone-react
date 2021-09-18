import React, { useEffect, useState } from 'react'
import classes from '../styles/NavBar.module.css';
import logo from '../assets/netflix.png'
import account from '../assets/account.png'
import netflixLogo from '../assets/netflix-favicon.png'

const useWindowSize= ()=>{
    const [size , setSize]=useState([window.innerHeight,window.innerWidth])
    useEffect(()=>{
        const handleSize=()=>{
            setSize([window.innerHeight,window.innerWidth])
        }
        window.addEventListener('resize',handleSize);
        return()=>{
            window.removeEventListener('resize',handleSize);
        }
    },[])
    return size;
}
const Navbar = () => {
    const [show, setShow] = useState(false);
    const [screenWidth,setWidth] = useState(window.innerWidth);
    const [height , width]=useWindowSize();
    const initialURL=width ? logo:netflixLogo
    const [logoURL , setLogoURL] = useState(initialURL);
    useEffect(()=>{
        if (width>700){
            setLogoURL(logo);
        }
        else(
            setLogoURL(netflixLogo)
        )
    },[width])
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100)
                setShow(true);
            else
                setShow(false);
        });
        return () => window.removeEventListener("scroll",()=>{});
        
       
    })

    const navClasses = `${classes.navbar} ${show && classes.active}`
    return (
        <nav className={navClasses}>
            <img className={classes.logo} src={logoURL} alt='netflix-logo' />
            <img src={account} alt='account-logo' style={{ width: '3.7rem', height: '70%', marginRight: '60px' }} />
        </nav>
    )
}

export default Navbar
