// import appAndPages from './app-and-pages'
// import charts from './charts'
// import dashboard from './dashboard'
// import forms from './forms'
// import others from './others'
// import uiElements from './ui-elements'

import type { VerticalNavItems } from "@/@layouts/types";
export default [
  {
    title: "Home",
    to: { name: "index" },
    icon: { icon: "tabler-smart-home" },
  },
  {
    title: "Table",
    icon: { icon: "mdi-table-cog" },
    children: [
      {
        title: "Product",
        to: {
          path: "/Admin/Product",
        },
      },
      {
        title: "Category",
        to: { path: "/Admin/Category" },
      },
    ],
    badgeContent: "2",
    badgeClass: "bg-primary",
  },
  {
    title: "Setting",
    to: { path: "/Admin/Setting" },
    icon: { icon: "mdi-cog-sync" },
  },
] as VerticalNavItems;

// export default [...dashboard, ...appAndPages, ...uiElements, ...forms, ...charts, ...others] as VerticalNavItems
