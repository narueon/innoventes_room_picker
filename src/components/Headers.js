import React from 'react';
import { Row, Col } from 'antd';
import 'antd/dist/antd.css';

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
    CardHeader
}