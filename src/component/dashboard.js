import React, {useState} from "react";
import { useDispatch, useSelector } from 'react-redux';
import {getAllPlanets, getFilmById, clearFilmById} from '../features/user/star-wars-slice';
import DataTable from 'react-data-table-component';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';

import { LineWave } from  'react-loader-spinner'
// import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

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
import { Navigate } from "react-router-dom";

  
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
    const dispatch = useDispatch();

    const [modal, setModal] = useState(false);

    const toggle = () => {
      dispatch(clearFilmById());
      setModal(!modal);
    };

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

  const userLogin = useSelector((state) => state.auth.isLogin);
  React.useEffect(()=>{
    if(!userLogin) {
      Navigate('/')
    }
  }, [])
    // count total (60) / 10 = 6 kali /[paginationnya ada 6]
    // use Selector dipakai untuk mengambil state global -> karena sifatnya state
    //data berubah, maka akan nge get ulang.
    const {planets, filmById} = useSelector((state) => state.starWars);

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
               {row.films && row.films.slice(0,2).map((item)=>{
                return(
                    <Button
                    onClick={(e) => {
                      // const id = logika parsing
                      // kirimkan id nya ke dipathc(getFilmById(id))
                        //dispatch action to view detail by id
                        //https://swapi.dev/api/films/1/
                      const id = item.split("/")[5];
                      dispatch(getFilmById({id}));
                      setModal(true);
                      e.preventDefault();
                    }}
                    tag="a"
                    key = {item}
                    >
                      Klik saya
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
      <Modal isOpen={modal} toggle={toggle} backdrop="static" keyboard={false}  >
        <ModalHeader toggle={toggle}>{filmById ? filmById.title : 
         'Loading'
        }</ModalHeader>
        <ModalBody>
          {filmById ? filmById.release_date : null}
        </ModalBody>
        <ModalFooter>
          <Button color="primary" onClick={toggle}>
            Do Something
          </Button>{' '}
          <Button color="secondary" onClick={toggle}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal>
        {/* <Modal dibuat, tapi kondisi awal modalOpen=false */}

        {/* proses menambahkan clear Data filmById masuk ke reducer biasa */}
        </>
    )
}