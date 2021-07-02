import React, { useState, useEffect } from 'react'
import Img from '../../../../images/user_profile.png'
import firebase from '../../../../firebase'
import {
    Container,
    MainBar,
    Title,
    BasicWrapper,
    ProfileImg,
    Label,
    Input,
    ExtendedWrapper,
    FormWrapper,
    TitleData,
    ChangeButton,
    BasicData,
    BlockData,
    SecondFormWrapper
} from './ProfileElements'

const Profile = () => {
    const [users, setUsers] = useState([]);
    const db = firebase.firestore();
    const ref = db.collection("users");

    function getUser() {
        ref.where("email", "==", 'm@gmail.com')
        .onSnapshot((querySnapshot) => {
            const userData = [];
            querySnapshot.forEach((doc) => {
                userData.push(doc.data());
            });
            setUsers(userData);
        })
    }

    useEffect(() => {
        getUser();
    });

    function editUser() {
        const updatedUser = {
          lastUpdate: firebase.firestore.FieldValue.serverTimestamp(),
        };
        ref
          .where('email', '==', 'm@gmail.com')
          .update(updatedUser)
          .catch((err) => {
            console.error(err);
          });
      }
      
    return (
        <>
          <Container>
            <MainBar>
                <Title>Your Profile</Title>
            </MainBar>
            {users.map((user) => (
            <BlockData>
                <BasicWrapper>
                    <ProfileImg src={Img}/>
                    <FormWrapper>
                        <TitleData>Basic Data</TitleData>
                        <Label>Name:</Label>
                        <BasicData>{user.name}</BasicData>
                        <Label>Email:</Label>
                        <BasicData>{user.email}</BasicData>
                    </FormWrapper>
                </BasicWrapper>
                <ExtendedWrapper>
                    <TitleData>More Data</TitleData>
                    <SecondFormWrapper>
                        <Label>Weight:</Label>
                        <Input placeholder={user.weight}></Input>
                        <Label>Height:</Label>
                        <Input placeholder={user.height}></Input>
                        <Label>Age:</Label>
                        <Input placeholder={user.age}></Input>
                        <Label>Gender:</Label>
                        <Input placeholder={user.gender}></Input>
                        <Label>Training Level:</Label>
                        <Input placeholder={user.training_level}></Input>
                    </SecondFormWrapper>
                    <ChangeButton onClick={() => editUser(user)}>Change Data</ChangeButton>
                </ExtendedWrapper>
            </BlockData>
            ))}
          </Container>  
        </>
    )
}

export default Profile
