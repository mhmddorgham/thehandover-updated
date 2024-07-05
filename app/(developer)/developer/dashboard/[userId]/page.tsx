import React from "react";

function page({ params }: { params: { userId: string } }) {
  return <div>developer dashboard {params.userId}</div>;
}

export default page;
