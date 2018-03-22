import React from 'react'
import { Route, Switch } from 'react-router-dom'

import AppliedRoute from "../utils/AppliedRoute"
import AuthenticatedRoute from "../utils/AuthenticatedRoute"
import UnauthenticatedRoute from "../utils/UnauthenticatedRoute"

import Home from '../containers/test/home'
import NotFound from '../containers/common/NotFound'

// code splitting routers
import testRouter from './testRouter'

let allRouters = [...testRouter]

export default ({ childProps }) =>
    <Switch>
        <AppliedRoute path="/" exact component={Home} props={childProps} />
        {
            allRouters.map((router, index) => {
                const needLogin = (router.needLogin || false)
                if (needLogin) {
                    return <AuthenticatedRoute path={router.path} exact component={router.component} props={childProps} key={index} />
                } else {
                    return <UnauthenticatedRoute path={router.path} exact component={router.component} props={childProps} key={index} />
                }
            })
        }
        {/* catch unmatched route */}
        <Route component={NotFound} />
    </Switch>