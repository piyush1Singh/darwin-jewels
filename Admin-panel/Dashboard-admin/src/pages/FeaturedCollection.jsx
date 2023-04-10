import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const FeaturedCollection = () => {
  const [collection, setCollection] = useState([]);
  const [collectionId, setCollectionId] = useState();
  const [collectionHeader, setCollectionHeader] = useState();
  const [collectionImg, setCollectionImg] = useState();
  const [collectionStatus, setCollectionStatus] = useState();

  const [fileName, setFileName] = useState();
  const [fileImageData, setFileImageData] = useState();

  //Modal start
  const [show, setShow] = useState(false);
  //Bootstrap Modal Show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [Editshow, EditsetShow] = useState(false);
  //Bootstrap Modal Show
  const handleEditClose = () => EditsetShow(false);
  const handleEditShow = () => EditsetShow(true);
  //Modal end

  const fetchData = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Featured-collection/fetchallCollection.php"
    );
    let data = await url.json();
    setCollection(data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleHeader = (e) => {
    setCollectionHeader(e.target.value);
  };
  const handleImg = (e) => {
    // setCollectionImg(e.target.value);
    const file = e.target.files[0];
    const reader = new FileReader();
    console.log(file);
    reader.onload = () => {
      const imageData = reader.result;
      setFileImageData(imageData);
      setFileName(file["name"]);
    };
    reader.readAsDataURL(file);
  };

  const addNewCollection = (e) => {
    e.preventDefault();
    handleShow();
    setCollectionHeader("");
    setCollectionImg("");
  };

  const saveNewCollection = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Featured-collection/addNewCollection.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          collectionHeader: collectionHeader,
          imageData: fileImageData,
          file: fileName,
          collectionStatus: "1",
        }),
      }
    );
    let data = await url.json();
    fetchData();
    handleClose();
    if (data["status"] == "success") {
      toast.success("Added New Collection", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const deleteCollection = async (e, value) => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Featured-collection/deleteCollection.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: value,
        }),
      }
    );
    let data = await url.json();
    fetchData();
    if (data["status"] == "success") {
      toast.success("Deleted Collection", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const editCollection = async (e, value) => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Featured-collection/fetchCollectionbyId.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: value,
        }),
      }
    );
    let data = await url.json();
    setCollectionId(data[0][0]);
    setCollectionHeader(data[0][1]);
    setCollectionImg(data[0][2]);
    setCollectionStatus(data[0][3]);
    handleEditShow();
    e.preventDefault();
  };

  const saveEditCollection = async () => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Featured-collection/updateCollection.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: collectionId,
          collectionHeader: collectionHeader,
          collectionImg: collectionImg,
          collectionStatus: collectionStatus,
        }),
      }
    );
    let data = await url.json();
    handleEditClose();
    fetchData();
    if (data["status"] == "success") {
      toast.success("Edited Collection", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    } else {
      toast.error("Try Again", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
      });
    }
  };

  const updateCollectionStatus = async (status, value) => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Featured-collection/updateCollectionStatusbyId.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: value,
          status: status,
        }),
      }
    );
    let data = await url.json();
    fetchData();
    toast.success("Status Changed!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  return (
    <Sidebar>
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-lg-9">
            <h3 className="text-left ">List Of Collection</h3>
          </div>
          <div className="col-lg-3">
            <button onClick={addNewCollection}>Add Collection</button>
          </div>
        </div>
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="">Id</th>
              <th scope="">Header</th>
              <th scope="">Image</th>
              <th scope="">Status</th>
              <th scope="">Action</th>
            </tr>
          </thead>
          <tbody>
            {collection?.map((value, key) => (
              <tr>
                <td>{value[0]}</td>
                <td>{value[1]}</td>
                <td>
                  <img
                    className="collection-img"
                    src={"/src/assets/collectionImages/" + value[2]}
                    alt=""
                  />
                </td>
                <td key={value[3]}>
                  {value[3] == 1 ? (
                    <button
                      className="btn btn-success"
                      onClick={() => updateCollectionStatus(0, value[0])}
                    >
                      Active
                    </button>
                  ) : (
                    <button
                      className="btn btn-danger"
                      onClick={() => updateCollectionStatus(1, value[0])}
                    >
                      InActive
                    </button>
                  )}
                </td>
                <td className="">
                  <button className="m-2">
                    <AiFillEdit onClick={(e) => editCollection(e, value[0])} />
                  </button>
                  <button className="m-2">
                    <BsTrash onClick={(e) => deleteCollection(e, value[0])} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-control mb-3 py-2">
            <input type="hidden" name="id" />
            <label className="ps-2">Header</label>
            <input type="" name="id" onChange={handleHeader} />
          </div>
          <div className="form-control mb-3 py-2">
            <label className="ps-2">Image</label>
            <input type="file" name="id" onChange={handleImg} />
          </div>
          <div className="form-check form-switch">
            <input
              className="form-check-input"
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              checked
              value={1}
            />
            <label
              className="form-check-label"
              htmlFor="flexSwitchCheckDefault"
            >
              Status
            </label>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveNewCollection}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <Modal show={Editshow} onHide={handleEditClose}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Collection</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="form-control mb-3 py-2">
            <input type="hidden" name="id" />
            <label className="ps-2">Header</label>
            <input
              type=""
              name="id"
              value={collectionHeader}
              onChange={handleHeader}
            />
          </div>
          <div className="form-control mb-3 py-2">
            <label className="ps-2">Image</label>
            <input
              type=""
              name="id"
              value={collectionImg}
              onChange={handleImg}
            />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleEditClose}>
            Close
          </Button>
          <Button variant="primary" onClick={saveEditCollection}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </Sidebar>
  );
};

export default FeaturedCollection;
