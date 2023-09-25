export const getCrewScroll = (width: number) => {
  if (width > 1085) {
    return "-100vw";
  } else if (width <= 1084 && width > 991) {
    return "-175vw";
  } else if (width <= 991 && width > 767) {
    return "-175vw";
  } else if (width <= 767 && width > 574) {
    return "-235vw";
  } else {
    return "-315vw";
  }
};
