'use client'

import { useRef, useState, useEffect } from 'react'
import MainV from './Main.v'
import PageUtil from '@utils/Page.util'
import $ from'jquery'

interface Params {
    error: any
    isLoaded: boolean

}

function Main(props: any) {
    let initParams: Params = {
        error: null,
        isLoaded: false,

    }
    const [params, setParams] = useState(initParams)

    /****************************************************************************************** */
    /************************************** STATE ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /************************************** PAGE ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /************************************** BASIC ********************************************* */
    /****************************************************************************************** */

    /****************************************************************************************** */
    /**************************************** VAC ********************************************* */
    /****************************************************************************************** */
    const args = {
        t: props.t,
        locale: props.locale,
        params: params,

    }

    return <MainV {...args} />
}
export default Main
