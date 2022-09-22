import styled from "styled-components";
import { Section, Label } from "/src/components/styled";
import TextInput from "/src/components/ui/text-input/text-input";
import { Swiper } from "swiper/react";

const leftWidth = "335px";

export const LeftColumn = styled.div`
  width: ${leftWidth};
  padding-right: ${(props) => props.theme.indent};
  overflow-y: overlay;
  max-height: 100%;
`;

export const StyledOrder = styled(Section)`
  position: absolute;
  top: ${(props) => props.theme.headerHeight};
  bottom: ${(props) => props.theme.footerHeight};
  display: flex;
  padding-top: 40px;
  padding-bottom: 0;
  background-color: ${(props) => props.theme.backgroundColorGray};
  max-width: ${(props) => props.theme.pageWidth};
`;

export const AddressInput = styled(TextInput)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceLabel = styled(Label)`
  margin-bottom: ${(props) => props.theme.indent};
`;

export const PriceValue = styled.span`
  display: block;
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
`;

export const ProductSwiper = styled(Swiper)`
  width: 727px;

  .swiper-pagination {
    display: none;
  }

  .swiper-slide {
    flex-shrink: 1;
  }
`;