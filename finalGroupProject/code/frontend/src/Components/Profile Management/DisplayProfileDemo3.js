import React, { useState, useEffect } from "react";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import {
    MDBCol,
    MDBContainer,
    MDBRow,
    MDBCard,
    MDBCardText,
    MDBCardBody,
    MDBCardImage,
    MDBBtn,
    MDBTypography,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import axios from "axios";


//https://mdbootstrap.com/docs/react/extended/profiles/

export default function DisplayProfilePageDemo3(props) {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [photo, setPhoto] = useState(null)
    const [bio, setBio] = useState("");
    const loggedinEmail = localStorage.getItem("email")
   
    const navigate = useNavigate();
    // const [profileImageId, setProfileImageId] = useState("");
    // const [src, setSrc] = useState(null);

    // const photo = initialImage.replace("useruploads\\", "");
    // useEffect(() => {
    //     const fetchProfileImage = async () => {
    //         try {
    //             const response = await axios.get( `http://localhost:8080/api/images/${photo}`, {
    //             responseType: "blob",
    //          });
    //         setSrc(URL.createObjectURL(response.data));
    //         } catch (error) {
    //             console.error(error);
    //         }
    //     };
    //     fetchProfileImage();
    //     }, [profileImageId]);






    // const imagesData = [
    //     {
    //         src: "1.jpg",
    //     },
    //     {
    //         src: "2.jpg",
    //     },
    //     {
    //         src: "9.jpg",
    //     },
    //     {
    //         src: "4.jpg",
    //     },
    //     {
    //         src: "5.jpg",
    //     },
    //     {
    //         src: "6.jpg",
    //     },
    //     {
    //         src: "7.jpg",
    //     },
    //     {
    //         src: "8.jpg",
    //     },
    //     {
    //         src: "9.jpg",
    //     },
    // ];

    var list = JSON.parse(localStorage.getItem("list"));
    console.log(list);

    if (list === undefined || list === null || list.length == 0) {
        list = ["Nothing is added in the list"];
    }
    const listItems = list.map((listItem) => <li>{listItem}</li>);

    const [showModal, setShowModal] = useState(false);
    const [show, setShow] = useState(false);
    const [displayType, setDisplayType] = useState("created"); // initial display
    // const [profile, setProfile] = useState({});

    

    // useEffect(() => {
    //     async function fetchProfiles() {
    //       await axios.get(`http://localhost:8080/api/users/getUsers`).then((response) => {
    //         console.log(response);
    //         console.log(response.data.data);
    //         setProfile(response.data.data);
    //       });
    //     }
    //     fetchProfiles();
    //   }, []);


      useEffect(() => {
        axios
          .get(`http://localhost:8080/api/users/getUser/${loggedinEmail}`)
          .then((response) => {
            console.log(response.data.user)
            setFirstName(response.data.user.firstName);
            setLastName(response.data.user.lastName);
            setBio(response.data.user.bio);
            const photoPath = response.data.user.photo;
            console.log(photoPath);
            const image = photoPath.replace("uploads\\", "");

          axios
          .get(`http://localhost:8080/api/images/${image}`,
          {
            responseType: "blob",
          })
          .then((response) => {
            setPhoto(URL.createObjectURL(response.data));
          })
          .catch((error) => console.log(error));
          })
          .catch((error) => console.log(error));

      }, [loggedinEmail]);
    
    const [myRecipes, setMyRecipes] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false);

    // function deleterecipe() {
    //     alert("Recipe deleted Successfully");
    // }
    // function updaterecipe() {
    //     navigate("/updateRecipe");
    // }

    function onSavedHandler() {
        setShowModal(true);
        setShow(true);
        setDisplayType("saved");
    }

    function onCreatedHandler() {
        setDisplayType("created");
    }

    const getImageSource = async (image) => {
        try {
            const response = await axios.get(
                `http://localhost:8080/api/images/${image}`,
                {
                    responseType: "blob",
                }
            );
            return URL.createObjectURL(response.data);
        } catch (error) {
            return null
        }
    }

    useEffect(() => {
        function fetchRecipes() {
            console.log("EMAIL====>", localStorage.getItem("email"));
          axios.get(`http://localhost:8080/api/recipe/getUserRecipes?emailId=${localStorage.getItem("email")}`).then((response) => {
            console.log(response);
            let data = response.data.data;
            console.log("DATA====>", data);
            data.forEach(async (recipe, idx) => {
                let finalRecipe = recipe;
                const image = recipe.image.replace("uploads\\", "");
                console.log("IMAGE 2====>", image);
                await getImageSource(image).then((response) => {
                    if(response) {
                        finalRecipe["image"] = response
                    }
                    setMyRecipes(prevRecipe => [...prevRecipe, finalRecipe]);
                })
            });
            // setMyRecipes(data);
            setIsLoaded(true);
          });
        }
        fetchRecipes();
      }, []);

    const handleRecipeOnClick = (recipe) => {
        // console.log("RECIPE=====>", recipe)
        navigate("/view-recipe", { state: recipe });
    }

    const handleDeleteProfile = () => {
        axios.delete(`http://localhost:8080/api/users/deleteUser/${loggedinEmail}`).then((response) => {
            alert("User successfully deleted!");

        })
        .catch(error => {
            // Handle the error if the user could not be deleted
            console.error(error);
            alert("Error deleting user.");
        navigate("/");

    })
}
    
    const handleClose = () => setShow(false);
    // render content based on displayType
    const renderContent = () => {
        if (displayType === "created") {
            return (
                <div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBCardText className="lead fw-normal mb-0">
                            Recent Recipes
                        </MDBCardText>
                        <MDBCardText className="mb-0">
                            <a href="#!" className="text-muted">
                                Show all
                            </a>
                        </MDBCardText>
                    </div>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        {isLoaded ? (
                            <ImageList sx={{ width: 1000, height: 1000 }}
                                cols={3} rowHeight={170}>
                                {myRecipes.map((recipe, idx) => (
                                    <ImageListItem key={idx} onClick={(e) => {handleRecipeOnClick(recipe)}}>
                                        <span>{recipe.name}</span>
                                        <img
                                            src={recipe.image}
                                            srcSet={recipe.image}
                                        />
                                    </ImageListItem>
                                ))}
                            </ImageList>
                        ) : (
                        <div>Loading...</div>
                        )}
                    </div>
                </div>
            )
        }

        else if (displayType === "saved") {
            return (
                <div>
                    <Modal show={show} onHide={handleClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Saved Posts</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <ul>{listItems}</ul>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={handleClose}>
                                Close
                            </Button>
                        </Modal.Footer>
                    </Modal>
                    <div className="d-flex justify-content-between align-items-center mb-4">
                        <MDBCardText className="lead fw-normal mb-0">
                            Saved Recipes
                        </MDBCardText>
                        <MDBCardText className="mb-0">
                            <a href="#!" className="text-muted">
                                Show all
                            </a>
                        </MDBCardText>
                    </div>
                    {/* <p>Saved posts</p> */}
                    {/* display saved posts */}
                </div>
            );
        }
    };
    return (
        <div className="gradient-custom-2">
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="10" xl="10">
                        <MDBCard>
                            <div
                                className="rounded-top text-white d-flex flex-row"
                                style={{ backgroundColor: "#000", height: "200px" }}
                            >
                                <div
                                    className="ms-4 mt-5 d-flex flex-column"
                                    style={{ width: "150px" }}
                                >
                                    <MDBCardImage
                                        src= {photo}
                                        alt="Generic placeholder image"
                                        className="mt-4 mb-2 img-thumbnail"
                                        fluid
                                        style={{ width: "150px", zIndex: "1" }}
                                    />
                                    {/* <MDBBtn
                                        outline
                                        color="dark"
                                        style={{ height: "36px", overflow: "visible" }}
                                    >
                                        Edit profile
                                    </MDBBtn> */}
                                </div>
                                <div className="ms-3" style={{ marginTop: "130px" }}>
                                    <MDBTypography tag="h5">{firstName} {lastName}</MDBTypography>
                                    {/* <MDBCardText>Halifax, NS</MDBCardText> */}
                                </div>
                            </div>
                            <div
                                className="p-4 text-black"
                                style={{ backgroundColor: "#f8f9fa" }}
                            >
                                <div>
                                    <MDBBtn
                                        outline
                                        color="dark"
                                        onClick={() => navigate("/updateProfile")}
                                        style={{ height: "36px", overflow: "visible" }}
                                    >
                                        Edit Profile
                                    </MDBBtn>
                                    &nbsp; &nbsp; &nbsp;
                                    <MDBBtn
                                        outline
                                        color="dark"
                                        onClick={handleDeleteProfile}
                                        style={{ height: "36px", overflow: "visible" }}
                                    >
                                        Delete Account
                                    </MDBBtn>
                                </div>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText className="mb-1 h5">253</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">
                                            Photos
                                        </MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">
                                            Followers
                                        </MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">
                                            Following
                                        </MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Bio</p>
                                    <div className="p-4" style={{ backgroundColor: "#f8f9fa" }}>
                                        <MDBCardText className="font-italic mb-1">
                                            {bio}
                                        </MDBCardText>
                                        {/* <MDBCardText className="font-italic mb-1">
                                            Lives in Halifax
                                        </MDBCardText>
                                        <MDBCardText className="font-italic mb-0">
                                            Artist
                                        </MDBCardText> */}
                                    </div>
                                </div>
                                <div>
                                    <MDBBtn
                                        outline
                                        focus
                                        color="dark"
                                        style={{ height: "36px", overflow: "visible" }}
                                        onClick={onCreatedHandler}
                                    >
                                        Created
                                    </MDBBtn>
                                    &nbsp; &nbsp; &nbsp;
                                    <MDBBtn
                                        outline
                                        color="dark"
                                        style={{ height: "36px", overflow: "visible" }}
                                        onClick={onSavedHandler}
                                    >
                                        Saved
                                    </MDBBtn>
                                </div>
                                <div className="mt-5">
                                    {renderContent()}
                                </div>

                                {/* <div className="d-flex justify-content-between mt-3">
                                    <Button variant="success" onClick={updaterecipe}>
                                        Update
                                    </Button>
                                    <Button variant="danger" onClick={deleterecipe}>
                                        Delete
                                    </Button>
                                </div> */}
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
//https://www.geeksforgeeks.org/react-mui-image-list-layout/
