import React from "react";
import OwnerDashList from './OwnerDashList';
import OwnerDashTable from './OwnerDashTable';

function OwnerDash() {

    return (
        <div>
            <div>
                <OwnerDashList />
            </div>
            <div>
                <OwnerDashTable />
            </div>
        </div>
    )
}

export default OwnerDash;