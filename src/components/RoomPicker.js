import React from 'react';
import { Card, Divider } from 'antd'
import 'antd/dist/antd.css';

import { MAX_IN_ROOM, MAX_PEOPLE, MAX_ROOMS, MIN_ADULTS, MIN_CHILD, MIN_ROOMS } from './constants'
import { AddRemItem } from './AddRemItem'
import { CardHeader } from './Headers'

class RoomPicker extends React.Component {

    state = {
        adults: MIN_ADULTS,
        rooms: MIN_ROOMS,
        child: MIN_CHILD
    }

    roomDecCheck = () => {
        let totalPeople = this.state.adults + this.state.child;
        let adults = this.state.adults;
        let child = this.state.child;
        let canStay = this.state.rooms * MAX_IN_ROOM;
        if (totalPeople > canStay){
            // * reduce the number of childern and adults until it matches canStay
            // * subtract the number of children and adults 
            while(totalPeople>canStay){
                if(child > 0){
                    child--;
                    totalPeople--;
                } else if (totalPeople > canStay) {
                    adults--;
                    totalPeople--;
                }
            }
            this.setState({adults, child})
        }
    }

    roomIncCheck = () => {
        let adults = this.state.adults;
        let child = this.state.child;
        let rooms = this.state.rooms;
        let totalPeople = adults + child;
        // console.log('adults before increment :', adults)
        while(totalPeople<rooms){
            adults++;
            totalPeople = adults + child;
        }
        // console.log('adults after increment :', adults)
        this.setState({adults})
    }

    peopleIncCheck =  () => {
        let adults = this.state.adults;
        let child = this.state.child;
        let rooms = this.state.rooms;
        let totalPeople = adults + child;
        let canStay = rooms * MAX_IN_ROOM;
        if(totalPeople > canStay){
            while(totalPeople > canStay){
                if(rooms < MAX_ROOMS){
                    rooms++;
                    canStay = rooms * MAX_IN_ROOM;
                } else {
                    break;
                }
            }
            this.setState({rooms})
        }
    }

    peopleDecCheck = () => {
        let adults = this.state.adults;
        let child = this.state.child;
        let rooms = this.state.rooms;
        let totalPeople = adults + child;
        if((totalPeople < rooms ) && (totalPeople < (( rooms - 1 ) * MAX_IN_ROOM)) ){
            rooms -= 1;
            this.setState({rooms})
        }
    }
    
    incRoom = () => {
        this.setState((prevState)=>({rooms: prevState.rooms + 1}), this.roomIncCheck)
        // this.setState({rooms: this.state.rooms + 1}, this.roomIncCheck)
    }

    decRoom = () => {
        this.setState((prevState)=>({rooms: prevState.rooms - 1}), this.roomDecCheck)
        // this.setState({rooms: this.state.rooms - 1}, this.roomDecCheck)
    }

    incAdult = () => {
        this.setState((prevState)=>({adults: prevState.adults + 1}), this.peopleIncCheck)
        // this.setState({adults: this.state.adults + 1}, this.peopleIncCheck)
    }

    decAdult = () => {
        this.setState((prevState)=>({adults: prevState.adults - 1}), this.peopleDecCheck)
        // this.setState({adults: this.state.adults - 1}, this.peopleDecCheck)
    }

    incChild= () => {
        this.setState((prevState)=>({child: prevState.child + 1}), this.peopleIncCheck)
        // this.setState({child: this.state.child + 1}, this.peopleIncCheck)
    }

    decChild= () => {
        this.setState((prevState)=>({child: prevState.child - 1}), this.peopleDecCheck)
        // this.setState({child: this.state.child - 1}, this.peopleDecCheck)
    }

    render () {
        let totalPeople = this.state.adults + this.state.child;
        return (
            <div className="ui container" style={{margin: "10px"}}>
                <Card 
                    title={
                            <CardHeader
                                icon="users icon"
                                message="Choose number of People"
                                style={{color: "#000080"}}
                            />
                    }
                >
                    <div>
                        { /* Rooms */ }
                        <AddRemItem
                            itemName='Rooms'
                            iconName="bed icon"
                            count={this.state.rooms}
                            inc={this.incRoom}
                            dec={this.decRoom}
                            disableDec={this.state.rooms === 1}
                            disableInc={this.state.rooms === 5}
                        />
                        <Divider />
                        { /* Adults */ }
                        <AddRemItem
                            itemName='Adult'
                            iconName="user icon"
                            count={this.state.adults}
                            disableDec={this.state.adults === MIN_ADULTS}
                            disableInc={totalPeople === MAX_PEOPLE}
                            inc={this.incAdult}
                            dec={this.decAdult}
                        />                        
                        <Divider />
                        { /* Children */ }
                        <AddRemItem
                            itemName='Children'
                            iconName="child icon"
                            count={this.state.child}
                            disableDec={this.state.child === MIN_CHILD}
                            disableInc={totalPeople === MAX_PEOPLE}
                            inc={this.incChild}
                            dec={this.decChild}
                        />
                    </div>
                </Card>
            </div>
        );
    }
}

export default RoomPicker