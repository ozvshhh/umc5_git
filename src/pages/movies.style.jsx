import styled, { css } from "styled-components";

export const StyledMovies = styled.div`

.top_margin{
  height: 5vh;
  background-color: #344765;
  
}
.movies_container{
  height:95vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  background-color: #344765;
}
.movies{
  display: grid;
  grid-template-columns: repeat(8,170px);
  grid-template-rows: 50vh 50vh;
}
.movie_view{
  height: 300px;
}
`
