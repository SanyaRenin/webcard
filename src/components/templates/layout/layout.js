import React from 'react'

import HeaderMenu from '../../organisms/headerMenu/headerMenu'
import C from '../../../constant'

const Layout = ({
    locale = 'en-US',
    children,
    localHref = true,
}) => {
    const { locales, pages = {} } = C
    const contentList = pages[locale]

    return (
        <div className="App">
            <HeaderMenu
                contentList={contentList}
                pullDownMenuContent={{
                    locales,
                    locale,
                }}
                pullDownMenuClick={changeLngHandler}
            />
            <div className="contentContainer">
                {children}
            </div>
        </div>
    )
}

function changeLngHandler(lngID) {
    const currentUrl = window.location.href,
        arrSubURL = currentUrl.split('/')

    const current = arrSubURL[3],
        currentLocales = C.locales.find(({path}) => path === current)
            || C.locales.find(({isDefault}) => isDefault)

    if (currentLocales.langID === lngID) {
        return
    }

    const newLocales = C.locales.find(({langID}) => langID === lngID)

    let newURLarr = [...arrSubURL]

    if (currentLocales.isDefault) {
        newURLarr.splice(3, 0, newLocales.path)
    } else {
        if (newLocales.isDefault) {
            newURLarr.splice(3, 1)
        } else {
            newURLarr[3] = newLocales.path
        }
    }

    const newURL = newURLarr.join('/')
    window.open(newURL, "_self")
}

export default Layout