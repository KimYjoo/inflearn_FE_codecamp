import {
    Body,
    Wrapper,
    DivideLine,
    WrapperHeader,
    SearchArea,
    SearchIcon,
    HeaderArea,
    PageTitle,
    UserArea,
    UserImage,
    UserBox,
    UserName,
    Icon,
    MenuArea,
    MenuItems,
    MenuItem,
    MenuUnderline,
    WrapperBody,
    PostBox,
    PostItem,
    PostID,
    PostTitle,
    PostToggle,
    Navigation,
    NavigationItem,
    NavigationIcon,
    NavigationTitle,
} from "../../styles/quiz01"

export default function quiz01Page() {

    return (
        <Body>
            <Wrapper>
                <WrapperHeader>
                    <SearchArea>
                        <SearchIcon src="/search.png"/>
                    </SearchArea>
                    <HeaderArea>
                        <PageTitle>마이</PageTitle>
                        <UserArea>
                            <UserImage src="/user.png"/>
                            <UserBox>
                                <UserName>임정아</UserName><Icon src="/chevron-right.png" />
                            </UserBox>
                        </UserArea>
                    </HeaderArea>
                    <MenuArea>
                        <MenuItems>
                            <MenuItem>
                                공지사항
                            </MenuItem>
                            <MenuItem>
                                이벤트
                            </MenuItem>
                            <MenuItem id="FAQ">
                                FAQ
                                <MenuUnderline></MenuUnderline>
                            </MenuItem>
                            <MenuItem>
                                Q&A
                            </MenuItem>
                        </MenuItems>
                        </MenuArea>
                </WrapperHeader>
                <DivideLine></DivideLine>
                <WrapperBody>
                    <PostBox>
                        <PostItem>
                            <PostID>Q. 01</PostID>
                            <PostTitle>리뷰작성은 어떻게 하나요?</PostTitle>
                        </PostItem>
                        <PostToggle src="/chevron-down.png"/>
                    </PostBox>
                    <PostBox>
                        <PostItem>
                            <PostID>Q. 02</PostID>
                            <PostTitle>리뷰 수정/삭제는 어떻게 하나요?</PostTitle>
                        </PostItem>
                        <PostToggle src="/chevron-down.png"/>
                    </PostBox>
                    <PostBox>
                        <PostItem>
                            <PostID>Q. 03</PostID>
                            <PostTitle>아이디/비밀번호를 잊어버렸어요.</PostTitle>
                        </PostItem>
                        <PostToggle src="/chevron-down.png"/>
                    </PostBox>
                    <PostBox>
                        <PostItem>
                            <PostID>Q. 04</PostID>
                            <PostTitle>회원탈퇴를 하고싶어요.</PostTitle>
                        </PostItem>
                        <PostToggle src="/chevron-down.png"/>
                    </PostBox>
                    <PostBox>
                        <PostItem>
                            <PostID>Q. 05</PostID>
                            <PostTitle>출발지 설정은 어떻게 하나요?</PostTitle>
                        </PostItem>
                        <PostToggle src="/chevron-down.png"/>
                    </PostBox>
                    <PostBox>
                        <PostItem>
                            <PostID>Q. 06</PostID>
                            <PostTitle>비밀번호를 변경하고 싶어요</PostTitle>
                        </PostItem>
                        <PostToggle src="/chevron-down.png"/>
                    </PostBox>
                </WrapperBody>
                <Navigation>
                    <NavigationItem>
                        <NavigationIcon src="/Home.png"/>
                        <NavigationTitle>홈</NavigationTitle>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationIcon src="/Location.png"/>
                        <NavigationTitle>잇츠로드</NavigationTitle>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationIcon src="/Hart.png"/>
                        <NavigationTitle>마이찜</NavigationTitle>
                    </NavigationItem>
                    <NavigationItem>
                        <NavigationIcon src="/UserIcon.png"/>
                        <NavigationTitle id="Nav-my">마이</NavigationTitle>
                    </NavigationItem>
                </Navigation>
            </Wrapper>
        </Body>
    );
}