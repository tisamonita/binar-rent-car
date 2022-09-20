import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getAllPlanets} from '../features/user/star-wars-slice';
import DataTable from 'react-data-table-component';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Dashboard(){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const dispatch = useDispatch();

    React.useEffect(()=> {
        setLoading(true);
        dispatch(getAllPlanets({page}))
        .then(()=>{
            setLoading(false);
        });

    }, [page]);

    const handlePageChange = page => {
        console.log(page, 'next to page ? ');
		setPage(page);
	};

    // count total (60) / 10 = 6 kali /[paginationnya ada 6]

    const {planets} = useSelector((state) => state.starWars);

    const columns = [
        {
            name: 'Nama',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Rotation Period',
            selector: 'rotation_period',
            sortable: true,
        },
        {
            name: 'Diameter',
            selector: 'diameter',
            sortable: true,
        },
        {
            name: 'Gravity',
            selector: 'gravity',
            sortable: true,
        },
        {
            name: 'Action',
            sortable: true,
            cell: (row) => (
               <>
               {row.films && row.films.map((item)=>{
                return(
                    <Button
                    onClick={(e) => {
                        //dispatch action to view detail by id
                      e.preventDefault();
                    }}
                    tag="a"
                    >
                        klik url
                    </Button>
                )
               })}
               </>
              ),
        },
    ] 
    return(
        <>
           {console.log(planets, 'data planets')}
        HALO
        { planets && 
        <DataTable 
            title="List Planet" 
            columns={columns} 
            data={planets.results} 
            progressPending={loading}
            pagination
            paginationServer
			paginationTotalRows={planets.count}
            onChangePage={handlePageChange}
        /> }
        </>
    )
}