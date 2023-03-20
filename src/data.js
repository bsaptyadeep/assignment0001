import Dashboard from "./assets/dashboard.png";
import Dashboard1 from "./assets/dashboard1.png";
import Dashboard2 from "./assets/dashboard2.png";
import Dashboard3 from "./assets/dashboard3.png";
import Dashboard4 from "./assets/dashboard4.png";
import Dashboard5 from "./assets/dashboard5.png";
import Dashboard6 from "./assets/dashboard6.png";
import Dashboard7 from "./assets/dashboard7.png";
import Dashboard8 from "./assets/dashboard8.png";
import Dashboard9 from "./assets/dashboard9.png";
import Dashboard10 from "./assets/dashboard10.png";
import HashIcon from "./assets/hash_icon.png";
import PlusInCircleIcon from "./assets/plus_in_circle_icon.png";

export const data = {
    "dashboards": [
        {
            "title": "Inbox",
            "image": Dashboard,
            "count": 4
        },
        {
            "title": "Drive Files",
            "image": Dashboard1,
            "count": 435
        },
        {
            "title": "Boards",
            "image": Dashboard2,
            "count": 5
        },
        {
            "title": "Updates",
            "image": Dashboard3,
        },
        {
            "title": "Analytics",
            "image": Dashboard4,
            "count": 2
        },
        {
            "title": "CRM Dashboard",
            "image": Dashboard5,
            "count": 2
        },
        {
            "title": "Ecommerce",
            "image": Dashboard6,
        },
        {
            "title": "Cryptocurrency",
            "image": Dashboard7,
        },
        {
            "title": "Projects",
            "image": Dashboard8,
        },
        {
            "title": "NFT Marketplace",
            "image": Dashboard9,
        },
        {
            "title": "Settings",
            "image": Dashboard10,
            "count": 2
        },
    ],
    "projects": [
        {
            "title": "Additional Calendar",
            "image": HashIcon,
            "count": 6
        },
        {
            "title": "Branch Logo Design",
            "image": HashIcon,
            "count": 11
        },
        {
            "title": "User Research",
            "image": HashIcon,
        },
        {
            "title": "Marketing Sales",
            "image": HashIcon,
            "count": 23
        },
        {
            "title": "New Project Template",
            "image": HashIcon,
            "count": 2
        },
        {
            "title": "Add New Project",
            "image": PlusInCircleIcon,
        }
    ],
    "tasks": [
        {
            "title": "Backlog Tasks",
            "count": 5,
            "maxTab": "card-backlog",
            "list": [
                {
                    "title": "Model Answer",
                    "color": "#UI007",
                    "check": 4,
                    "attachment": 4,
                    "message": 4,
                    "design": true,
                    "backlog": true
                },
                {
                    "title": "Create calendar, chat and email app pages",
                    "color": "#BCO5",
                    "check": 2,
                    "attachment": 2,
                    "message": 4,
                    "project": true,
                    "backlog": true
                },
                {
                    "title": "Product Design, Figma, Sketch (Software), Prototype",
                    "color": "#UI007",
                    "check": 4,
                    "attachment": 4,
                    "message": 4,
                    "design": true,
                    "backlog": true
                },
                {
                    "title": "Change email option process",
                    "color": "#FTCO7",
                    "check": 2,
                    "attachment": 2,
                    "message": 4,
                    "backlog": true
                },
                {
                    "title": "Post launch reminder/ Post list",
                    "color": "#FTCO9",
                    "backlog": true
                }
            ]
        },
        {
            "title": "To Do Tasks",
            "count": 3,
            "maxTab": "card-todo",
            "list": [
                {
                    "title": "Model Answer",
                    "color": "#UI005",
                    "check": 1,
                    "attachment": 4,
                    "message": 2,
                    "todo": true
                },
                {
                    "title": "Add authentication pages",
                    "color": "#UI008",
                    "todo": true
                },
                {
                    "title": "Profile Page Satructure",
                    "color": "#UI008",
                    "attachment": 2,
                    "message": 4,
                    "todo": true
                },
                {
                    "title": "Create calendar, chat and email app pages",
                    "color": "#UI003",
                    "check": 1,
                    "attachment": 2,
                    "message": 4,
                    "backlog": true,
                    "development": true
                }
            ]
        },
        {
            "title": "In Process",
            "count": 2,
            "maxTab": "card-in-process",
            "list": [
                {
                    "title": "Model Answer",
                    "color": "#002",
                    "check": 1,
                    "attachment": 4,
                    "message": 4,
                    "inProcess": true
                },
                {
                    "title": "Model Answer",
                    "color": "#002",
                    "check": 1,
                    "attachment": 2,
                    "message": 4,
                    "inProcess": true
                }
            ]
        },
        {
            "title": "Done",
            "count": 5,
            "maxTab": "card-done",
            "list": [
                {
                    "title": "Model Answer",
                    "color": "#UI007",
                    "done": true
                },
                {
                    "title": "Create calendar, chat and email app pages",
                    "color": "#002",
                    "done": true
                },
                {
                    "title": "Product Design, Figma, Sketch (Software), Prototype",
                    "color": "#UI007",
                    "attachment": 2,
                    "message": 4,
                    "done": true
                },
                {
                    "title": "Model Answer",
                    "color": "#UI007",
                    "attachment": 2,
                    "message": 4,
                    "inProcess": true
                },
                {
                    "title": "Create calendar, chat and email app pages",
                    "color": "#002",
                    "done": true
                }
            ]
        }
    ]
}
