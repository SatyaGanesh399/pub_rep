import React from "react";
import classNames from "classnames";
import Header from "@styleguide/components/header";
import Footer from "@styleguide/components/footer";

import css from "./index.module.scss";

import { CONTACT_PHONE_NUMBER } from "@lib/constants";

type PageLayoutProps = {
  children: React.ReactChild;
  hideFooter?: boolean;
  hideHeaderDesktop?: boolean;
};

const PageLayout = ({
  children,
  hideFooter = false,
  hideHeaderDesktop = false
}: PageLayoutProps) => (
    <div>
      <Header
        headerStyle={classNames(
          css.headerClass,
          hideHeaderDesktop ? css.headerhiddenDesktopClass : ""
        )}
      />
      <div className={css.pageBody}>{children}</div>
      {hideFooter ? null : (
        <>
          <Footer />
        </>
      )}
    </div>
);

export default PageLayout;
