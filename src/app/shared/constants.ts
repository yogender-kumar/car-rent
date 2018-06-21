export const API = {
    HOST: "http://external.novility.com:9050",
    BASE: "/api/"
}

export const ROUTES = {
    ROOT: {
        PATH: "dashboard",
        MODULE: "../views/dashboard/dashboard.module#DashboardModule"
    },
    RESERVATION: {
        PATH: "reservation",
        CHILD: {
            ADD: "add",
            EDIT: ":id"
        },
        MODULE: "../views/reservation/reservation.module#ReservationModule"
    }
};