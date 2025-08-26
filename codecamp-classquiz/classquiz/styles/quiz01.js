import styled from "@emotion/styled"

export const Body = styled.div`
    box-sizing: border-box;
    margin: 0;
    background-color: #e7e5e5ff;
`
export const Wrapper = styled.div`
    box-sizing: border-box; 
    width: 640px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;
`
export const DivideLine = styled.div`
    width: 100%;
    border: 1px solid #CACACA;
`

export const WrapperHeader = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 40px 48px;
`
export const SearchArea = styled.div`
    width: 100%;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
`
export const SearchIcon = styled.img`
    width: 23px;
    height: 23px;
`

export const HeaderArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
export const PageTitle = styled.span`
    font-weight: 700;
    font-size: 40px;
`

export const UserArea = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const UserImage = styled.img`
    width: 60px;
    height: 60px;
    margin-right: 20px;
`
export const UserBox = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`
export const UserName= styled.span`
    font-weight: 700;
    font-size: 24px;
    height: 28px;
    line-height: 27px;
`
export const Icon = styled.img`
    width: 17px;
    height: 17px;
`
export const MenuArea = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    margin-top: 50px;
`
export const MenuItems = styled.div`
    gap: 50px;
    display: flex;  
    flex-direction: row;
    justify-content: space-between;
    font-size: 30px;
    font-weight: 700;
`
export const MenuItem = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;
    color: #CACACA;
    &#FAQ{
        color:#FF1B6D;
    }
`
export const MenuUnderline = styled.div`
    width: 100%;
    border: 1px solid #FF1B6D;
`

export const WrapperBody = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0px 48px;
    margin-bottom: 40px;
`
export const PostBox = styled.div`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin: 25px 0;
`

export const PostItem = styled.div`
    display: flex;
    flex-direction: column;
`
export const PostID = styled.div`
    font-size: 18px;
    color: #ADADAD;
`

export const PostTitle = styled.div`
    font-size: 24px;
`

export const PostToggle = styled.img`
    width: 23px;
    height: 23px;
`

export const Navigation = styled.div`
    width: 100%;
    height: 96px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    border: 1px solid #DCDCDC;
`
export const NavigationItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    
`
export const NavigationIcon = styled.img`
    width: 40px;
    height: 40px;
    object-fit: contain;
`
export const NavigationTitle = styled.div`
    font-size: 16px;
    color: #ADADAD;
    &#Nav-my{
        color: #FF1B6D
    }
`