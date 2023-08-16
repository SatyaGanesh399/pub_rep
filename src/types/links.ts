type link = {
  linkName: string;
  linkVal?: string;
  linkIcon?: JSX.Element;
};

export type links = {
  linkName: string;
  linkVal?: string;
  linkSubMenu?: boolean;
  linkSubMenuData?: link[];
  linkIcon?: JSX.Element;
};
