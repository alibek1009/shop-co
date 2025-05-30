// navbar.types.ts

export type MenuItemType = {
  id: number;
  label: string;
  type: "MenuItem";
  url: string;
  description?: string; // ✅ Добавляем описание, чтобы избежать ошибки
};

export type MenuListType = {
  id: number;
  label: string;
  type: "MenuList";
  children: MenuItemType[];
};

export type NavMenu = (MenuItemType | MenuListType)[];

// ✅ Это определение помогает типизировать массив данных в MenuList
export type MenuListData = MenuItemType[];
