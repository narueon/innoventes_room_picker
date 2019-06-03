import React from 'react';
import './HotelItem.css';

function HotelItem (props) {
    return ( 
            <div className="ui twelve column grid container">
                <div className="ui row">
                    <div className="ui one wide column">
                        <i className={props.iconName + " itemicon"} style={{fontSize: "1.25em", padding: "1px", color: "blue"}} />
                    </div>
                    <div className="ui twelve wide column">
                        <div className>{props.itemName}</div>
                    </div>
                    <div className="ui one wide column">
                        <i className="minus circle icon itemicon" style={{fontSize: "1.25em", padding: "1px", color: "blue"}} onClick={props.dec}/>
                    </div>
                    <div className="ui one wide column">
                        <div>{props.count}&nbsp;</div>
                    </div>
                    <div className="ui one wide column">
                        <i className="plus circle icon itemicon" style={{fontSize: "1.25em", padding: "1px", color: "red"}} onClick={props.inc} />
                    </div> 
                </div>
            </div>
        );
}

export default HotelItem