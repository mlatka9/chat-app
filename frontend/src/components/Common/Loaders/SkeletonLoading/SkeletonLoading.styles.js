import styled from 'styled-components';

export const StyledDiv = styled.div`
  min-width: ${({ width }) => (width ? width + 'px' : '100%')};
  height: ${({ height }) => (height ? height + 'px' : '100px')};
  display: ${({ inline }) => (inline ? 'inline-block' : 'block')};
  border-radius: ${({ borderRadius }) =>
    borderRadius ? borderRadius + 'px' : '3px'};
  background-color: ${({ theme }) => theme.color.grey600};

  margin-bottom: ${({ marginBottom }) => marginBottom + 'px' || '3px'};
  margin-right: ${({ marginRight }) => marginRight + 'px' || '0px'};
  opacity: 0.5;
`;

export const SelectedChannelWrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const MemberWrapper = styled.div`
  display: flex;
  align-items: center;
  > div {
    margin-right: 30px;
  }
`;

export const PostWrapper = styled.div`
  display: flex;
  margin-bottom: 40px;
  > div:nth-of-type(2) {
    width: 100%;
  }
`;

export const ChatSectionSkeletonWrapper = styled.div`
  padding: 0 70px 40px;
  display: flex;
  flex-direction: column;
  > div:first-of-type {
    height: calc(100vh - 220px);
    overflow-y: hidden;
    margin-bottom: 20px;
  }
  > div:last-of-type {
    margin-top: auto;
  }
`;
