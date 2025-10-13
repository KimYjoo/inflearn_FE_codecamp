import styled from '@emotion/styled'

export const Container = styled.div`
    width: 1200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 40px 0;
`
export const BestContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const BestBoardsTitle = styled.h1`
    font-size: 36px;
    font-weight: 700;
    padding: 40px 0;
`

export const BestBoardsWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding-bottom: 40px;
`

export const BestBoardBox = styled.div`
    cursor: pointer;
    width: 282px;
    display: flex;
    flex-direction: column;
    box-shadow: 5px 5px 10px 0 #0000001A;
    border-radius: 20px;
    overflow: hidden;
`

export const BestThumbNail = styled.img`
    width: 100%;
    height: 120px;
    background-color: black;
`

export const BestProfileWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

export const BestBoardWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    padding: 0 20px 20px 20px;
`

export const BestTitle = styled.div`
    padding: 20px;
    font-size: 18px;
    font-weight: 500;
    padding-bottom: 20px;
`

export const BestWriterInfo = styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 8px;
`

export const BestWriterImage = styled.img`
    width: 24px;
    height: 24px;
`

export const BestWriterName = styled.div`
    height: 24px;
    font-size: 16px;
    line-height: 24px;
    padding-left: 4px;
`

export const BestDate = styled.div`
    font-size: 12px;
    color: #828282;
`

export const BestLikesWrapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const BestLikesImage = styled.img`
    width: 24px;
    height: 24px;
`

export const BestLikesCount = styled.div`
    font-size: 16px;
    padding-top: 8px;
`


export const SearchWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 40px 0;
`

export const SearchInputWrapper = styled.div`
    width: 776px;
    padding: 14px 16px;
    background-color: #F2F2F2;
    display: flex;
    flex-direction: row;
    border-radius: 10px;
`

export const SearchIcon = styled.img`
    width: 24px;
    height: 24px;
`

export const SearchTitleInput = styled.input`
    width: 100%;
    height: 24px;
    font-size: 16px;
    background-color: transparent;
    border: none;
    margin-left: 8px;
    outline: none;
    &::placeholder{
        color: black;
    }
`

export const SearchDateInput = styled.input`
    width: 244px;
    font-size: 16px;
    text-align: center;
    border: 1px solid #BDBDBD;
    outline: none;
    &::placeholder{
        color: #BDBDBD;
    }
`

export const SearchButton = styled.button`
    cursor: pointer;
    background-color: black;
    color: white;
    font-size: 16px;
    padding: 0 16px;
    border-radius: 10px;
`

export const Table = styled.table`
    width: 100%;
    border: none;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    font-size: 18px;
    table-layout: fixed;
    margin-bottom: 40px;
`

export const THeader = styled.thead`
`

export const THeadRow = styled.tr`
    height: 52px;
    font-weight: 500;
    font-size: 18px;
    width: 100%;
    height: 52px;
    text-align: center;
`

export const TDataNumber = styled.td`
    width: 8%;
`
export const TDataTitle = styled.td`
    width: 55%;
`
export const TDataWriter = styled.td`
    width: 22%;
`
export const TDataDate = styled.td`
    width: 15%;
`

export const Tbody = styled.tbody``

export const TBodyRow = styled.tr`
    cursor: pointer;
    width: 100%;
    height: 52px;
    text-align: center;
    font-size: 16px;
    color: #4F4F4F;
`

export const TData = styled.td`
    border-top: 1px solid #BDBDBD;
`

export const TableFooter = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    position: relative;
`

export const TableNavWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 50%;   
    transform: translateX(-50%);
`

export const NavLeftButton = styled.img`
    cursor: pointer;
    margin-right: 20px;
`

export const NavRightButton = styled.img`
    cursor: pointer;
    margin-left: 20px;
`

export const NavNumber = styled.span`
    cursor: pointer;
    font-size: 16px;
`

export const NewBoardButton = styled.button`
    cursor: pointer;
    border: 1px solid #F2F2F2;
    background-color: white;
    border-radius: 10px;
    padding: 14px 16px;
    margin-left: auto;
`
export const NewBoardIcon = styled.img`
    width: 24px;
    height: 24px;
    vertical-align: middle;
`
export const NewBoardText = styled.span`
    font-size: 16px;
    margin-left: 8px;
    vertical-align: bottom;
`