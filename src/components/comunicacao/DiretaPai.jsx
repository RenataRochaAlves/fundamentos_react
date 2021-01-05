import React from 'react';
import Filho from './DiretaFilho'

export default props => {
    return (
        <div>
            <Filho texto="Gabriel" num={20} bool={false}/>
            <Filho texto="Paula" num={18} bool={false}/>
            <Filho texto="Julia" num={22} bool={false}/>
        </div>
    )
}