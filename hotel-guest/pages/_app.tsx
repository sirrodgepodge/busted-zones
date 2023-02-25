import React from "react";
import type { NextComponentType, NextPageContext } from "next";
import type { AppProps as DefaultAppProps } from "next/app";

interface AppProps extends DefaultAppProps {
    Component: NextComponentType<NextPageContext, never, unknown> & {
        isPublicRoute?: boolean;
        isSuperUserRoute?: boolean;
        isLoggedOutRoute?: boolean;
    };
}

export default function AppGuest({ Component, pageProps, router }: AppProps): JSX.Element {
    return (
        <React.Fragment>
            <style>{`
                body {
                    color: white !important;
                    background-color: blue !important;
                }
            `}</style>
            <div>Guest App</div>
            <Component {...pageProps} {...router.query} />
        </React.Fragment>
    );
}
