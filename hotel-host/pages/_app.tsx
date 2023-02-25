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

export default function AppHost({ Component, pageProps, router }: AppProps): JSX.Element {
    return (
        <React.Fragment>
            <style>{`
                body {
                    color: white !important;
                    background-color: black !important;
                }
            `}</style>
            <div>Host App</div>
            <Component {...pageProps} {...router.query} />
        </React.Fragment>
    );
}
