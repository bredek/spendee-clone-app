import React from 'react'; 
import { Sparklines, SparklinesLine} from 'react-sparklines'; 
 
export default (props) => { 
    return ( 
        <div> 
            <Sparklines data={props.data} width={500} height={220}> 
                <SparklinesLine style={{ fill: props.color }} /> 
            </Sparklines> 
        </div> 
    ); 
}