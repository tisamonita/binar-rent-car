import React from "react";
import moment from 'moment';
import 'moment/locale/id'

const TimeStatic = () => {
    moment.locale('id');

    let createdDate = moment(new Date()).utc().format();
    let expirationDate = moment(createdDate).add(1, 'd').format('LLL');

    return(
        <>
        Tanggal saat ini dan static : {createdDate}
        with moment add  : {expirationDate.toString()}
        </>
    )
}

export default TimeStatic;