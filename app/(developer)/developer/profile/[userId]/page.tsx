import React from "react";

function page({ params }: { params: { userId: string } }) {
  return <div>profile dashboard {params.userId}</div>;
}

export default page;
