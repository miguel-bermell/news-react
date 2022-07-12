import styled from "styled-components";


const LikeBtn = styled.span`
  align-self: flex-start;
  margin-bottom: 15px;
  .like-btn {
    display: inline-block;
    Cursor: pointer;
    width: 70px;
    height: 50px;
  }
  .like-btn {
    background: url('https://i.ibb.co/vw78mf3/heart.png') no-repeat 0% 50%;
    background-size: 2900%;
  }
  .like-active {
    animation-name: animate;
    animation-duration: .8s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }
  .like-active {
    animation-timing-function: steps(28);
  }
  @keyframes animate {
    0%   { background-position: left;  }
    50%  { background-position: right; }
    100% { background-position: right; }
  }
`

// export const Button = styled.button`
//   background: ${props => props.liked ? '#22d827' : '#107EFF'};
//   color: white;
//   border: none;
//   padding: 1.2rem 2rem;
//   font-size: 1.4rem;
//   border-radius: 10rem;
//   width: 12rem;
//   &:hover {
//     cursor: pointer;
//     background: ${props => props.liked ? '#4af54f' : '#00a1ff'};
//   }
// `

export default function Like({ liked, followToggled }) {
  const handleClick = (e) => {
    e.preventDefault()
    followToggled()
  }
  
  return (
    <LikeBtn onClick={handleClick}>
      <span className={`like-btn ${liked ? 'like-active' : ''}`}></span>
    </LikeBtn>
  )
}
