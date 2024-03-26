export default [
  {
    title: 'Dashboards',
    icon: { icon: 'tabler-smart-home' },
    children: [
      {
        title: 'Analytics',
        to: {name: "index"},
      },
      {
        title: 'eCommerce',
        to: 'dashboards-ecommerce',
      },
      {
        title: 'CRM',
        to: 'dashboards-crm',
      },
    ],
    badgeContent: '3',
    badgeClass: 'bg-primary',
  },
]
