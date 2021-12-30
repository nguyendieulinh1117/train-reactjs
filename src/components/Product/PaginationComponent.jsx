import { Pagination } from "antd";
import React from "react";

function PaginationComponent({ currentPage, total, pageSize }) {
  return (
    <div className="product__section--pagination">
      <Pagination
        defaultCurrent={1}
        current={currentPage}
        total={total}
        defaultPageSize={pageSize}
      />
    </div>
  );
}

export default PaginationComponent;
