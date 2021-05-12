import React from "react";
import { MainWrap, ContentWrap } from "./Layout.element";

function Layout({ children, noPadding, color }) {
  return (
    <>
      <MainWrap noPadding={noPadding} color={color}>
        <ContentWrap>{children}</ContentWrap>
      </MainWrap>
    </>
  );
}

export default Layout;
