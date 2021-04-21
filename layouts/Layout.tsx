import React, {ReactNode} from 'react';
import Header from '../components/Header';
import Footer from "../components/Footer";
import Head from "next/head";

type Props = {
    children?: ReactNode
    title?: string
}

const Layout = ({ children, title = 'title'}:Props) => (
    <>
        
    </>
)

export default Layout