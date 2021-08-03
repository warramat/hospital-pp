import React from "react";

// const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"))
const Car = React.lazy(() => import ("./views/car/Car"))
const Floor2 = React.lazy(() => import ('./views/floor2/Floor2'))
const Floor3 = React.lazy(() => import ('./views/floor3/Floor3'))
const Floor4 = React.lazy(() => import ('./views/floor4/Floor4'))
// const Floor2 = React.lazy(() => import("./views/floor2/Floor2"))
// const Floor3 = React.lazy(() => import("./views/floor3/Floor3"))
// const Floor4 = React.lazy(() => import("./views/floor4/Floor4"))

// const Floor2 = React.lazy(() => import("./views/home/floor2/Floor2"))
// const Floor3 = React.lazy(() => import("./views/home/floor3/Floor3"))
// const Floor4 = React.lazy(() => import("./views/home/floor4/Floor4"))


// const Documents = React.lazy(() => import("./views/documents/Documents"))
// const Questionnaire = React.lazy(() => import("./views/questionnaire/Questionnaire"))
// const Calendar = React.lazy(() => import("./views/calendar/Calendar"))
// const Events = React.lazy(() => import("./views/events/Events"))
// const Problem = React.lazy(() => import("./views/problem/Problem"))
// const System = React.lazy(() => import("./views/system/System"))

// const Customer = React.lazy(() => import("./views/customer/Customer"));
// const Company = React.lazy(() => import("./views/company/Company"));
// const SellProduct = React.lazy(() => import("./views/sellProduct/SellProduct"));
// const Product = React.lazy(() => import("./views/systemInfo/Product"));
// const UserWork = React.lazy(() => import("./views/user/User"));
// const CashReport = React.lazy(() => import("./views/cashReport/CashReport"));
// const ManageProduct = React.lazy(() =>
// import("./views/manageProduct/ManageProduct")
// );
// const Report = React.lazy(() => import("./views/report/Report"));

// const Dashboard = React.lazy(() => import("./views/dashboard/Dashboard"));

const routes = [
    {
        path: "/",
        exact: true,
        name: "หน้าหลัก"
    },
    // { path: "/dashboard", exact: true, name: "หน้าหลัก", component: Dashboard },
    {
        path: "/car",
        exact: true,
        name: "จัดการรถ",
        component: Car
    },
    {
        path: '/floor2',
        name: 'Floor2',
        component: Floor2
    },
    {
        path: '/floor3',
        name: 'Floor3',
        component: Floor3
    }, {
        path: '/floor4',
        name: 'Floor4',
        component: Floor4
    },
    // { path: "/documents", exact: true, name: "คู่มือและเอกสาร" ,component: Documents},
    // {path: "/questionnaire", exact: true , name: "แบบสอบถาม",component: Questionnaire},
    // {path: "/calendar", exact: true , name: "ปฏิทินฝึกอบรม",component: Calendar},
    // {path: "/events", exact: true , name: "ข่าวสารและกิจกรรม",component: Events},
    // {path: "/problem", exact: true , name: "แจ้งปัญหา",component: Problem},
    // {path: "/system", exact: true , name: "ติดต่อเรา",component: System},

    // { path: "/dashboard", name: "Dashboard", component: Dashboard },
    // { path: "/user", name: "User", component: UserWork },
    // { path: "/company", name: "บริษัท", component: Company },
    // { path: "/home", exact: true, name: "Home", component: Floor2 },
    // { path: "home/floor2",  name: "Floor2", component: Floor2 },
    // { path: "home/floor3",  name: "Floor3", component: Floor3 },
    // { path: "home/floor4",  name: "Floor4", component: Floor4 },


    // { path: "/sellProduct", name: "ขายสินค้า", component: SellProduct },
    // { path: "/customer", name: "ลูกค้า", component: Customer },
    // { path: "/cashReport", name: "รายงานเงินสดในร้าน", component: CashReport },
    // { path: "/systemInfo", name: "ข้อมูลระบบ", component: Product },
    // {
    // path: "/manageProduct",
    // name: "ระบบจัดการสินค้าคงคลัง",
    // component: ManageProduct,
    // },
    // { path: "/report", name: "รายงาน", component: Report },

];

export default routes;
