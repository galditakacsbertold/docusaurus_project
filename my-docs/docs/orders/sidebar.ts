import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "orders/orders-api",
    },
    {
      type: "category",
      label: "Orders",
      items: [
        {
          type: "doc",
          id: "orders/list-orders",
          label: "List orders",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "orders/create-an-order",
          label: "Create an order",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "orders/get-order-by-id",
          label: "Get order by ID",
          className: "api-method get",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
