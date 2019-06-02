import React from 'react';

function HotelItem (props) {
    return ( 
            <div className="ui two column grid">
                <div className="ui row">
                    <div className="ui column">
                        <div className="ui items">
                            <div className="ui item">
                                <i className={props.iconName} />
                                <div className>{props.itemName}</div>
                            </div>
                        </div>
                    </div>
                    <div className="ui column">
                        <div className="ui items">
                            <div className="ui item">
                                <i className="minus circle icon" onClick={props.dec}/>
                                <div>{props.count}&nbsp;</div>
                                <i className="plus circle icon" onClick={props.inc} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
}

export default HotelItem