import React from 'react';
import { Button, Row, Col } from 'antd'
import 'antd/dist/antd.css';

import './AddRemItem.css';

function AddRemItem (props) {
    return ( 
            <div>
                <Row type="flex" justify="start" align="middle">
                    <div>
                        <i className={props.iconName} style={props.iconStyle}/>
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


export {
    AddRemItem
}