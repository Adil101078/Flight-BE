import { App } from "../../../core/globals"
import _ from 'lodash'


export default async(req, res)=>{
    const data = {
        contact_us: App.Config.CONTACT_US,
        utm_source: App.Config.UTM_CONTACT_US,
        _
        
    }
    return res.render('home/index', { data })
}