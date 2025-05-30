// navbar.types.ts

export type MenuItemType = {
  id: number;
  label: string;
  type: "MenuItem";
  url: string;
  description?: string;
};

export type MenuListType = {
  id: number;
  label: string;
  type: "MenuList";
  children: MenuItemType[];
};

export type NavMenu = (MenuItemType | MenuListType)[];

export type MenuListData = MenuItemType[];
