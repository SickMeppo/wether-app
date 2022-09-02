import { useState } from 'react';
import { CustomButton } from './components/Button';
import { DefaultLayout } from './layouts/DefaultLayout';
import { CityList } from './services/Api/constants';
import { getWether } from './services/Api/getWeather';
import { GlobalStyle } from './styled';
import { City } from './model/City/interfaces';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Flex } from './components/Flex';




function App() {

  const [state, setState] = useState<City[] | null>(null);


  const handleClick =  async () => {

    const wetherMoscow = await getWether({ cityId: CityList.Moscow })
    const wetherPiterburg = await getWether({cityId: CityList.Piter })

    setState([wetherMoscow, wetherPiterburg])
  }

  return (

    <div className="App">
      <GlobalStyle/>
      <DefaultLayout children={
        <>
          <CustomButton value={(state != null && 'Обновить данные') || 'Получить данные о погоде'} onClick={ handleClick }/>

          {state != null && 
            /* INFO:
              1) Таблица была взята из библиотеке MaterialUi, для ускорения работы 
                  (Изначально хотел написать с нули но не хватит времени)
              2) Не добавлял Loader и загрузчики так как отказался от концепции сторов в таком маленьком приложение. 
              3) Не которые ui-components все же создал а так же чучуть потрогал @emotion
              4) Написал функцию debounce что избежать лишних запросов к серверу, 
                но в данном случае не приминял, так как посчитал что это не требуется
            */
            <Flex >
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                  <TableHead>
                    <TableRow>
                      <TableCell>Города:</TableCell>
                      <TableCell align="right">Градусы в Цельсиях</TableCell>
                      <TableCell align="right">Градусы в Фарингейтах</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {state.map((item) => (
                      <TableRow
                        key={item.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                      >
                        <TableCell component="th" scope="row">
                          {item.name}
                        </TableCell>
                        <TableCell component="th" scope="row" align='right'>
                        {Math.floor(item.main.temp)}  °C
                        </TableCell>
                        <TableCell component="th" scope="row" align='right'>
                          {Math.floor((item.main.temp * 9/5) + 32)}  ℉
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </Flex>
          }
        </>
    }/>
      
    </div>
  );
}

export default App;
 