/*
const Staff = {
    baseUrl: "http://localhost:3000",
    path: {
        employees: "/employees",
        comments: "/comments",
    },
    getStaff(params) {
        if (!params || params == 0) this.getStaffAll();
        else this.getStuffFilter(params);
    },
    async createStaff(newMembers) {
        console.log("setStuff");
        const resp = await fetch(`${this.baseUrl}${this.path.employees}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newMembers),
        });
        const employee = await resp.json();
        console.log("employee", employee);
    },
    _createQuerySting(queryParams) {
        const query = queryParams
            .map((param) => `${param.key}=${param.value}`)
            .join("&");
        return `?${query}`;
    },
    async getStaffAll() {
        console.log("getStaffAll");
        const res = await fetch(`${this.baseUrl}${this.path.employees}`);
        const data = await res.json();
        console.log("All Stuff", data);
    },
    async getStuffFilter(params) {
        console.log("getStuffFilter");
        const query = this._createQuerySting(params);
        const res = await fetch(
            `${this.baseUrl}${this.path.employees}${query}`
        );
        const data = await res.json();
        console.log("response", res);
        console.log("response", res.headers.get("X-Total-Count"));
        console.log("Stuff filter", data);
    },
    createQueryString(queryParams) {},
};
const params = [];
const params1 = [{ key: "position", value: "developer" }];
const params2 = [
    { key: "role", value: "developer" },
    { key: "salary", value: 5000 },
];
const params3 = [{ key: "salary", value: 5000 }];
const params4 = [, { key: "_page", value: 8 }, { key: "_limit", value: 2 }];
const members = {
    name: "Oleg",
    salary: 500,
    active: true,
    position: "manager",
};

// Staff.getStaff(params3);
// Staff.getStaff(params2);
// Staff.getStaff(params1);
Staff.getStaff(params4);
// Staff.setStaff(params1);
// Staff.createStaff(members);
*/
