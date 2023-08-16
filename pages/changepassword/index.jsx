import React from 'react'
import HeaderChangePassword from "@styleguide/components/header/header-change-password"
import css from "./index.module.scss"
import { Toaster } from 'react-hot-toast';
import PageLayout from "@page-components/page-layout";


function changepassword() {
    
    return (
        <PageLayout>
        <div className={css.container}>
        <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
    // Define default options
            className: '',
            duration: 5000,
            style: {
                background: '#363636',
                color: '#fff',
            },

    // Default options for specific types
        success: {
        duration: 3000,
        theme: {
            primary: 'green',
            secondary: 'black',
        },
        },
        }}
>
            <HeaderChangePassword/>
            </Toaster>
         </div>
        </PageLayout>
    )
}

export default changepassword
