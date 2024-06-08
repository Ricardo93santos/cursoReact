let galeryImg = [
  "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg",
  "https://images.pexels.com/photos/163452/basketball-dunk-blue-game-163452.jpeg",
  "https://images.pexels.com/photos/1618269/pexels-photo-1618269.jpeg",
];
export function getImgUrl(sport) {
  return (
    galeryImg[sport.img]
  )
}