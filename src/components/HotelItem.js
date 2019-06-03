import React from 'react';
import { Button, Row, Col } from 'antd'
import 'antd/dist/antd.css';

import './HotelItem.css';

function HotelItem (props) {
    return ( 
            <div>
                <Row type="flex" justify="start" align="middle">
                    <div>
                        <i className={props.iconName + " itemicon"} style={{fontSize: "20px", padding: "1px", color: "#000080"}} />
                    </div>
                    <Col xs={16} sm={16} md={16} lg={18} xl={20}>
                        <div style={{fontSize: "16px"}}>{props.itemName}</div>
                    </Col>
                    <Button
                        type="primary"
                        icon="minus"
                        shape="circle"
                        onClick={props.dec}
                        disabled={props.disableDec}
                        onMouseDown={ev => ev.preventDefault()}
                    />
                    <Col xs={2} sm={2} md={2} lg={2} xl={1}>
                        <div style={{textAlign: 'center'}}>{props.count}</div>
                    </Col>
                    <Button
                        type="danger"
                        icon="plus"
                        shape="circle"
                        onClick={props.inc}
                        disabled={props.disableInc}
                        onMouseDown={ev => ev.preventDefault()}
                    />
                </Row>
                    
            </div>
        );
}

function CardHeader(props) {
    return (
            <div>
                <Row type="flex" justify="start" align="middle">
                    <div>
                        <i className={props.icon} style={props.style}></i>
                    </div>
                    <Col span="6">
                        <div style={props.style}>{props.message}</div>
                    </Col>
                </Row>
            </div>
    );
}
export {
    HotelItem,
    CardHeader
}