import React, { useEffect } from "react";
import { MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { useState } from "react";

function Member() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch("https://10.35.29.186/api/uploadfiles?populate=fileupload")
      .then((res) => res.json())
      .then(
        (result) => {
          setIsLoaded(true);
          setItems(result.data);
        }
        // (error) => {
        //   setIsLoaded(true);
        //   setError(error);
        // }
      );
  });
}

export default function Team() {
  return (
    <>
      <Member></Member>
    </>
  );
}
