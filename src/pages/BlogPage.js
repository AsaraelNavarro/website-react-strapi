import React from 'react'
import useFetch from '../hooks/useFetch';

/* import fetchGit from "./../hooks/fetchGit"; */
import { Title, TextButton, BlogFigure } from '../components/styles/Elements.styled';
import { StyledMain, Container, Grid, BlogArticle } from '../components/styles/Layout.styled';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { solid } from '@fortawesome/fontawesome-svg-core/import.macro';

export default function BlogPage() {
    const baseUrl = `https://strapi-mycv.herokuapp.com`
    const contentType = 'posts'
    const apiUrl = `${baseUrl}/api/${contentType}?populate=*`;
    const { loading, error, data } = useFetch(apiUrl);
    /* console.log(data); */

    /* function byDate(a, b) {
        return new Date(b.pushed_at).valueOf() - new Date(a.pushed_at).valueOf()
    }; */


    if (loading) return <Container>Loading...</Container>
    if (error) return <Container><p>Error</p></Container >
    return (
        <StyledMain>
            <Container>
                <Title light>Mi Blog</Title>
                <Grid>
                    {data.data.map((posts) => (
                        <BlogArticle key={posts.id}>
                            <BlogFigure>
                                <img src={`${posts.attributes.featured_image.data.attributes.url}`} alt="Avatar Asarael Navarro Beltrán" />
                            </BlogFigure>
                            <div>
                                <h4>{posts.attributes.title}</h4>
                                <p>{posts.attributes.content.substring(0, 118)}..</p>
                                <TextButton to={`/posts/${posts.id}`}>
                                    Leer más <FontAwesomeIcon icon={solid('arrow-right-long')} />
                                </TextButton>
                            </div>
                        </BlogArticle>
                    ))}
                </Grid>
            </Container>
        </StyledMain>
    )
}
