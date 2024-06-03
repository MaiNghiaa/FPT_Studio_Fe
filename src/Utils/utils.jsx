import logo from "../assets/logo/logoFST.png";
import event_1 from "../assets/images/events/638415314967551477_z5095081155166_1c230713c6cc56625471874a5268384e.webp";
import event_2 from "../assets/images/events/loyerty.webp";
import event_3 from "../assets/images/events/support.webp";
import event_4 from "../assets/images/events/workshp.jpg";
import banner_1 from "../assets/images/Slider/banner1.png";
import banner_2 from "../assets/images/Slider/banner2.png";
import banner_3 from "../assets/images/Slider/banner3.jpg";
import Gallery_1 from "../assets/images/Store/Gallery1.jpg";
import Gallery_2 from "../assets/images/Store/Gallery2.jpg";
import Gallery_3 from "../assets/images/Store/Gallery3.jpg";
import Gallery_4 from "../assets/images/Store/Gallery4.jpg";
import Gallery_5 from "../assets/images/Store/Gallery5.jpg";
import Titleitemgs_1 from "../assets/images/List//LandingPage/Apple-watch.png";
import Titleitemgs_2 from "../assets/images/List/LandingPage/airtag.png";
import Titleitemgs_3 from "../assets/images/List/LandingPage/ipad.png";
import Titleitemgs_4 from "../assets/images/List/LandingPage/iphone_1.png";
import Titleitemgs_5 from "../assets/images/List/LandingPage/mac_1.png";
import icon1 from "../assets/images/icons/box.png";
import icon2 from "../assets/images/icons/crown.png";
import icon3 from "../assets/images/icons/item.png";
import icon4 from "../assets/images/icons/shield.png";
import icon5 from "../assets/images/icons/like.png";
export const imgLogo = logo;
export const event1 = event_1;
export const event2 = event_2;
export const event3 = event_3;
export const event4 = event_4;
export const banner1 = banner_1;
export const banner2 = banner_2;
export const banner3 = banner_3;
export const Gallery1 = Gallery_1;
export const Gallery2 = Gallery_2;
export const Gallery3 = Gallery_3;
export const Gallery4 = Gallery_4;
export const Gallery5 = Gallery_5;
export const Titleitemgs1 = Titleitemgs_1;
export const Titleitemgs2 = Titleitemgs_2;
export const Titleitemgs3 = Titleitemgs_3;
export const Titleitemgs4 = Titleitemgs_4;
export const Titleitemgs5 = Titleitemgs_5;
export const iconBox = icon1;
export const iconcrown = icon2;
export const iconitem = icon3;
export const iconshield = icon4;
export const iconlike = icon5;

export function formatCash(input) {
  if (!Array.isArray(input) && typeof input !== "string") {
    return input;
  }
  const cashArray = Array.isArray(input) ? input : input.split("");
  if (cashArray.length === 0) {
    return 0;
  }
  return cashArray.reverse().reduce((prev, next, index) => {
    return (index % 3 ? next : next + ".") + prev;
  }, "");
}
