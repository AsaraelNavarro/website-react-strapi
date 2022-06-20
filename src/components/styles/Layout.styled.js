import styled from "styled-components";

const StyledMain = styled.main`
    width: 100%;
    overflow: hidden;
`;
const ContainerFluid = styled.section`
    width:100%;
    background-color: ${({ theme }) => theme.colors.main};

    p{
        color: ${({ theme }) => theme.colors.white};
    }
`;
const Container = styled.div`
        width:100%;
        max-width:1200px;
        margin: 0 auto;
        display: grid;
        grid-gap: 20px;
        padding:80px 20px;
`;

const FooterContainer = styled(Container)`
        padding:20px 20px;
        grid-gap: 0;
`;
const StyledHero = styled.section`
    width:100%;
    max-width:1200px;
    padding:40px 0;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
`;
const ColumnHero = styled.div`
    padding:30px;
    flex:1;
    display: flex;
    flex-direction: column;

    h4{
        color:${({ theme }) => theme.colors.secondary};
    }
    h1 span{
        color:${({ theme }) => theme.colors.secondary};
    }
    h3{
        color:${({ theme }) => theme.colors.neutral};
    }
    p{
        margin-bottom: 60px;
    }

    @media (max-width: 660px){
        flex: 1 1 100%;
        h4{
            font-size: 1em;
        }
        h1{
            font-size: 2.7em;
        }
        h3{
            font-size: 1.3em;
        }
    }
`;
const Grid = styled.div` 
    display: grid;
    grid-gap: 30px;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    align-items: start;

    @media (max-width: 920px){
        grid-template-columns: 1fr 1fr;
    }

    @media (max-width: 768px){
        grid-template-columns: 1fr;
    }
`;

const ProfileColumn = styled.div`
    grid-column: 1;
    position: sticky;
    top: 10px;
`;

const JobColumn = styled.div`
    grid-column: span 2;
`;

const TileContainer = styled.section`
    background-color: ${({ theme }) => theme.colors.neutralLight};
	padding: 40px 30px 30px;
	border-radius: 5px;
	margin-bottom: 20px;
`;

const Article = styled.article`
    display: grid;
    grid-gap: 20px;
    margin-bottom: 40px;
    align-content: flex-start;
    position: relative;
    
    div{
        display: grid;
        grid-template-rows: 50px 1fr 1fr;
        padding: 0 20px;
            h3{
                text-overflow: ellipsis;
                /* Required for text-overflow to do anything */
                white-space: nowrap;
                overflow: hidden;
            }
            ul{
                margin-bottom: 40px;
                
            li{
                display: inline-block;
                padding: 5px;
                margin: 0 10px 10px 0;
            }
        }
    }

    &:first-child{
        grid-column: span 3;
        display: grid;
        grid-template-columns: 2fr 3fr;
        grid-gap: 20px;
        align-items: center;
    }

    @media(max-width: 920px) {        
        &:first-child{
            grid-column: span 1;
            grid-template-columns: 1fr;
        }
    }
`;

const ArticleLeftColumn = styled.article`
    display: grid;
    grid-gap: 20px;
    margin-bottom: 40px;
    align-content: flex-start;
    position: relative;

    grid-column: span 3;
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 40px;
    align-items: center;

    figure{
        order:2;
    }

    div{
        order:1;
    }

    h3{
        color: ${({ theme }) => theme.colors.white};
    }
    p{
        margin-bottom: 80px;
    }

    @media(max-width: 920px) {        
        grid-column: span 1;
        grid-template-columns: 1fr;
        figure{
        order:1;
    }

    }    
`;
const ArticleRightColumn = styled(ArticleLeftColumn)`
    grid-template-columns: 2fr 3fr;
    figure{
        order:1;
    }

    div{
        order:2;
    }
    @media(max-width: 920px) {        
        grid-column: span 1;
        grid-template-columns: 1fr;
        figure{
        order:1;
    }
}
`;

const BlogArticle = styled.article`
    display: grid;
    grid-gap: 20px;
    margin-bottom: 40px;
    align-content: flex-start;
    position: relative;

    div{
        padding: 0 20px;
        
        h4{
            color: ${({ theme }) => theme.colors.secondary};
        }
        
    }
`;

const StyledFooter = styled.footer`
background-color: ${({ theme }) => theme.colors.main};
color: ${({ theme }) => theme.colors.light};
text-align: center;
`;

export { Container, ContainerFluid, StyledMain, ColumnHero, StyledHero, Grid, ProfileColumn, JobColumn, TileContainer, Article, ArticleLeftColumn, ArticleRightColumn, BlogArticle, StyledFooter, FooterContainer }