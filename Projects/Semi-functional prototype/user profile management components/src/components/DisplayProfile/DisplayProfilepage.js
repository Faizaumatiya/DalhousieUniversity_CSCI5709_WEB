
import React from 'react';
import { MDBCol, MDBContainer, MDBRow, MDBCard, MDBCardText, MDBCardBody, MDBCardImage, MDBBtn, MDBTypography } from 'mdb-react-ui-kit';
import { useNavigate } from 'react-router-dom';

//https://mdbootstrap.com/docs/react/extended/profiles/

export default function DisplayProfilepage() {
    const navigate = useNavigate();
    return (
        <div className="gradient-custom-2" style={{ backgroundColor: '#9de2ff' }}>
            <MDBContainer className="py-5 h-100">
                <MDBRow className="justify-content-center align-items-center h-100">
                    <MDBCol lg="9" xl="7">
                        <MDBCard>
                            <div className="rounded-top text-white d-flex flex-row" style={{ backgroundColor: '#000', height: '200px' }}>
                                <div className="ms-4 mt-5 d-flex flex-column" style={{ width: '150px' }}>
                                    <MDBCardImage src="abby1.png"
                                        alt="Generic placeholder image" className="mt-4 mb-2 img-thumbnail" fluid style={{ width: '150px', zIndex: '1' }} />

                                </div>
                                <div className="ms-3" style={{ marginTop: '130px' }}>
                                    <MDBTypography tag="h5">Abby Johns</MDBTypography>
                                    <MDBCardText>Halifax, NS</MDBCardText>
                                </div>
                            </div>


                            <div className="p-4 text-black" style={{ backgroundColor: '#f8f9fa' }}>
                                <div>
                                    <MDBBtn outline color="dark" onClick={() => navigate("/updateProfile")} style={{ height: '36px', overflow: 'visible' }}>
                                        Edit Profile
                                    </MDBBtn>
                                </div>
                                <div className="d-flex justify-content-end text-center py-1">
                                    <div>
                                        <MDBCardText className="mb-1 h5">253</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Photos</MDBCardText>
                                    </div>
                                    <div className="px-3">
                                        <MDBCardText className="mb-1 h5">1026</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Followers</MDBCardText>
                                    </div>
                                    <div>
                                        <MDBCardText className="mb-1 h5">478</MDBCardText>
                                        <MDBCardText className="small text-muted mb-0">Following</MDBCardText>
                                    </div>
                                </div>
                            </div>
                            <MDBCardBody className="text-black p-4">
                                <div className="mb-5">
                                    <p className="lead fw-normal mb-1">Bio</p>
                                    <div className="p-4" style={{ backgroundColor: '#f8f9fa' }}>
                                        <MDBCardText className="font-italic mb-1">Web Developer</MDBCardText>
                                        <MDBCardText className="font-italic mb-1">Lives in Halifax</MDBCardText>
                                        <MDBCardText className="font-italic mb-0">Artist</MDBCardText>
                                    </div>
                                </div>
                                <div>
                                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                                        Created
                                    </MDBBtn>&nbsp; &nbsp; &nbsp;
                                    <MDBBtn outline color="dark" style={{ height: '36px', overflow: 'visible' }}>
                                        Saved
                                    </MDBBtn>
                                </div>
                                <div className="d-flex justify-content-between align-items-center mb-4">
                                    <MDBCardText className="lead fw-normal mb-0">Recent Recipes</MDBCardText>
                                    <MDBCardText className="mb-0"><a href="#!" className="text-muted">Show all</a></MDBCardText>
                                </div>
                                <MDBRow>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://images.immediate.co.uk/production/volatile/sites/30/2020/08/chorizo-mozarella-gnocchi-bake-cropped-9ab73a3.jpg?quality=90&resize=556,505"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://www.foodandwine.com/thmb/dMG6keGBcEF7XF8LZdR2y5dPrxc=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/jamaican-jerk-chicken-FT-RECIPE0918-eabbd55da31f4fa9b74367ef47464351.jpg"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                                <MDBRow className="g-2">
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://food.fnr.sndimg.com/content/dam/images/food/fullset/2020/06/10/0/FNK_Healthy-Thai-Tuna-Grain-Bowls_H1_s4x3.jpg.rend.hgtvcom.441.331.suffix/1591824749231.jpeg"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                    <MDBCol className="mb-2">
                                        <MDBCardImage src="https://img.taste.com.au/blghz7yu/taste/2020/09/healthy-tuna-mornay-165276-2.jpg"
                                            alt="image 1" className="w-100 rounded-3" />
                                    </MDBCol>
                                </MDBRow>
                            </MDBCardBody>
                        </MDBCard>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>
        </div>
    );
}
