import React from "react";
import { NavLink } from "react-router-dom";
import Header from "../../components/header/header";
import LayOut from "../LayOut/LayOut";
import DailyReport from "./DailyReport/DailyReport";
function dashboard(){
    return(
        <LayOut>
            <div className='flex flex-wrap items-center' id="cap">  
                <NavLink to='/dashboard/report'><DailyReport day="mon" date={1} month="jan" year={2024} /></NavLink>
                 <NavLink to='/dashboard/report'><DailyReport day="tue" date={2} month="jan" year={2024} /></NavLink>
            </div>
        </LayOut>

    );
}

export default dashboard;