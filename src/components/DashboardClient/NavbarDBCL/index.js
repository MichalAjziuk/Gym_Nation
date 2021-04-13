import React from 'react'

const navbar_dbcl = () => {
    return (
        <>
            <Container>
                <LogoWrap>
                    <Logo>Gym Nation</Logo>
                </LogoWrap>
                <ProgressWrap>
                    <CirlceProgress></CirlceProgress>
                </ProgressWrap>
                <LinkWrap>
                    <LinkCard>
                        <ImgLink></ImgLink>
                        <TitleLink>Your Training</TitleLink>
                    </LinkCard>
                    <LinkCard>
                        <ImgLink></ImgLink>
                        <TitleLink>Live Workout</TitleLink>
                    </LinkCard>
                    <LinkCard>
                        <ImgLink></ImgLink>
                        <TitleLink>Workouts</TitleLink>
                    </LinkCard>
                    <LinkCard>
                        <ImgLink></ImgLink>
                        <TitleLink>Diet Plan</TitleLink>
                    </LinkCard>
                    <LinkCard>
                        <ImgLink></ImgLink>
                        <TitleLink>Your Profile</TitleLink>
                    </LinkCard>
                </LinkWrap>
            </Container>
        </>
    )
}

export default navbar_dbcl