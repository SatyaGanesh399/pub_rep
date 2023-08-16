import React from "react";
import classNames from "classnames";
import { links } from "../../../types/links";
import A from "@styleguide/components/a";
import { IconDown } from "@icons/index";

import css from "./index.module.scss";

type Props = {
  tabsStyle?: string;
  tabs: links[];
  type: string;
  internal?: boolean;
  footer? : boolean;
};

const LinkTabs = ({ tabsStyle, tabs, type, footer, internal = false }: Props) => {
  return (
    <>
      {tabs.map((item, index) => {
        return item.linkSubMenu ? (
          <div className={footer ? "" :css.menuItemContainer} key={`${type}-tab-${index}`}>
            <span className={css.linkContainer} key={`${type}-tab-${index}`}>
              <A className={tabsStyle} onHover>
                {item.linkName}
                <IconDown className={css.dropDownIcon} width="0" />
              </A>
              <div className={css.linkDropDown}>
                {item.linkSubMenuData.map((subitem, i) => (
                  <A
                    link={subitem.linkVal}
                    internal={true}
                    key={`${type}-sub-tab-${i}`}
                    className={classNames(
                      css.linkDropDownItem,
                      css.linkDropDownItem2
                    )}
                  >
                    {subitem.linkIcon}
                    {subitem.linkName}
                  </A>
                ))}
              </div>
            </span>
          </div>
        ) : (
          <div className={footer ? "" :css.menuItemContainer} key={`${type}-tab-${index}`}>
            <A
              link={item.linkVal}
              internal={true}
              key={`${type}-tab-${index}`}
              className={tabsStyle}
            >
              {item.linkName}
            </A>
          </div>
        );
      })}
    </>
  );
};

export default LinkTabs;
