"use client";
import { LOGIN_ROUTE } from '@/Constants/routes';
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';
import { useSelector } from 'react-redux';
import Sidebar from '@/Components/admin/Sidebar';

const Adminlayout = ({children}) => {
    const user=useSelector((state)=>state.auth.user);
    const router = useRouter();
     useEffect(()=>{
        if(!user) router.push(LOGIN_ROUTE);
    },[user]);
    if(user) return <div>
        <Sidebar/>
        <div className="p-4 sm:ml-64">{children}</div>
    </div>;

    return null;
    
  
}

export default Adminlayout;
