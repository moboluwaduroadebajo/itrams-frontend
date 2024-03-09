export const ADMIN_MENU_LIST = [
  { icon: "home", label: "Home", path: "/admin" },
  {
    icon: "book",
    label: "Departmental Supervisors",
    path: "/admin/supervisors",
  },
  { icon: "teacher", label: "Student", path: "/admin/students" },
  { icon: "case", label: "Registered Company", path: "/admin/company" },
];

export const EMPLOYER_MENU_LIST = [
  { icon: "home", label: "Home", path: "/employer" },
  { icon: "case", label: "Jobs", path: "/employer/jobs" },
  { icon: "2users", label: "Supervisors", path: "/employer/supervisors" },
  { icon: "teacher", label: "Students", path: "/employer/students" },
];

export const STUDENT_MENU_LIST = [
  { icon: "home", label: "Home", path: "/student" },
  { icon: "book", label: "Logbook", path: "/student/logbook" },
  { icon: "case", label: "Company", path: "/student/company" },
];

export const SUPERVISOR_MENU_LIST = [
  { icon: "home", label: "Home", path: "/supervisor" },
  { icon: "teacher", label: "Students", path: "/supervisor/students" },
];

export const COORDINATOR_MENU_LIST = [
  { icon: "home", label: "Home", path: "/coordinator" },
  { icon: "teacher", label: "Students", path: "/coordinator/students" },
];
