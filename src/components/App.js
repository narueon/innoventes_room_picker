import React from 'react';
import HotelItem from './HotelItem'

class App extends React.Component {

    state = {
        adults: 1,
        rooms: 1,
        child: 0
    }

    roomDecCheck = () => {
        let totalPeople = this.state.adults + this.state.child;
        let adults = this.state.adults;
        let child = this.state.child;
        let canStay = this.state.rooms * 4;
        if (totalPeople <= canStay){
            console.log('okeh no problem people can stay..!!')
        } else {
            console.log('need to trim babies... Hahahahahahaaaa..!!!!')
            console.log("to reduce :", (totalPeople - canStay))
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
            console.log('adults : ', adults, 'Children: ', child)
            // * reduce the number of childern and adults until it matches canStay
            // * subtract the number of children and adults 
            // canStay
        }
    }

    roomIncCheck = () => {
        let adults = this.state.adults;
        let child = this.state.child;
        let rooms = this.state.rooms;
        let totalPeople = adults + child;
        console.log('adults before increment :', adults)
        while(totalPeople<rooms){
            adults++;
            totalPeople = adults + child;
        }
        console.log('adults after increment :', adults)
        this.setState({adults})
    }

    adultsIncCheck =  () => {
        let adults = this.state.adults;
        let child = this.state.child;
        let rooms = this.state.rooms;
        let totalPeople = adults + child;
        let canStay = rooms * 4;
        if(totalPeople > canStay){
            while(totalPeople > canStay){
                if(rooms < 5){
                    rooms++;
                    canStay = rooms * 4;
                } else {
                    break;
                }
            }
            this.setState({rooms})
        }
    }

    adultDecCheck = () => {
        let adults = this.state.adults;
        let child = this.state.child;
        let rooms = this.state.rooms;
        let totalPeople = adults + child;
        if((totalPeople < rooms * 4) && (totalPeople <= (( rooms - 1 ) * 4)) ){
            rooms -= 1;
            this.setState({rooms})
        }
    }
    
    incRoom = () => {
        if(this.state.rooms < 5){
            this.setState({rooms: this.state.rooms + 1}, this.roomIncCheck)
        }
    }

    decRoom = () => {
        if(this.state.rooms > 1) {
            this.setState({rooms: this.state.rooms - 1}, this.roomDecCheck)
        }
    }

    incAdult = () => {
        if((this.state.adults + this.state.child) < 20){
            this.setState({adults: this.state.adults + 1}, this.adultsIncCheck) // ! if we increase rooms using this. 5 rooms constraint is broken. it increases to more than 5
        } else {
            console.log('disable adults increment')
        }
    }

    decAdult = () => {
        if(this.state.adults > 1) {
            this.setState({adults: this.state.adults - 1}, this.adultDecCheck)
        }
    }

    incChild= () => {
        if((this.state.adults + this.state.child) < 20){
            this.setState({child: this.state.child + 1}, this.adultsIncCheck) // ! if we increase rooms using this. 5 rooms constraint is broken. it increases to more than 5
        }
    }

    decChild= () => {
        if(this.state.child !== 0){
            this.setState({child: this.state.child - 1}, this.adultDecCheck)
        }
    }

    render () {
        return (
            <div className="ui container">
                <div className="ui items">
                    <div className="ui item">
                        <i className="users icon"></i>
                        <div>Choose number of People</div>
                    </div>
                    <div className="ui segment">
                    <div>
                        { /* Rooms */ }
                        <div>
                            <HotelItem
                                itemName='Rooms'
                                iconName="bed icon"
                                count={this.state.rooms}
                                inc={this.incRoom}
                                dec={this.decRoom}
                            />
                        </div>
                        <div class="ui divider"></div>
                        { /* Adults */ }
                        <div>
                            <HotelItem
                                itemName='Adult'
                                iconName="user icon"
                                count={this.state.adults}
                                inc={this.incAdult}
                                dec={this.decAdult}
                            />                        
                        </div>
                        <div class="ui divider"></div>
                        { /* Children */ }
                        <div>
                            <HotelItem
                                itemName='Children'
                                iconName="child icon"
                                count={this.state.child}
                                inc={this.incChild}
                                dec={this.decChild}
                            />
                        </div>
                    </div>
                </div>
                </div>
            </div>
        );
    }
}

export default App