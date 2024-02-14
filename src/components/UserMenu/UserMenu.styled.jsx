import styled from '@emotion/styled';

export const Container = styled.div`
    display: flex;
    margin-right: 30px;
    align-items: center;
    justify-content: center;
`;

export const Text = styled.p`
    color: white;
    font-size: 18px;
    font-weight: bold;
    margin-right: 10px;
`;

export const Button = styled.button`
    display: flex;
    align-items: center;
  background-color: #e63946;
  border-radius: 4px;
  border: 0;
  box-shadow: rgba(1,60,136,.5) 0 -1px 3px 0 inset,rgba(0,44,97,.1) 0 3px 6px 0;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  margin: 0;
  height: 35px;
  width: 35px;
  position: relative;
  text-align: center;
  justify-content: center;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
  vertical-align: baseline;
  transition: all .2s cubic-bezier(.22, .61, .36, 1);


&:hover {
  background-color: #db3442;
  transform: translateY(-1px);
}
`;