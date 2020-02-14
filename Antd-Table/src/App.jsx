import React, {useState, useEffect} from 'react';
import classNames from 'classnames';

import Table from "./components/Table/Table";

import style from './App.scss';


const App = (props) => {

    const [columns, setColumns] = useState(
        [
            {
                title: "Имя",
                key: 'name',
                render: ({name}) => name,
                width: 700,
                minWidth: 150,
                maxWidth: 800,
            },
            {
                title: "Фамилия",
                key: 'surname',
                render: ({surname}) => (surname),
                width: 150,
                minWidth: 150,
                maxWidth: 600
            },
            {
                title: "Возраст",
                key: "age",
                render: ({age}) => age,
                width: 150,
                minWidth: 150,
                maxWidth: 600,
            }
        ]
    );

    const [data, setData] = useState([]);


    useEffect(() => {
        const names = ['Nikita', 'Alena', 'Sasha', 'Enver', 'Oleg', 'Pasha']
        const surnames = ['Shmyga', 'Tolstik', 'Nedveckaya', 'Devyaten'];
        const ages = [18, 20, 25, 30, 35, 36];
        const newData = [];
        for(let i = 0;i<100;i++) {
            newData.push(
                {
                    name: names[Math.floor(Math.random()*names.length)],
                    surname: surnames[Math.floor(Math.random()*surnames.length)],
                    age: ages[Math.floor(Math.random()*ages.length)],
                    key: Math.floor(Math.random()*100000)
                }
            );
        }
        setData(newData);
    }, []);

    return (
                <Table
                    columns={columns}
                    data={data}
                    fixedHeader
                />
    );
};

export default App;