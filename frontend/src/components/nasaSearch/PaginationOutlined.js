import React from "react";
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const PaginationOutlined = () => {
  return (
    <Stack>
      <Pagination count={10} variant="outlined" color="secondary" />
    </Stack>
  );
}

export default PaginationOutlined;