import dom from "@left4code/tw-starter/dist/js/dom";

// Setup side menu
const findActiveMenu = (subMenu: any, route: any) => {
  let match = false;

  subMenu.forEach((item: any) => {
    if (
      ((route.forceActiveMenu !== undefined &&
        item.pageName === route.forceActiveMenu) ||
        (route.forceActiveMenu === undefined &&
          item.pageName === route.name)) &&
      !item.ignore
    ) {
      match = true;
    } else if (!match && item.subMenu) {
      match = findActiveMenu(item.subMenu, route);
    }
  });
  return match;
};

const nestedMenu = (menu: any, route: any) => {
  menu.forEach((item: any, key: number) => {
    if (typeof item !== "string") {
      let menuItem = menu[key];

      const splitRoute = route.path.split("/");

      menuItem.active =
        ((route.forceActiveMenu !== undefined &&
          item.pageName === route.forceActiveMenu) ||
          (route.forceActiveMenu === undefined &&
            item.pageName === route.name) ||
          (item.subMenu && findActiveMenu(item.subMenu, route)) ||
          splitRoute.includes(item.path)) &&
        !item.ignore;

      if (item.subMenu) {
        menuItem.activeDropdown = findActiveMenu(item.subMenu, route);
        menuItem = {
          ...item,
          ...nestedMenu(item.subMenu, route),
        };
      }
    }
  });

  return menu;
};

const linkTo = (menu: any, router: any, event: any) => {
  if (menu.subMenu) {
    menu.activeDropdown = !menu.activeDropdown;
  } else {
    event.preventDefault();
    router.push({
      name: menu.pageName,
    });
  }
};

const enter = (el: any, done: any) => {
  dom(el).slideDown(300);
};

const leave = (el: any, done: any) => {
  dom(el).slideUp(300);
};

export { nestedMenu, linkTo, enter, leave };
