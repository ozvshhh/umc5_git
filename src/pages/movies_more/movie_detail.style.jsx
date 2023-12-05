import styled, { css } from "styled-components";
export const StyledMovieDetail = styled.div`
  ${(props) =>
  `
  .title
  {
    background-size: 150px;
    width: 150px;
    height: 225px;
    background-image: url("https://www.themoviedb.org/t/p/w300_and_h450_bestv2${props.results.backdrop_path}");
  }
  .line{
    width: 150px;
    height: 70px;
    background-color: #4F6188;
  }
  .overlay{
    width: 150px;
    height: 295px;
    z-index: 0;
    background-color: rgba(0,0,0,0.8);
    font-size: 13px;
    margin-top: -295px;
    overflow: scroll;
    color:white;
  }
  .overlay::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
  .overlay_title{
    font-size: 15px;
    padding: 10px;
  }
  .overlay_content{
    padding: 10px;
  }

  `}
`

