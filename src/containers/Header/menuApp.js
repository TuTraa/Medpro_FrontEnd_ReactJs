export const adminMenu = [
    { //Quản lý người dùng 
        name: 'menu.admin.manage-user', menus: [
            // {
            //     name: 'menu.admin.crud', link: '/system/user-manage',
            // },
            {
                name: 'menu.admin.crud-redux', link: '/system/user-redux',
            },
            {
                name: 'menu.admin.manage-doctor', link: '/system/manage-doctor',
            },
            // {
            //     name: 'menu.admin.manage-admin', link: '/system/user-admin',
            // },
            {
                name: 'menu.doctor.manage-schedule', link: '/system/manage-schedule',
            },



            // subMenus: [
            //     { name: 'menu.admin.manage-doctor', link: '/system/user-manage' },
            //     { name: 'menu.system.system-administrator.user-redux', link: '/system/user-redux' },
            // ]
            // { name: 'menu.system.system-parameter.header', link: '/system/system-parameter' },
        ]
    },
    { //Quản lý phòng khám
        name: 'menu.admin.clinic', menus: [
            {
                name: 'menu.admin.manage-clinic', link: '/system/manage-clinic',
            }

        ]
    },
    { //Quản lý chuyên khoa
        name: 'menu.admin.specialty', menus: [
            {
                name: 'menu.admin.manage-specialty', link: '/system/manage-specialty',
            },

        ]
    },
    // { 
    //     name: 'menu.admin.handbook', menus: [
    //         {
    //             name: 'menu.admin.manage-handbook', link: '/system/manage-handbook',
    //         },

    //     ]
    // },
    { //Quản lý Booking
        name: 'menu.admin.booking', menus: [
            {
                name: 'menu.admin.manage-booking-cancel', link: '/system/manage-booking-cancel',
            },
            {
                name: 'menu.admin.manage-booking-history', link: '/system/manage-booking-history',
            },

        ]
    },
];
export const doctorMenu = [
    { //Quản lý người dùng 
        name: 'menu.admin.manage-user', menus: [
            {
                name: 'menu.doctor.manage-schedule', link: '/doctor/manage-schedule',
            },
            {
                name: 'menu.doctor.infor-schedule', link: '/doctor/infor-schedule',
            },

        ]
    }
];