import React from 'react'
import {createRoot} from 'react-dom/client'
import {createInertiaApp} from '@inertiajs/inertia-react'
import "../css/main.css"
import {InertiaProgress} from "@inertiajs/progress";
import Layout from "./Shared/Layout.jsx";

import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";

const appName = import.meta.env.VITE_APP_NAME || 'My App';


createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    // resolve: async (name) => {
    //     const pages = import.meta.glob('./Pages/**/*.jsx', { eager: true })
    //     let page = pages[`./Pages/${name}.jsx`]
    //     page.default.layout = name.startsWith('Public/') ? undefined : page => <Layout children={page} />
    //     return page
    // },
    resolve: (name) => resolvePageComponent(`./Pages/${name}.jsx`, import.meta.glob('./Pages/**/*.jsx')),
    setup({ el, App, props }) {
        const root = createRoot(el);

        root.render(<App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
})


InertiaProgress.init({
    color: "red",
    showSpinner: true

})
