import React from 'react'
import { AppBar, Typography } from '@material-ui/core'
import '../App.css'

export default function NavBar(){
    return(
        <div className='navbar'>

            <AppBar className='appbar' position="static" style={{ height : 60, backgroundColor : 'black', maxWidth:'100%'}}>
                
                <Typography variant='h4' style={{textAlign : 'center', justifyContent:'center', marginTop:'9px'}}>

                    Road to Web Dev.

                </Typography>
                   
            </AppBar>
        </div>

    )
}





