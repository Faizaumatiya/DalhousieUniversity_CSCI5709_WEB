
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

export default function FeedPage() {
    const navigate = useNavigate();

    // function createrecipe() {
    //     navigate("/updateRecipe")

    // }
    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="15" xl="10">
                        <MDBCard>
                            {/* <MDBCardBody className="text-black p-4"> */}

                            <MDBRow>
                                <MDBCol className="mb-2">
                                    <MDBCardImage src="1.jpg"
                                        alt="image 1" className="w-100 rounded-3" />
                                </MDBCol>


                                <MDBCol className="mb-2">
                                    <MDBCardImage src="2.jpg"
                                        alt="image 1" className="w-100 rounded-3" />
                                </MDBCol>

                                <MDBCol className="mb-2">
                                    <MDBCardImage src="4.jpg"
                                        alt="image 1" className="w-100 rounded-3" />
                                </MDBCol>


                            </MDBRow>
                            <MDBRow className="g-2">
                                <MDBCol className="mb-2">
                                    <MDBCardImage src="4.jpg"
                                        alt="image 1" className="w-100 rounded-3" />
                                </MDBCol>
                                <MDBCol className="mb-2">
                                    <MDBCardImage src="5.jpg"
                                        alt="image 1" className="w-100 rounded-3" />
                                </MDBCol>
                                <MDBCol className="mb-2">
                                    <MDBCardImage src="1.jpg"
                                        alt="image 1" className="w-100 rounded-3" />
                                </MDBCol>
                            </MDBRow>
                            {/* </MDBCardBody> */}
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
                <div>
                    <MDBBtn outline color="dark" onClick={() => navigate("/addrecipe")} style={{ height: '36px', overflow: 'visible' }}>
                        Add Recipe
                    </MDBBtn>
                </div>
            </MDBContainer>

        </div>
    );
}
