import React, { Component } from 'react'
import loader from "./img/loadicon1.gif"



const contract_address = 'TXVDyH2yrpbxNqcNFkj2rrUE1dWPjVErxC';

let contracturl = "https://tronscan.org/#/contract/" + contract_address;
//https://tronscan.org/#/contract/
export class SmartInfo extends Component {

    constructor(props) {
        super(props)

        this.state = {
            count: 0,

        }

    }

    render() {
        //   #131050, black 
        // #130401, #514155
        const colStyle = {
            backgroundImage: "linear-gradient(to right, #131050, black  )", opacity: "70%", marginTop: "20px", borderRadius: "20px", marginLeft: "20px", marginRight: "20px",
            boxShadow: "0 0 20px #eee",
        };

        return (

            <div style={{ paddingTop: "60px" }}>
                <div className="row">
                    <div className="col-xl-3"></div>
                    <div className="col-xl-6" style={colStyle}>

                        <div className="col-xl-6" style={{ marginTop: "-18px", backgroundImage: "linear-gradient(to right, #131050, black )", borderRadius: "5px", color: "#1AE865", textAlign: "center", fontWeight: "bold", fontSize: "21px" }}>
                            Smart Contract</div>

                        <br />

                        <div className="col-xl-12" style={{ textAlign: "center" }}>

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract Address</p>

                            <a href={contracturl} style={{ textDecoration: "underline", color: "#18E55F", fontSize: "23px", textAlign: "center", paddingTop: "110px" }} target="_blank" rel="noopener noreferrer">{this.props.subContract}...</a>
                            <br /><br />


                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Deposits</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {this.props.totalInvested} TRX</a>
                            <br /><br />


                            {/* <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Paid</p> 
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {this.props.totalPaid} TRX</a>
                            <br /><br /> */}


                            {/* <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Contract Balance</p> 
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {this.props.contractBalance} TRX</a>
                            <br /><br /> */}



                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Top Sponsor Pool Balance</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {this.props.pool_balance} TRX</a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Present Top Sponsor Share</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {Number(this.props.pool_balance * 0.1 * 0.4).toFixed(3)} TRX</a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Lucky Pool Balance</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {this.props.whale_balance} TRX</a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Top Lucky User Share</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}> {Number(this.props.whale_balance * 0.1 * 0.5).toFixed(3)} TRX</a>
                            <br /><br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Top Sponsor Pool Draw In</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "23px", textAlign: "center" }}> {this.props.draw_hrs}h : {this.props.draw_mins}m : {this.props.draw_secs}s</a>
                            <br /> <br />

                            <p style={{ color: "white", fontSize: "17px", textAlign: "center" }}>Total Users</p>
                            <a href="#1" style={{ color: "#18E55F", fontSize: "27px", textAlign: "center" }}># {this.props.totalUsers}</a>
                            <br /><br />

                        </div>
                    </div>
                    <div className="col-xl-3"></div>
                </div>

            </div >
        )
    }
}

export default SmartInfo
