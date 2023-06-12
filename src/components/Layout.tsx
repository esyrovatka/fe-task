import React, { ReactElement, ReactFragment, ReactPortal } from "react";
import Header from "./Header";
import UnderFooter from "./UnderFooter";
import Footer from "./Footer";

type ReactNode =
  | ReactElement
  | ReactFragment
  | ReactPortal
  | boolean
  | null
  | undefined;

interface Props {
  children: ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <>
      <div className="layout">
        <Header />
        {children}
        <UnderFooter />
        <Footer />
      </div>
    </>
  );
}

export default Layout;
