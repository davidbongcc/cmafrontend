import * as React from 'react';
import { Pagination } from 'react-bootstrap';
const Paging: React.FC = (props) => {
        const active = 2;
        const items = [];
        for (let num = 1; num <= 5; num++) {
        items.push(
          <Pagination.Item key={num} active={num === active}>
            {num}
          </Pagination.Item>,
        );
      }
        return (<div>
        <Pagination>{items}</Pagination>
      </div>);

};

export default Paging;
