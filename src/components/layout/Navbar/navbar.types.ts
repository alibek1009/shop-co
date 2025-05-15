export type MenuItemType = {
  id: number;
  label: string;
  type: "MenuItem";
  url: string;
};

export type MenuListType = {
  id: number;
  label: string;
  type: "MenuList";
  children: MenuItemType[];
};

export type NavMenu = (MenuItemType | MenuListType)[];
