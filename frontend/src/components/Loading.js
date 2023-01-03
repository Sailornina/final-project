import React from 'react'
import styled from 'styled-components';




const Loading = () => {

  return (
				<ChildContainer>
					<StyledHeading>Taking you there...</StyledHeading>
					<lottie-player
						src="https://assets9.lottiefiles.com/packages/lf20_bqmgf5tx.json"
						background="transparent"
						speed="1"
						style={{ width: '200px',
							height: '200px' }}
						loop
						autoplay />
				</ChildContainer>
			)
		}


export default Loading;



export const ChildContainer = styled.div`
    box-sizing: border-box;
    background: linear-gradient(rgba(82, 81, 81, 0.9), rgba(0, 0, 0, 0.9));
    padding: 1.5em;
    margin: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`
export const StyledHeading = styled.h1`
  color: #3fceea;
  font-size: 1.2em;
  line-height: 2em;
`
