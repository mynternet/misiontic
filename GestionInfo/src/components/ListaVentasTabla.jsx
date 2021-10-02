import React from 'react'
import { Table } from 'reactstrap';
import { Button} from "reactstrap";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

const ListaVentasTabla = () => {
    return (
        <div>
        <section > 
        <ui className="OpcionesProductos">
          <li><div style={{margin: "30px" }}>
          <Link to='/agregarventas'> <Button color="primary">Adicionar producto</Button>
          </Link>
          </div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Eliminar producto</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Buscar producto</Button></div></li>
          <li><div style={{margin: "30px" }}> <Button color="primary">Actualizar producto</Button></div></li>
        </ui>
        </section>
        <Table striped>
        <thead>
          <tr>
            <th>Código venta</th>
            <th>Identificación producto</th>
            <th>Valor venta</th>
            <th>Cantidad</th>
            <th>Fecha venta</th>
            <th>Documento cliente</th>
            <th>Nombre cliente</th>
            <th>ID Vendedor</th>
            <th>Estado</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">0001</th>
            <td>Pantalla LG 15"</td>
            <td>3000000</td>
            <td>10</td>
            <td>10/02/2021</td>
            <td>1100200</td>
            <td>Freddy Mercury</td>
            <td>0123</td>
            <td>Entregado</td>
          </tr>
          <tr>
          <th scope="row">0001</th>
            <td>Pantalla Acer 15"</td>
            <td>2000000</td>
            <td>10</td>
            <td>10/04/2021</td>
            <td>1200200</td>
            <td>Marvin Gaye</td>
            <td>0124</td>
            <td>Entregado</td>
          </tr>
          <tr>
          <th scope="row">0001</th>
            <td>Pantalla Samsung 15"</td>
            <td>3500000</td>
            <td>10</td>
            <td>10/01/2021</td>
            <td>1300200</td>
            <td>Robert Plant</td>
            <td>0125</td>
            <td>Alistamiento</td>
          </tr>
        </tbody>
      </Table>
      <section style={{ display: "flex", width: "100%", justifyContent: "flex-end" }} >
      <Pagination aria-label="Page navigation example">
    <PaginationItem>
        <PaginationLink first href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink previous href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          4
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink href="#">
          5
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink last href="#" />
      </PaginationItem>
    </Pagination>
      </section>
    </div>
    )
}

export default ListaVentasTabla
