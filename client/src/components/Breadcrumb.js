import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';

function Breadcrumbs () {
return (
    <>
<Breadcrumb style={{textDecoration:"none", display: 'block',background:"#f5f7fc",margin:"50px 10 0 0",
width:"100%", padding: 8 }}>
<Breadcrumb.Item  >
Home
</Breadcrumb.Item>
<Breadcrumb.Item  >
Dashboard
</Breadcrumb.Item>

</Breadcrumb>
</>
  )
}
export default Breadcrumbs;

