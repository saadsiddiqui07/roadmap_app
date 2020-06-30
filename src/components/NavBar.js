import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import '../App.css'

export default function NavBar(){
    return(
        <div className='navbar'>

            <AppBar className='appbar' position="static" style={{ height : 60, backgroundColor : 'black'}}>
                
                <Typography variant='h4' style={{textAlign : 'center', justifyContent:'center'}}>
                    Road to Web Development.
                </Typography>
                   
            </AppBar>
        </div>

    )
}
