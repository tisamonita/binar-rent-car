import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getAllPlanets} from '../features/user/star-wars-slice';
import DataTable from 'react-data-table-component';
import {Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
  import { Bar } from 'react-chartjs-2';
  import { faker } from '@faker-js/faker';
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );
  
  export const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Chart.js Bar Chart',
      },
    },
  };



export default function Dashboard(){
    const [loading, setLoading] = useState(false);
    const [page, setPage] = useState(1);
    const [pageFilm, setPageFilm] = useState(1);
    const dispatch = useDispatch();

    //use memo untuk data yang langsung di get sekali banyak, ex : data api "country"
    React.useMemo(()=> {
        setLoading(true);
        dispatch(getAllPlanets({page}))
        .then(()=>{
            setLoading(false);
        });
    }, [page]);

    const handlePageChange = page => {
		setPage(page);
	};

    // count total (60) / 10 = 6 kali /[paginationnya ada 6]
    // use Selector dipakai untuk mengambil state global -> karena sifatnya state
    //data berubah, maka akan nge get ulang.
    const {planets} = useSelector((state) => state.starWars);

    const columns = [
        {
            name: 'Nama',
            selector: row => row.name,
            sortable: true,
        },
        {
            name: 'Rotation Period',
            selector: row => row.rotation_period,
            sortable: true,
        },
        {
            name: 'Diameter',
            selector: row => row.diameter,
            sortable: true,
        },
        {
            name: 'Gravity',
            selector: row => row.gravity,
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
                    key = {item}
                    >
                        klik url
                    </Button>
                )
               })}
               </>
              ),
        },
    ] 


  const labels = [];
  
  planets && planets.results.map((item)=>{
    labels.push(item.name);
  }); 

  const data = planets && {
    labels,
    datasets: [
      {
        label: 'Total Films',
        data: planets.results.map((item) => {
            return item.films.length
        }),
        backgroundColor: 'rgba(255, 99, 132, 0.5)',
      },
      {
        label: 'Total residents ',
        data: planets.results.map((item) => {
            return item.residents.length
        }),
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

    return(
        <>
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

        {
            planets && 
            <Bar options={options} data={data} />
        }
        </>
    )
}