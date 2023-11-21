import { NavBarTabName, NavBarTitle } from "../enums/navbar-tabs-types";
import { NavBarTab } from "../models/navbartab.model";

export const NAVBARTABS: NavBarTab [] = [
    {
        title: NavBarTitle.SUNRISE,
        name: NavBarTabName.SUNRISE,
        isHomeTab: true,
        logoImageUrl: '../../../../assets/SmallSquareLogoJpgCropped.jpg'
    }, 
    {
        title: NavBarTitle.SERVICES,
        name: NavBarTabName.SERVICES,
    },
    {
        title: NavBarTitle.ABOUT,
        name: NavBarTabName.ABOUT,
    }, 
    {
        title: NavBarTitle.CONTACTS,
        name: NavBarTabName.CONTACTS,
    },
    {
        title: NavBarTitle.LOGIN,
        name: NavBarTabName.LOGIN,
        isLoginTab: true,
        marginRightClass: 'me-3'
    },
    {
        title: NavBarTitle.SIGNUP,
        name: NavBarTabName.SIGNUP,
        isSignupTab: true
    }
]