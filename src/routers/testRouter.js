import asyncComponent from "../utils/AsyncComponent"

const TestPage = asyncComponent(() => import("../containers/test/test"))

const TestPage2 = asyncComponent(() => import("../containers/test/test2"))

const LoginPage = asyncComponent(() => import("../containers/test/login"))


export default [
    {
        path: '/test',
        component: TestPage,
        needLogin: true
    },
    {
        path: '/test2',
        component: TestPage2,
        needLogin: false
    },
    {
        path: '/login',
        component: LoginPage,
        needLogin: false
    }
]