export const API = {
    HOST: "http://external.novility.com:9050",
    BASE: "//car-rental/api",
    CARS: "/Cars",
    RESERVATION: "/Reservations"
}

export const ROUTES = {
    ROOT: {
        PATH: "",
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