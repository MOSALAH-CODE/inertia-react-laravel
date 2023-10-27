import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/inertia-react'
import "../css/main.css"
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "./Shared/Layout.jsx";

createInertiaApp({
    // resolve: name => {
    //     const pages = import.meta.glob('./Pages/**/*.jsx', {eager: true})
    //     let page = pages[`./Pages/${name}.jsx`]
    //     page.default.layout = page.default.layout || (page => <Layout children={page}/>)
    //     return page
    // },
    resolve: (name) => import(`./Pages/${name}.jsx`).then((module) => {
        const {default: page} = module;
        page.layout = page.layout || ((page) => <Layout children={page}/>);
        return page;
    }),
    setup({el, App, props}) {
        createRoot(el).render(<App {...props} />)
    },
})


InertiaProgress.init({
    color: "red",
    showSpinner: true

})
