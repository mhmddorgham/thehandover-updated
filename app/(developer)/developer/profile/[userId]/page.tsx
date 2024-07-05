import React from "react";

function page({ params }: { params: { userId: string } }) {
  return <div>developer profile {params.userId}</div>;
}

export default page;
