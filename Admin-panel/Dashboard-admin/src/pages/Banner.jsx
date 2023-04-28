import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import { AiFillEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { toast } from "react-toastify";

const Banner = () => {
  const [show, setShow] = useState(false);
  //Bootstrap Modal Show
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [Editshow, EditsetShow] = useState(false);
  //Bootstrap Modal Show
  const handleEditBannerClose = () => EditsetShow(false);
  const handleEditBannerShow = () => EditsetShow(true);

  const [banner, setBanner] = useState([]);

  const [bannerId, setBannerId] = useState();
  const [bannerHeader, setBannerHeader] = useState();
  const [bannerTitle, setBannerTitle] = useState();
  const [bannerImg, setBannerImg] = useState();

  const [fileImageData, setFileImageData] = useState("");
  const [filename, setFilename] = useState("");

  const fetchBanner = async () => {
    let url =
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/fetchallBanner.php";
    let data = await fetch(url);
    let response = await data.json();
    if (response["status"] == false) {
      setBanner([]);
    } else {
      setBanner(response);
    }
  };
  useEffect(() => {
    fetchBanner();
  }, []);

  const deleteBanner = async (e, value) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/deleteBanner.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: value,
        }),
      }
    );
    let data = await url.json();
    fetchBanner();
    toast.success("Banner Deleted", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
    });
  };

  const addBanner = async (e) => {
    e.preventDefault();
    handleShow();
    setBannerHeader("");
    setBannerTitle("");
    setBannerImg("");
  };

  const handleHeader = (e) => {
    setBannerHeader(e.target.value);
  };
  const handleTitle = (e) => {
    setBannerTitle(e.target.value);
  };

  const handleImg = (e) => {
    // setBannerImg(e.target.value);
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onload = () => {
      const imageData = reader.result;
      setFileImageData(imageData);
      setFilename(file["name"]);
    };
    reader.readAsDataURL(file);
  };

  const addSaveBanner = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/addNewBanner.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          bannerHeader: bannerHeader,
          bannerTitle: bannerTitle,
          imageData: fileImageData,
          file: filename,
          // bannerImg: bannerImg,
          bannerStatus: "1",
        }),
      }
    );
    let data = await url.json();
    handleClose();
    fetchBanner();
    if (data["status"] == "success") {
      toast.success("Added New Banner", {
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
  const editBanner = async (e, value) => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/fetchBannerbyId.php",
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
    setBannerId(data[0][0]);
    setBannerHeader(data[0][1]);
    setBannerTitle(data[0][2]);
    setBannerImg(data[0][3]);
    handleEditBannerShow();
    e.preventDefault();
  };

  const editSaveChanges = async (e) => {
    e.preventDefault();
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/updateBanner.php",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: bannerId,
          bannerHeader: bannerHeader,
          bannerTitle: bannerTitle,
          bannerImg: bannerImg,
          bannerStatus: "1",
        }),
      }
    );
    let data = await url.json();
    handleEditBannerClose();
    fetchBanner();
    if (data["status"] == "success") {
      toast.success("Edited Banner Successfully!", {
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

  const updateBannerStatus = async (status, value) => {
    let url = await fetch(
      "http://localhost/darwin-jewels/Admin-panel/Api-Calls/Banner/updateBannerStatusById.php",
      {
        method: "POST",
        body: JSON.stringify({
          id: value,
          status: status,
        }),
      }
    );
    let data = await url.json();
    fetchBanner();
    if (data["status"] == "success") {
      toast.success("Status Cahnged!", {
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

  return (
    <Sidebar>
      <div className="container">
        <div className="row mt-5 justify-content-between">
          <div className="col-lg-9">
            <h3 className="text-left ">List Of Banner</h3>
          </div>
          <div className="col-lg-3">
            <button onClick={addBanner}>Add Banner</button>
          </div>
        </div>
        <table className="table table-hover mt-5">
          <thead>
            <tr>
              <th scope="">Id</th>
              <th scope="">Header</th>
              <th scope="">Title</th>
              <th scope="">Image</th>
              <th scope="">Status</th>
              <th scope="">Action</th>
            </tr>
          </thead>
          <tbody>
            {banner.length > 0 ? (
              banner?.map((value, key) => (
                <tr>
                  <td>{value[0]}</td>
                  <td>{value[1]}</td>
                  <td>{value[2]}</td>
                  <td>
                    <img
                      className="banner-img"
                      src={"/src/assets/bannerImages/" + value[3]}
                      alt=""
                    />
                  </td>
                  <td key={value[4]}>
                    {value[4] == 1 ? (
                      <button
                        className="btn btn-success"
                        onClick={() => updateBannerStatus(0, value[0])}
                      >
                        Active
                      </button>
                    ) : (
                      <button
                        className="btn btn-danger"
                        onClick={() => updateBannerStatus(1, value[0])}
                      >
                        InActive
                      </button>
                    )}
                  </td>
                  <td className="">
                    <button className="m-2">
                      <AiFillEdit onClick={(e) => editBanner(e, value[0])} />
                    </button>
                    <button
                      className="m-2"
                      onClick={(e) => deleteBanner(e, value[0])}
                    >
                      <BsTrash />
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td className="text-center" colSpan={6}>
                  <h3 className="bold text-danger">No data Found</h3>
                </td>
              </tr>
            )}
          </tbody>
        </table>
        <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Add Banner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="">
              <div className="form-control mb-3 py-2">
                <input type="hidden" name="id" />
                <label className="ps-2">Header</label>
                <input type="" name="id" onChange={handleHeader} />
              </div>
              <div className="form-control mb-3 py-2">
                <label className="ps-2">Title</label>
                <input type="" name="id" onChange={handleTitle} />
              </div>
              <div className="form-control mb-3 py-2">
                <label className="ps-2">Image</label>
                <input type="file" name="img" onChange={handleImg} />
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
                  htmlhtmlhtmlFor="flexSwitchCheckDefault"
                >
                  Status
                </label>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
            <Button variant="primary" onClick={addSaveBanner}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
        <Modal show={Editshow} onHide={handleEditBannerClose}>
          <Modal.Header closeButton>
            <Modal.Title>Edit Banner</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="form-control mb-3 py-2">
              <input type="hidden" name="id" />
              <label className="ps-2">Header</label>
              <input
                type=""
                name="id"
                value={bannerHeader}
                onChange={handleHeader}
              />
            </div>
            <div className="form-control mb-3 py-2">
              <label className="ps-2">Title</label>
              <input
                type=""
                name="id"
                value={bannerTitle}
                onChange={handleTitle}
              />
            </div>
            <div className="form-control mb-3 py-2">
              <label className="ps-2">Image</label>
              <input type="" name="id" value={bannerImg} onChange={handleImg} />
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleEditBannerClose}>
              Close
            </Button>
            <Button variant="primary" onClick={editSaveChanges}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </Sidebar>
  );
};

export default Banner;
